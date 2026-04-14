document.addEventListener('DOMContentLoaded', () => {

  // MENU
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger?.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // TYPING
  const typing = document.getElementById('typing');
  const words = ["Graphic Designer", "Thumbnail Designer", "UI Designer"];

  let i = 0, j = 0, isDeleting = false;

  function type() {
    const word = words[i];

    typing.innerHTML = word.substring(0, j);

    if (!isDeleting) j++;
    else j--;

    if (j === word.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }

    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
  }

  type();

  // CARD GLOW FIX
  document.querySelectorAll(".card").forEach(card => {
    const glow = card.querySelector(".glow");

    card.addEventListener("mousemove", (e) => {
      if (!glow) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.background =
        `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 60%)`;
    });

    card.addEventListener("mouseleave", () => {
      if (glow) glow.style.background = "none";
    });
  });

});
