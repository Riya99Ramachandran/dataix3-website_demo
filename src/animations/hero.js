import gsap from "gsap";

export const heroAnimation = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
      duration: 1.4
    }
  });

  tl.to(".hero-title span", {
    y: 0,
    stagger: 0.12
  });

  tl.to(".hero-subtitle", {
    opacity: 1,
    y: 0,
    duration: 1
  }, "-=0.8");
};
