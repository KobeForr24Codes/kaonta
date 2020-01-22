<template>
  <div>
    <v-row
      v-for="item in comments"
      :key="item.index"
      @click=""
    >
      <v-col cols="1">
        <v-avatar size="36">
          <img :src="item.img">
        </v-avatar>
      </v-col>
      <v-col cols="11">
        <v-sheet class="pa-3" color="grey lighten-4">
        <p class="body-2 font-weight-medium primary--text mb-0">
          {{ item.name }}
          <span class="body-2 black--text">{{ item.comment }}</span>
        </p>
        </v-sheet>
        <span class="caption">1h</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        { img: 'https://randomuser.me/api/portraits/men/32.jpg', iconClass: 'grey lighten-1 white--text', name: 'Kobe Forr', comment: 'We are Filipinos, we love basketball so much. We watch PBA, Fiba, UAAP, MPBL and NBA (atleast up to last season) for free. So please trust me when I tell you this: no Pinoy will be willing to pay 2200 every month to watch NBA online. If you will work with our local channels and cables, it will be a bigger payday for you guys. Im a Lebron fan and I watched all his games on cable tv last season. Sadly, Im only watching the game highlights on Youtube now.' },
        { img: 'https://randomuser.me/api/portraits/women/44.jpg', iconClass: 'grey lighten-1 white--text', name: 'Jane Doe', comment: 'What network is 0950 mobile number? The 0950 is a prefix from Smart and Talk N Text network in Philippines. You can check other Smart and TNT mobile number prefix.' },
        { img: 'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg', name: 'Archer Warrior', comment: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.', subtitle: 'Jan 28, 2014' },
      ]
    }
  }
}
</script>

<style>

</style>