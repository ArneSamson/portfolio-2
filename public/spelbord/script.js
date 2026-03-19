// --- 1. Bord Genereren op een Curved Path ---
const AANTAL_VAKJES = 40;
let afbeeldingVerdeling = [5, 12, 15, 18, 25, 30, 35, 38];
const boardElement = document.getElementById('board');
const imagePosInputOne = document.getElementById('image-position-input-one');
const imagePosInputTwo = document.getElementById('image-position-input-two');
const imagePosInputThree = document.getElementById('image-position-input-three');
const imagePosInputFour = document.getElementById('image-position-input-four');
const imagePosInputFive = document.getElementById('image-position-input-five');
const imagePosInputSix = document.getElementById('image-position-input-six');
const imagePosInputSeven = document.getElementById('image-position-input-seven');
const imagePosInputEight = document.getElementById('image-position-input-eight');
const updateImagesBtn = document.getElementById('update-images-btn');

for (let i = 0; i < AANTAL_VAKJES; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.textContent = i + 1;
    
    const percentage = (i / (AANTAL_VAKJES - 1)) * 100;
    
    tile.style.offsetDistance = `${percentage}%`;

    for (let j = 0; j < afbeeldingVerdeling.length; j++) {
        if (i + 1 == afbeeldingVerdeling[j]) {
            tile.style.backgroundImage = `url('images/image (${j + 1}).png')`;
            tile.style.transform = 'scale(1.4)';
            tile.textContent = '';
            break;
        }
    }

    boardElement.appendChild(tile);
}

updateImagesBtn.addEventListener('click', () => {
    // set afbeeldingVerdeling to the values from the input fields
    afbeeldingVerdeling = [
        parseInt(imagePosInputOne.value),
        parseInt(imagePosInputTwo.value),
        parseInt(imagePosInputThree.value),
        parseInt(imagePosInputFour.value),
        parseInt(imagePosInputFive.value),
        parseInt(imagePosInputSix.value),
        parseInt(imagePosInputSeven.value),
        parseInt(imagePosInputEight.value)
    ];

    // Update de achtergrondafbeeldingen van de vakjes op basis van de nieuwe afbeeldingVerdeling
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile, index) => {
        const tileNumber = index + 1;
        if (afbeeldingVerdeling.includes(tileNumber)) {
            const imgIndex = afbeeldingVerdeling.indexOf(tileNumber);
            tile.style.backgroundImage = `url('images/image (${imgIndex + 1}).png')`;
            tile.style.transform = 'scale(1.4)';
            tile.textContent = '';
        } else {
            tile.style.backgroundImage = '';
            tile.style.transform = 'scale(1)';
            tile.textContent = tileNumber;
        }
    });
});

// --- 2. Dobbelsteen Logica ---
const rollBtn = document.getElementById('roll-btn');
const diceResult = document.getElementById('dice-result');

rollBtn.addEventListener('click', () => {
    // Genereert een willekeurig getal tussen 1 en 6
    const roll = Math.floor(Math.random() * 6) + 1;
    
    // Korte animatie simulatie
    diceResult.textContent = '...';
    rollBtn.disabled = true;
    
    setTimeout(() => {
        diceResult.textContent = roll;
        rollBtn.disabled = false;
    }, 300); // 300ms vertraging voor een "rol" effect
});

// --- 3. Drag & Drop Logica (Touch & Muis compatibel) ---
// We gebruiken de Pointer Events API omdat deze muis-, pen- en touchevents naadloos combineert.
const pawns = document.querySelectorAll('.pawn');
let activePawn = null;
let initialX = 0;
let initialY = 0;

pawns.forEach(pawn => {
    pawn.addEventListener('pointerdown', dragStart);
});

// Event listeners op het window object zorgen ervoor dat je de pion niet 'verliest' 
// als je te snel sleept en de cursor/vinger buiten de pion belandt.
window.addEventListener('pointermove', drag);
window.addEventListener('pointerup', dragEnd);

function dragStart(e) {
    activePawn = e.target;
    
    // Bereken de positie van de muis/vinger relatief ten opzichte van de linkerbovenhoek van de pion
    const rect = activePawn.getBoundingClientRect();
    const boardRect = boardElement.getBoundingClientRect();
    
    initialX = e.clientX - rect.left;
    initialY = e.clientY - rect.top;
    
    activePawn.style.zIndex = 100; // Breng de actieve pion naar de voorgrond
    
    // Voorkom standaard gedrag (zoals tekst selecteren) tijdens het slepen
    e.preventDefault(); 
}

function drag(e) {
    if (activePawn) {
        e.preventDefault();
        
        // Bereken de nieuwe positie relatief ten opzichte van het bord
        const boardRect = boardElement.getBoundingClientRect();
        let newX = e.clientX - boardRect.left - initialX;
        let newY = e.clientY - boardRect.top - initialY;

        // Optioneel: grenzen instellen zodat pionnen niet buiten de container kunnen
        // newX = Math.max(0, Math.min(newX, boardRect.width - activePawn.offsetWidth));
        // newY = Math.max(0, Math.min(newY, boardRect.height - activePawn.offsetHeight));

        activePawn.style.left = newX + 'px';
        activePawn.style.top = newY + 'px';
    }
}

function dragEnd() {
    if (activePawn) {
        activePawn.style.zIndex = 10; // Reset z-index
        activePawn = null;
    }
}