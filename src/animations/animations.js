import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export const cardAnimation = (element) => {
  gsap.to(element, {
    opacity: 1,
    delay: 0.5,
  });
};

export const slideIn = (element) => {
  gsap.fromTo(
    element,
    { x: -element.clientWidth },
    { x: 0, duration: 1, ease: 'back.out(1.7)' }
  );
};

export const slideOut = (element, callback) => {
  gsap.to(element, {
    x: -element.clientWidth,
    duration: 0.5,
    onComplete: callback,
  });
};

export const slideOnLoad = (element) => {
  console.log(element.clientWidth);
  gsap.fromTo(
    element,
    { x: -element.clientWidth },
    { x: 0, duration: 1.5, ease: 'bounce.out' }
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

export const restoreScroll = () => {
  gsap.registerPlugin(ScrollToPlugin);

  gsap.to(window, { scrollTo: { y: 0 } });
};

export const scrollFadeIn = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
    }
  );
};
