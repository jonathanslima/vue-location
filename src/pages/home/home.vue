<template>
  <div id="home">
    <headerApp></headerApp>
  </div>
</template>

<script>
import header from '../../components/header/header.vue'

export default {
  components: {
    'headerApp': header,

  },
  data () {
    if(!sessionStorage.getItem('userId')){

      fetch('https://reqres.in/api/users?per_page=20')
        .then(res => res.json())
        .then(res => {
          res.data.filter((user)=>{
            user.email == sessionStorage.getItem('user') ?
              sessionStorage.setItem('userId', user.id) : null
          })
        })
    }

    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  /* Small devices (tablets, 600px and up) */
  @media (min-width: 600px) {}

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {}
</style>
