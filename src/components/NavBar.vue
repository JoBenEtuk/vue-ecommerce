<template>
  <div class="main-nav">
    <div class="nav-left">
      <router-link
        :class="{ active: $route.name === 'Home' }"
        to="/"
        class="logo"
        >Shop.</router-link
      >
      <span>
        <router-link :class="{ active: $route.name === 'Man' }" to="/man"
          >Man</router-link
        >
        <router-link :class="{ active: $route.name === 'Woman' }" to="/woman"
          >Woman</router-link
        >
      </span>
    </div>
    <div class="nav-right">
      <span>
        <input type="search" placeholder="search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <router-link :class="{ active: $route.name === 'Cart' }" to="/cart"
        >Cart 0</router-link
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>
