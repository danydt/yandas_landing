<template>
  <main class="flex flex-col items-center bg-inherit mt-10 z-30 sticky top-0">
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
      <div class="w-60 h-14 flex justify-start items-center py-2">
        <img
          src="https://yandas243.com/icon.png"
          class="h-14"
          alt="yandas logo"
          srcset=""
        />
      </div>
      <div class="flex justify-between px-4 w-96">
        <a
          v-for="(link, index) in links"
          :href="link.route"
          :key="index"
          class="
            text-neutral-800
            hover:bg-lime-600 hover:text-white hover:rounded
            p-2
          "
        >
          {{ link.text }}
        </a>
      </div>
      <div>
        <button
          class="
            p-3
            bg-lime-600
            rounded-md
            text-gray-100
            drop-shadow-sm
            hover:border-2
            hover:bg-inherit
            hover:border-lime-600
            hover:text-neutral-800
          "
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