<template>
<div class="app">
  <header>
  <h1>Mini SPA con Vue Router</h1>
  <nav>
    <RouterLink class="nav-link" to="/">Home</RouterLink>
    <RouterLink class="nav-link" to="/catalog">Catalog</RouterLink>
    <RouterLink class="nav-link" to="/about">About</RouterLink>
  </nav>
  </header>

  <main>
    <RouterView/>
  </main>
  </div>
</template>


<style scoped>
.app {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 990px;
  margin: 0 auto;
  padding: 30px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

main {
  background-color: #d9e3ee;
  padding: 25px;
  border-radius: 12px;
}
</style>
