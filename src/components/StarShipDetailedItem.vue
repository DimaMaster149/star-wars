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

    <router-link :to="{ name: 'Starships' }"> Return to starship list </router-link> 
  </div>
</template>

<script>
export default {
  name: 'StarShipDetailedItem',
  computed: {
    starshipInfo() {
      return this.$store.getters.starshipById(this.$route.params.id);
    }
  },
  filters: {
    toUpperCase(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase();
    }
  }
}
</script>