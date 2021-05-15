<template>
  <div class="main-nav">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="logo">Shop.</router-link>
        <span>
          <router-link
            :class="{ active: $route.name === 'General' }"
            to="/general"
            >General</router-link
          >
          <router-link :class="{ active: $route.name === 'Male' }" to="/male"
            >Male</router-link
          >
          <router-link
            :class="{ active: $route.name === 'Female' }"
            to="/female"
            >Female</router-link
          >
        </span>
      </div>
      <div class="nav-right">
        <span>
          <input type="search" placeholder="search" />
          <i class="fas fa-search"></i>
        </span>
        <router-link :class="{ active: $route.name === 'Cart' }" to="/cart"
          >Cart 0</router-link
        >
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
