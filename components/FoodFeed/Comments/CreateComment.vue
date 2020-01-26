<template>
  <form ref="createCommentForm" @submit.prevent="createComment()">
    <v-textarea
      @keydown="inputHandler"
      v-model="comment"
      rows="1"
      label="Write a comment ..."
      hide-details
      auto-grow
      rounded
      filled
    >
      <template v-slot:append>
        <v-fade-transition leave-absolute>
          <v-progress-circular
            v-if="isCreating"
            size="24"
            color="info"
            indeterminate
          ></v-progress-circular>
        </v-fade-transition>
      </template>
    </v-textarea>
  </form>
</template>

<script>
export default {
  name: 'CreateComment',
  props: {
    feedId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isCreating: false,
      comment: ''
    }
  },
  methods: {
    inputHandler(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault()
        this.createComment()
      }
    },
    createComment() {
      this.isCreating = true
      this.$store.dispatch('modules/food-feed/addFoodFeedComment', {
        feedId: this.feedId,
        comment: {
          user: {
            profileImage: 'https://randomuser.me/api/portraits/men/35.jpg',
            fullName: 'Kobe Forrosuelo'
          },
          content: this.comment,
          createdAt: new Date()
        }
      })
      this.comment = ''
      this.isCreating = false
    }
  }
}
</script>
