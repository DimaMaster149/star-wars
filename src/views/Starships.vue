<template>
  <div>
    <star-ship-list :starships="starships"/>
  </div>
</template>

<script>
import StarShipList from '@/components/StarShipList.vue';

export default {
  name: 'starships',
  components: {
    StarShipList,
  },
  created() {
    this.$store.dispatch('fetchStarships');
  },
  computed: {
    starships() {
      return this.$store.getters.starships;
    },
  },
}
</script>