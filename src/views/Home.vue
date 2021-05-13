<template>
  <section class="home">
    <div class="home-left">
      <span class="home-logo">
        <img src="@/assets/logo.png" alt="" />
      </span>
      <h1>Visit our collection</h1>
      <span class="home-general-route">
        <router-link class="shop-now" to="/general">
          <span>Shop now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </span>
    </div>
    <div class="gradient-bg">
      <Carousel
        :transition="500"
        :autoplay="4500"
        :wrap-around="true"
        :items-to-show="1.5"
      >
        <Slide v-for="item in items" v-bind:key="item.id">
          <div class="carousel-text-bg">
            <span class="carousel-text">{{ item.desc }}</span>
          </div>
          <img :src="item.src" alt="" />
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    Pagination,
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
