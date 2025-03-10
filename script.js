// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Mobile menu toggle
        const navList = document.querySelector('.nav-list');
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navList.style.display = 'flex';
            }
        });
