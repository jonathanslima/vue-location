<template>
  <div id="app">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    let userAccess = JSON.parse(sessionStorage.getItem('userAcess')) || '';

    if(!userAccess){
      this.$router.push('/login')
    }

    return {
      name: 'home'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
