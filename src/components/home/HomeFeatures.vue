<template>
  <section class="home-features">
    <div class="container">
      <div class="row">
        <div
          v-for="item in items"
          v-bind:key="item.id"
          class="features-container col-lg-4 col-md-6 col-sm-12"
        >
          <i :class="item.svg"></i>
          <h2 class="features-title">{{ item.title }}</h2>
          <p class="features-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeFeatures",
  components: {},
  data() {
    return {
      items: [
        {
          id: 1,
          svg: "fas fa-shopping-cart",
          title: "Free Shipping",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus risus at ultrices mi.",
        },
        {
          id: 2,
          svg: "far fa-clock",
          title: "24/7 Hour Support",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus risus at ultrices mi.",
        },
        {
          id: 3,
          svg: "fas fa-undo",
          title: "100% Moneyback",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus risus at ultrices mi.",
        },
      ],
    };
  },
};
</script>
