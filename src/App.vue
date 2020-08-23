<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Before Create</router-link> |
      <router-link to="/created">Created</router-link> |
      <router-link to="/beforemount">Before Mount</router-link> |
      <router-link to="/mounted">Mounted</router-link> |
      <router-link to="/beforeupdate">Before Update</router-link> |
      <router-link to="/updated">Updated</router-link> |
      <router-link to="/beforedestroy">Before Destroy</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.hello > p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #ff0052;
  font-style: italic;
  border: 1px solid #ce6b6b;
  margin: 16px;
  padding: 16px;
  border-radius: 50px;
  background: #cff1e4;
}
</style>
