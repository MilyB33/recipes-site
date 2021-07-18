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
  console.log(element.clientWidth);
  gsap.to(element, {
    left: 0,
    duration: 1,
    delay: 3,
  });
};
