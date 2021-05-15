<template>
  <NavBar />
  <router-view v-on:scroll="handleScroll" />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      const nav = document.querySelector(".main-nav");
      window.scrollY > 10
        ? (nav.style.backgroundColor = "white")
        : (nav.style.backgroundColor = "rgb(240,240,224)");
    },
  },
};
</script>
