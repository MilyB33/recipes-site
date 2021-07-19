import gsap from 'gsap';

export const cardAnimation = (element) => {
  gsap.to(element, {
    opacity: 1,
    delay: 0.5,
  });
};

export const slideOnLoad = (element) => {
  gsap.fromTo(
    element,
    { x: -window.innerWidth },
    { x: 0, duration: 1 }
  );
};

export const slideOnVisibility = (element) => {
  let settings = {
    treshold: 1.0,
  };

  let observer = new IntersectionObserver((entry) => {
    if (entry[0].isIntersecting) {
      observer.unobserve(element);
      gsap.to(element, {
        opacity: 1,
        duration: 2,
      });
    }
  }, settings);

  observer.observe(element);
};
