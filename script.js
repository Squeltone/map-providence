
//Fonction pour ouvrir la popup
function togglePopup(){
    let popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open")
}
//Fonction pour fermer la popup
function hidePopup() {
    document.getElementById("popup-frame").src = "";
    document.getElementById("popup-overlay").style.display = "none";
}
//Fonction pour ouvrir la popup selon la zone choisi
function togglePopup(area) {
    const popup = document.getElementById('popup-overlay');
    const iframe = popup.querySelector('iframe');
    const content = document.getElementById('popup-content-inner');

    //Source de l'iframe selon la zone cliqué
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

    // Montre la popup
    popup.style.display = 'block';
}
//Fonction pour afficher la photo et la description de la popup
function showPopup(url, description) {
    document.getElementById('popup-frame').src = url;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup-overlay').style.display = 'flex';
}

//Dictionnaire des langues selon celle sélectionnée
const translations = {
    fr: {
        interactiveMap: "Carte Interactive",
        popupDescriptions: {
            foyer: "Foyez des lycéen où ils peuvent se reposer entre-deux cours.",
            "salle-de-cours": "L'une des nombreuses salle de cours du lycée.",
            casier: "Les lycéens peuvent ranger leurs affaires dans leur casier.",
            labo: "Laboratoire de physique et de chimie.",
            mdl: "La maison des lycéens possède un coin lecture, billard et même un bar."
        },
        close: "Fermer"
    },
    en: {
        interactiveMap: "Interactive Map",
        popupDescriptions: {
            foyer: "This is an image of the lounge.",
            "salle-de-cours": "This is a classroom.",
            casier: "This is a locker.",
            labo: "This is a laboratory.",
            mdl: "This is a link to the MDL."
        },
        close: "Close"
    }
};
//Fonction pour traduire le titre et le bouton pour fermer la popup
function updateLanguage() {
    const selectedLang = document.getElementById("langue-select").value;
    document.getElementById("interactiveMap").textContent = translations[selectedLang].interactiveMap;
    document.getElementById("close-button").textContent = translations[selectedLang].close;
}
//Fonction pour traduire selon la langue sélectionnée les description tout en gardant les images 
function showPopup(imageSrc, elementId) {
    const selectedLang = document.getElementById("langue-select").value;
    const description = translations[selectedLang].popupDescriptions[elementId];

    document.getElementById("popup-frame").src = imageSrc;
    document.getElementById("popup-description").textContent = description;
    document.getElementById("popup-overlay").style.display = "flex";

}


const languageSelectop = document.querySelector("select");
let plan=document.getElementById("plan");

languageSelectop.addEventListener("change", (event)=>{
    setLanguage(event.target.value)
})
//Condition pour traduire le plan du lycée selon la langue sélectionnée
const setLanguage = (language) => {
    if(language=="en"){
        plan.src='images/plan en.png';
    }
    else if(language == "fr"){
        plan.src='images/plan fr.png';
    }
}
