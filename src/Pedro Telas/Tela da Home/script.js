const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o comportamento padrão do envio do formulário
  
  // Simulação de validação simples
  const name = document.querySelector("input[placeholder='Seu nome']").value;
  const email = document.querySelector("input[placeholder='Seu email']").value;
  const message = document.querySelector("textarea[placeholder='Sua mensagem']").value;

  if (name && validateEmail(email) && message) {
    // Exibir a mensagem de sucesso
    document.getElementById("successMessage").style.display = "block";
    
    // Limpar o formulário (opcional)
    this.reset();

    // Mantém o foco na área de contate-nos
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
  } else {
    alert("Por favor, preencha todos os campos corretamente.");

    // Focar na seção de contate-nos em caso de erro
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
  }
});

// Função de validação simples para o email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}


document.querySelector(".contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  // Mostrar a mensagem de sucesso
  const successMessage = document.getElementById("success-message");
  successMessage.classList.add("show");

  // Esconder a mensagem após 3 segundos
  setTimeout(function() {
    successMessage.classList.remove("show");
  }, 3000);

  // Aqui você pode limpar os campos do formulário, se desejar
  this.reset();
});
