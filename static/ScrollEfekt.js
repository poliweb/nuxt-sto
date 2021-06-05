import {
  gsap
} from "gsap/dist/gsap";
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// JS Для скрола блока Menu
ScrollTrigger.create({
  start: "top -150",
  end: 99999,
  toggleClass: {
    targets: ".main-tool-bar",
    className: "main-tool-bar--scrolled",
  },
  markers: true,
});
