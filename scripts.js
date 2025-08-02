    const form = document.getElementById('volunteerForm');
    const msg = document.getElementById('formMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      msg.textContent = `Thanks, ${name}! We’ll reach out to you soon. 💚`;
      form.reset();
    });

    
    const faders = document.querySelectorAll('.fade-up');

    window.addEventListener('scroll', () => {
      faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    });