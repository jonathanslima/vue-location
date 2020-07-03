<template>
  <header>
      <nav class="header-nav">
      <div class="nav-wrapper container">
        <router-link to="/">
          <span class="brand-logo left">
            <i class="material-icons">location_on</i> Vue Location
          </span>
        </router-link>
        <ul class="right menu">
          <li class="details" @click="openDetails">
            <a href="#"><i class="material-icons">more_vert</i></a>
            <ul v-if="open" id="dropdown1" class="dropdown-content">
              <li>
                <router-link to="/visualizar">
                  Visualizar perfil
                </router-link>
              </li>
              <li class="divider"></li>
              <li>
                <router-link to="/editar">
                  Editar perfil
                </router-link>
              </li>
            </ul>
          </li>
          <li @click="logout" class="logout">
            <a href="#">
              <i class="material-icons">exit_to_app</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    let userAccess = JSON.parse(sessionStorage.getItem('userAccess')) || '';
    if(!userAccess){ this.$router.push('/login') }

    return {
      open: false
    }
  },
  methods: {
    logout: function(){
			sessionStorage.removeItem('userAccess');
			sessionStorage.removeItem('userId');
			sessionStorage.removeItem('user');
      this.$router.push('/login')
    },
    openDetails: function(){
      this.open == false ? this.open = true : this.open = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-nav{
    background: #42b883;
  }

  .brand-logo{
    font-size: 20px;
  }

  .logout{
    cursor: pointer;
  }

  .details{
    position: relative;
  }

  .dropdown-content{
    display: block;
    opacity: 1;
    position: absolute;
    top: 56px;
    left: -57px;
    /* display: none; */
    li{
      width: 150px;
    }
  }

  /* Small devices (tablets, 600px and up) */
  @media (min-width: 600px) {
    .dropdown-content{
      top: 60px;
      left: -40px;
    }

    .brand-logo{
      font-size: 2.1rem;
    }

  }

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }
</style>
