    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

const slideInImages = document.querySelectorAll('.slide-in');

function slideIn (e){
   slideInImages.forEach(slideInImages=>{
      const triggerPoint = (window.pageYOffset + window.innerHeight) - slideInImages.height / 3;
      //image going out of sight
      const bottomImage = slideInImages.offsetTop + slideInImages.height;
      
      const imageDisplayed = triggerPoint > slideInImages.offsetTop;
      const imageOut = bottomImage < window.pageYOffset;
      if (imageDisplayed && !imageOut){
         slideInImages.classList.add('active');
      } else{
         slideInImages.classList.remove('active');
      }
      
   });

}

window.addEventListener('scroll',debounce(slideIn,25));