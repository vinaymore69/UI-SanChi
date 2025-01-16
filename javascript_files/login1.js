

// LANGUAGE SECTION
const content = {
    english: {
        content0: `Username`,
        content2: `Password`,
        content3: `Register ?`,
        content4: `Login`,
        content5: `Forgot Password ?`,
        content6: `Home`,
        content7: `About`,
        content8: `Language`,
        content9: `Contact`,
        content10: `Resources`
    },
    hindi: {
        content0: `उपयोगकर्ता नाम`,
        content2: `पासवर्ड`,
        content3: `पंजीकरण करवाना ?`,
        content4: `लॉग इन करें`,
        content5: `पासवर्ड भूल गए ?`,
        content6: `घर`,
        content7: `हमारे बारे में`,
        content8: `भाषा`,
        content9: `संपर्क`,
        content10: `संसाधन`,
    },
    marathi: {
        content0: `वापरकर्तानाव`,
        content2: `नोंदणी करा`,
        content3: `नोंदणी करा ?`,
        content4: `लॉगिन`,
        content5: `पासवर्ड विसरलात`,
        content6: `घर`,
        content7: `आमच्याबद्दल`,
        content8: `भाषा`,
        content9: `संपर्क`,
        content10:`संसाधने`
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
      languageMenu.style.top = "-100vh"; // Hide it off-screen
    } else {
      languageMenu.style.top = "0"; // Slide it into view
    }
  }
  
  // Update the page content based on the selected language
  function updateLanguage(language) {
    // Set the language preference in a cookie
    document.cookie = "language=" + language;
  
    // Check if the content for the selected language exists
    if (content[language]) {
      // Update the innerHTML of elements based on language content
      Object.keys(content[language]).forEach((key) => {
        const element = document.getElementById(key);
        if (element) {
          element.innerHTML = content[language][key];
        }
      });
  
      // Update the font family for the entire body based on the language
      if (fonts[language]) {
        document.body.style.fontFamily = fonts[language];
      }
  
      // Apply additional style changes specific to the language
      updateStyleChanges(language);
    }
  
    // Hide the languages section and restore page overflow
    const languagesSection = document.getElementById("languages-section");
    if (languagesSection) {
      languagesSection.style.top = "-100vh";
    }
    document.body.style.overflow = "auto";
  
    // Adjust font size specifically for Marathi
    const contentElement = document.getElementById("content1");
    if (contentElement && language === "marathi") {
      contentElement.style.fontSize = "11vw";
      contentElement.style.wordSpacing = "2vw";
      contentElement.style.fontWeight = "700";
      contentElement.style.lineHeight = "13vw";
    } else if (contentElement && language === "hindi") {
      contentElement.style.fontSize = "14vw";
      contentElement.style.wordSpacing = "2vw";
      contentElement.style.fontWeight = "700";
      contentElement.style.lineHeight = "17vw";
    } else if (contentElement) {
      // Reset to default font size for other languages
      contentElement.style.fontSize = "";
    }
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
  
  function updateStyleChanges(language) {
    // const contentElement = document.getElementById("content1");
  
    // if (contentElement) {
    //   if (language == "Marathi") {
    //     contentElement.style.fontSize = "0vw";
    //   }
    // } else {
    //   console.warn("Element with id 'content1' not found.");
    // }
  }
  