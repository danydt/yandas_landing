<template>
  <main>
    <app-menu :setTopHeader="setTopHeader_" />
    <index-header :headerTop="headerTop" />
    <about />
    <services />
    <contact-us />
    <app-footer />
  </main>
</template>

<script>
export default {
  name: "index",

  data() {
    const headerTop = "-mt-40";
    return {
      headerTop,
    };
  },

  methods: {
    setTopHeader_(value) {
      this.headerTop = value;
    },
  },
};
</script>