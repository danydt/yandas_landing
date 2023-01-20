<template>
  <section
    class="
      md:max-h-[80vh]
      flex flex-col
      justify-center
      items-center
      bg-gray-50
      py-10
    "
    id="contact"
  >
    <main
      class="
        container
        md:max-w-[80%]
        flex flex-col
        items-center
        md:mx-auto md:py-20
        sm-top-m
      "
    >
      <div
        class="
          bg-lime-700
          min-h-[20rem]
          w-[80%]
          xl:px-30
          lg:px-10
          md:px-10
          px-5
          py-5
          rounded-xl
          flex flex-col
          drop-shadow-md
        "
      >
        <div class="flex flex-col items-center w-full">
          <h3
            class="
              font-sans font-bold
              text-[48px]
              uppercase
              text-gray-100
              title__section
            "
          >
            Contacts
          </h3>
        </div>
        <div class="grid grid-cols-3 gap-1 row__to__col">
          <div class="mb-5">
            <h3 class="text-gray-200 font-sans font-semibold text-[18px] mb-3">
              Yanda's France
            </h3>
            <ul>
              <li class="mb-2 text-gray-50">
                19 rue Saint gratien 93800 <br />
                Épinay-sur-Seine
              </li>
              <li class="my-1 text-gray-50">
                <font-awesome-icon icon="fa-brand fa-phone" class="mr-2" />
                +33 6 13 58 62 25
              </li>
              <li class="text-gray-50">
                <font-awesome-icon icon="fa-brand fa-envelope" class="mr-2" />
                yandas33@gmail.com
              </li>
            </ul>
          </div>
          <div class="mb-5">
            <h3 class="text-gray-200 font-sans font-semibold text-[18px] mb-3">
              Yanda's RDC
            </h3>
            <ul>
              <li class="mb-2 text-gray-50">
                <font-awesome-icon icon="fa-brand fa-map-pin" class="mr-2" />
                1 avenue Mwanga <br />Q. Kinsuka pecheurs C. Ngaliema
              </li>
              <li class="my-1 text-gray-50">
                <font-awesome-icon icon="fa-brand fa-phone" class="mr-2" />
                +243 816 975 995
              </li>
              <li class="text-gray-50">
                <font-awesome-icon icon="fa-brand fa-envelope" class="mr-2" />
                yandas243@gmail.com
              </li>
            </ul>
          </div>
          <div class="mb-5">
            <h3 class="text-gray-200 font-sans font-semibold text-[18px] mb-5">
              News Letter
            </h3>
            <p class="text-gray-50">
              Souscrivez à notre news-letter et rester informer
            </p>
            <form action="" class="flex flex-col md:flex-row">
              <input
                type="email"
                name=""
                id=""
                class="px-1 py-2 mt-1 rounded-lg"
              />
              <button
                class="p-2 mt-2 border-2 rounded-lg  md:mt-0 md:ml-2 text-cyan-50 hover:bg-white hover:border-0 hover:text-lime-700"
              >
                Souscrire
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>