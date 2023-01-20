<template>
  <main id="home">
    <header
      class="
        flex
        container
        min-w-full
        md:min-h-[60vh]
        bg-lime-700
        md:px-10
        pt-40
        flex-col
        items-center
      "
      :class="headerTop"
    >
      <div class="flex flex-col items-center justify-center">
        <transition
          enter-to-class="animate__animated animate__fadeInUp"
          leave-to-class="animate__animated animate__fadeOutDown"
        >
          <h2
            class="text-white mt-5 font-sans font-bold text-[90px] hero__title"
          >
            Yanda's
          </h2>
        </transition>
        <p
          class="w-[75%] text-center text-base text-slate-100 hero__description"
        >
          Yanda's se veut un acteur de premier plan de l'innovation dans le
          secteur digital. Société établie en RD Congo et en France.
        </p>

        <a href="#contact">
          <button
            class="p-2 my-10 border-2 rounded-md  text-cyan-50 hover:bg-white hover:border-0 hover:text-lime-700"
          >
            Contactez-nous
          </button></a
        >
      </div>
    </header>
  </main>
</template>

<script>
export default {
  name: "indexHeader",
  props: {
    headerTop: String,
  },
};
</script>