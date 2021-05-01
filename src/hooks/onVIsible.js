import { useEffect, useState } from "react";

export const OnVisible = (ref_el) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const ref_el_node = ref_el?.current;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        setIntersecting(entry.isIntersecting ?? false);
      },
      {
        root: null,
        rootmargin: "0px",
        threshold: 0.75,
      }
    );

    if (ref_el_node) observer.observe(ref_el_node);

    return () => {
      //console.log(ref_el_copy);
      if (ref_el_node) observer.unobserve(ref_el_node);
    };
  }, [ref_el]);

  return isIntersecting;
};
