/* Si tu as réussi avec l’exemple ci-dessus, tu peux maintenant aller explorer d’autres APIs un peu plus complexes comme DummyJSON par exemple et afficher leurs données sur une page web.

Pour cet exercice, laisse libre cours à ton imagination. 💭 */

const citationContainer = document.querySelector("#citationContainer");

async function fetchCitations() {
    const response = await fetch("https://www.dummyjson.com/quotes");
    const citations = await response.json();
    console.log(citations);
    // console.log(offers[0].titre);
    
    citationContainer.innerText = "";

    citations.quotes.forEach(citation => {
        let quoteContainer = document.createElement("div");
        quoteContainer.innerText = citation.quote;
        citationContainer.appendChild(quoteContainer);

        let authorContainer = document.createElement("h3");
        authorContainer.innerText = citation.author;
        citationContainer.appendChild(authorContainer);
    });
}

citationContainer.innerText = `Chargement des citations...`
fetchCitations();