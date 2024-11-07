<template>
  <nav class="main-nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/user">User</router-link> |
    <router-link to="/users">Users</router-link>

  </nav>
  <router-view/>
</template>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-nav {
  position: fixed; /* fixează nav-ul în poziție */
  top: 0;         /* lipește de marginea de sus */
  right: 0;       /* lipește de marginea din dreapta */
  padding: 20px;  /* spațiu în interiorul nav-ului */
}

.main-nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;  /* spațiu între link-uri */
}

.main-nav a.router-link-exact-active {
  color: #42b983;
}

/* Pentru a preveni suprapunerea conținutului cu nav-ul */
#app {
  padding-top: 60px;  /* creează spațiu pentru nav */
}

</style>
