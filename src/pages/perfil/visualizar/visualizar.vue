<template>
  <div id="visualizar">
    <headerApp></headerApp>

    <div class="row">
      <div class="center edit title">
        <h2>Detalhes do perfil</h2>
      </div>
      <div class="user-profile">
        <div class="">
          <div class="card">
            <div class="card-image">
              <img :src="img">
            </div>
            <div class="card-content center">
              <span class="center card-image-rounded">
                <img :src="img">
              </span>

              <h3><b>{{username}}</b></h3>
              <p>{{email}}</p>
              <br>
              <router-link to="/editar">
                <button class="btn">Editar</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
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
    let id = sessionStorage.getItem('userId');

    fetch(`https://reqres.in/api/users/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.img = res.data.avatar
        this.username = `${res.data.first_name} ${res.data.last_name}`;
        this.email = res.data.email;
      })
      .catch(error => {
      })

    return {
      img: '',
      username: 'loading...',
      email: 'loading...'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .title{
    color: #42b883;

    h2{
      margin-bottom: 0;
      font-size: 24px;
      text-transform: uppercase;
    }
  }

  .user-profile{
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3, p{
    color: #42b883;
  }

  .card-image-rounded{
    border: 3px solid #42b883;
    border-radius: 100px;
    overflow: hidden;
    display: inline-block;
    margin-top: -100px;
    position: relative;
  }

  .btn{
    border-radius: 100px;
    background: #42b883;

  }

  .card-image{
    height: 180px;
    overflow: hidden;

    img{
      filter: blur(4px);

    }
  }

  /* Small devices (tablets, 600px and up) */
  @media (min-width: 600px) {}

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {}
</style>
