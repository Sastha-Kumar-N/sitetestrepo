const aminoAcids = [
    { name: 'Alanine', structure: 'images/alanine.png' },
    { name: 'Arginine', structure: 'images/arginine.png' },
    { name: 'Asparagine', structure: 'images/asparagine.png' },
    { name: 'Aspartic Acid', structure: 'images/aspartic_acid.png' },
    { name: 'Cysteine', structure: 'images/cysteine.png' },
    { name: 'Glutamic Acid', structure: 'images/glutamic_acid.png' },
    { name: 'Glutamine', structure: 'images/glutamine.png' },
    { name: 'Glycine', structure: 'images/glycine.png' },
    { name: 'Histidine', structure: 'images/histidine.png' },
    { name: 'Isoleucine', structure: 'images/isoleucine.png' },
    { name: 'Leucine', structure: 'images/leucine.png' },
    { name: 'Lysine', structure: 'images/lysine.png' },
    { name: 'Methionine', structure: 'images/methionine.png' },
    { name: 'Phenylalanine', structure: 'images/phenylalanine.png' },
    { name: 'Proline', structure: 'images/proline.png' },
    { name: 'Serine', structure: 'images/serine.png' },
    { name: 'Threonine', structure: 'images/threonine.png' },
    { name: 'Tryptophan', structure: 'images/tryptophan.png' },
    { name: 'Tyrosine', structure: 'images/tyrosine.png' },
    { name: 'Valine', structure: 'images/valine.png' },
];


const aminoAcidImageContainer = document.getElementById('amino-acid-image');
const guessInput = document.getElementById('guess-input');
const checkGuessBtn = document.getElementById('check-guess-btn');
const resultText = document.getElementById('result');

let currentAminoAcid;

// Initialize the game
function initializeGame() {
    // Randomly select an amino acid
    currentAminoAcid = getRandomAminoAcid();

    // Display the structure image
    const imageElement = document.createElement('img');
    imageElement.src = currentAminoAcid.structure;
    imageElement.alt = currentAminoAcid.name;
    aminoAcidImageContainer.innerHTML = '';
    aminoAcidImageContainer.appendChild(imageElement);

    // Clear the input and result
    guessInput.value = '';
    resultText.textContent = '';
}

// Get a random amino acid from the list
function getRandomAminoAcid() {
    const randomIndex = Math.floor(Math.random() * aminoAcids.length);
    return aminoAcids[randomIndex];
}

// Check guess button
checkGuessBtn.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = guessInput.value.toLowerCase();
    
    if (userGuess === currentAminoAcid.name.toLowerCase()) {
        resultText.textContent = 'Correct! Well done.';
    } else {
        resultText.textContent = 'Incorrect. Try again!';
    }
}

// Initialize the game when the page loads
initializeGame();
