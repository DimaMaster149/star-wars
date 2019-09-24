<template>
  <div class="starship-list">
    <star-ship-list-item 
      v-for="starship in starships" 
      :key="starship.url"
      :starship="starship"
    />
  </div>
</template>

<script>
import StarShipListItem from '@/components/StarShipListItem';

export default {
  name: 'StarShipList',
  props: {
    starships: {
      type: Array,
    }
  },
  components: {
    StarShipListItem,
  },
}
</script>
