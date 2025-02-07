const attachmentsContainer = document.getElementById('attachments-container');
const addAttachmentBtn = document.getElementById('add-attachment');

let attachmentCount = 1;

addAttachmentBtn.addEventListener('click', () => {
    attachmentCount++;

    // Create new file and file name input fields
    const fileContainer = document.createElement('div');
    fileContainer.classList.add('file-container');

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.name = 'attachments[]';
    fileInput.id = `attachment-${attachmentCount}`;
    fileInput.accept = 'image/*';

    const fileNameInput = document.createElement('input');
    fileNameInput.type = 'text';
    fileNameInput.name = 'file_names[]';
    fileNameInput.id = `filename-${attachmentCount}`;
    fileNameInput.placeholder = 'Enter file name';

    // Append inputs to the new container
    fileContainer.appendChild(fileInput);
    fileContainer.appendChild(fileNameInput);

    // Append the new container to the attachments section
    attachmentsContainer.appendChild(fileContainer);
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
    alert("Form data submitted successfully!");
    form.reset();
});




function updateFileName() {
    const input = document.getElementById('attachment-1');
    const label = document.getElementById('file-label');

    if (input.files.length > 0) {
        label.textContent = input.files[0].name;
    } else {
        label.textContent = 'Choose a file (Max 2MB)';
    }
}





    
const content = {
    english: {
        content0:'SanChi',
        content1: 'First Name:',
        content2: 'Last Name:',
        content3: 'E-mail:',
        content4: 'Tittle:',
        content5: 'Message:',
        content6: 'Submit',
        // content7: 'Attachments',
        content8: '+ Add more Attachment',
        content9: '* File size should not be greater than 2 mb & also file without extension',
        // filename: 'filename.placeholder = "Enter your email";',
        content11: 'Contact Us',
        content12: 'Home',
        content13: 'About',
        content14: 'Language',
        content15: 'Contact',
        content16: 'Resources',

    },
    hindi: {
        content0:'सांची',
        content1: 'पहला नाम:',
        content2: 'अंतिम नाम:',
        content3: 'ईमेल:',
        content4: 'शीर्षक:',
        content5: 'संदेश:',
        content6: 'प्रस्तुत',
        // content7: 'अटैचमेंट',
        content8: '+ अटैचमेंट जोड़ें',
        content9: '* फ़ाइल का आकार 2 mb से अधिक नहीं होना चाहिए और फ़ाइल के बिना एक्सटेंशन',
        // filename: 'filename.placeholder = "फ़ाइल का नाम दर्ज करें";',
        content11: 'हमसे संपर्क करें:',
        content12: 'होम',
        content13: 'के बारे में',
        content14: 'भाषा',
        content15: 'संपर्क',
        content16: 'संसाधन',

    
    },
    marathi: {
        content0:'सांची',
        content1: 'पहिलं नाव:',
        content2: 'आडनाव:',
        content3: 'ईमेल:',
        content4: 'शीर्षक:',
        content5: 'संदेश:',
        content6: 'सबमिट करा',
        // content7: '+ जोडण्यासाठी फाइल',
        content8: '+ अटॅचमेंट जोडा',
        content9: '* फाइल का आकार 2 mb पेक्षा जास्त नसावा आणि फाइल विहिरीत असावी',
        // filename: 'filename.placeholder = "फाइल नाव प्रविष्ट करा";',
        content11: 'आमच्याशी संपर्क साधा:',
        content12: 'होम',
        content13: 'बद्दल',
        content14: 'भाषा',
        content15: 'संपर्क',
        content16: 'साधने',

          
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