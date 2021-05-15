<template>
  <section class="home-hero">
    <div class="container">
      <div class="home-hero-main">
        <div class="home-left">
          <span class="home-logo">
            <img src="@/assets/logo.png" alt="" />
          </span>
          <h1>Visit our collection</h1>
          <span class="home-general-route">
            <router-link class="shop-now" to="/general">
              <span>Shop now</span>
              <i class="fab fa-opencart"></i>
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
      </div>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "HomeHero",
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
          src: require("@/assets/pexels-aman.jpg"),
          desc: "White sneakers with Custom design",
        },
        {
          id: 2,
          src: require("@/assets/pexels-eleg.jpg"),
          desc: "White comfy stilettos",
        },
        {
          id: 3,
          src: require("@/assets/pexels-mel7.jpg"),
          desc: "Multi-colored sneakers",
        },
        {
          id: 4,
          src: require("@/assets/pexels-kabi.jpg"),
          desc: "White unisex kicks",
        },
      ],
    };
  },
};
</script>
