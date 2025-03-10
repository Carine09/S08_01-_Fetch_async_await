/* Si tu as réussi à charger la donnée et à l’afficher sur la page, tu as dû remarquer que le résultat n’apparaît pas directement.

Ajoute un état de chargement qui s’affiche lorsque la donnée n’est pas encore chargée “Chargement des offres…” par exemple. */

const offerContainer = document.querySelector("#offerContainer");

async function fetchOffers() {
    const response = await fetch("https://www.codepassport.dev/api/offers");
    const offers = await response.json();
    console.log(offers);
    // console.log(offers[0].titre);
    
    offerContainer.innerText = "";

    offers.forEach(offer => {
        let titleContainer = document.createElement("h2");
        titleContainer.innerText = offer.titre;
        offerContainer.appendChild(titleContainer);

        let desContainer = document.createElement("p");
        desContainer.innerText = offer.description;
        offerContainer.appendChild(desContainer)
    });
}

offerContainer.innerText = `Chargement des offres...`
fetchOffers();