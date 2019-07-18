<template>
  <div class="job">
    <div v-if="!editJob">
      <h3 class="py-2">{{job.jobTitle}}</h3>
      <h5>{{job.company}}</h5>
      <h5>Hours: {{job.hours}} || Rate: {{job.rate}}</h5>
      <h6>{{job.description}}</h6>
      <button class="btn btn-danger mx-1" @click="deleteJob">Not for Me</button>
      <button class="btn btn-warning mx-1" @click="goBack">Go Back</button>
      <button @click="editJob = !editJob" class="btn btn-success mx-1">Edit</button>
    </div>
    <div v-else>
      <div class="row justify-content-center">
        <form class="col-8 pb-5" @submit.prevent="addJob">
          <div class="form-group">
            <label for="company">Company: </label>
            <input type="text" name="company" class="form-control" id="company" placeholder="Company Name"
              v-model="newJob.company">
          </div>
          <div class="form-group">
            <label for="jobTitle">Job Title: </label>
            <input type="text" name="jobTitle" class="form-control" id="jobTitle" placeholder="Job Title"
              v-model="newJob.jobTitle">
          </div>
          <div class="form-group">
            <label for="rate">Rate: </label>
            <input type="number" name="rate" class="form-control" id="rate" placeholder="Rate" v-model="newJob.rate">
          </div>
          <div class="form-group">
            <label for="hours">Hours: </label>
            <input type="number" name="hours" class="form-control" id="hours" placeholder="Hours"
              v-model="newJob.hours">
          </div>
          <div class="form-group">
            <label for="description">Description: </label>
            <input type="text" name="description" class="form-control" id="description" placeholder="Brief Description"
              v-model="newJob.description">
          </div>
          <button @click="editJob = !editJob" class="btn btn-success mx-1">Cancel</button>
          <button @click="saveJobChanges" class="btn btn-success mx-1">Save</button>
        </form>
      </div>

    </div>
  </div>
</template>


<script>
  export default {
    name: 'job',
    data() {
      return {
        editJob: false
      }
    },
    mounted() {
      let dataToSend = {
        jobId: this.$route.params.jobId
      }
      this.$store.dispatch('getJobById', dataToSend)
    },
    computed: {
      job() {
        return this.$store.state.activeJob
      }
    },
    methods: {
      deleteJob() {
        this.$store.dispatch('deleteJob', this.job._id)
      },
      goBack() {
        this.$store.dispatch('goBack')
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>