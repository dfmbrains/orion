export const anchorLinkHandler = (elementId) => {
   const target = document.getElementById(elementId);
   if (target) {
      const boundingClientRect = target.getBoundingClientRect();

      window.scrollTo({
         top: boundingClientRect.top + (boundingClientRect.height * 2),
      });
   }
};