<template>
  <div class="welcome-container">
    <h2>Welcome, {{ userName }}!</h2>
  </div>
</template>

<script>
import { users } from '../data/users.js'

export default {
  name: 'UserWelcome',
  computed: {
    userName() {
      const userId = this.$route.params.id;
      const user = users.find(u => u.id === Number(userId));
      return user ? user.name.split(' ')[1] : '';
    }
  }
}
</script>

<style scoped>
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;  /* înălțimea viewport-ului */
}

h2 {
  font-size: 2em;
  color: #2c3e50;
}
</style>