const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const showAfter = 300;
  
  if (scrolled > showAfter) {
    goTopBtn.classList.add("go-top--show");
  }
  else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}









document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.like, .comm').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle(this.classList.contains('like') ? 'liked' : 'commented');
        });
    });

    document.querySelectorAll('.t').forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.stopPropagation();
            
            this.classList.toggle('active');
            
            const existingPopup = document.querySelector('.popup-menu');
            if (existingPopup) {
                existingPopup.remove();
                return;
            }
            
            const popup = document.createElement('div');
            popup.className = 'popup-menu';
            popup.innerHTML = `
                <div class="popup-item">Подписаться</div>
                <div class="popup-item">Сохранить в закладки</div>
                <div class="popup-item">Посмотреть полностью</div>
            `;
            
            const rect = this.getBoundingClientRect();
            popup.style.position = 'fixed';
            popup.style.top = rect.bottom + 5 + 'px';
            popup.style.left = rect.left - 100 + 'px';
            
            document.body.appendChild(popup);
            
            setTimeout(() => {
                document.addEventListener('click', function closePopup(e) {
                    if (!popup.contains(e.target) && !e.target.classList.contains('t')) {
                        popup.remove();
                        document.removeEventListener('click', closePopup);
                        document.querySelectorAll('.t.active').forEach(t => {
                            t.classList.remove('active');
                        });
                    }
                });
            }, 0);
        });
    });
});







const track = document.getElementById('MarqueeTrack');
const images = track.innerHTML;
track.innerHTML = images + images;

let position = 0;

function animate() {
    position -= 2;
    track.style.transform = 'translateX(' + position + 'px)';

    if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
    }

    requestAnimationFrame(animate);
}

animate();








document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.createElement('div');
    overlay.className = 'navbar-overlay';
    document.body.appendChild(overlay);
    
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = navbarCollapse.classList.contains('show');
            
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        overlay.addEventListener('click', function() {
            closeMenu();
        });
        
        const navLinks = navbarCollapse.querySelectorAll('.nav-link, .dropdown-item');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (!this.classList.contains('dropdown-toggle')) {
                    closeMenu();
                }
            });
        });
        
        function openMenu() {
            navbarCollapse.classList.add('show');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMenu() {
            navbarCollapse.classList.remove('show');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navbarCollapse.classList.contains('show')) {
                closeMenu();
            }
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992 && navbarCollapse.classList.contains('show')) {
                closeMenu();
            }
        });
    }
});