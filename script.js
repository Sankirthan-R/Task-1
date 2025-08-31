let lastScrollPosition = 0;


document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navigation-buttons');
    if (nav) {
        window.addEventListener('scroll', () => {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
                    nav.classList.add('minimized');
                    nav.classList.remove('maximized');
            }  else {
                
                nav.classList.remove('minimized');
                nav.classList.add('maximized');
            }
            
            lastScrollPosition = currentScrollPosition;
        });
    }
    
    
    const modal = document.querySelector('.memory-modal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-media-container');
        const closeBtn = modal.querySelector('.modal-close');
        
        
        document.querySelectorAll('.memory-item').forEach(item => {
            item.addEventListener('click', () => {
                const type = item.getAttribute('data-type');
                if (type === 'video') {
                    const video = document.createElement('video');
                    video.src = item.getAttribute('data-src');
                    video.controls = true;
                    video.autoplay = true;
                    modalContent.innerHTML = '';
                    modalContent.appendChild(video);
                } else {
                    const img = document.createElement('img');
                    img.src = item.querySelector('img').src;
                    modalContent.innerHTML = '';
                    modalContent.appendChild(img);
                }
                modal.classList.add('active');
            });
        });
        
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                const video = modalContent.querySelector('video');
                if (video) video.pause();
            });
        }
        
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                const video = modalContent.querySelector('video');
                if (video) video.pause();
            }
        });
    }
    
    
    const profileTrigger = document.getElementById('profile-trigger');
    const heroSection = document.getElementById('hero-section');
    
    if (profileTrigger && heroSection) {
        profileTrigger.addEventListener('click', () => {
            heroSection.classList.toggle('expanded');
            
            
            if (heroSection.classList.contains('expanded')) {
                setTimeout(() => {
                    const yOffset = -100;
                    const y = heroSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 100);
            }
        });
    }
    
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    
    document.querySelectorAll('.memory-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);




         const profileTrigger = document.getElementById('profile-trigger');
    const heroSection = document.getElementById('hero-section');
    
    if (profileTrigger && heroSection) {
        profileTrigger.addEventListener('click', () => {
            heroSection.classList.toggle('expanded');
            
            
            if (heroSection.classList.contains('expanded')) {
                setTimeout(() => {
                    const yOffset = -100;
                    const y = heroSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 100);
            }
        });
    }
    });
});


function navigateToPage(page) {
    const routes = {
        'A': 'birthday-website/pages/wish1.html',
        'B': 'birthday-website/pages/wish2.html',
        'C': 'birthday-website/pages/wish3.html',
        'D': 'birthday-website/pages/wish4.html'
    };
    
    if (routes[page]) {
        window.location.href = routes[page];
    }
}

