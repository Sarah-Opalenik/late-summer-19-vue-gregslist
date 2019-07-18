<template>
  <div class="house">
    <img :src="house.imgUrl" alt="house image" class="py-2">
    <h6 class="py-2">Levels: {{house.levels}} || Bed: {{house.bedrooms}} || Bath: {{house.bathrooms}}</h6>
    <h5>${{house.price}}</h5>
    <button class="btn btn-danger mx-1" @click="deleteHouse">Delete</button>

  </div>
</template>


<script>
  export default {
    name: 'house',
    data() {
      return {}
    },
    mounted() {
      let dataToSend = {
        houseId: this.$route.params.houseId
      }
      this.$store.dispatch('getHouseById', dataToSend)
    },
    computed: {
      house() {
        return this.$store.state.activeHouse
      }
    },
    methods: {
      deleteHouse() {
        this.$store.dispatch('deleteHouse', this.house._id)
      },

    },
    components: {}
  }
</script>


<style scoped>

</style>