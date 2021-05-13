<template>
  <section class="home">
    <div class="home-left">
      <h1 class="bleh">New Collection</h1>
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
            <span class="carousel-text">{{ item.src }}</span>
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
        },
        {
          id: 2,
          src: require("../assets/pexels-eleg.jpg"),
        },
        {
          id: 3,
          src: require("../assets/pexels-mel7.jpg"),
        },
        {
          id: 4,
          src: require("../assets/pexels-kabi.jpg"),
        },
      ],
    };
  },
};
</script>
