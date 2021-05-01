import { useEffect, useState } from "react";

export const OnVisible = (ref_el) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const ref_el_copy = ref_el;

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

    if (ref_el_copy) observer.observe(ref_el_copy.current);

    return () => {
      console.log(ref_el_copy);
      if (ref_el_copy) observer.unobserve(ref_el_copy?.current);
    };
  }, [ref_el]);

  return isIntersecting;
};
