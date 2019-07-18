<template>
  <div class="jobs">
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
          <input type="number" name="hours" class="form-control" id="hours" placeholder="Hours" v-model="newJob.hours">
        </div>
        <div class="form-group">
          <label for="description">Description: </label>
          <input type="text" name="description" class="form-control" id="description" placeholder="Brief Description"
            v-model="newJob.description">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="row">
      <div class="job col-4 border border-secondary rounded" v-for="job in jobs">
        <h3 class="py-2">{{job.jobTitle}}</h3>
        <h5>{{job.company}}</h5>
        <h5>Hours: {{job.hours}} || Rate: {{job.rate}}</h5>
        <button class="btn btn-info mb-2" @click="viewJob(job)">Learn More...</button>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'jobs',
    data() {
      return {
        newJob: {}
      }
    },
    mounted() {
      this.$store.dispatch('getJobs')
    },
    computed: {
      jobs() {
        return this.$store.state.jobs
      }
    },
    methods: {
      viewJob(job) {
        this.$router.push({ name: 'job', params: { jobId: job._id } })
      },
      addJob() {
        this.$store.dispatch('addJob', this.newJob)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>