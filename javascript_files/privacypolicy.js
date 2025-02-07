document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            let offset = 80; // Default offset for desktop

            if (window.innerWidth <= 1024) { // Tablet and mobile view
                offset = 125; // Increase offset for smaller screens
            }

            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});
