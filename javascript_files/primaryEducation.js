// language area

const content = {
    english: {
            content1: "",
            content2: "",
            content3: "",
            content4: "",
            content5: "",
            content6: "",
            content7: "",
            content8: "",
            content9: "",
            content10: "",
            content11: "",
            content12: "",
            content13: "",
            content14: "",
            content15: "",
            content16: "",
            content17: "",
            content18: "",
            content19: "",
            content20: "",
            content21: "",
            content22: "",
            content23: "",
            content24: "",
            content25: "",
    },
    hindi: {
        content1: "",
        content2: "",
        content3: "",
        content4: "",
        content5: "",
        content6: "",
        content7: "",
        content8: "",
        content9: "",
        content10: "",
        content11: "",
        content12: "",
        content13: "",
        content14: "",
        content15: "",
        content16: "",
        content17: "",
        content18: "",
        content19: "",
        content20: "",
        content21: "",
        content22: "",
        content23: "",
        content24: "",
        content25: "",
  
    },
    marathi: {
        content1: "",
        content2: "",
        content3: "",
        content4: "",
        content5: "",
        content6: "",
        content7: "",
        content8: "",
        content9: "",
        content10: "",
        content11: "",
        content12: "",
        content13: "",
        content14: "",
        content15: "",
        content16: "",
        content17: "",
        content18: "",
        content19: "",
        content20: "",
        content21: "",
        content22: "",
        content23: "",
        content24: "",
        content25: "",
    },
  };
  
  const fonts = {
    english: "Poppins",
    hindi: "Hind",
    marathi: "Tiro Devanagari Marathi",
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle");
    languageToggle.addEventListener("click", toggleLanguageMenu);
  
    const closingButton = document.getElementById("closing-span");
    closingButton.addEventListener("click", toggleLanguageMenu);
  
    const englishOption = document.getElementById("english-option");
    const hindiOption = document.getElementById("hindi-option");
    const marathiOption = document.getElementById("marathi-option");
  
    englishOption.addEventListener("click", () => updateLanguage("english"));
    hindiOption.addEventListener("click", () => updateLanguage("hindi"));
    marathiOption.addEventListener("click", () => updateLanguage("marathi"));
  
    const language = getCookie("language") || "english"; // Default to English
    updateLanguage(language);
  });
  
  // Toggle the visibility of the language menu (slide animation)
  function toggleLanguageMenu() {
    const languageMenu = document.getElementById("languages-section");
  
    if (languageMenu.style.top === "0px") {
      languageMenu.style.top = "-150vh"; // Hide it off-screen
    } else {
      languageMenu.style.top = "0"; // Slide it into view
    }
  }
  
  // Update the page content based on the selected language
  function updateLanguage(language) {
    document.cookie = "language=" + language; // Set the language cookie
  
    if (content[language]) {
      Object.keys(content[language]).forEach((key) => {
        document.getElementById(key).innerHTML = content[language][key];
      });
  
      document.body.style.fontFamily = fonts[language];
    }
  
    document.getElementById("languages-section").style.top = "-150vh";
    document.body.style.overflow = "auto";
  }
  
  // Get the value of a cookie by name
  function getCookie(name) {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return cookies[name];
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle1");
    languageToggle.addEventListener("click", toggleLanguageMenu);
  
    const closingButton = document.getElementById("closing-span");
    closingButton.addEventListener("click", toggleLanguageMenu);
  
    const englishOption = document.getElementById("english-option");
    const hindiOption = document.getElementById("hindi-option");
    const marathiOption = document.getElementById("marathi-option");
  
    englishOption.addEventListener("click", () => updateLanguage("english"));
    hindiOption.addEventListener("click", () => updateLanguage("hindi"));
    marathiOption.addEventListener("click", () => updateLanguage("marathi"));
  
    const language = getCookie("language") || "english"; // Default to English
    updateLanguage(language);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
  