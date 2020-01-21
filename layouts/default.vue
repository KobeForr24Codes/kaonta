<template>
  <v-app>
    <v-content>
      <v-container py-0>
        <AuthHeader />
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import AuthHeader from '@/components/Navigation/AuthHeader'

export default {
  components: {
    TheHeader,
    AuthHeader
  }
}
</script>
