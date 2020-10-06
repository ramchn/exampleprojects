<template>
  <div>
    <h3>Job Postings</h3>
    <p><a :href="'#/recruiter/create'">create New Job Posting</a></p>
    <p>{{ result.message }}</p>
    <div v-for="job in jobs" :key="job.JobId">
      <div class="center">
        <p><b>{{ job.JobName }}</b><br>{{ job.CompanyName }}<br>{{ job.Location }}</p>
        <p><a :href="'#/recruiter/edit?jobid=' + job.JobId">Edit</a> | <a :href="'#/recruiterhome'" @click="deleteJob(job.JobId)">Delete</a></p>
      </div>
      <div style="height:10px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      jobs: [],
      result: []
    }
  },
  created: function () {
    this.$axios
      .get('http://localhost:8071/jobs')
      .then(response => (this.jobs = response.data))
      .catch(error => (console.log(error)))
  },
  methods: {
    deleteJob: function(id) {
      this.$axios
      .delete(`http://localhost:8071/jobs/${id}`)
      .then((response) => {
        this.result = response.data
        this.$axios
        .get('http://localhost:8071/jobs')
        .then(response => (this.jobs = response.data))
        .catch(error => (console.log(error)))
      })
      .catch(error => (console.log(error)))
    }
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
