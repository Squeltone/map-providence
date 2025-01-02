
function togglePopup(){
    let popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open")
}

function togglePopup(area) {
    const popup = document.getElementById('popup-overlay');
    const iframe = popup.querySelector('iframe');
    const content = document.getElementById('popup-content-inner');

    // Set the source of the iframe based on the area clicked
    if (area === 'foyer') {
        iframe.src = 'images/foyer1.jpg';
    } else if (area === 'salle') {
        iframe.src = 'images/salle de classe1.jpg';
    } else if (area === 'casier') {
        iframe.src = 'images/casier1.jpg';
    } else if (area === 'labo') {
        iframe.src = 'images/labo1.jpg';
    } else if (area === 'mdl') {
        iframe.src = 'https://momento360.com/e/u/4590d707388c42389091a81aa3c86c81?utm_campaign=embed&utm_source=other&heading=739.85&pitch=5.08&field-of-view=75&size=medium&display-plan=true';
    }

    // Show the popup
    popup.style.display = 'block';
}

function togglePopup() {
    const popup = document.getElementById('popup-overlay');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}



function showPopup(url, description) {
    document.getElementById('popup-frame').src = url;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup-overlay').style.display = 'flex';
}

function hidePopup() {
    document.getElementById('popup-frame').src = '';
    document.getElementById('popup-overlay').style.display = 'none';
}











const translations = {
    fr: {
        selct : "Langue",
        title : "Bienvenue",
    },
    en: {
        selct : "Language",
        title : "Welcome", 
    }
}

const languageSelectop = document.querySelector("select");
let h1 = document.getElementById("h1");
let title= document.getElementById("title");
let plan=document.getElementById("plan");
let foyez=document.getElementById("Foyez");
let sdc=document.getElementById("Salle-de-classe");
let casier=document.getElementById("Casier");
let labo=document.getElementById("Labo");
let mdl=document.getElementById("Labo");

languageSelectop.addEventListener("change", (event)=>{
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if(language=="en"){
        h1.innerText=translations.en.selct;
        title.innerText=translations.en.title;
        plan.src='images/plan en.png';
    }
    else if(language == "fr"){
        h1.innerText=translations.fr.selct;
        title.innerText=translations.fr.title;
        plan.src='images/plan fr.png';
    }
}
