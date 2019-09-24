<template>
  <div class="starship-item ">
    <ul>
      <li>
        Name: 
        <span 
          class="cursor-pointer"
          @click="showDetails(starship.url)"
        >{{starship.name}}</span> 
      </li>
      <li>
        Class: {{starship.starship_class}}
      </li>
      <li>
        Model: {{starship.model}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'starship-list-item',
  props: {
    starship: {
      type: Object,
    }
  },
  methods: {
    showDetails(url) {
      const id = url.split('starships/')[1].split('/')[0];
      this.$router.push({ name: 'StarShipDetailedItem', params: { id } });
    },
  }
}
</script>