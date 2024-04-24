window.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
  
    function showItem(index) {
      console.log("Index:", index); // for debugging
      const carouselItemWidth = carouselItems[0].offsetWidth;
      if (index < 0 || index >= carouselItems.length) return;
      const offset = -index * carouselItemWidth + 'px';
      carousel.style.transform = `translateX(${offset})`;
      currentIndex = index;
      

    }
    
    
    
  
    function next() {
      showItem(currentIndex + 1);
    }
  
    function prev() {
      showItem(currentIndex - 1);
    }
  
    document.getElementById('prevBtn').addEventListener('click', prev);
    document.getElementById('nextBtn').addEventListener('click', next);
  });
  document.getElementById("htmlBtn").addEventListener("click", function() {
    window.location.href = "html_cheatsheet.html";
});

document.getElementById("cssBtn").addEventListener("click", function() {
    window.location.href = "css_cheatsheet.html";
});
document.getElementById("resume").addEventListener("click", function() {
    window.location.href = "index.html";
});
