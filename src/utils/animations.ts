export const initScrollReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
  );

  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(element => {
    observer.observe(element);
  });
};