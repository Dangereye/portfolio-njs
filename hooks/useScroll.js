import { useRouter } from "next/router";
function UseScroll() {
  const router = useRouter();
  const hash = router.asPath.replace("/#", "");
  const scrollToSection = () => {
    const section = document.getElementById(hash);
    setTimeout(() => {
      window.scrollTo({
        top: section ? section.offsetTop - 100 : 0,
        left: 0,
        behavior: "smooth",
      });
    }, 10);
  };

  return scrollToSection;
}

export default UseScroll;
