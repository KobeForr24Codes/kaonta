<template>
  <div>
    <CreateComment :feedId="feedId" class="pb-3"/>
    <v-row
      v-for="(comment, index) in comments"
      :key="index"
    >
      <v-col cols="1">
        <v-avatar size="36">
          <img :src="comment.user.profileImage">
        </v-avatar>
      </v-col>
      <v-col cols="11">
        <v-sheet class="pa-3" color="grey lighten-4">
        <p class="body-2 font-weight-medium primary--text mb-0">
          {{ comment.user.fullName }}
          <span class="body-2 black--text">{{ comment.content }}</span>
        </p>
        </v-sheet>
        <span class="caption">{{ comment.createdAt }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CreateComment from '@/components/FoodFeed/Comments/CreateComment'

export default {
  name: 'TheComments',
  props: {
    feedId: {
      type: String,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
  },
  components: {
    CreateComment
  }
}
</script>

<style>

</style>