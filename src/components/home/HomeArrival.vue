<template>
  <section class="home-arrival">
    <div class="home-arrival-text">
      <div class="container">
        <h1>New Arrival</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
          risus at ultrices mi.
        </p>
      </div>
    </div>
    <div class="home-arrival-images">
      <div class="container">
        <div class="row">
          <div
            v-for="item in items"
            v-bind:key="item.id"
            class="home-arrival-image-box col-lg-4 col-md-6 col-sm-12"
          >
            <div class="imgBox">
              <img :src="item.src" alt="" />
            </div>
            <div class="content">
              <h2>{{ item.name }}</h2>
              <span>${{ item.price }}</span>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeArrival",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("@/assets/pexels-aman.jpg"),
          name: "White sneakers with Custom design",
          price: 30,
        },
        {
          id: 2,
          src: require("@/assets/pexels-eleg.jpg"),
          name: "White comfy stilettos",
          price: 30,
        },
        {
          id: 3,
          src: require("@/assets/pexels-mel7.jpg"),
          name: "Multi-colored sneakers",
          price: 30,
        },
        {
          id: 4,
          src: require("@/assets/pexels-kabi.jpg"),
          name: "White unisex kicks",
          price: 30,
        },
      ],
    };
  },
};
</script>
