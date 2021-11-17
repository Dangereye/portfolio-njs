import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function useAnimation() {
  const animate = (section, fade, scale, wait) => {
    const stagger = 0.15;
    const delay = wait ? wait : 0.1;
    const duration = 0.7;
    const ease = "back.out(3)";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 500",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    if (fade) {
      const fadeUp = gsap.from(fade, {
        y: 100,
        opacity: 0,
        delay,
        duration,
        stagger,
        ease,
        onComplete: () => {
          if (!scale) {
            tl.kill();
          }
        },
      });
      tl.add(fadeUp);
    }

    if (scale) {
      const scaleUp = gsap.from(scale, {
        scale: 0,
        duration,
        stagger,
        ease,
        onComplete: () => {
          tl.kill();
        },
      });
      tl.add(scaleUp);
    }
  };

  return animate;
}

export default useAnimation;
