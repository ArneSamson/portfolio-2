// De volledige dataset
const studentData = [
    { name: "Arsen", scores: [2, 0, 0], notes: ["Gebruik komma's, handschrift", "Foutloos", "Foutloos"] },
    { name: "Meysa", scores: [2, 1, 0], notes: ["Onafgwerkte zin. Geen hoofdletter op de eerste zin van een vraag.", "Hoofdletters", "Foutloos"] },
    { name: "Aymane", scores: [0, 0, 0], notes: ["Foutloos", "Foutloos", "Foutloos"] },
    { name: "Mukhammad", scores: [1, 3, 2], notes: ["Zinsbouw", "De-het fout, hoofdletters, leestekens", "'dinges', zinsbouw (herhaalde 'en', splitsing van werkwoord)"] },
    { name: "Lucas", scores: [1, 2, 0], notes: ["Lange zin met veel 'en'.", "Hoofdletters, leestekens", "Foutloos"] },
    { name: "Adam", scores: [2, 3, 3], notes: ["'Dan help ik dat mens'. Ontbrekende hoofdletters.", "Zinsbouw, interpunctie, dt-fouten", "zonne panelen, 'aan iets is', zinsbouw"] },
    { name: "Axl", scores: [2, 5, 2], notes: ["Hoofdletters en leestekens.", "Zinsbouw, hoofdletters, 'mss', de-het fout, 'interesant'.", "fietsestalling, goe zijn"] },
    { name: "Ines", scores: [1, 3, 0], notes: ["Leestekens einde zin.", "Leestekens, hoofdletters, dt-fout", "Foutloos"] },
    { name: "Hajar", scores: [1, 0, 0], notes: ["Hoofdletters.", "Foutloos", "Foutloos"] },
    { name: "Gitte", scores: [0, 2, 0], notes: ["Afwezig", "Zinsbouw, hoofdletters", "Foutloos"] },
    { name: "Hanna", scores: [1, 3, 0], notes: ["Maakt geen nieuwe zin of gebruikt geen dubbelpunt.", "hoofdletters, leestekens, zin beginnen met 'en'.", "Foutloos"] },
    { name: "Siraa", scores: [0, 1, 0], notes: ["Foutloos", "Dt-fout", "Foutloos"] },
    { name: "Stan", scores: [1, 0, 0], notes: ["Onafgwerkte zin.", "Foutloos", "Foutloos"] },
    { name: "Louis", scores: [0, 0, 1], notes: ["Foutloos", "Foutloos", "gaan - geen"] },
    { name: "Yoline", scores: [0, 0, 0], notes: ["Foutloos", "Foutloos", "Foutloos"] },
    { name: "Oliver (Dyslexie)", scores: [5, 6, 2], notes: ["Spaties, Goei/Goede, Hoofdletters.", "Hoofdletters, leestekens, advokaat, ingeniër, fisyca, zinbouw.", "als eerst, wouw - wou"] },
    { name: "Lentel", scores: [1, 1, 0], notes: ["Één DT-fout", "Komma zetten voor 'maar'", "Foutloos"] },
    { name: "Mille", scores: [3, 0, 0], notes: ["'Een ander's', Leestekens, Voor/Om.", "Foutloos", "Foutloos"] },
    { name: "Winter", scores: [2, 4, 3], notes: ["onleesbaar antwoord. 'n' weggelaten op einde werkwoord.", "Leestekens, 'gwn', 'akward', 'Natw'.", "u - uw, IK - Ik, vergeten werkwoord"] },
    { name: "Amy", scores: [0, 0, 0], notes: ["Foutloos", "Foutloos", "Foutloos"] },
    { name: "Estee", scores: [0, 0, 0], notes: ["Foutloos", "Foutloos", "Foutloos"] }
];

let studentChart;

// Initialisatie
window.onload = function() {
    const select = document.getElementById('studentSelect');
    studentData.forEach((s, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.innerHTML = s.name;
        select.appendChild(opt);
    });

    initMainChart();
    updateStudentView();
    initSurveyChart();
};

function initMainChart() {
    const ctx = document.getElementById('mainChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Papier', 'Google form', 'Google form met taaltool'],
            datasets: [{
                label: 'Gemiddeld aantal fouten',
                data: [1.19, 1.62, 0.62],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                fill: true,
                tension: 0.3,
                borderWidth: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } }
        }
    });
}

function updateStudentView() {
    const index = document.getElementById('studentSelect').value;
    const student = studentData[index];
    
    // Update Notities
    const notesDiv = document.getElementById('studentNotes');
    notesDiv.innerHTML = `
        <div class="note-box"><h4>Test 1: Papier</h4><p>${student.notes[0]}</p></div>
        <div class="note-box"><h4>Test 2: Digitaal</h4><p>${student.notes[1]}</p></div>
        <div class="note-box"><h4>Test 3: Met Taaltool</h4><p>${student.notes[2]}</p></div>
    `;

    // Update Student Grafiek
    const ctx = document.getElementById('studentChart').getContext('2d');
    if(studentChart) studentChart.destroy();
    
    studentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['T1', 'T2', 'T3'],
            datasets: [{
                label: 'Aantal fouten: ' + student.name,
                data: student.scores,
                backgroundColor: ['#bdc3c7', '#e74c3c', '#27ae60']
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
        }
    });
}

// Vergelijkende Grafiek Groep 1 vs Groep 2
const ctxComp = document.getElementById('comparisonChart').getContext('2d');
new Chart(ctxComp, {
    type: 'bar',
    data: {
        labels: ['Test 1 (papier)', 'Test 2 (digitaal zonder tool)', 'Test 3 (met taaltool)'],
        datasets: [
            {
                label: 'Moderne Wetenschappen',
                data: [1.19, 1.62, 0.62],
                backgroundColor: 'rgba(52, 152, 219, 0.8)'
            },
            {
                label: 'Latijn (netwerkstoring Test 3)',
                data: [0.71, 1.10, null],
                backgroundColor: 'rgba(155, 89, 182, 0.8)'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Evolutie foutenlast per doelgroep',
                font: { size: 16 }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Gemiddeld aantal fouten' }
            }
        }
    }
});

    // Grafiek: Bereidheid Vakgroep
function initSurveyChart() {
    const ctxSurvey = document.getElementById('bereidheidChart').getContext('2d');
    new Chart(ctxSurvey, {
        type: 'doughnut',
        data: {
            labels: [
                'Ja, absoluut nodig (18%)', 
                'Misschien, eerst zien (72%)', 
                'Nee, niet nuttig (10%)'
            ],
            datasets: [{
                data: [2, 8, 1],
                backgroundColor: [
                    '#27ae60', // Groen voor Ja
                    '#f1c40f', // Geel voor Misschien
                    '#e74c3c'  // Rood voor Nee
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { size: 11 } }
                }
            },
            cutout: '60%'
        }
    });
}

// Zorg dat deze wordt aangeroepen na het laden van de pagina
// initSurveyChart();

// Presentatiemodus: Navigeer met de pijltjestoetsen of spatiebalk
const sections = ['#macro', '#analyse', '#draagvlak', '#toolbox'];
let currentSectionIndex = -1;

document.addEventListener('keydown', (e) => {
    // Alleen triggeren bij PijlRechts of Spatiebalk
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault(); // Voorkomt standaard scrollen van de spatiebalk
        currentSectionIndex++;
        if (currentSectionIndex >= sections.length) currentSectionIndex = 0; // Loop terug naar begin
        
        const target = document.querySelector(sections[currentSectionIndex]);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    // Terugspoelen met PijlLinks
    if (e.key === 'ArrowLeft') {
        currentSectionIndex--;
        if (currentSectionIndex < 0) currentSectionIndex = 0;
        
        const target = document.querySelector(sections[currentSectionIndex]);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});