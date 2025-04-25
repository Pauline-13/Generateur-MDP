/* ---------------------- VARIABLES -------------------------- */
let majuscules = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let minuscules = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let chiffres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let symboles = [
  ".",
  ",",
  ";",
  ":",
  "!",
  "?",
  "/",
  "-",
  "*",
  "%",
  "µ",
  "£",
  "$",
  "^",
  "=",
  "+",
  "(",
  ")",
  "{",
  "[",
  "]",
  "}",
  "@",
  "#",
  "~",
  "&",
  "²",
];

/* ---------------------- FONCTIONS -------------------------- */
function genererMdp() {
  // Récupére le nombre de caractères souhaités ↓
  const nombreCaracteres = parseInt(
    document.getElementById("nombre-voulu").value
  );

  // Vérifie si le nombre entré est valide (entre 12 et 128) ↓
  if (isNaN(nombreCaracteres) || nombreCaracteres < 12 || nombreCaracteres > 128) {
    alert("Entre un nombre entre 12 et 128");
    return;
  }

  // Créer un tableau vide pour sélectionner le type de caractère souhaité ↓
  let totalCaracteres = [];


  // Vérifie quelle case est cochée et ajoute les catégories correspondantes ↓
  if (document.getElementById("majuscules").checked) {
    totalCaracteres = totalCaracteres.concat(majuscules);
  }
  if (document.getElementById("minuscules").checked) {
    totalCaracteres = totalCaracteres.concat(minuscules);
  }
  if (document.getElementById("chiffres").checked) {
    totalCaracteres = totalCaracteres.concat(chiffres);
  }
  if (document.getElementById("symboles").checked) {
    totalCaracteres = totalCaracteres.concat(symboles);
  }

  // Vérifie si au moins une case est cochée
  if (totalCaracteres.length === 0) {
    alert("Sélectionne au moins un type de caractère");
    return;
  }

    // Stock le mot de passe généré ↓
    let motDePasse = "";

  // Génére un MDP en ajoutant un caractère aléaoire jusqu'à longueur souhaitée ↓
  for (let i = 0; i < nombreCaracteres; i++) {
    // sélectionne un caractère aléatoire du tableau `totalCaracteres` ↓
    const caractereAleatoire =
      totalCaracteres[Math.floor(Math.random() * totalCaracteres.length)];
    // Ajoute le caractère au MDP ↓
    motDePasse += caractereAleatoire;
  }

  // Affiche le MDP dans la balise <p> ↓
  document.getElementById("resultat-mdp").textContent = motDePasse;
}
