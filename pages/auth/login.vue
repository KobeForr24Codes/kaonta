<template>
  <v-row justify="center" align="center" style="height: 84vh;">
    <v-col cols=4>
      <p class="headline font-weight-bold text-center">KaonTa</p>
      <form>
        <v-text-field
          v-model="email"
          label="E-mail"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          outlined
          required
        ></v-text-field>
        <v-btn
          block
          large
          depressed
          color="primary"
          class="mr-4"
          @click="login"
        >Login</v-btn>
      </form>
      <router-link to="/" style="text-decoration: none;">
        <p class="text-center py-6 mb-0">Forgot Password?</p>
      </router-link>
      <v-divider class="mt-0"/>
      <v-row class="pt-6" justify="center" align="center">
        <v-col cols=6>
          <v-btn color="primary" block outlined><span class="mdi mdi-facebook"></span></v-btn>
        </v-col>
        <v-col cols=6>
          <v-btn color="primary" block outlined><span class="mdi mdi-google"></span></v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      showPassword: false,
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      alert('login clicked')
    }
  }
}
</script>

<style>

</style>
