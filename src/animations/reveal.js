import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const reveal = (trigger, targets) => {
  gsap.to(targets, {
    scrollTrigger: {
      trigger: trigger,
      start: "top 80%",
    },
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.12,
  });
};
