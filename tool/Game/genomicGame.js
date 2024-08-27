// Amino acid data
const aminoAcids = [
    { code: 'Ala', name: 'Alanine' },
    { code: 'Arg', name: 'Arginine' },
    { code: 'Asn', name: 'Asparagine' },
    { code: 'Asp', name: 'Aspartic Acid' },
    { code: 'Cys', name: 'Cysteine' },
    { code: 'Glu', name: 'Glutamic Acid' },
    { code: 'Gln', name: 'Glutamine' },
    { code: 'Gly', name: 'Glycine' },
    { code: 'His', name: 'Histidine' },
    { code: 'Ile', name: 'Isoleucine' },
    { code: 'Leu', name: 'Leucine' },
    { code: 'Lys', name: 'Lysine' },
    { code: 'Met', name: 'Methionine' },
    { code: 'Phe', name: 'Phenylalanine' },
    { code: 'Pro', name: 'Proline' },
    { code: 'Ser', name: 'Serine' },
    { code: 'Thr', name: 'Threonine' },
    { code: 'Trp', name: 'Tryptophan' },
    { code: 'Tyr', name: 'Tyrosine' },
    { code: 'Val', name: 'Valine' },
];

// Shuffled amino acids
let shuffledAminoAcids = [];
let flippedCards = [];

document.addEventListener('DOMContentLoaded', () => {
    startGame();
});

function startGame() {
    // Shuffle the full amino acids array
    shuffledAminoAcids = shuffle([...aminoAcids]);

    // Take the first 10 elements to form a subset
    const subsetAminoAcids = shuffledAminoAcids.slice(0, 5);

    // Duplicate the subset to have pairs
    shuffledAminoAcids = shuffle([...subsetAminoAcids, ...subsetAminoAcids]);

    // Create and display the cards
    createCards();
}

function createCards() {
    const gameContainer = document.getElementById('game-container');

    shuffledAminoAcids.forEach((acid, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.textContent = '?';
        card.addEventListener('click', flipCard);

        gameContainer.appendChild(card);
    });
}

function flipCard() {
    const selectedCard = this;
    const index = selectedCard.dataset.index;

    // Prevent flipping the same card twice
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
        selectedCard.textContent = shuffledAminoAcids[index].code;
        flippedCards.push(index);

        // Check for a match when two cards are flipped
        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
}

function checkForMatch() {
    const [index1, index2] = flippedCards;
    const card1 = document.querySelector(`.card[data-index="${index1}"]`);
    const card2 = document.querySelector(`.card[data-index="${index2}"]`);

    if (shuffledAminoAcids[index1].code === shuffledAminoAcids[index2].code) {
        // Matched
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);

        // Display the full name in a modal
        setTimeout(() => {
            displayModal(shuffledAminoAcids[index1].name);
        }, 500);
    } else {
        // Not matched
        card1.textContent = '?';
        card2.textContent = '?';
    }

    flippedCards = [];
}

function displayModal(fullName) {
    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content-text');

    modalContent.textContent = `You've found a match!\nAmino Acid: ${fullName}`;

    modalContainer.style.display = 'block';
}

function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.style.display = 'none';
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
