<template>
  <div class="houses container-fluid">
    <div class="row justify-content-center">
      <form class="col-8 pb-5" @submit.prevent="addHouse">
        <div class="form-group">
          <label for="levels">Levels: </label>
          <input type="number" name="levels" class="form-control" id="levels" placeholder="Levels"
            v-model="newHouse.levels">
        </div>
        <div class="form-group">
          <label for="bedrooms">Bedrooms: </label>
          <input type="number" name="bedrooms" class="form-control" id="bedrooms" placeholder="Bedrooms"
            v-model="newHouse.bedrooms">
        </div>
        <div class="form-group">
          <label for="bathrooms">Bathrooms: </label>
          <input type="number" class="form-control" id="bathrooms" placeholder="Bathrooms" v-model="newHouse.bathrooms">
        </div>
        <div class="form-group">
          <label for="img">Image</label>
          <input type="text" class="form-control" id="img" placeholder="Enter image url" v-model="newHouse.imgUrl">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" class="form-control" id="price" v-model="newHouse.price">
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input type="number" class="form-control" id="year" v-model="newHouse.year">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="row">
      <div class="house col-4 border border-secondary rounded" v-for="house in houses" @click="viewHouse(house)">
        <img :src="house.imgUrl" alt="house image" class="py-2">
        <h6 class="py-2">Levels: {{house.levels}} || Bed: {{house.bedrooms}} || Bath: {{house.bathrooms}}</h6>
        <h5>${{house.price}}</h5>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'houses',
    data() {
      return {
        newHouse: {}
      }
    },
    mounted() {
      this.$store.dispatch('getHouses')
    },
    computed: {
      houses() {
        return this.$store.state.houses
      }
    },
    methods: {
      viewHouse(house) {
        this.$router.push({ name: 'house', params: { houseId: house._id } })
      },
      addHouse() {
        this.$store.dispatch("addHouse", this.newHouse)
      }
    },
    components: {}
  }
</script>


<style scoped>
  img {
    height: 200px;
  }
</style>