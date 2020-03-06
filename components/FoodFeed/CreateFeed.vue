<template>
  <form ref="createFeedForm" @submit.prevent="createFeed()">
    <v-btn depressed>
      <span class="mdi mdi-image-plus pr-1"></span>Add Image
    </v-btn>
    <v-text-field
      v-model="feedContent"
      @change="hasContent()"
      label="What's on your mind, Kobe?"
      class="mb-3 mt-2"
      hide-details
      outlined
      required
    ></v-text-field>
    <v-btn
      @click="createFeed()"
      :disabled="noContent"
      color="primary"
      depressed
      block
    >Post</v-btn>
  </form>
</template>

<script>

export default {
  name: 'CreateFeedCard',
  data() {
    return {
      noContent: true,
      valid: true,
      feedContent: ''
    }
  },
  methods: {
    hasContent() {
      if (this.feedContent) {
        this.noContent = false
      }
    },
    createFeed() {
      this.$axios.$post('/api/posts/')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err.response.data)
        })
      // let feed = {
      //   _id: '3',
      //   creator: {
      //     profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      //     fullName: 'Kobe Forrosuelo',
      //   },
      //   description: this.feedContent,
      //   likes: [],
      //   comments: [],
      //   showComments: false,
      //   createdAt: '2020-01-03T07:32:55.706+00:00'
      // }

      // this.$store.dispatch('modules/food-feed/addFoodFeed', feed)
      // this.noContent = false
      // this.feedContent = ''
    }
  },
  watch: {
    feedContent: {
      handler(val) {
        if (val) {
          this.noContent = false
        } else {
          this.noContent = true
        }
      },
      immediate: true
    }
  }
}
</script>
