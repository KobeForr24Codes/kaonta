<template>
  <div>
    <v-card v-for="(feed, index) in foodFeeds" :key="index" outlined class="my-3 px-6">
      <v-card-title class="px-0 pt-1">
      <v-avatar>
          <img
            small
            :src="feed.creator.profileImage"
            alt="creator-avatar"
          >
        </v-avatar>
      <v-list-item-content class="pl-2">
          <v-list-item-title class="primary--text mb-0 font-weight-medium">{{ feed.creator.fullName }}</v-list-item-title>
          <v-list-item-subtitle class="caption grey--text">{{ feed.createdAt }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-card-title>
      <v-img
        v-if="feed.postImage"
        :src="feed.postImage"
        class="mb-4"
      ></v-img>
      <p>
        {{ feed.description }}
      </p>
      <v-divider class="pb-3"></v-divider>
      <v-card-actions v-if="feed" class="pa-0">
        <div v-if="feed.likes.length > 3">
          <span class="error--text mdi mdi-heart-circle"></span>
          <span>{{ `${feed.likes[1].user.fullName}, ${feed.likes[2].user.fullName} and ${feed.likes.length - 2} others` }}</span>
        </div>
        <div v-else-if="feed.likes.length > 0">
          <span class="error--text mdi mdi-heart-circle"></span>
          <span>{{ feed.likes.length }}</span>
        </div>
        <v-spacer></v-spacer>
        <span v-if="feed.comments.length > 0" class="font-weight-medium">{{ feed.comments.length }} Comments</span>
      </v-card-actions>
      <v-card-actions class="text-center pa-0">
        <v-col cols="6" class="px-0">
          <v-btn
            @click="userLiked(feed.likes) ? unlike(feed._id) : like(feed._id)"
            :color="userLiked(feed.likes) ? 'error' : ''"
            block
            text
          >
            <v-icon>mdi-heart-circle</v-icon>
            <span class="body-1 font-weight-medium pl-2">Like</span>
          </v-btn>
        </v-col>
        <v-col cols="6" class="px-0">
          <v-btn
            @click="showComments(feed._id)"
            block
            text
          >
            <v-icon>mdi-comment-text-outline</v-icon>
            <span class="body-1 font-weight-medium pl-2">Comment</span>
          </v-btn>
        </v-col>
      </v-card-actions>
      <TheComments v-if="feed.showComments" :feedId="feed._id" :comments="feed.comments"/>
    </v-card>
  </div>
</template>

<script>
import TheComments from '@/components/FoodFeed/Comments/TheComments'

export default {
  name: 'FeedCards',
  components: {
    TheComments
  },
  methods: {
    showComments(feedId) {
      this.$store.dispatch('modules/food-feed/showFeedComments', feedId)
    },
    like(feedId) {
      this.$store.dispatch('modules/food-feed/addLike', feedId)
    },
    unlike(feedId) {
      this.$store.dispatch('modules/food-feed/removeLike', { feedId, userId: '1' })
    },
    userLiked(likes) {
      for (let i = 0; i < likes.length; i++) {
        if (likes[i].user._id == '1') {
          return true
        }
      }
    }
  },
  computed: {
    foodFeeds() {
      return this.$store.getters['modules/food-feed/feeds']
    }
  }
}
</script>

<style>

</style>