<template>
  <div class="users-list">
    <h1>
      The users list:
    </h1>
    <ul>
      <li v-for="(user, index) in users" :key="user.id">
        {{ index + 1 }}. <router-link :to="`/user/${user.id}`">{{ user.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UsersList',
  computed: {
    ...mapGetters(['getUsers']),
    users(){
      return this.getUsers
    }
  },
  mounted(){
    this.$store.dispatch('fetchUsers')
  }
}

</script>

<style scoped>

.users-list {
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>