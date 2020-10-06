<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="center">
      <form @submit="submitForm" novalidate="true">
        <p v-if="errors.length > 0">
          {{ errors[0] }}
        </p>
        <table class="formcenter">
          <tr>
            <td>
              Email
              <input
                v-model="email"
                type="text"
                name="email"
                placeholder="name@email.com"
              />
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td>
              <input type="submit" name="Submit" value="Submit" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data: function() {
    return {
      email: '',
      errors: []
    }
  },
  methods: {
    submitForm: function(e) {
      this.errors = []
      if (this.email) {
        if(this.email.indexOf('recruiter') != -1) {
          this.$router.push('recruiterhome')
        } else if(this.email.indexOf('candidate') != -1) {
          this.$router.push('candidatehome')
        } else {
          this.errors.push('Not a valid email')
        }
      }
      if (!this.email) {
        this.errors.push('Email required')
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
