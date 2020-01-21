<template>
  <v-row justify="center" class="pt-3">
    <v-col cols=6>
      <v-card outlined class="pa-5">
        <CreatePost />
      </v-card>
      <Feed v-for="i in 3" :key="i.index" />
    </v-col>
  </v-row>
  
</template>

<script>
import CreatePost from '@/components/FoodFeed/Create'
import Feed from '@/components/FoodFeed/Feed'

export default {
  components: {
    CreatePost,
    Feed
  }
}
</script>
