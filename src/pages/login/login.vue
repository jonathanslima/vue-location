<template>
	<div class="formGeneral">
    <div class="row">
      <div class="col s12 center pin-logo">
        <i class="material-icons">location_on</i><br>
        <h1>Vue Location</h1>
      </div>
    </div>

		<div class="row">
		  <form class="col s12 m6 offset-m3" v-on:submit.prevent>
        <div class="col s12 center">
          <small class="red-text" v-if="warn"><b>{{advise}}</b></small>
        </div>

		    <div class="row">
		      <div class="input-field col s12">
		        <input id="login" type="text" class="validate" autocomplete="off">
		        <label for="login">Login</label>
		      </div>
		    </div>

		    <div class="row">
		      <div class="input-field col s12">
		        <input id="password" type="password" class="validate" autocomplete="off">
		        <label for="password">Senha</label>
		      </div>
		    </div>

		    <div class="row">
		      <div class="col s12 center">
		        <button @click="loginAccess" class="btn waves-effect waves-light btn-large">Entrar
	            <i v-if="loading" class="material-icons loop right">loop</i>
	            <i v-else-if="success" class="material-icons check right">done</i>
	            <i v-else class="material-icons right"></i>
	          </button>
		      </div>
		    </div>
		  </form>
		</div>

    <div class="row">
      <div class="center go-to-register">
        <router-link to="/cadastrar">
          Não possui acesso? Cadastre-se!
        </router-link>
      </div>
    </div>
	</div>
</template>

<script>
  import services from '../../services';

	export default{
		data(){
      let userAccess = JSON.parse(sessionStorage.getItem('userAccess')) || '';
      if(userAccess){ this.$router.push('/') }

			return{
        loading: false,
        success: false,
        warn: false,
        advise: ''
			}
    },
		methods: {
			storeDataLogin: function(res) {
				sessionStorage.setItem('userAccess', JSON.stringify(res.token));
      },
      validate: function(user, pass){
        this.warn = false;
        const validate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(user == "" || pass == ""){
          this.warn = true;
          this.advise = 'Favor preencher todos os dados'
          return false;
        }

        if(!validate.test(user)){
          this.warn = true;
          this.advise = 'Favor colocar um e-mail válido'
          return false
        }

        return true
      },
      loginAccess: function(){
        let user = document.querySelector('#login').value;
        let pass = document.querySelector('#password').value;

        if(!this.validate(user, pass)) return;
        this.loading = true;

        services.login(user, pass)
          .then(res => {
            if(res.token){
              this.warn = false;
              this.storeDataLogin(res);
              this.success = true;
              sessionStorage.setItem('user', user)
              setTimeout(()=> { this.$router.push('/') }, 1000)

            }else{
              this.warn = true;
              this.advise = 'Favor colocar email e senha corretamente';
            }
            this.loading = false;

          })
          .catch(error => {
            this.warn = true;
            this.advise = 'Ocorreu algum erro, por favor tente novamente.';
          });
      }
		}
	}
</script>

<style  lang="scss" scoped>
  @import "src/assets/sass/forms.scss";

  .pin-logo{
    h1{
      font-family: 'Roboto Slab', serif;
      font-size: 30px;
      margin-top: 0;
      /* color: #35495e; */
      color: #42b883;
    }

    i{
      color: #42b883;
      font-size: 80px;
    }
  }

  /* MEDIA QUERY MOBILE FIRST ------------------------------------------------------------*/
  //
  /* Small devices (smartphones, 320px and up) */
  @media (min-width: 320px) {}

  /* Small devices (tablets, 600px and up) */
  @media (min-width: 600px) {}

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {}

  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {}
</style>
