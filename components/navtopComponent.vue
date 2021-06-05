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
                class="ml-4 px-3 py-2 rounded-md text-sm md:text-base font-medium hover:text-gray-600  focus:outline-none focus:text-white focus:bg-gray-700"
                >Тел. 8(8212) 29-10-17</a
              >
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm md:text-base font-medium hover:text-gray-600  focus:outline-none focus:text-white focus:bg-gray-700"
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
                        >Your Profile</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Settings</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Sign out</a
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
              <svg
                :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
            >Dashboard</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Team</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Projects</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Calendar</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >Reports</a
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div class="mt-1 text-sm font-medium leading-none text-gray-400">
                tom@example.com
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
    };
  },
  mounted() {
    this.animateOnScroll();
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    // For scrollTrigger
    animateOnScroll() {
      this.$gsap.to(".box", {
        scrollTrigger: {
          start: "top -150",
          end: 99999,
          toggleClass: {
            targets: ".main-tool-bar",
            className: "main-tool-bar--scrolled",
          },
          markers: false,
        },
      });
    },
  },
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
  background: #1f2937;
  color: #fff;
}
</style>
