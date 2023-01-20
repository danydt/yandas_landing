<template>
  <section class="flex flex-col bg-gray-100" id="about">
    <main
      class="
        container
        max-w-[80%]
        flex flex-row
        justify-between
        mx-auto
        md:py-24
        col_reverse
      "
    >
      <div
        class="
          md:px-10 md:max-w-[50%]
          flex flex-col
          justify-center
          full__col
          mb-[30px]
        "
      >
        <h3
          class="
            font-sans font-bold
            text-[48px]
            uppercase
            text-neutral-800
            title__section
          "
        >
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
      <div
        class="
          md:max-w-[50%]
          flex flex-col
          justify-center
          items-center
          px-10
          full__col
        "
      >
        <img
          class="img-1"
          src="~/assets/images/0.jpg"
          alt="make people happiness | rendre les gens heureux"
        />
        <img
          class="img-2"
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
.img-1 {
  height: 320px;
  border-radius: 15px;
}

.img-2 {
  height: 320px;
  width: 200px;
  margin-left: 70%;
  margin-top: -50%;
  border-radius: 15px;
}

@media only screen and (max-width: 768px) {
  .img-1 {
    height: 160px;
    border-radius: 7.5px;
    margin-top: 20px;
  }

  .img-2 {
    height: 160px;
    width: 100px;
    margin-left: 70%;
    margin-top: -60%;
    border-radius: 7.5px;
    margin-bottom: 20px;
  }
} ;
</style>