<template>
  <div id="register">
    <div class="row">
      <div class="col s12 center pin-logo">
        <i class="material-icons">location_on</i><br>
        <h1>Cadastre-se</h1>
      </div>
    </div>

		<div class="row">
		  <form class="col s12 m6 offset-m3" v-on:submit.prevent>
        <div class="col s12 center">
          <small class="red-text" v-if="warn"><b>{{advise}}</b></small>
        </div>

		    <div class="row">
		      <div class="input-field col s12">
		        <input id="email" type="text" class="validate" autocomplete="off">
		        <label for="email">Email</label>
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
		        <button @click="registerUser" class="btn waves-effect waves-light btn-large">Entrar
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
			storeDataRegister: function(res) {
				sessionStorage.setItem('userId', JSON.stringify(res.id));
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
      registerUser: function(){
        let user = document.querySelector('#email').value;
        let pass = document.querySelector('#password').value;

        if(!this.validate(user, pass)) return;

        this.loading = true;
        let headers = new Headers()
        let body = JSON.stringify({"email": user,"password": pass});
        headers.append("Content-Type", "application/json");
        headers.append("Cookie", "__cfduid=d2c2b21b130105010cbdb455dcbb00ec81593395041");

        let params = {
          method: 'POST',
          redirect: 'follow',
          headers,
          body
        };
        fetch('https://reqres.in/api/register', params)
          .then(res => res.json())
          .then(res => {
            console.log(res)
            if(res.token){
              this.warn = false;
              this.storeDataRegister(res);
              this.success = true;
      				setTimeout(()=> { this.$router.push('/login') }, 1000)

            }else{
              this.warn = true;
              this.advise = 'Ocorreu algum erro, por favor tente novamente.';
            }
            this.loading = false;

          })
          .catch(error => {
            this.warn = true;
            this.advise = 'Ocorreu algum erro, por favor tente novamente.';
          })
      }
		}
	}
</script>

<style lang="scss" scoped>
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
</style>
