<template>
  <div id="app">
    <div class="row">
      <div class="col s12 center pin-logo">
        <i class="material-icons">location_on</i><br>
        <h1>Cadastre-se</h1>
      </div>
    </div>

		<div class="row">
		  <form class="col s12 m6 offset-m3" v-on:submit.prevent>
		    <div class="row">
		      <div class="input-field col s12">
		        <input id="login" type="text" class="validate" autocomplete="off">
		        <label for="login">Usuário</label>
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
export default {

  data () {
    return {
      name: 'cadastrar'
    }
  },
  method: {
    registerUser: function(){

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
