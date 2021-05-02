import { useEffect, useState } from "react";

export const OnVisible = (ref_el, Steps = null) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const thresholdSteps = (steps) =>
      steps
        ? Array(steps)
            .fill(0)
            .map((el, index) => index / steps || 0)
            .filter((el) => el !== 0)
        : [0.75];

    const ref_el_node = ref_el?.current;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        setIntersecting(entry.isIntersecting ?? false);
      },
      {
        root: null,
        rootmargin: "0px",
        threshold: thresholdSteps(Steps),
      }
    );

    if (ref_el_node) observer.observe(ref_el_node);

    return () => {
      //console.log(ref_el_copy);
      if (ref_el_node) observer.unobserve(ref_el_node);
    };
  }, [ref_el, Steps]);

  return isIntersecting;
};
