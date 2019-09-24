<template>
  <div>
    <ul>
      <li>
        Name: 
        <span >{{starshipInfo.name}}</span> 
      </li>
      <li>
        Class: {{starshipInfo.starship_class}}
      </li>
      <li>
        Model: {{starshipInfo.model}}
      </li>
      <li>
        Manufacturer: {{starshipInfo.manufacturer}}
      </li>
    </ul>

    <router-link :to="{name: 'Starships'}"> Return to starship list </router-link> 
  </div>
</template>

<script>
import * as StarShipService from '@/services/StarShipService';

export default {
  name: 'StarShipDetailedItem',
  data() {
    return {
      starshipInfo: {}
    }
  },
  created() {
    const { id } = this.$route.params;
    StarShipService.fetchStarhip(id).then((res) => {
      this.starshipInfo = res.data;
    });
  },
}
</script>