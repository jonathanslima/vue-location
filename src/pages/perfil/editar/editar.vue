<template>
  <div id="editar">
    <headerApp></headerApp>

    <div class="row">
      <div class="center edit title">
        <h2>Editar cadastro</h2>
      </div>
      <form class="form-edit col s12 offset-m3 m6" v-on:submit.prevent>
        <div class="col s12 center">
          <small class="red-text" v-if="warn"><b>{{advise}}</b></small>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="username" type="text" class="validate" autofocus>
            <label for="username">Nome</label>
          </div>
          <div class="input-field col s6">
            <input id="job" type="text" class="validate">
            <label for="job">Profissão</label>
          </div>
        </div>

        <div class="row">
          <div class="center">
            <button class="btn" @click="edit">Salvar
              <i v-if="loading" class="material-icons loop right">loop</i>
	            <i v-else-if="success" class="material-icons check right">done</i>
	            <i v-else class="material-icons right"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import header from '../../../components/header/header.vue'
import services from '../../../services';

export default {
  components: {
    'headerApp': header,
  },
  data () {
    return {
      loading: false,
      success: false,
      warn: false,
      advise: ''
    }
  },
  methods: {
    validate: function(user, job){
      this.warn = false;

      if(user.value == "" || job.value == ""){
        this.warn = true;
        this.advise = 'Favor preencher todos os dados'
        this.loading = false
        return true;
      }
    },
    edit: function(){
      let user = document.querySelector('#username');
      let job = document.querySelector('#job');

      this.loading = true;
      services.updateUser(user, job)
        .then(result => {
          console.log(result)
          if(this.validate(user, job)) return

          this.success = true;
          this.loading = false;
          alert('Usuário atualizado com sucesso!')
          user.value = ''
          job.value = ''
          this.success = false;

        })
        .catch(error => {
          this.warn = true;
          this.advise = 'Ocorreu algum erro, por favor tente novamente.';
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/sass/forms.scss";

  .edit{
    margin-top: 100px;
  }

  .title{
    color: #42b883;

    h2{
      margin-bottom: 0;
      font-size: 24px;
      text-transform: uppercase;
    }
  }

  .btn{
    border-radius: 100px;
    background: #42b883;

  }

  .form-edit{
    margin-top: 30px;
  }
  /* Small devices (tablets, 600px and up) */
  @media (min-width: 600px) {}

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {}
</style>
