<template>
  <main class="sticky top-0 z-30 flex flex-col items-center mt-10 bg-inherit">
    <nav
      class="
        bg-gray-50
        max-h-[70px]
        w-[80%]
        px-5
        py-4
        rounded-xl
        flex flex-row
        justify-between
        items-center
        shadow-xl
      "
    >
      <div class="flex items-center justify-start py-2 w-60 h-14">
        <img
          src="https://yandas243.com/icon.png"
          class="h-14"
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
      <div>
        <button
          class="p-3 text-gray-100 rounded-md  bg-lime-600 drop-shadow-sm hover:border-2 hover:bg-inherit hover:border-lime-600 hover:text-neutral-800"
        >
          <font-awesome-icon icon="fa-brands fa-whatsapp" />
          Démarrer une discussion
        </button>
      </div>
    </nav>
  </main>
</template>

<script>
export default {
  name: "AppMenu",
  data() {
    const links = [
      { text: "Accueil", route: "#home" },
      { text: "A-propos", route: "#about" },
      { text: "Produits", route: "#products" },
      { text: "Contact", route: "#contact" },
    ];
    return {
      links,
    };
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>