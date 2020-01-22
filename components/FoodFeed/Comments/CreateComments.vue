<template>
  <v-textarea
    @keydown="inputHandler"
    v-model="comment"
    rows="1"
    label="Write a comment ..."
    auto-grow
    rounded
    filled
  ></v-textarea>
</template>

<script>
export default {
  data() {
    return {
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
      alert(this.comment)
    }
  }
}
</script>

<style>
</style>
