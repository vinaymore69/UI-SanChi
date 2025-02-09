

document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.masonry-gallery');
    var msnry = new Masonry(grid, {
        itemSelector: 'img',
        columnWidth: '.grid-sizer',
        gutter: 10,
        fitWidth: true
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".masonry img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    images.forEach(image => {
        image.addEventListener("click", function () {
            lightbox.classList.add("active");
            const img = document.createElement("img");
            img.src = image.src;
            lightbox.innerHTML = ""; // Clear previous images
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });
});



gsap.from("#page1 #scroll-img", {
    scale: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page1 #scroll-img",
        start: "top 90%", // Start animation when the element is 80% in view
        end: "top 20%",
        scrub: true, // Smooth animation linked to scroll
        // markers:true
    }
});

gsap.utils.toArray(".item").forEach((item) => {
    gsap.from(item, {
        y: -20, // Moves item up by 20px before animation
        opacity: 0, // Optional: Fade in effect
        duration: 1, // Optional: Smooth effect
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 90%", // Starts animation when 90% of viewport
            end: "top 20%",   // Ends animation at 20% of viewport
            scrub: 1,         // Smooth animation on scroll
            // markers: true // Enable markers for debugging
        }
    });
});






function preloadImages(imageUrls, callback) {
    let loadedCount = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                callback(); // Call function when all images are loaded
            }
        };
        img.onerror = () => {
            console.error(`Image failed to load: ${url}`);
        };
    });
}

// List of images to preload
const imageList = [
    "images/10.jpeg",
    "images/12.jpeg",
    "images/13.jpeg",
    "images/14.jpeg",
    "images/15.jpeg",
    "images/16.jpeg",
    "images/17.jpeg",
    "images/18.jpeg",
    "images/19.jpeg",
    "images/20.jpeg"
];

// Preload images, then show the page
preloadImages(imageList, function () {
    console.log("All images loaded!");
    document.body.classList.add("images-loaded"); // Add class when done
});



var path = "M 0 200 Q 825 200 1650 200";
var finalPath = "M 0 200 Q 825 200 1650 200";
var string = document.querySelector("#string2");

string.addEventListener("mousemove", function (dets) {
    var rect = string.getBoundingClientRect();
    var x = dets.clientX - rect.left; 
    var y = dets.clientY - rect.top; 

    path = `M 0 200 Q ${x} ${y} 1650 200`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    });
});
