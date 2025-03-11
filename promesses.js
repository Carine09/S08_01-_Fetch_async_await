/* Défi 1 : Timer simple avec Promesses
Créez une fonction qui utilise des promesses pour simuler un minuteur :

Créez une fonction wait(seconds) qui renvoie une promesse
La promesse doit se résoudre après le nombre de secondes spécifié
Utilisez-la pour afficher un message après 3 secondes

Défi 2 : Récupération de données depuis une API
Utilisez l'API gratuite JSONPlaceholder pour pratiquer les requêtes :

Utilisez fetch() pour récupérer des données depuis https://jsonplaceholder.typicode.com/users
Affichez les noms des utilisateurs dans la console
Gérez les erreurs avec .catch()

Défi 3 : Chargement séquentiel
Créez une fonction qui charge des données les unes après les autres :

Récupérez d'abord un utilisateur (id=1) depuis JSONPlaceholder
Puis, utilisez son id pour récupérer ses posts (https://jsonplaceholder.typicode.com/posts)
Utilisez async/await pour rendre le code plus lisible

Défi 4 : Chargement parallèle simple
Chargez plusieurs ressources en même temps :

Utilisez Promise.all() pour récupérer à la fois les utilisateurs et les posts
Comparez le temps de chargement avec une approche séquentielle
Affichez les résultats combinés

Défi 5 : Système de recherche avec délai d'attente
Créez un système de recherche qui ne déclenche la requête que lorsque l'utilisateur arrête de taper pendant un certain temps :

Créez une fonction debouncedSearch(searchTerm) qui attend 500ms d'inactivité avant d'envoyer une requête
Utilisez l'API JSONPlaceholder pour rechercher des posts contenant le terme de recherche
Si l'utilisateur tape à nouveau avant les 500ms, annulez la requête précédente et recommencez le compteur
Affichez les résultats dans la console.

Ce défi vous fera pratiquer les concepts de :

Debouncing (limitation des appels répétés) très utiles ;)
Annulation de promesses avec AbortController
Gestion des timers avec setTimeout/clearTimeout */

function wait(seconds) {  
    return new Promise((resolve) => { 
      // [logique] 
    });
  }