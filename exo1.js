/* Pour ce premier exercice, tu peux reprendre la fonction fetchOffers() qu’on a créé plus haut. Le but de cet exercice va être de générer du HTML à partir de la donnée plutôt que faire un simple console.log().

Par exemple, le HTML généré pour une offre, pourrait ressembler à ça :

 
<h2>Traducteur·ice en Chef d'Émojis</h2>
<p>Parlez-vous couramment le langage des émojis ? Nous recrutons une personne en tant que Traducteur en Chef d'Émojis pour combler le fossé de communication entre les développeurs et les personnes concernées, qu'elles soient techniques ou non. La personne doit avoir un talent pour traduire un code complexe en émojis expressifs et vice versa. Des points bonus si la personne peut décoder les messages secrets cachés dans les 💻🤔🚀.</p>

💡 Indice : tu peux utiliser la propriété innerHTML et les template strings pour générer le HTML à partir du JSON.
*/

const offerContainer = document.querySelector("#offerContainer");

async function fetchOffers() {
    const response = await fetch("https://www.codepassport.dev/api/offers");
    const offers = await response.json();
    console.log(offers);
    // console.log(offers[0].titre);

    offers.forEach(offer => {
        let titleContainer = document.createElement("h2");
        titleContainer.innerText = offer.titre;
        offerContainer.appendChild(titleContainer);

        let desContainer = document.createElement("p");
        desContainer.innerText = offer.description;
        offerContainer.appendChild(desContainer)
    });
}

fetchOffers();

// const apiUrl = "https://www.codepassport.dev/api/offers";

// async function fetchData() {
//   const response = await fetch(apiUrl);
//   const json = await response.json();
//   listOffer(json);
// }

// function listOffer(offers) {
//   offers.map((offre) => {
//     console.log(offre.titre);
//   });
// }

// fetchData();