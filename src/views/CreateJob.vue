<template>
  <div>
    <h3>Create a New Job Posting</h3>
    <div class="center">
      <p>{{ result.message }}</p>
      <form @submit="createJobForm" novalidate="true">
        <p v-if="errors.length">
          <table class="errorcenter"><tr v-for="error in errors" :key="error.id"><td style="text-align:left">{{ error }}</td></tr></table>
        </p>
        <table class="formcenter">
          <tr>
            <td style="text-align:right">Job Name</td>
            <td style="text-align:left">
              <input
                v-model="jobname"
                type="text"
                name="jobname"
                placeholder="Job Name"
              />
            </td>
          </tr>
          <tr>
            <td style="text-align:right">Company Name</td>
            <td style="text-align:left">
              <input
                v-model="companyname"
                type="text"
                name="companyname"
                placeholder="Company Name"
              />
            </td>
          </tr>
          <tr>
            <td style="text-align:right">Location</td>
            <td style="text-align:left">              
              <input
                v-model="location"
                type="text"
                name="location"
                placeholder="Location"
              />
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td style="text-align:right"><a :href="'#/recruiterhome'">back</a></td>
            <td style="text-align:left">
              <input type="submit" name="Submit" value="Save" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      jobname: '',
      companyname: '',
      location: '',
      result: [],
      errors: []
    }
  },
  methods: {
    createJobForm: function(e) {
      this.errors = []
      if (this.jobname && this.companyname && this.location) {
        const formData = new FormData()
        formData.append('JobName', this.jobname)
        formData.append('CompanyName', this.companyname)
        formData.append('Location', this.location)
        this.$axios
        .post('http://localhost:8071/jobs', formData)
        .then(response => (this.result = response.data))
        .catch(error => (console.log(error)))
      }
      if (!this.jobname) {
        this.errors.push('Job Name required')
      }
      if (!this.companyname) {
        this.errors.push('Company Name required')
      }
      if (!this.location) {
        this.errors.push('Location required')
      }
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  margin: auto;
  width: 60%;
  border: 1px solid #73ad21;
  padding: 10px;
}
.formcenter {
  margin: auto;
  width: 60%;
  padding: 10px;
}
.errorcenter {
  margin: auto;
  width: 25%;
  padding: 5px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
