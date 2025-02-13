document.addEventListener("DOMContentLoaded", function () {

function page4Animation() {

    var elemC = document.querySelector('#elem-container');
    var fixed = document.querySelector("#fixed-image");

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";

    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";

    });

    var elems = document.querySelectorAll(".elem");

    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url('${image}')`;
        });
    });
    
}
page4Animation();
});




var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




// language area


const content = {
    english: {
        content0: 'SanChi',
        content1: "Volunteering is the key to empowering communities and creating a brighter future for all.",
        content2: "Empower <br> Through <br> Education",
        content3: `We are a team of passionate volunteers,
driven by a shared commitment to making a difference. 
With dedication and purpose, 
we work together to create positive change,  
believing that every small effort leads to a greater impact.`,
        content4: 'Volunteering is essential for empowering individuals and strengthening communities. It fosters unity, drives positive change, and creates lasting impact. A dedicated team of volunteers contributes to social well-being, inspires collective action, and builds a brighter future for all.',

        content5: `Girls Education`,
        content6: `Primary Education`,
        content7: `Unprivileged Students Wellfare`,
        content8: `Physical Health`,
        content9: `Mental Health`,
        content10: `Home`,
        content11: `About`,
        content12: `Language  `,
        content13: `Contact`,
        content14: `Resources`,
        content15: ` Knowledge `,
        content16: ` Through `,
        content17: ` Education `,
        content18: ` Empower`,
        content19: ` Freedom`,
        content20: ` Lights`,
        content21: ` Dream`,
        content22: ` Educate`,
        content23: ` Achive`,
        content24: `<u>Brand</u> <u>Sponsor</u>s`,
        content25: `Vidyalankar Polytechnic`,
        content26: `RedBox Agency`,
        content27: `Sponsor`,
        content28: `DadsInTown`,
        content29: `SanChi <br> Education for Girls`,
        content30: `The Girls Education Committee at Vidyalankar Polytechnic empowers female students by promoting inclusivity, bridging educational gaps, and inspiring success. It fosters a culture of learning, equality, and growth for all through various impactful initiatives.`,
        content31: `RedBox Agency supports impactful initiatives like SanChi to empower education and uplift underprivileged communities. Their commitment to innovation and inclusivity creates meaningful change, making a difference in students’ lives and society as a whole.`,
        content32: `DadsInTown, parent company of RedBox, proudly supports SanChi, promoting education and inclusivity. Their dedication to innovation and community development inspires change, enriching the lives of students and society as a whole.`,
        content33: `SanChi Education for Girls`,
        content34: `Environment`,
        content35: `Digital Literacy`,
        content36: `Antinarcotics`,


    },
    hindi: {
        content0: 'सांची',
        content1: "स्वयंसेवा समुदायों को सशक्त बनाने और सभी के लिए उज्जवल भविष्य बनाने की कुंजी है।",
        content2: "शिक्षा <br> से <br> सशक्तिकरण",
        content3: `हम उत्साही स्वयंसेवकों की एक टीम हैं, जो बदलाव लाने की साझा प्रतिबद्धता से प्रेरित हैं। समर्पण और उद्देश्य के साथ, हम सकारात्मक परिवर्तन लाने के लिए मिलकर काम करते हैं, यह मानते हुए कि हर छोटा प्रयास एक बड़े प्रभाव की ओर ले जाता है।`,
        content4: 'स्वयंसेवा व्यक्तियों को सशक्त बनाने और समुदायों को मजबूत करने के लिए आवश्यक है। यह एकता को बढ़ावा देती है, सकारात्मक बदलाव लाती है और स्थायी प्रभाव पैदा करती है। समर्पित स्वयंसेवकों की एक टीम सामाजिक कल्याण में योगदान देती है, सामूहिक कार्रवाई को प्रेरित करती है और सभी के लिए एक उज्जवल भविष्य का निर्माण करती है।',

        content5: `लड़कियों की शिक्षा`,
        content6: `नशीली दवाओं के विरोध में अभियान`,
        content7: `आइए साझा करें`,
        content8: `शिक्षा के माध्यम से सशक्त बनाएं`,
        content9: `सपना देखें, शिक्षा प्राप्त करें, सफलता हासिल करें`,

        content10: ` &nbsp; मुखपृष्ठ &nbsp; `,
        content11: ` परिचय `,
        content12: `&nbsp;  भाषा &nbsp; `,
        content13: `&nbsp;  संपर्क करें  &nbsp; `,
        content14: `&nbsp; संसाधन &nbsp; `,
        content15: `  ज्ञान `,
        content16: `के माध्यम से`,
        content17: `शिक्षा`,
        content18: `सशक्तिकरण`,
        content19: `स्वतंत्रता`,
        content20: `दीपक`,
        content21: `सपना देखे`,
        content22: `शिक्षित`,
        content23: ` हासिल करे `,
        content24: `<u>ब्रांड</u> <u>प्रायोजक</u>`,
        content25: `विद्यालंकार पॉलिटेक्निक`,
        content26: `रेडबॉक्स एजेंसी`,
        content27: `प्रायोजक`,
        content28: `डैड्स इन टाउन`,
        content29: `सांची - <br> लड़कियों के लिए शिक्षा`,
        content30: `विद्यालंकार पॉलिटेक्निक की गर्ल्स एजुकेशन कमेटी महिला छात्रों को सशक्त बनाकर, समावेशिता बढ़ाने और सफलता के लिए प्रेरित करने का काम करती है। यह सीखने, समानता और विकास की संस्कृति को प्रोत्साहित करती है।`,
        content31: `रेडबॉक्स एजेंसी संची जैसे प्रभावशाली प्रोजेक्ट्स का समर्थन करती है, जो शिक्षा को सशक्त और वंचित समुदायों को बेहतर बनाते हैं। नवाचार और समावेशिता के प्रति उनकी प्रतिबद्धता छात्रों और समाज के जीवन में बदलाव लाती है।`,
        content32: `डैड्सइनटाउन, रेडबॉक्स की मूल कंपनी, संची का समर्थन करती है, जो शिक्षा और समावेशिता को बढ़ावा देती है। उनका नवाचार और सामुदायिक विकास के प्रति समर्पण छात्रों और समाज में सकारात्मक बदलाव लाता है।`,
        content33: `सांची - लड़कियों के लिए शिक्षा`,
        content34: `विशेष रूप से सक्षम लोगों के लिए कल्याण`,
        content35: `डिजिटल साक्षरता`,
        content36: `प्राथमिक शिक्षा`,

    },
    marathi: {
        content0: 'सांची',
        content1: "स्वयंसेवा ही समाजाला सशक्त बनवण्याची आणि सर्वांसाठी उज्ज्वल भविष्य घडवण्याची किल्ली आहे",
        content2: "शिक्षण, <br> सक्षमता, <br> सशक्तीकरण",
        content3: `आम्ही समर्पित स्वयंसेवकांची एक टीम आहोत, जे बदल घडवण्याच्या सामूहिक ध्येयाने प्रेरित आहोत। समर्पण आणि उद्दिष्टांसह, आम्ही एकत्र येऊन सकारात्मक बदल घडवतो, कारण आम्हाला विश्वास आहे की प्रत्येक लहान प्रयत्न मोठा परिणाम घडवू शकतो.`,
        content4: 'स्वयंसेवा व्यक्तींना सशक्त बनवण्यासाठी आणि समुदाय बळकट करण्यासाठी महत्त्वाची आहे। ही एकतेला चालना देते, सकारात्मक बदल घडवते आणि दीर्घकालीन प्रभाव निर्माण करते। समर्पित स्वयंसेवकांची टीम सामाजिक कल्याणासाठी योगदान देते, सामूहिक कृतीला प्रेरणा देते आणि सर्वांसाठी उज्ज्वल भविष्य घडवते।',

        content5: `मुलींचे शिक्षण`,
        content6: `अंमली पदार्थ विरोधी अभियान`,
        content7: `चला वाटून घेऊया`,
        content8: `शिक्षणाद्वारे सशक्त बना`,
        content9: `स्वप्न बघा, शिक्षण घ्या, यश मिळवा`
        ,
        content10: ` &nbsp; मुख्यपृष्ठ &nbsp; `,
        content11: ` आमच्याबद्दल `,
        content12: `भाषा`,
        content13: `संपर्क करा`,
        content14: `स्रोत`,
        content15: ` ज्ञान `,
        content16: `माध्यमातून `,
        content17: `शिक्षणाच्या`,
        content18: `सक्षम करा`,
        content19: `स्वातंत्र्य`,
        content20: `दिवे `,
        content21: `स्वप्न बघा`,
        content22: `शिक्षित करा`,
        content23: ` साध्य करा`,
        content24: `<u>ब्रँड</u> <u>प्रायोजक</u>`,
        content25: `विद्यालंकार पॉलिटेक्निक`,
        content26: `रेडबॉक्स एजन्सी`,
        content27: `प्रायोजक`,
        content28: `डॅड्स इन टाऊन`,
        content29: `सांची:<br> मुलींच्या शिक्षणासाठी`,
        content30: `विद्यालंकार पॉलिटेक्निकमधील गर्ल्स एज्युकेशन कमिटी महिला विद्यार्थिनींना सशक्त बनवते, समावेशिता वाढवते व यशासाठी प्रेरणा देते. विविध उपक्रमांद्वारे ती शिकणे, समानता व प्रगती यांचे वातावरण निर्माण करते.`,
        content31: `रेडबॉक्स एजन्सी संचीसारख्या प्रभावी प्रकल्पांना पाठिंबा देते, जे शिक्षण सशक्त करतात आणि वंचित समुदायांचे उत्थान करतात. त्यांच्या नवकल्पना व समावेशकतेच्या बांधिलकीमुळे विद्यार्थ्यांच्या व समाजाच्या जीवनात सकारात्मक बदल घडतो.`,
        content32: `डॅड्सइनटाउन, रेडबॉक्सची मूळ कंपनी, संचीला पाठिंबा देते, शिक्षण आणि समावेशकतेला प्रोत्साहन देते. त्यांचे नवकल्पना व समाज विकासासाठीचे समर्पण विद्यार्थ्यांमध्ये आणि समाजात सकारात्मक बदल घडवते.`,
        content33: `सांची:  मुलींच्या शिक्षणासाठी`,
        content34: `विशेष सक्षम व्यक्तींसाठी कल्याण`,
        content35: `डिजिटल साक्षरता`,
        content36: `प्राथमिक शिक्षण`,

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



