<template>
  <section class="bg-gray-100 max-h-[60vh] flex flex-col" id="about">
    <main
      class="
        container
        max-w-[80%]
        flex flex-row
        justify-between
        mx-auto
        py-24
        max-h-[60vh]
      "
    >
      <div class="px-10 min-w-[50%] flex flex-col justify-center">
        <h3 class="font-sans font-bold text-[48px] uppercase text-neutral-800">
          A-propos
        </h3>

        <p class="mt-5 text-justify text-neutral-800">
          Yanda's est une société établie légalement en RD Congo et en France.
          Yanda's se donne d’être un acteur important dans le développement de
          la RDC et de la France en apportant des produits innovants et des
          solution afin d’améliorer le quotidien.
        </p>

        <p class="my-3 text-justify">
          En RD Congo, Yanda’S SARLU a été créé en avril 2021 à Kinshasa. Elle
          opère dans le Digital: <span class="font-bold">Fintechs</span> et
          <span class="font-bold">le développement digital</span>
        </p>

        <p class="my-3 text-justify">
          En France, Yanda’S opère dans les secteurs suivants:
          <span class="font-bold">
            <br />
            - Import-export, <br />
            - la vente en ligne et à distance <br />
            - l'affrètement et organisation du transport
          </span>
        </p>
      </div>
      <div class="px-10 flex flex-row justify-center">
        <img
          class="rounded-3xl h-full -mt-10"
          src="~/assets/images/0.jpg"
          alt="make people happiness | rendre les gens heureux"
        />
        <img
          class="img-2 rounded-3xl h-full -ml-40 mt-5"
          src="~/assets/images/2.jpg"
          alt="make people happiness | rendre les gens heureux"
        />
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
</style>