<template>
  <v-row justify="center">
    <v-col class="pa-0">
      <v-toolbar flat color="#fafafa">
        <v-toolbar-title><span class="headline">KAONTA</span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>Home</v-btn>
        <v-btn text>Food Blogs</v-btn>
        <v-avatar>
          <img
            small
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              v-on="on"
            >
              Hi, Kobe
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click=""
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Settings' },
        { title: 'Logout' }
      ]
    }
  }
}
</script>

<style>

</style>
