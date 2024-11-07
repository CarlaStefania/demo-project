<template>
  <div class="home">
    <h1>
      HOME
    </h1>
    <p>
      Welcome to my first vue website !
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.navigation {
  margin-top: 20px;
}

.link {
  text-decoration: none;
  color: #2c3e50;
  margin: 0 10px;
  padding: 5px 10px;
}

.link:hover {
  color: #42b983;
}
</style>