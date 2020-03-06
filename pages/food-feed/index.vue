<template>
  <v-row justify="center" class="pt-3">
    <v-col cols=6>
      <v-card outlined class="pa-5">
        <CreatePost />
      </v-card>
      <Feed />
    </v-col>
  </v-row>
  
</template>

<script>
import CreatePost from '@/components/FoodFeed/CreateFeed'
import Feed from '@/components/FoodFeed/Feed'

export default {
  name: 'FeedIndex',
  components: {
    CreatePost,
    Feed
  },
  middleware: 'auth'
}
</script>
