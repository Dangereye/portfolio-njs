import Image from "next/image";

function IconAnchor({ href, src, width, height, alt }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Image src={src} width={width} height={height} alt={alt} />
    </a>
  );
}

IconAnchor.defaultProps = {
  href: "/",
  src: "/img/svg/default.svg",
  width: 40,
  height: 40,
};

export default IconAnchor;
