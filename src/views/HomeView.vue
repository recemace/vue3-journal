<template>
  <div class="home">
    <button class="btn btn-primary" @click="goToDaybook">Go to daybook</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods: {
    goToDaybook(){
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>
