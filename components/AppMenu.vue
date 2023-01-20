<template>
  <main class="sticky top-0 z-30 flex flex-col items-center mt-10 bg-inherit">
    <nav
      class="
        bg-gray-50
        max-h-[70px]
        w-[80%]
        px-5
        md:py-4
        py-2
        rounded-xl
        flex
        md:flex-row
        flex-col
        justify-between
        items-center
        shadow-xl
      "
    >
      <div
        id="md-nav"
        class="flex flex-row items-center justify-between w-full"
      >
        <div class="flex items-center justify-start w-60 md:h-14 h-9">
          <img
            src="https://yandas243.com/icon.png"
            class="md:h-14 h-9"
            alt="yandas logo"
            srcset=""
          />
        </div>
        <div class="md:justify-between md:px-4 md:flex w-96 nav__item">
          <a
            v-for="(link, index) in links"
            :href="link.route"
            :key="index"
            class="p-2  text-neutral-800 hover:bg-lime-600 hover:text-white hover:rounded"
          >
            {{ link.text }}
          </a>
        </div>
        <div class="btn-nav">
          <button
            class="p-3 text-gray-100 rounded-md  bg-lime-600 drop-shadow-sm hover:border-2 hover:bg-inherit hover:border-lime-600 hover:text-neutral-800"
          >
            <font-awesome-icon icon="fa-brands fa-whatsapp" />
            Démarrer une discussion
          </button>
        </div>
        <div class="md:hidden text-[24px] text-neutral-600">
          <button @click="toggleShowMobileMenu()">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button>
        </div>
      </div>
    </nav>
    <nav
      v-if="showMobileMenu"
      class="
        bg-gray-50
        w-[80%]
        px-5
        md:py-4
        py-2
        rounded-xl
        flex
        md:flex-row
        flex-col
        justify-between
        items-center
        shadow-xl
        mt-2
        z-10
      "
    >
      <div id="sm-nav">
        <div class="flex flex-col">
          <a
            v-for="(link, index) in links"
            :href="link.route"
            :key="index"
            class="p-2  focus:my-2 text-neutral-800 focus:bg-lime-600 focus:text-white focus:rounded text-start"
            @click="toggleShowMobileMenu()"
          >
            {{ link.text }}
          </a>
        </div>
        <div class="">
          <button
            class="p-3 text-gray-100 rounded-md  bg-lime-600 drop-shadow-sm hover:border-2 hover:bg-inherit hover:border-lime-600 hover:text-neutral-800"
          >
            <font-awesome-icon icon="fa-brands fa-whatsapp" />
            Démarrer une discussion
          </button>
        </div>
      </div>
    </nav>
  </main>
</template>

<script>
export default {
  name: "AppMenu",

  props: {
    setTopHeader: Function,
  },

  data() {
    const links = [
      { text: "Accueil", route: "#home" },
      { text: "A-propos", route: "#about" },
      { text: "Produits", route: "#products" },
      { text: "Contact", route: "#contact" },
    ];

    const showMobileMenu = false;

    return {
      links,
      showMobileMenu,
    };
  },

  methods: {
    toggleShowMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;

      if (this.showMobileMenu == true) {
        this.setTopHeader("-mt-96");
      } else this.setTopHeader("-mt-44");
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>