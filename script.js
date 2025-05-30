document.addEventListener('DOMContentLoaded', () => {
    
  // SECTION 2 Animation
  const section2 = document.querySelector('.hero-section');
  const heading2 = section2.querySelector('.content h1');
  const button2 = section2.querySelector('.cta-button');
  const frontDevice = section2.querySelector('.front-device');
  const backDevice = section2.querySelector('.back-device');

  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heading2.classList.add('animate');
        button2.classList.add('animate');
        frontDevice.classList.add('animate');
        backDevice.classList.add('animate');
      } else {
        heading2.classList.remove('animate');
        button2.classList.remove('animate');
        frontDevice.classList.remove('animate');
        backDevice.classList.remove('animate');
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
  
    // SECTION 3 Image sliding
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
    

  // SECTION 3 Animation
  const section3 = document.querySelector('.testimonial');
  const heading3 = section3.querySelector('.ranked h3');
  const quote3 = section3.querySelector('.ranked .quote');
  const slider3 = section3.querySelector('.slider-container');

  const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heading3.classList.add('animate');
        quote3.classList.add('animate');
        slider3.classList.add('animate');
      } else {
        heading3.classList.remove('animate');
        quote3.classList.remove('animate');
        slider3.classList.remove('animate');
      }
    });
  }, { threshold: 0.4 });

  observer3.observe(section3);
