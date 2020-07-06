<template>
  <div id="home">
    <headerApp></headerApp>
  </div>
</template>

<script>
import header from '../../components/header/header.vue'
import services from '../../services'
export default {
  components: {
    'headerApp': header,
  },
  data () {
    if(!sessionStorage.getItem('userId')){
      services.getAllUser();
    }

    this.getLocation()

    return {}
  },
  methods: {
    getLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    },
    showPosition: function(position) {
      console.log("Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude);
    }
  }
}
</script>

<style lang="scss" scoped>
  /* Small devices (tablets, 600px and up) */
  @media (min-width: 600px) {}

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {}
</style>
