/* ==========================================================================
   MAIN.JS - CONFIGURACIÓN COMPLETA (INCLUYE HAMBURGUESA)
   ========================================================================== */

gsap.registerPlugin(ScrollTrigger);

window.onload = () => {
  // 1. ENTRADA DEL MENÚ
  gsap.from(
    ".logo-clean, .nav-pill-container, .nav-capsule-btn, .custom-toggler",
    {
      y: -15,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    }
  );

  // 2. PARALLAX DEL DEGRADADO
  gsap.to(".hero-bg", {
    yPercent: 12,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  // 3. ANIMACIÓN DE CARDS DE PROYECTOS
  const projectCards = document.querySelectorAll(".project-card");
  if (projectCards.length > 0) {
    gsap.from(projectCards, {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power1.out",
      clearProps: "all",
    });
  }

  // 4. ANIMACIÓN DE SECCIÓON DE CONTACTO
  gsap.from("#contact .gsap-reveal", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  // 5. CIERRE AUTOMÁTICO DEL MENÚ (Móvil)
  // Al hacer click en un link, el menú se pliega
  const navLinks = document.querySelectorAll(".nav-link");
  const menuToggle = document.getElementById("navbarNav");

  // Verificamos si Bootstrap está disponible para usar su API de Collapse
  if (menuToggle) {
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
    navLinks.forEach((l) => {
      l.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          bsCollapse.hide();
        }
      });
    });
  }

  // 6. BARRAS DE SKILLS
  document.querySelectorAll(".skill-bar").forEach((bar) => {
    const targetWidth = bar.getAttribute("data-width");
    gsap.to(bar, {
      scrollTrigger: {
        trigger: ".skills",
        start: "top 90%",
      },
      width: targetWidth + "%",
      duration: 1.2,
      ease: "power2.inOut",
    });
  });
};

// Añádelo al final de tu window.onload actual
if (document.querySelector(".error-code")) {
  gsap.from(".error-code", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "back.out(1.7)",
  });
}
