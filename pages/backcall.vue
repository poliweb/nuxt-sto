<template>
  <div>
    <section class="body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full margin_b_31">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-100">Заказ обратного звонка</h1>
          <p class="lg:w-2/3 sm:w-72 mx-auto leading-relaxed text-sm">Пожалуйста, запоните форму ниже, и мы перезвоним Вам в ближайшее рабочее время</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-col -m-2">
            <div class="p-2 w-full">
              <div class="relative">
                <input type="text" id="name" name="name" placeholder="Как к вам обращаться?" class="w-full bg-gray-100 bg-opacity-25 rounded-full  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base text-center outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>
            <div class="p-2 w-full mb-5">
              <div class="relative">
                <input type="tel" id="phone" name="phone" placeholder="По какому номеру позвонить?" class="w-full bg-gray-100 bg-opacity-25 rounded-full  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base text-center outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="block btn_color rounded-full text-base font-bold focus:outline-none text-gray-100 py-2 px-6 leading-8 transition-colors duration-200 ease-in-out  z-10 mx-auto">Позвоните мне</button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 text-center">
              <div class="text-center px-3 py-2">
            <h4 class="text-center text-sm font-bold mb-5">СТО “БМВ-центр Коми”</h4>
            <p class="text-center text-xs leading-4 mb-5">
              Россия, Республика Коми, г. Сыктывкар, Гаражная 3/2<br />
              <a
                href="https://www.google.ru/maps/place/%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B/@43.2178667,76.8040823,11z/data=!3m1!4b1!4m5!3m4!1s0x38836e7d16c5cbab:0x3d44668fad986d76!8m2!3d43.2220146!4d76.8512485"
                target="_blank"
                rel="noopener noreferrer"
                >(посмотреть на карте)</a
              >
            </p>
            <p class="text-lg">тел. <span class="underline">8 (8212) 29-10-17</span></p>
          </div>
            </div>
            <div class="p-2 w-full pt-8 mt-8 text-center">
              <img src="~/assets/img/Phone.png" alt="" class="mx-auto mb-2">
              <NuxtLink to="/" class="">закрыть форму</NuxtLink>
            </div>
          </div>
          </div>
        </div>
    </section>
  </div>
</template>
