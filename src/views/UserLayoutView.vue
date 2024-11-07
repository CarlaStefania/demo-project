<template>
  <div class="user-layout">
    <h1>User Dashboard - User {{ $route.params.id }}</h1>
    <nav class="user-nav">
      <router-link v-bind:to="'/user/' + $route.params.id + '/profiles'">Profiles</router-link> |
      <router-link v-bind:to="'/user/' + $route.params.id + '/orders'">Orders</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'UserLayout'
}
</script>

<style scoped>
.user-layout {
  padding: 20px;
}

.user-nav {
  margin: 20px 0;
  position: relative; /* asigură că rămâne în flux normal al documentului */
}

.user-nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}

.user-nav a.router-link-exact-active {
  color: #42b983;
}
</style>