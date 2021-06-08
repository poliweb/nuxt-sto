<template>
  <div>
    <nav class="fixed w-full z-10 box">
      <div class="mx-auto px-4 px-4 md:px-20 md:py-10 main-tool-bar ">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Logo />
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline Roboto">
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm md:text-base font-medium hover:text-gray-600 focus:outline-none focus:text-white focus:bg-gray-700"
                >Главная</a
              >
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm md:text-base font-medium hover:text-gray-600  focus:outline-none focus:text-white focus:bg-gray-700"
                >Каталог масел</a
              >
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm md:text-base font-medium hover:text-gray-600  focus:outline-none focus:text-white focus:bg-gray-700"
                >Контакты</a
              >
              <a
                href="#"
                class="hidden xl:block ml-4 px-3 py-2 rounded-md text-sm md:text-base font-medium hover:text-gray-600  focus:outline-none focus:text-white focus:bg-gray-700"
                >Тел. 8(8212) 29-10-17</a
              >
              <a
                href="#"
                class="hidden xl:block  ml-4 px-3 py-2 rounded-md text-sm md:text-base font-medium hover:text-gray-600  focus:outline-none focus:text-white focus:bg-gray-700"
                >Сыктывкар, Гаражная 3/2</a
              >
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    @click="toggle"
                    class="Roboto max-w-xs flex items-center text-sm md:text-base rounded-full text-white focus:outline-none focus:shadow-solid bg-gradient-to-r from-pink-400 to-indigo-500 px-8 py-2.5 transition duration-700 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-400 transform hover:-translate-y-1 hover:scale-110"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    Корзина
                  </button>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div
                    v-show="isOpen"
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                  >
                    <div
                      class="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Your orders</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Payment</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Settings</a
                      >
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>

          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              @click="toggle"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <!-- Button NEW  open menu-->
              <svg
                :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 26C5.82032 26 0 20.1797 0 13C0 5.82032 5.82032 0 13 0C20.1797 0 26 5.82032 26 13C25.9919 20.1763 20.1763 25.9919 13 26ZM13 0.866667C6.29893 0.866667 0.866667 6.29893 0.866667 13C0.866667 19.7011 6.29893 25.1333 13 25.1333C19.7011 25.1333 25.1333 19.7011 25.1333 13C25.1257 6.30213 19.6979 0.874304 13 0.866667Z"
                  fill="white"
                />
                <path
                  d="M19.4998 13.4336H9.09984C8.86053 13.4336 8.6665 13.2395 8.6665 13.0002C8.6665 12.7609 8.86053 12.5669 9.09984 12.5669H19.4998C19.7391 12.5669 19.9332 12.7609 19.9332 13.0002C19.9332 13.2395 19.7391 13.4336 19.4998 13.4336Z"
                  fill="white"
                />
                <path
                  d="M19.4998 17.7666H9.09984C8.86053 17.7666 8.6665 17.5725 8.6665 17.3332C8.6665 17.0939 8.86053 16.8999 9.09984 16.8999H19.4998C19.7391 16.8999 19.9332 17.0939 19.9332 17.3332C19.9332 17.5725 19.7391 17.7666 19.4998 17.7666Z"
                  fill="white"
                />
                <path
                  d="M19.4998 9.10007H9.09984C8.86053 9.10007 8.6665 8.90604 8.6665 8.66673C8.6665 8.42742 8.86053 8.2334 9.09984 8.2334H19.4998C19.7391 8.2334 19.9332 8.42742 19.9332 8.66673C19.9332 8.90604 19.7391 9.10007 19.4998 9.10007Z"
                  fill="white"
                />
                <path
                  d="M7.36689 9.10007H6.50023C6.26092 9.10007 6.06689 8.90604 6.06689 8.66673C6.06689 8.42742 6.26092 8.2334 6.50023 8.2334H7.36689C7.6062 8.2334 7.80023 8.42742 7.80023 8.66673C7.80023 8.90604 7.6062 9.10007 7.36689 9.10007Z"
                  fill="#E31F25"
                />
                <path
                  d="M7.36689 13.4336H6.50023C6.26092 13.4336 6.06689 13.2395 6.06689 13.0002C6.06689 12.7609 6.26092 12.5669 6.50023 12.5669H7.36689C7.6062 12.5669 7.80023 12.7609 7.80023 13.0002C7.80023 13.2395 7.6062 13.4336 7.36689 13.4336Z"
                  fill="#E31F25"
                />
                <path
                  d="M7.36689 17.7666H6.50023C6.26092 17.7666 6.06689 17.5725 6.06689 17.3332C6.06689 17.0939 6.26092 16.8999 6.50023 16.8999H7.36689C7.6062 16.8999 7.80023 17.0939 7.80023 17.3332C7.80023 17.5725 7.6062 17.7666 7.36689 17.7666Z"
                  fill="#E31F25"
                />
              </svg>
              <!-- Button NEW close menu -->
              <svg
                :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 26C5.82032 26 0 20.1797 0 13C0 5.82032 5.82032 0 13 0C20.1797 0 26 5.82032 26 13C25.9919 20.1763 20.1763 25.9919 13 26ZM13 0.866667C6.29893 0.866667 0.866667 6.29893 0.866667 13C0.866667 19.7011 6.29893 25.1333 13 25.1333C19.7011 25.1333 25.1333 19.7011 25.1333 13C25.1257 6.30213 19.6979 0.874304 13 0.866667Z"
                  fill="#E31F25"
                />
                <path
                  d="M7 7L19 19M7 19L19 7L7 19Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <!-- Button Корзина -->
          <div class="block md:hidden">
            <div class="ml-4 flex items-center md:ml-6">
              <NuxtLink to="/backcall">
                <img src="~/assets/img/Phone.png" alt="">
              </NuxtLink>

              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    @click="toggleCart"
                    class="Roboto max-w-xs flex items-center text-xs md:text-base rounded-full text-white focus:outline-none focus:shadow-solid bg-gradient-to-r from-pink-400 to-indigo-500 px-7 py-2 transition duration-700 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-400"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    Корзина
                  </button>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div
                    v-show="isOpenCart"
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                  >
                    <div
                      class="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Your orders</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Payment</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Settings</a
                      >
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <!-- // Button Корзина -->
        </div>
      </div>
      <div :class="[isOpen ? '' : 'hidden', 'md:hidden', 'bg-gray-800']">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <h5 class="text-center text-xs">меню</h5>
          <NuxtLink to="/"
            class="block px-3 py-2 text-center text-2xl font-bold text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 border-b border-black"
            >Главная</NuxtLink>
          <a
            href="#"
            class="mt-1 block px-3 py-2 text-center text-2xl font-bold tracking-tight text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 border-b border-black"
            >Каталог масел и жидкостей</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 text-center text-2xl font-bold text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 border-b border-black"
            >Контакты</a
          >
          <!-- <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Calendar</a
          > -->
          <div class="text-center px-3 py-2 border-b border-black">
            <h4 class="text-center text-sm font-bold mb-5">СТО “БМВ-центр Коми”</h4>
            <p class="text-center text-xs mb-5">
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
          <a
            href="#"
            class="mt-1 block px-3 py-2 text-center text-lg font-bold text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 border-b border-black"
            >Заказать обратный звонок</a
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://avatars.githubusercontent.com/u/7776535?s=400&u=91bb61dc91efd62802cb2a2622a45051b8072bd7&v=4"
                alt
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                Pavel Polistovskiy
              </div>
              <div class="mt-1 text-sm font-medium leading-none text-gray-400">
                <a href="https://github.com/poliweb" target="_blank" rel="noopener noreferrer">I'm on GitHub</a>
              </div>
            </div>
          </div>
          <div class="mt-3 px-2">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Your Profile</a
            >
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Settings</a
            >
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Sign out</a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isOpenCart: false,
    };
  },
  mounted() {
    this.animateOnScroll();
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    toggleCart() {
      this.isOpenCart = !this.isOpenCart;
    },
    // For scrollTrigger
    animateOnScroll() {
      this.$gsap.to(".box", {
        scrollTrigger: {
          start: "top -150",
          end: 99999,
          toggleClass: {
            targets: ".main-tool-bar",
            className: "main-tool-bar--scrolled"
          },
          markers: false
        }
      });
    }
  }
};
</script>

<style>
/* CSS Menu */
.main-tool-bar {
  transition: ease 0.4s;
  z-index: 100;
  color: rgba(51, 51, 51, 1);
}
.main-tool-bar--scrolled {
  padding-top: 16px;
  padding-bottom: 16px;
  background: #090909;
  color: #fff;
}

@media only screen and (max-width: 640px) {
  .main-tool-bar {
    background: #090909;
  }
}
</style>
