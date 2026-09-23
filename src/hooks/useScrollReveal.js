// import { useEffect } from "react";

// export const useScrollReveal = () => {
//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.15,
//       rootMargin: "0px 0px -50px 0px",
//     };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("reveal");
//   observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

//Wait for DOM to be ready
//     const timer = setTimeout(() => {
//       const revealElements = document.querySelectorAll(".reveal-on-scroll");
//       revealElements.forEach((element) => observer.observe(element));
//     }, 100);

//     return () => {
//       clearTimeout(timer);
//       observer.disconnect();
//     };
//   }, []);
// };

import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};
