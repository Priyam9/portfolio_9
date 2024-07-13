    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
        var sections = document.querySelectorAll('.section');

        // Change navbar color based on scroll position
        if (window.scrollY > 50) { // Adjust this value as needed
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Change navbar background color based on section in view
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
                navbar.style.backgroundColor = window.getComputedStyle(section).backgroundColor;
            }
        });
    });

    window.onload = function() {
        alert("Welcome to my portfolio! This site is still in development.");
    };
