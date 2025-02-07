// Change color to black when the date input changes
document.getElementById("date").addEventListener("change", function() {
    this.style.color = "black";
});




    // language area
    
    const content = {
        english: {
            content0:` Home`,
            content1: `About`,
            content2: `Language`,
            content3: `Contact`,
            content4: `Resources`,
            content5: `Login`,
            content6: `Dashboard`,
            content7: `Connect with us:`,
            content8: `First Name:`,
            content9: `Last Name:`,
            content10: `Email:`,
            content11: `Password:`,
            content12: `Confirm Password:`,
            content13: `Date of Birth:`,
            content14: `Gender:`,
            content15: `Male`,
            content16: `Female`,
            content17: `Other`,
            content18: `Username:`,
            content19: `Address:`,
            content20: `Submit`,
            content21: `SanChi`,
            content22: `SanChi <br/> Education <br/> for Girls`,
            content23: `Show Password`,
        },
        hindi: {
            content0:	`मुखपृष्ठ`,
            content1:	`परिचय`,
            content2:	`भाषा`,
            content3:	`संपर्क करें`,
            content4:	`संसाधन`,
            content5:	`लॉगिन`,
            content6:	`डैशबोर्ड`,
            content7:	`हमसे जुड़ें`,
            content8:	`पहला नाम`,
            content9:	`अंतिम नाम`,
            content10:	`ईमेल`,
            content11:	`पासवर्ड`,
            content12:	`पासवर्ड की पुष्टि करें`,
            content13:	`जन्मतिथि`,
            content14:	`लिंग`,
            content15:	`पुरुष`,
            content16:	`महिला`,
            content17:	`अन्य`,
            content18:	`उपयोगकर्ता नाम`,
            content19:	`पता`,
            content20:	`सबमिट करें`,
            content21:	`सांची`,
            content22:	`सांची <br/> लड़कियों के लिए <br/> शिक्षा`,
            content23:	`पासवर्ड दिखाएं`,

           
        },
        marathi: {
            content0: `मुख्यपृष्ठ`,
            content1: `ओळख`,
            content2: `भाषा`,
            content3: `संपर्क करा`,
            content4: `स्रोत`,
            content5: `लॉगिन`,
            content6: `डॅशबोर्ड`,
            content7: `आमच्याशी संपर्क साधा`,
            content8: `पहिलं नाव`,
            content9: `आडनाव`,
            content10: `ईमेल`,
            content11: `पासवर्ड`,
            content12: `पासवर्डची पुष्टी करा`,
            content13: `जन्मतारीख`,
            content14: `लिंग`,
            content15: `पुरुष`,
            content16: `महिला`,
            content17: `इतर`,
            content18: `वापरकर्तानाव`,
            content19: `पत्ता:`,
            content20: `सबमिट करा`,
            content21: `संची`,
            content22: `संची <br/> मुलींसाठी <br/> शिक्षण`,
            content23: `पासवर्ड दाखवा`,
        }
    };
    
    const fonts = {
        english: "Poppins", 
        hindi: "Hind", 
        marathi: "Tiro Devanagari Marathi" 
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
            Object.keys(content[language]).forEach(key => {
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





