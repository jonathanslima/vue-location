<template>
  <div id="editar">
    <headerApp></headerApp>

    <div class="row">
      <div class="center edit title">
        <h2>Editar cadastro</h2>
      </div>
      <form class="form-edit col s12 offset-m3 m6" v-on:submit.prevent>
        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" class="validate" autofocus>
            <label for="first_name">Nome</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate">
            <label for="last_name">Profissão</label>
          </div>
        </div>

        <div class="row">
          <div class="center">
            <button class="btn" @click="edit">Salvar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import header from '../../../components/header/header.vue'

export default {
  components: {
    'headerApp': header,

  },
  data () {


    return {
    }
  },
  methods: {
    edit: function(){
      console.log('editar')
    }
  }
}
</script>

<style lang="scss" scoped>

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
