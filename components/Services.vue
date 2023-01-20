<template>
  <section class="flex flex-col" id="products">
    <main
      class="
        container
        md:max-w-[80%]
        flex flex-col
        items-center
        mx-auto
        md:py-20
      "
    >
      <h3
        class="
          font-sans font-bold
          text-[48px]
          uppercase
          text-neutral-800
          title__section
          sm_top_m
        "
      >
        Ce que nous faisons
      </h3>
      <div
        class="w-full gap-3 mb-10 md:grid md:grid-cols-3 md:mt-20 row__to__col"
      >
        <div
          class="flex flex-col items-center justify-center full__col sm-top-m"
        >
          <div
            class="
              bg-white
              min-h-[480px]
              w-[80%]
              rounded-xl
              items-center
              shadow-md
              drop-shadow-md
              flex flex-col
            "
          >
            <img
              class="rounded-t-xl max-h-[200px]"
              src="~/assets/images/product/delivery.png"
              alt="Ypay-delivery"
            />
            <h3
              class="
                text-neutral-700
                font-sans font-semibold
                text-[28px] text-center
                my-5
                block__title
              "
            >
              YPAY & DELIVERY
            </h3>
            <p class="w-4/5 text-center">
              YPAY & DELIVERY est une solution BNPL (Buy Now Pay Later ou
              Acheter maintenant et payer en plusieurs fois) adaptée au contexte
              congolais (pour l’instant).
            </p>
            <p class="my-5">
              <a
                href="https://yandas243.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="p-3 text-gray-100 rounded-md bg-lime-700">
                  Découvrir
                </button>
              </a>
            </p>
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center full__col sm_top_m"
        >
          <div
            class="
              bg-white
              min-h-[480px]
              w-[80%]
              rounded-xl
              items-center
              drop-shadow-md
              shadow-md
              flex flex-col
            "
          >
            <img
              class="rounded-t-xl max-h-[200px]"
              src="~/assets/images/product/hub.png"
              alt="Ypay-delivery"
            />
            <h3
              class="
                text-neutral-700
                font-sans font-semibold
                text-[28px] text-center
                my-5
                block__title
              "
            >
              Y-HUB
            </h3>
            <p class="w-4/5 text-center">
              Y-HUB est une agence d'accompagnement, de conception et
              development d'application qui permet le développement digital des
              Startups, PME et des particuliers.
            </p>
            <p class="my-5">
              <a href="#contact" rel="noopener noreferrer">
                <button class="p-3 text-gray-100 rounded-md bg-lime-700">
                  Nous contactez
                </button>
              </a>
            </p>
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center mt-5  md:mt-0 full__col sm-top-m"
        >
          <div
            class="
              bg-white
              min-h-[480px]
              w-[80%]
              rounded-xl
              items-center
              drop-shadow-md
              shadow-md
              flex flex-col
            "
          >
            <img
              class="rounded-t-xl max-h-[200px]"
              src="~/assets/images/product/colis.png"
              alt="Ypay-delivery"
            />
            <h3
              class="
                text-neutral-700
                font-sans font-semibold
                text-[28px] text-center
                my-5
                block__title
              "
            >
              COLIS 243
            </h3>
            <p class="w-4/5 text-center">
              Colis 243 est une agence des fret et transport des marchandises
              par bateau entre la France et la RDC afin et d’améliorer le
              quotidien et le development.
            </p>
            <p class="my-5">
              <a href="#contact" rel="noopener noreferrer">
                <button class="p-3 text-gray-100 rounded-md bg-lime-700">
                  Nous contactez
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style>
</style>