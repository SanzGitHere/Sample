document.addEventListener('DOMContentLoaded', () => {
    
    // SECTION 2 Animation
    const section2 = document.querySelector('.hero-section');
    const heading = section2.querySelector('.content h1');
  
    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heading.classList.add('animate');
        } else {
          heading.classList.remove('animate');
        }
      });
    }, { threshold: 0.5 });
  
    observer1.observe(section2);
  
    // SECTION 4 Animation
    const section4 = document.querySelector('.automation .container');
  
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section4.classList.add('animate');
        } else {
          section4.classList.remove('animate');
        }
      });
    }, { threshold: 0.5 });
  
    observer2.observe(section4);
    });
  
    const slider = document.getElementById('slider');
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;
    
    document.getElementById('prevBtn').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    