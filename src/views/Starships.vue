<template>
  <div>
    <star-ship-list :starships="starships"/>
  </div>
</template>

<script>
import StarShipList from '@/components/StarShipList.vue';
import * as StarShipService from '@/services/StarShipService';

export default {
  name: 'starships',
  components: {
    StarShipList,
  },
    data() {
    return {
      starships: [],
    };
  },
  created() {
    StarShipService.fetchStarships().then((res) => {
      console.log(res, 'res')
      this.starships = res.data.results;
    });
  },
}
</script>