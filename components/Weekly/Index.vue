<template>
  <v-container pa-0>
    <p class="headline font-weight-bold mb-0">Weekly Favorites</p>
    <span class="body-2">Foods trips that have chosen the most this week.</span>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.index"
        cols="12"
        md="3"
      >
        <v-img :src="item.img" aspect-ratio="1.7"></v-img>
        <span class="subtitle-2 grey--text">Dipolog City, Philippines</span>
        <v-list-item-title class="subtitle-2">{{ item.title }}</v-list-item-title>
        <v-card-actions class="pa-0 mt-2">
          <span>P150.00 per pax</span>
          <v-spacer />
          <span>4.2</span>
          <v-icon small color="primary">mdi-star</v-icon>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
 data() {
   return {
     items: [
       { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum.', img: 'https://picsum.photos/510/300?random' },
       { title: 'Lorem ipsum dolor sit amet, consectetur.', img: 'https://picsum.photos/510/300?random' },
       { title: 'Neque porro quisquam est qui dolorem ipsum quia dolor ', img: 'https://picsum.photos/510/300?random' },
       { title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa', img: 'https://picsum.photos/510/300?random' },
       { title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque', img: 'https://picsum.photos/510/300?random' },
       { title: 'el illum qui dolorem eum fugiat quo voluptas nulla pariatur', img: 'https://picsum.photos/510/300?random' },
       { title: 'But I must explain to you how all this mistaken idea of denouncing pleasure', img: 'https://picsum.photos/510/300?random' },
       { title: 'magnam aliquam quaerat voluptatem.', img: 'https://picsum.photos/510/300?random' }
     ]
   }
 }
}
</script>

<style>

</style>
