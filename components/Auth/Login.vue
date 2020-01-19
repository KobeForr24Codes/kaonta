<template>
  <v-col cols=5 class="mb-12">
    <v-card outlined class="pa-8">
      <v-row justify="center">
        <v-col cols=5>
          <v-btn
            depressed
            block
            :class="{ 'primary' : isLogin }"
            @click="$store.dispatch('modules/controller/changeAuthState', true)"
          >Login</v-btn>
        </v-col>
        <v-col cols=5>
          <v-btn
            depressed
            block
            :class="{ 'success' : !isLogin }"
            @click="$store.dispatch('modules/controller/changeAuthState', false)"
          >Sign Up</v-btn>
        </v-col>
      </v-row>
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
        <div v-if="!isLogin">
          <v-text-field
            v-model="firstName"
            label="First Name"
            outlined
            required
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            label="Last Name"
            outlined
            required
          ></v-text-field>
        </div>
        <v-btn
          block
          large
          depressed
          :class="{ 'primary' : isLogin, 'success': !isLogin }"
          @click="isLogin ? login() : signUp()"
        >{{ isLogin ? 'Login' : 'Sign Up'}}</v-btn>
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
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    login() {
      alert('login clicked')
    },
    signUp() {
      alert('signUp clicked')
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters['modules/controller/isLogin']
    }
  }
}
</script>

<style>

</style>
