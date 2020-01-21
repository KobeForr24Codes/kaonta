<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="What's on your mind, Kobe?"
      hide-details
      outlined
      required
      class="mb-3"
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      color="primary"
      depressed
      block
      @click="validate"
    >Post</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      name: '',
    }
  },
   methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
}
</script>

<style>

</style>