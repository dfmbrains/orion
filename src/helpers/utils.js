export const anchorLinkHandler = (elementId) => {
   const target = document.getElementById(elementId);
   if (target) {
      window.scrollTo({
         top: target.offsetTop,
      });
   }
};

export const handleScrollToTop = () => window.scrollTo({top: 0, left: 0, behavior: "smooth"})