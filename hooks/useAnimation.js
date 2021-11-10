import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function useAnimation() {
  const animate = (section, one, two) => {
    const stagger = 0.15;
    const delay = 0.1;
    const duration = 0.7;
    const ease = "back.out(3)";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 500",
        toggleActions: "play none none none",
        markers: true,
      },
    });

    if (one) {
      const fadeUp = gsap.from(one, {
        y: 100,
        opacity: 0,
        delay,
        duration,
        stagger,
        ease,
        onComplete: () => {
          if (!two) {
            tl.kill();
          }
        },
      });
      tl.add(fadeUp);
    }

    if (two) {
      const scaleUp = gsap.from(two, {
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
