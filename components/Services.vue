<template>
  <section class="min-h-[80vh] flex flex-col" id="products">
    <main
      class="container max-w-[80%] flex flex-col items-center mx-auto py-20"
    >
      <h3 class="font-sans font-bold text-[48px] uppercase text-neutral-800">
        Nos Produits
      </h3>
      <div class="grid w-full grid-cols-3 gap-3 mt-20">
        <div class="flex flex-col items-center justify-center">
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
        <div class="flex flex-col items-center justify-center">
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
        <div class="flex flex-col items-center justify-center">
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