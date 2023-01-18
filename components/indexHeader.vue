<template>
  <main id="home">
    <header
      class="
        flex
        container
        min-w-full min-h-[60vh]
        bg-lime-700
        px-10
        pt-40
        flex-col
        items-center
        -mt-40
      "
    >
      <div class="flex flex-col items-center justify-center flex-1">
        <transition
          enter-to-class="animate__animated animate__fadeInUp"
          leave-to-class="animate__animated animate__fadeOutDown"
        >
          <h2 class="text-white font-sans font-bold text-[90px]">Yanda's</h2>
        </transition>
        <p class="w-[40%] text-center text-base text-slate-100">
          Yanda's est une société établie légalement en RD Congo et en France.
          Yanda's se donne d’être un acteur important dans le développement de
          la RDC et de la France en apportant des produits innovants et des
          solution afin d’améliorer le quotidien
        </p>
        <a href="#contact">
          <button
            class="p-3 my-10 border-2 rounded-md  text-cyan-50 drop-shadow-lg hover:bg-white hover:border-0 hover:text-lime-700"
          >
            Contactez-nous
          </button></a
        >
      </div>
    </header>
  </main>
</template>