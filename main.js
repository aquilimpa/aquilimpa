document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu-list");
  const overlay = document.getElementById("overlay");
  const menuLinks = document.querySelectorAll(".menu__link");

  // Abrir/fechar menu
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll"); // <== aqui
  });

  // Fechar ao clicar fora
  overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    toggleBtn.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll"); // <== aqui
  });

  // Ativar link e fechar menu
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      menu.classList.remove("active");
      toggleBtn.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll"); // <== aqui
    });
  });
});




function scrollTestimonials(direction) {
    const container = document.getElementById('testimonialsCarousel');
    const scrollAmount = 320 + 24; // card width + gap

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }



  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // remove se só quiser animar uma vez
      }
    });
  }, {
    threshold: 0.1 // 10% visível
  });

  document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });