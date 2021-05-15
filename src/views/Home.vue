<template>
  <main class="landing-page">
    <HomeHero />
    <HomeFeatures />
    <HomeArrival />
  </main>
</template>

<script>
import HomeHero from "@/components/home/HomeHero.vue";
import HomeFeatures from "@/components/home/HomeFeatures.vue";
import HomeArrival from "@/components/home/HomeArrival.vue";

export default {
  name: "Home",
  components: {
    HomeHero,
    HomeFeatures,
    HomeArrival,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/pexels-aman.jpg"),
          desc: "White sneakers with Custom design",
        },
        {
          id: 2,
          src: require("../assets/pexels-eleg.jpg"),
          desc: "White comfy stilettos",
        },
        {
          id: 3,
          src: require("../assets/pexels-mel7.jpg"),
          desc: "Multi-colored sneakers",
        },
        {
          id: 4,
          src: require("../assets/pexels-kabi.jpg"),
          desc: "White unisex kicks",
        },
      ],
    };
  },
};
</script>
