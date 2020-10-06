<template>
  <div>
    <p>
      Welcome Recruiter (<a href="#/">signout</a>)
    </p>
    <ViewJobs />
  </div>
</template>

<script>
// @ is an alias to /src
import ViewJobs from '@/components/ViewJobs.vue'

export default {
  components: {
    ViewJobs
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
