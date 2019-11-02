/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieurs façons de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace(/e/i, ' ');
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.slice(0,9);
    // ou texte.substr(0,9)
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return typeof texte === 'string';
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop(); // pop permet d'enlever le dernier morceau d'une chaine. Le pop supprime l'extension.
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    return array.map(Math.abs);
}
var sufaceCercle = function (rayon) {
    return Math.ceil(Math.PI * Math.pow(rayon, 2));
}
var hypothenuse = function (ab, ac) {
    return result = Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
    return parseFloat((poids / (taille * taille)).toFixed(2));
}
// to fixed retire les nombres après la virgule mais les convertit en chaine de caractères
// parseFloat permet de le déclarer comme un nombre et non une chaine de caractères
