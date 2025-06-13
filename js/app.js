document.addEventListener('DOMContentLoaded', () => {
    // ——— Formspree handler ———
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (form) {
        form.addEventListener('submit', async e => {
            e.preventDefault();
            status.textContent = 'Sending…';
            const data = new FormData(form);
            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (res.ok) {
                    status.textContent = 'Thank you — I’ll be in touch!';
                    form.reset();
                } else {
                    const err = await res.json();
                    status.textContent = err.error || 'Oops! Please try again.';
                }
            } catch {
                status.textContent = 'Network error — please try later.';
            }
        });
    }

    // ——— Skill badge filter ———
    const filterInput = document.getElementById('skill-filter');
    const cards = document.querySelectorAll('.projects-grid .project-card');
    if (filterInput) {
        filterInput.addEventListener('input', () => {
            const q = filterInput.value.trim().toLowerCase();
            cards.forEach(card => {
                const skill = card.dataset.skill.toLowerCase();
                card.style.display = skill.includes(q) ? '' : 'none';
            });
        });
    }

    // ——— Back to Top button ———
    const backBtn = document.getElementById('back-to-top');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        backBtn.addEventListener('click', () =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
        );
    }
});
