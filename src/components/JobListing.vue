<template>
  <div>
    <h3>Job Listing</h3>
    <div v-for="job in jobs" :key="job.JobId">
      <div class="center">
        <p><b>{{ job.JobName }}</b><br>{{ job.CompanyName }}<br>{{ job.Location }}</p>
        <p v-if="job.ApplyStatus=='True'">Applied</p>
        <p v-else><a :href="'#/candidate/apply?jobid=' + job.JobId">Apply Now</a></p>
      </div>
      <div style="height:10px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      jobs: []
    }
  },
  created: function () {
    this.$axios
      .get('http://localhost:8071/jobs')
      .then(response => (this.jobs = response.data))
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  margin: auto;
  width: 40%;
  border: 1px solid #73ad21;
  padding: 10px;
}
.textcenter {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
