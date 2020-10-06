<template>
  <div>
    <p>{{ result.message }}</p>
    <p><a :href="'#/candidatehome'">back</a></p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      result: []
    }
  },
  created: function () {
    const jobid = this.$route.query.jobid
    const data = {JobId: jobid, ApplyStatus: 'True'}
    this.$axios
      .post(`http://localhost:8071/job/${jobid}/apply`, data)
      .then(response => (this.result = response.data))
      .catch(error => (console.log(error)))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
