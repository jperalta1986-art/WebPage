document.addEventListener('DOMContentLoaded', () => {
    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.remove('hidden');
    } else {
        cookieBanner.classList.add('hidden');
    }

    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.add('hidden');
    });

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => mobileMenu.classList.remove('translate-x-full'), 10);
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
    });

    // Modal Logic
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const closeBtns = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal-overlay');

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.querySelector('.modal-content').classList.remove('scale-95');
        }, 10);
    }

    function closeModal(modal) {
        modal.classList.add('opacity-0');
        modal.querySelector('.modal-content').classList.add('scale-95');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            openModal(trigger.dataset.target);
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            closeModal(e.target.closest('.modal-overlay'));
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (!modal.classList.contains('hidden')) {
                    closeModal(modal);
                }
            });
        }
    });

    // Initialize Lucide icons
    lucide.createIcons();
});
