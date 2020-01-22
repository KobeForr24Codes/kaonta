<template>
  <v-card outlined class="my-3 px-6">
    <v-card-title class="px-0 pt-1">
     <v-avatar>
        <img
          small
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
     <v-list-item-content class="pl-2">
        <v-list-item-title class="body-2 primary--text mb-0">Kobe Forrosuelo</v-list-item-title>
        <v-list-item-subtitle class="caption grey--text">1 hr ago</v-list-item-subtitle>
      </v-list-item-content>
    </v-card-title>
    <v-img
      src="https://s3.amazonaws.com/secretsaucefiles/photos/images/000/107/867/large/Samples.jpeg?1485369806"
    ></v-img>
    <p class="pt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <v-divider class="pb-3"></v-divider>
    <v-card-actions class="pa-0">
      <span>Dorothy Joy and 6 others</span>
      <v-spacer></v-spacer>
      <span>24 Comments</span>
    </v-card-actions>
    <v-card-actions class="text-center pa-0">
      <v-col cols="6" class="px-0">
        <v-btn block text color="error">
          <v-icon>mdi-heart-circle</v-icon>
          <span class="body-1 font-weight-medium pl-2">Like</span>
        </v-btn>
      </v-col>
      <v-col cols="6" class="px-0">
        <v-btn block text>
          <v-icon>mdi-comment-text-outline</v-icon>
          <span class="body-1 font-weight-medium pl-2">Comment</span>
        </v-btn>
      </v-col>
    </v-card-actions>
    <CreateComment />
    <TheComments />
  </v-card>
</template>

<script>
import CreateComment from '@/components/FoodFeed/Comments/CreateComments'
import TheComments from '@/components/FoodFeed/Comments/TheComments'

export default {
  components: {
    CreateComment,
    TheComments
  }
}
</script>

<style>

</style>