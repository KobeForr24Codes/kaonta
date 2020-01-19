<template>
  <v-container px-10 mt-12>
    <v-row justify="space-between">
      <v-col cols=6>
        <p class="display-2 font-weight-bold">Share and experience tasty foods now.</p>
        <span class="subheading">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et
        </span>
      </v-col>
      <Login />
      <v-col cols="12" class="mt-12">
        <WeeklyFavorites />
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import WeeklyFavorites from '@/components/Weekly/Index'
import Login from '@/components/Auth/Login'

export default {
  components: {
    WeeklyFavorites,
    Login
  }
}
</script>
