<template>
  <div>
    <p>
      Welcome Candidate (<a href="#/">signout</a>)
    </p>
    <JobListing />
  </div>
</template>

<script>
// @ is an alias to /src
import JobListing from '@/components/JobListing.vue'

export default {
  components: {
    JobListing
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
