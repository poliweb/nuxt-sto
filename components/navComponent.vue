<template>
  <div>
    <div class="text-gray-600 main-tool-bar">
      <div class="mx-auto flex flex-wrap p-5 md:px-20 md:py-10 flex-col md:flex-row items-center">
        <a
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
        </a>
        <nav
          class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
        >
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.animateOnScroll();
  },
  methods: {
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
  height: 100px;
  background: #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  transition: ease 0.4s;
  z-index: 100;
}
.main-tool-bar--scrolled {
  height: 40px;
  background: #e040fb;
  color: #fff;
}

/* //CSS Menu */
</style>
