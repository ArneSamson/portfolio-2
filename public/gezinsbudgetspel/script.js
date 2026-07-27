// De datastructuur van het bord (36 vakjes = 6x6 grid)
// 17x rood (~50%), 10x geel (~30%), 7x wit (~20%), 1x start, 1x einde
const bordData = [
    "start", "wit", "rood", "geel", "rood", "wit",
    "rood", "geel", "rood", "rood", "geel", "wit", 
    "rood", "geel", "rood", "rood", "geel", "wit", 
    "rood", "rood", "geel", "rood", "wit", "geel", 
    "rood", "rood", "geel", "rood", "wit", "rood", 
    "geel", "rood", "rood", "wit", "geel", "einde"
];

// --- KOSTEN DATA PER GEZIN ---
const vasteKostenData = {
    1: [ // Gezin 1: Jong koppel
        { naam: "Hypotheek", bedrag: 1400 },
        { naam: "Elektriciteit + Gas", bedrag: 145 },
        { naam: "Water", bedrag: 35 },
        { naam: "Mobiele telefoon + Internet", bedrag: 150 },
        { naam: "Boodschappen", bedrag: 650 },
        { naam: "Autolening", bedrag: 275 },
        { naam: "Tanken", bedrag: 50 },
        { naam: "Basic-Fit abonnement", bedrag: 35 },
        { naam: "Motorverzekering", bedrag: 20 },
        { naam: "Autoverzekering", bedrag: 140 },
        { naam: "Apple abonnement", bedrag: 25 },
        { naam: "Netflix", bedrag: 15 },
        { naam: "Disney+", bedrag: 15 },
        { naam: "Auto- en motorbelasting", bedrag: 35 },
        { naam: "Ziekteverzekering", bedrag: 60 },
        { naam: "Familiaal- en woonverzekering", bedrag: 20 },
        { naam: "Hamster", bedrag: 20 }
    ],
    2: [ // Gezin 2: Groot gezin met 4 kinderen[cite: 1]
        { naam: "Hypotheek", bedrag: 1700 },
        { naam: "Elektriciteit + Gas", bedrag: 350 },
        { naam: "Water", bedrag: 100 },
        { naam: "Mobiele telefoon + Internet", bedrag: 200 },
        { naam: "Boodschappen", bedrag: 950 },
        { naam: "Autolening", bedrag: 250 },
        { naam: "Tanken", bedrag: 50 },
        { naam: "Basic-Fit abonnement", bedrag: 35 },
        { naam: "Schoolrekening", bedrag: 540 }, // €135 x 4
        { naam: "Autoverzekering", bedrag: 140 },
        { naam: "Apple abonnement", bedrag: 25 },
        { naam: "Netflix", bedrag: 15 },
        { naam: "Disney+", bedrag: 15 },
        { naam: "Autobelasting", bedrag: 100 },
        { naam: "Ziekteverzekering", bedrag: 180 },
        { naam: "Familiaal- en woonverzekering", bedrag: 60 },
        { naam: "Hond", bedrag: 70 }
    ],
    3: [ // Gezin 3: Klein gezin met 2 kinderen[cite: 1]
        { naam: "Huur", bedrag: 1500 },
        { naam: "Elektriciteit + Gas", bedrag: 250 },
        { naam: "Water", bedrag: 70 },
        { naam: "Mobiele telefoon + Internet", bedrag: 150 },
        { naam: "Boodschappen", bedrag: 750 },
        { naam: "Kinderopvang", bedrag: 150 },
        { naam: "Tanken", bedrag: 50 },
        { naam: "Basic-Fit abonnement", bedrag: 35 },
        { naam: "Schoolrekening", bedrag: 270 }, // €135 x 2
        { naam: "Autoverzekering", bedrag: 40 },
        { naam: "Microsoft Office", bedrag: 10 },
        { naam: "E-boek abonnement", bedrag: 12 },
        { naam: "Disney+", bedrag: 15 },
        { naam: "Autobelasting", bedrag: 35 },
        { naam: "Ziekteverzekering", bedrag: 120 },
        { naam: "Familiaal- en woonverzekering", bedrag: 40 },
        { naam: "Kat", bedrag: 40 }
    ],
    4: [ // Gezin 4: Alleenstaande ouder met 1 kind[cite: 1]
        { naam: "Hypotheek", bedrag: 1100 },
        { naam: "Elektriciteit + Gas", bedrag: 145 },
        { naam: "Water", bedrag: 35 },
        { naam: "Mobiele telefoon + Internet", bedrag: 150 },
        { naam: "Boodschappen", bedrag: 650 },
        { naam: "Autolening", bedrag: 275 },
        { naam: "Tanken", bedrag: 50 },
        { naam: "Yoga lessen", bedrag: 35 },
        { naam: "Schoolrekening", bedrag: 135 }, // €135 x 1
        { naam: "Autoverzekering", bedrag: 140 },
        { naam: "OneDrive abonnement", bedrag: 8 },
        { naam: "Netflix", bedrag: 15 },
        { naam: "Disney+", bedrag: 15 },
        { naam: "Autobelasting", bedrag: 35 },
        { naam: "Ziekteverzekering", bedrag: 100 },
        { naam: "Familiaal- en woonverzekering", bedrag: 35 },
        { naam: "Vis", bedrag: 20 }
    ]
};

const kanskaartenData = [
    {
        id: "pizza_avond",
        titel: "Pizza-avond 🍕",
        type: "keuze",
        beschrijving: (speler) => {
            if (speler.fiche.id === 1) return "Je partner wil pizza bestellen.";
            if (speler.fiche.id === 4) return "Je kind wil pizza bestellen.";
            return "Je kinderen willen pizza bestellen.";
        },
        berekenKost: (speler) => {
            const kosten = { 1: 25, 2: 100, 3: 50, 4: 25 };
            return kosten[speler.fiche.id];
        }
    },
    {
        id: "filmavond",
        titel: "Filmavond 🎬",
        type: "keuze",
        beschrijving: (speler) => {
            if (speler.fiche.id === 1) return "Je vrienden vragen je mee naar de cinema.";
            return "Met het gezin naar de cinema.";
        },
        berekenKost: (speler) => {
            const kosten = { 1: 30, 2: 150, 3: 90, 4: 45 };
            return kosten[speler.fiche.id];
        }
    },
    {
        id: "daguitstap_dierentuin",
        titel: "Daguitstap 🦁",
        type: "keuze",
        beschrijving: (speler) => {
            if (speler.fiche.id === 1) return "Je wilt naar de dierentuin.";
            if (speler.fiche.id === 4) return "Je wilt met je kindje naar de dierentuin.";
            return "Je wilt met de kinderen naar de dierentuin.";
        },
        berekenKost: (speler) => {
            const kosten = { 1: 60, 2: 180, 3: 120, 4: 60 };
            return kosten[speler.fiche.id];
        }
    },
    {
        id: "frietjesavond",
        titel: "Frietjesavond 🍟",
        type: "keuze",
        beschrijving: (speler) => {
            if (speler.fiche.id === 1) return "Je wilt graag frietjes in plaats van koken.";
            return "Je vraagt frietjes in plaats van koken.";
        },
        berekenKost: (speler) => {
            const kosten = { 1: 35, 2: 100, 3: 50, 4: 25 };
            return kosten[speler.fiche.id];
        }
    },
    {
        id: "lekke_band",
        titel: "Lekke band 🚲",
        type: "verplicht",
        beschrijving: () => "Je fietsband moet geplakt worden.",
        berekenKost: () => 30
    },
    {
        id: "nieuwe_schoenen",
        titel: "Nieuwe schoenen 👟",
        type: (speler) => speler.fiche.id === 1 ? "keuze" : "verplicht",
        beschrijving: (speler) => {
            if (speler.fiche.id === 1) return "Je schoenen zijn versleten.";
            if (speler.fiche.id === 4) return "De schoenen van je kind zijn versleten.";
            return "De schoenen van je kinderen zijn versleten.";
        },
        berekenKost: (speler) => {
            const kosten = { 1: 105, 2: 260, 3: 130, 4: 65 };
            return kosten[speler.fiche.id];
        }
    },
    {
        id: "doktersbezoek",
        titel: "Doktersbezoek 👩‍⚕️",
        type: "verplicht",
        beschrijving: (speler) => {
            if (speler.fiche.id === 1) return "Je voelt je niet lekker.";
            return "Je kind voelt zich niet lekker.";
        },
        berekenKost: () => 25
    },
    {
        id: "kapperbezoek",
        titel: "Kapperbezoek ✂️",
        type: "keuze",
        beschrijving: () => "Tijd voor een frisse coupe.",
        berekenKost: (speler) => {
            const kosten = { 1: 40, 2: 120, 3: 80, 4: 40 };
            return kosten[speler.fiche.id];
        }
    },
    {
        id: "kapotte_wasmachine",
        titel: "Kapotte wasmachine 🧼",
        type: "verplicht",
        beschrijving: () => "Pech, je wasmachine is kapot!",
        berekenKost: () => 640
    },
    {
        id: "ziek_huisdier",
        titel: "Ziek huisdier 🏥",
        type: "verplicht",
        beschrijving: (speler) => {
            const dieren = { 1: "hamster", 2: "hond", 3: "kat", 4: "vis" };
            return `Je ${dieren[speler.fiche.id]} moet geopereerd worden!`;
        },
        berekenKost: (speler) => {
            const kosten = { 1: 340, 2: 340, 3: 340, 4: 240 };
            return kosten[speler.fiche.id];
        }
    },
    {
        id: "koffie_to_go",
        titel: "Koffie to go ☕",
        type: "keuze",
        beschrijving: (speler) => {
            if (speler.fiche.id === 1) return "Je haalt onderweg een lekkere cappuccino voor jou en je partner.";
            if (speler.fiche.id === 4) return "Je haalt onderweg een lekkere cappuccino voor jou en je kind.";
            return "Je haalt onderweg een lekkere cappuccino voor jou en je gezin.";
        },
        berekenKost: (speler) => {
            const kosten = { 1: 10, 2: 30, 3: 15, 4: 10 };
            return kosten[speler.fiche.id];
        }
    },
    {
        id: "verjaardagscadeau",
        titel: "Verjaardagscadeau 🎁",
        type: "verplicht",
        beschrijving: () => "Een vriend(in) geeft een feestje.",
        berekenKost: () => 20
    },
    {
        id: "boompje_geraakt",
        titel: "Boompje geraakt 🚗",
        type: "keuze",
        beschrijving: () => "Een bluts in je auto moet gerepareerd worden.",
        berekenKost: () => 250
    },
    {
        id: "game_time",
        titel: "Game time 🎮",
        type: "keuze",
        beschrijving: (speler) => {
            if (speler.fiche.id === 1) return "Je wilt een nieuw videospel.";
            return "Je kinderen willen een nieuw videospel.";
        },
        berekenKost: (speler) => {
            const kosten = { 1: 65, 2: 260, 3: 130, 4: 65 };
            return kosten[speler.fiche.id];
        }
    },
    {
        id: "cafe_avond",
        titel: "Café-avond 🍻",
        type: "keuze",
        beschrijving: () => "Je vrienden nodigen je uit voor een avondje op café.",
        berekenKost: () => 25
    },
    {
        id: "medicatie",
        titel: "Medicatie 💊",
        type: "verplicht",
        beschrijving: (speler) => {
            if (speler.fiche.id === 1) return "Je hebt medicijnen nodig.";
            return "Je kinderen hebben medicijnen nodig.";
        },
        berekenKost: (speler) => {
            const kosten = { 1: 25, 2: 100, 3: 50, 4: 25 };
            return kosten[speler.fiche.id];
        }
    },
    {
        id: "kapotte_auto",
        titel: "Kapotte auto 🚗",
        type: "verplicht",
        beschrijving: () => "Oei, je auto staat in panne!",
        berekenKost: () => 240
    },
    // --- QUIZ KAARTEN (PREVENTIE & FRAUDE) ---
    {
        id: "fraude_quiz_phishing",
        titel: "Verdachte SMS van de Bank 🎣",
        type: "quiz",
        beschrijving: () => "Je krijgt een sms van Card Stop met de melding dat je rekening geblokkeerd is vanwege verdachte activiteiten. Er staat een link bij om dit direct op te lossen. Wat doe je?",
        opties: [
            { tekst: "Je negeert de SMS en surft zelf via je browser naar de officiële website van de bank.", goed: true, kost: 0, uitleg: "Juist! Je past uitstekende preventie toe door phishing te negeren." },
            { tekst: "Je klikt direct op de link en vult je pincode in.", goed: false, kost: 150, uitleg: "Fout! Dit is klassieke phishing. Banken sturen nooit links via SMS om je rekening te deblokkeren." }
        ]
    },
    {
        id: "fraude_quiz_webshop",
        titel: "Te mooie webshop-deal 🛒",
        type: "quiz",
        beschrijving: () => "Je ziet op Instagram een advertentie voor merksneakers met 80% korting op een kleine webshop. Je wilt ze bestellen. Waar let je op?",
        opties: [
            { tekst: "Je koopt ze meteen via Bancontact; een deal is een deal.", goed: false, kost: 90, uitleg: "Fout! Dit is een valse webshop. Controleer altijd of er een geldig ondernemingsnummer en correcte contactgegevens op de site staan." },
            { tekst: "Je checkt de website via Safeonweb en zoekt naar reviews van andere kopers voordat je beslist.", goed: true, kost: 0, uitleg: "Juist! Preventie via controle behoedt je voor financiële schade." }
        ]
    },
    {
        id: "fraude_quiz_tweedehands",
        titel: "Verkoop via Tweedehandsplatform 📦",
        type: "quiz",
        beschrijving: () => "Je koopt iets op Vinted. Een verkoper stuurt je een WhatsApp-bericht met een link om al een deel te betalen voordat die het product opstuurt. Wat doe je?",
        opties: [
            { tekst: "Je klikt op de link en vult je bankgegevens in om je geld te ontvangen.", goed: false, kost: 75, uitleg: "Fout! Dit is een gekende phishingtruc via tweedehandsplatformen (spoofing). Verlaat het platform nooit voor betalingen." },
            { tekst: "Je weigert extern te betalen en handelt alles af binnen de beveiligde chat van de app.", goed: true, kost: 0, uitleg: "Juist! Je beschermt je betaalmiddelen door binnen het officiële verkoopkanaal te blijven." }
        ]
    },
    {
        id: "fraude_quiz_helpdesk",
        titel: "Vreemd telefoontje 📞",
        type: "quiz",
        beschrijving: () => "Je wordt opgebeld door iemand van de fraudebestrijding van je bank te zijn. Ze vragen om je app te openen en een code door te geven om je geld te redden. Wat doe je?",
        opties: [
            { tekst: "Je geeft snel de code door zodat ze je rekening kunnen beveiligen.", goed: false, kost: 200, uitleg: "Fout! Dit is helpdeskfraude. Echte banken of Card Stop vragen nooit om je codes of wachtwoorden via telefoon." },
            { tekst: "Je verbreekt onmiddellijk de verbinding en belt zelf naar het officiële nummer van je bank.", goed: true, kost: 0, uitleg: "Juist! Dit is de correcte nazorg en preventie bij telefonische oplichting." }
        ]
    },
    {
        id: "fraude_quiz_qr",
        titel: "QR-code op de deurmat 🔲",
        type: "quiz",
        beschrijving: () => "Je ontvangt een brief in de bus van de je energieleverancier met de melding dat je van tarief moet wisselen via een QR-code om geld te besparen. Wat doe je?",
        opties: [
            { tekst: "Je scant de QR-code met je smartphone om snel de korting te claimen.", goed: false, kost: 110, uitleg: "Fout! Dit is quishing (QR-phishing). Oplichters plaatsen valse QR-codes om je naar malafide betaalpagina's te leiden." },
            { tekst: "Je negeert de brief en controleert je energiecontract rechtstreeks via de officiële website van je energieleverancier.", goed: true, kost: 0, uitleg: "Juist! Je vermijdt feilloos misbruik via nagemaakte QR-codes." }
        ]
    },
    {
        id: "fraude_quiz_investering",
        titel: "Snelle Crypto-winst 📈",
        type: "quiz",
        beschrijving: () => "Een bekende miljonair belooft op social media dat je je geld binnen een week kunt verdrievoudigen via een uniek crypto-investeringsplatform. Wat doe je?",
        opties: [
            { tekst: "Je meldt de advertentie als fraude en investeert niet.", goed: true, kost: 0, uitleg: "Juist! Je doorziet de online belasting- en crypto-leugens." },
            { tekst: "Je stort direct een klein bedrag om het uit te proberen.", goed: false, kost: 200, uitleg: "Fout! Dit is typische beleggingsfraude. Te mooie beloftes over snelle winsten online zijn altijd oplichting." }
        ]
    },
    {
        id: "fraude_quiz_abonnementsval",
        titel: "Gratis iPhone testpanel 📱",
        type: "quiz",
        beschrijving: () => "Je wint een gloednieuwe smartphone via een pop-up op een website. Je moet enkel € 2 'verzendkosten' betalen met je kredietkaart. Wat doe je?",
        opties: [
            { tekst: "Je sluit het pop-upvenster onmiddellijk en betaalt niets.", goed: true, kost: 0, uitleg: "Juist! Als iets te mooi is om waar te zijn, is dat het ook." },
            { tekst: "Je vult je kredietkaartgegevens in; het is tenslotte maar € 2.", goed: false, kost: 130, uitleg: "Fout! Dit is een abonnementsval. Je zit meteen vast aan een duur, maandelijks verborgen lidmaatschap." }
        ]
    },
    {
        id: "fraude_quiz_valse_mail",
        titel: "E-mail van de Overheid 🏛️",
        type: "quiz",
        beschrijving: () => "Je krijgt een e-mail van Student@Work, het platform voor jobstudenten, met de mededeling dat je nog een loon krijgt. Je moet op een knop klikken en je bankkaartnummer ingeven. Wat doe je?",
        opties: [
            { tekst: "Je logt uit voorzorg zelf in via eID of Itsme op de officiële Student@work website om je dossier te checken.", goed: true, kost: 0, uitleg: "Juist! Je controleert officiële overheidszaken altijd via een beveiligde, eigen login." },
            { tekst: "Je klikt op de knop en vult je bankgegevens in om je geld te ontvangen.", goed: false, kost: 160, uitleg: "Fout! Overheidsdiensten vragen je bankrekeningnummer of kaartgegevens nooit via e-mail of links." }
        ]
    }
];

// Functie om het bord te genereren
function genereerBord() {
    const speelbord = document.getElementById("speelbord");
    
    // Maak het bord eerst leeg
    speelbord.innerHTML = "";

    bordData.forEach((type, index) => {
        const vakje = document.createElement("div");
        vakje.classList.add("vakje", type);

        // Geef het vakje een visueel nummer (behalve start en einde)
        if (type === "start") {
            vakje.textContent = "Start";
        } else if (type === "einde") {
            vakje.textContent = "Betaaldag";
        } else {
            vakje.textContent = index;
        }

        // BEREKENING S-VORM (Ganzenbord patroon in een 6x6 grid)
        const rij = Math.floor(index / 6) + 1; // Rijen 1 t/m 6
        let kolom;
        
        if (rij % 2 !== 0) {
            // Oneven rijen (1, 3, 5): lopen van links naar rechts (1 t/m 6)
            kolom = (index % 6) + 1;
        } else {
            // Even rijen (2, 4, 6): lopen van rechts naar links (6 t/m 1)
            kolom = 6 - (index % 6);
        }

        // Pas de CSS grid posities direct toe
        vakje.style.gridRow = rij;
        vakje.style.gridColumn = kolom;
        
        // Sla het indexnummer op als data-attribuut voor de verplaatsingslogica
        vakje.dataset.index = index;

        // Voeg een pijl toe IN het vakje (behalve bij het allerlaatste vakje)
        if (index < bordData.length - 1) {
            const pijl = document.createElement("div");
            pijl.classList.add("pijl");
            
            // Logica om de pijl dynamisch de juiste kant op te laten wijzen in een S-vorm
            const volgendeRij = Math.floor((index + 1) / 6) + 1;
            if (rij !== volgendeRij) {
                pijl.innerHTML = "⬇"; // Gaat naar de volgende rij
            } else if (rij % 2 !== 0) {
                pijl.innerHTML = "➔"; // Oneven rij: loopt naar rechts
            } else {
                pijl.innerHTML = "⬅"; // Even rij: loopt naar links
            }

            vakje.appendChild(pijl);
        }

        // Voeg het vakje toe aan het speelbord
        speelbord.appendChild(vakje);
    });
}

// Initialiseer het bord wanneer de pagina laadt
document.addEventListener("DOMContentLoaded", () => {
    genereerBord();
});

// --- GLOBALE DATA ---
let spelers = [];
let actieveSpelerIndex = 0;

// De basisgegevens van de 4 gezinnen
const beschikbareFiches = [
    { 
        id: 1, 
        naam: "Jong koppel (zonder kinderen)", 
        startLoon: 4750,
        kindergeldBedrag: 0, // Geen kindergeld[cite: 1]
        samenstelling: "2 volwassenen",
        werk: "Beiden hebben een job",
        kindergeld: "€ 0,00",
        extra: ["Dit koppel heeft geen kinderuitgaven.", "Dit koppel heeft een motor.", "Dit koppel krijgt geen kindergeld."]
    },
    { 
        id: 2, 
        naam: "Groot gezin (4 kinderen)", 
        startLoon: 5150,
        kindergeldBedrag: 400, // € 400 kindergeld[cite: 1]
        samenstelling: "2 volwassenen + 4 kinderen",
        werk: "Beiden hebben een job",
        kindergeld: "€ 400,00",
        extra: ["Het gezin heeft andere vaste kosten door de kinderen.", "Het gezin heeft andere variabele kosten door de kinderen.", "Let op: soms betaal je prijzen per kind, reken dit goed uit!"]
    },
    { 
        id: 3, 
        naam: "Klein gezin (2 kinderen)", 
        startLoon: 2950,
        kindergeldBedrag: 200, // € 200 kindergeld[cite: 1]
        samenstelling: "2 volwassenen + 2 kinderen",
        werk: "Eén van beide heeft een job",
        kindergeld: "€ 200,00",
        extra: ["Het gezin heeft andere vaste kosten door de kinderen.", "Het gezin heeft andere variabele kosten door de kinderen.", "Let op: soms betaal je prijzen per kind, reken dit goed uit!"]
    },
    { 
        id: 4, 
        naam: "Alleenstaande met 1 kind", 
        startLoon: 2350,
        kindergeldBedrag: 100, // € 100 kindergeld[cite: 1]
        samenstelling: "1 volwassene + 1 kind",
        werk: "Volwassene heeft een job",
        kindergeld: "€ 100,00",
        extra: ["Door het kind en maar één volwassene heeft dit gezin andere vaste kosten.", "Door het kind en maar één volwassene heeft dit gezin andere variabele kosten.", "Let op: soms betaal je prijzen per kind, reken dit goed uit!"]
    }
];

// --- OPSTART LOGICA ---
document.getElementById('btn-start').addEventListener('click', startSpel);

function startSpel() {
    // 1. Namen ophalen en lege velden filteren
    const namen = [
        document.getElementById('naam-1').value.trim(),
        document.getElementById('naam-2').value.trim(),
        document.getElementById('naam-3').value.trim(),
        document.getElementById('naam-4').value.trim()
    ].filter(naam => naam !== "");

    const errorMsg = document.getElementById('setup-error');

    // 2. Controle: Minstens 2 spelers?
    if (namen.length < 2) {
        errorMsg.classList.remove('verborgen');
        return;
    }

    // 3. Fiches willekeurig schudden (Fisher-Yates shuffle algoritme)
    let geschuddeFiches = [...beschikbareFiches];
    for (let i = geschuddeFiches.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [geschuddeFiches[i], geschuddeFiches[j]] = [geschuddeFiches[j], geschuddeFiches[i]];
    }

    // 4. Speler objecten aanmaken
    namen.forEach((naam, index) => {
        spelers.push({
            id: index,
            naam: naam,
            fiche: geschuddeFiches[index],
            saldo: geschuddeFiches[index].startLoon + geschuddeFiches[index].kindergeldBedrag, // Startsaldo = maandloon
            positie: 0, // Startvakje = 0
            leningen: 0,
            huidigeVasteKostIndex: 0 // Om bij te houden welke vaste kost als volgende betaald moet worden
        });
    });

    // 5. Opstartscherm verbergen en interface laden
    document.getElementById('setup-overlay').classList.add('verborgen');
    updateDashboard();
    tekenPionnen();
}

// --- INTERFACE UPDATEN ---
function updateDashboard() {
    const spelersLijst = document.querySelector('.spelers-lijst');
    spelersLijst.innerHTML = ""; // Maak leeg voor de hertekening

    spelers.forEach((speler, index) => {
        // Bepaal of het saldo positief of negatief is
        const saldoClass = speler.saldo >= 0 ? "positief" : "negatief";
        
        // Bepaal wie er aan de beurt is
        const actiefClass = index === actieveSpelerIndex ? "actief" : "";
        
        // Koppel de kleur van de pion aan het dashboard
        const spelerKleur = pionKleuren[index]; 

        // HTML voor één spelerkaart opbouwen met inline CSS voor de spelerkleur
        const spelerHTML = `
            <div class="speler-kaart ${actiefClass}" id="speler-kaart-${speler.id}" style="border-left: 6px solid ${spelerKleur};">
                <h3 style="color: ${spelerKleur};">${speler.naam}</h3>
                <p class="fiche-type" style="cursor: pointer; text-decoration: underline;" onclick="toonGezinInfo(${speler.id})" title="Klik om gezinssituatie te bekijken">
                    📋 ${speler.fiche.naam} (Info)
                </p>
                <div class="speler-stats">
                    <span><strong>Loon:</strong> € ${speler.fiche.startLoon}</span>
                    <span><strong>Leningen:</strong> ${speler.leningen}</span>
                </div>
                <div class="saldo-weergave ${saldoClass}">
                    € ${speler.saldo}
                </div>
                <button class="btn-lening" onclick="neemLening(${speler.id})">Lening aanvragen (€500)</button>
            </div>
        `;
        
        spelersLijst.innerHTML += spelerHTML;
    });
}

// --- KLEUREN VOOR DE PIONNEN ---
// Speler 1 = Blauw, Speler 2 = Groen, Speler 3 = Oranje, Speler 4 = Paars
const pionKleuren = ["#0056b3", "#4CAF50", "#ff9800", "#9c27b0"]; 

// // --- DOBBELSTEEN & BEURTEN LOGICA ---
// const btnDobbelen = document.getElementById('btn-dobbelen');
// const weergaveDobbelsteen = document.getElementById('dobbel-resultaat');

// // Koppel de klik op de knop aan de functie
// btnDobbelen.addEventListener('click', werpDobbelsteen);

// function werpDobbelsteen() {
//     // Voorkom dubbelklikken terwijl de animatie loopt
//     btnDobbelen.disabled = true;
//     const speler = spelers[actieveSpelerIndex];

//     // Simuleer een dobbel-animatie (cijfers die snel wisselen)
//     let teller = 0;
//     const animatieInterval = setInterval(() => {
//         weergaveDobbelsteen.textContent = Math.floor(Math.random() * 6) + 1;
//         teller++;
        
//         if (teller > 10) {
//             // Stop animatie en bepaal definitieve worp
//             clearInterval(animatieInterval);
//             const definitieveWorp = Math.floor(Math.random() * 6) + 1;
//             weergaveDobbelsteen.textContent = definitieveWorp;
            
//             // Verplaats de speler
//             verplaatsSpeler(speler, definitieveWorp);
//         }
//     }, 50); // Snelheid van de animatie (50ms)
// }

// --- HANDMATIGE WORP LOGICA ---
const btnBevestigWorp = document.getElementById('btn-bevestig-worp');
const inputWorp = document.getElementById('input-worp');

btnBevestigWorp.addEventListener('click', verwerkHandmatigeWorp);

function verwerkHandmatigeWorp() {
    const worp = parseInt(inputWorp.value);

    // Controleer of het getal geldig is (tussen 1 en 6)
    if (isNaN(worp) || worp < 1 || worp > 6) {
        alert("Geef een geldig getal in tussen 1 en 6!");
        return;
    }

    // Blokkeer de knop tijdelijk tijdens de verplaatsing
    btnBevestigWorp.disabled = true;
    inputWorp.disabled = true;

    const speler = spelers[actieveSpelerIndex];

    // Verplaats de speler direct met het ingevoerde getal
    verplaatsSpeler(speler, worp);
}

function verplaatsSpeler(speler, worp) {
    const oudePositie = speler.positie;
    speler.positie += worp;
    
    // Zorg dat ze niet voorbij het laatste vakje kunnen lopen
    const laatsteVakjeIndex = bordData.length - 1;
    if (speler.positie >= laatsteVakjeIndex) {
        speler.positie = laatsteVakjeIndex;
    }

    tekenPionnen(); // Update het bord visueel

    // Na een korte pauze voor de animatie, handel de vakjes af
    setTimeout(() => {
        handelRouteAf(speler, oudePositie, speler.positie);
    }, 800);
}

function tekenPionnen() {
    spelers.forEach((speler, index) => {
        const doelVakje = document.querySelector(`[data-index="${speler.positie}"]`);
        
        if (doelVakje) {
            // Zoek of de pion van deze speler al op het scherm staat
            let pion = document.getElementById(`pion-${speler.id}`);
            
            if (!pion) {
                // Als de pion nog niet bestaat, maak hem dan aan en voeg toe aan de body of het speelbord
                pion = document.createElement('div');
                pion.id = `pion-${speler.id}`;
                pion.classList.add('pion');
                pion.style.backgroundColor = pionKleuren[index];
                document.body.appendChild(pion); // We plaatsen hem op de body zodat hij vrij over het bord kan bewegen
            }

            // Bereken de exacte pixel-coördinaten van het doelvakje op het scherm
            const rect = doelVakje.getBoundingClientRect();
            
            // Kleine verschuiving per speler zodat ze elkaar niet volledig bedekken op hetzelfde vakje
            const offsets = [
                { x: 15, y: 15 }, // Speler 1
                { x: 45, y: 15 }, // Speler 2
                { x: 15, y: 45 }, // Speler 3
                { x: 45, y: 45 }  // Speler 4
            ];
            const offset = offsets[index];

            // Pas de linker- en bovenkant aan; de CSS 'transition' zorgt voor de glijdende animatie
            pion.style.left = `${window.scrollX + rect.left + offset.x}px`;
            pion.style.top = `${window.scrollY + rect.top + offset.y}px`;
        }
    });
}

function volgendeBeurt() {
    actieveSpelerIndex = (actieveSpelerIndex + 1) % spelers.length;
    
    updateDashboard(); 
    
    // Maak het invoerveld en de knop weer beschikbaar
    const btnBevestigWorp = document.getElementById('btn-bevestig-worp');
    const inputWorp = document.getElementById('input-worp');
    
    if (btnBevestigWorp && inputWorp) {
        btnBevestigWorp.disabled = false;
        inputWorp.disabled = false;
        inputWorp.value = "1"; // Reset naar 1
    }
}

// --- VAKJES LOGICA ---
function handelRouteAf(speler, start, eind) {
    let gepasseerdeKosten = [];
    let totaalKost = 0;

    // Loop door elk vakje dat de speler net gepasseerd is (of op is geland)
    for (let i = start + 1; i <= eind; i++) {
        if (bordData[i] === "rood") {
            // Haal de volgende kost in de rij op voor deze speler
            // De modulo (%) zorgt ervoor dat als de lijst op is, ze terug bij index 0 beginnen
            const gezinKostenLijst = vasteKostenData[speler.fiche.id];

            const kostIndex = speler.huidigeVasteKostIndex % gezinKostenLijst.length;
            const kost = gezinKostenLijst[kostIndex];
            
            gepasseerdeKosten.push(kost);
            totaalKost += kost.bedrag;
            
            // Verhoog de teller voor de volgende keer
            speler.huidigeVasteKostIndex++;
        }
    }

    // Controleer of er kosten zijn verzameld
    if (gepasseerdeKosten.length > 0) {
        toonKostenModal(speler, gepasseerdeKosten, totaalKost);
    } else {
        // Geen rode vakjes gepasseerd? Check of ze toevallig op geel (kanskaart) staan
        checkLandingsVakje(speler);
    }
}

function toonKostenModal(speler, kostenArray, totaal) {
    const modal = document.getElementById('modal-overlay');
    const modalTitel = document.getElementById('modal-titel');
    const modalLijst = document.getElementById('modal-kosten-lijst');
    const modalTotaal = document.querySelector('.totaal-kost');
    const btnBetaal = document.getElementById('btn-betaal');

    // Vul de HTML van de modal in
    modalTitel.textContent = `${speler.naam}, je hebt rekeningen!`;
    
    modalLijst.innerHTML = ""; // Maak lijst leeg
    kostenArray.forEach(kost => {
        const li = document.createElement('li');
        li.textContent = `${kost.naam}: - € ${kost.bedrag}`;
        modalLijst.appendChild(li);
    });

    modalTotaal.textContent = `Totaal te betalen: € ${totaal}`;
    
    // Toon de modal
    modal.classList.remove('verborgen');

    // Event listener voor de betaalknop (gebruik onclick om dubbele events te voorkomen)
    btnBetaal.onclick = function() {
        speler.saldo -= totaal;
        updateDashboard();
        
        modal.classList.add('verborgen');
        
        // Na het betalen, check of we op een speciaal vakje zijn geland (bv. geel)
        checkLandingsVakje(speler);
    };
}

function checkLandingsVakje(speler) {
    const landingsVakje = bordData[speler.positie];

    if (landingsVakje === "geel") {
        trekKanskaart(speler);
    } else if (landingsVakje === "einde") {
        handelBetaaldagAf(speler); // GEWIJZIGD
    } else {
        volgendeBeurt();
    }
}

function trekKanskaart(speler) {
    // 1. Kies een willekeurige kaart uit de array
    const willekeurigeIndex = Math.floor(Math.random() * kanskaartenData.length);
    const kaart = kanskaartenData[willekeurigeIndex];

    // 2. Bepaal de waarden voor dit specifieke gezin (omdat sommige properties functies zijn)
    const kaartType = typeof kaart.type === 'function' ? kaart.type(speler) : kaart.type;
    const beschrijving = typeof kaart.beschrijving === 'function' ? kaart.beschrijving(speler) : kaart.beschrijving;
    
    // 3. Haal de DOM-elementen op
    const modal = document.getElementById('kanskaart-modal');
    const titelEl = document.getElementById('kanskaart-titel');
    const beschrijvingEl = document.getElementById('kanskaart-beschrijving');
    const kostEl = document.getElementById('kanskaart-kost');
    const knoppenContainer = document.getElementById('kanskaart-knoppen');
    const resultaatEl = document.getElementById('kanskaart-resultaat');

    // 4. Reset de modal voor hergebruik
    resultaatEl.textContent = "";
    knoppenContainer.innerHTML = "";
    knoppenContainer.style.display = 'flex'; // Zorg dat knoppen zichtbaar zijn
    
    titelEl.textContent = kaart.titel;
    beschrijvingEl.textContent = beschrijving;

    // 5. Bouw de UI afhankelijk van het kaartType
    if (kaartType === "verplicht") {
        const kost = typeof kaart.berekenKost === 'function' ? kaart.berekenKost(speler) : kaart.berekenKost;
        kostEl.textContent = `Kost: € ${kost}. Verplicht te betalen.`;
        
        const btnBetaal = document.createElement('button');
        btnBetaal.textContent = "Betaal";
        btnBetaal.onclick = () => verwerkKanskaart(speler, kost, modal);
        knoppenContainer.appendChild(btnBetaal);

    } else if (kaartType === "keuze") {
        const kost = typeof kaart.berekenKost === 'function' ? kaart.berekenKost(speler) : kaart.berekenKost;
        kostEl.textContent = `Kost: € ${kost}. Doe je dit of niet?`;

        const btnJa = document.createElement('button');
        btnJa.textContent = "Ja (Betalen)";
        btnJa.onclick = () => verwerkKanskaart(speler, kost, modal);
        
        const btnNee = document.createElement('button');
        btnNee.textContent = "Nee (Negeren)";
        btnNee.onclick = () => sluitKanskaart(modal);

        knoppenContainer.appendChild(btnJa);
        knoppenContainer.appendChild(btnNee);

    } else if (kaartType === "risico") {
        const veiligeKost = typeof kaart.veiligeKost === 'function' ? kaart.veiligeKost(speler) : kaart.veiligeKost;
        const boete = typeof kaart.risicoBoete === 'function' ? kaart.risicoBoete(speler) : kaart.risicoBoete;
        
        kostEl.innerHTML = `Nu laten maken: € ${veiligeKost}.<br>Niet maken? Dobbelen: 1, 2 of 3 = € ${boete} boete. 4, 5 of 6 = Gratis.`;

        const btnJa = document.createElement('button');
        btnJa.textContent = `Ja (Betaal € ${veiligeKost})`;
        btnJa.onclick = () => verwerkKanskaart(speler, veiligeKost, modal);

        const btnNee = document.createElement('button');
        btnNee.textContent = "Nee (Dobbelen)";
        btnNee.onclick = () => voerRisicoUit(speler, boete, resultaatEl, modal, knoppenContainer);

        knoppenContainer.appendChild(btnJa);
        knoppenContainer.appendChild(btnNee);
    } else if (kaartType === "quiz") {
        kostEl.textContent = "Kies het juiste antwoord om fraude te voorkomen:";
        
        // Loop door de antwoordopties van de kaart
        kaart.opties.forEach((optie) => {
            const btnOptie = document.createElement('button');
            btnOptie.textContent = optie.tekst;
            btnOptie.style.display = "block";
            btnOptie.style.width = "100%";
            btnOptie.style.margin = "8px 0";
            btnOptie.style.padding = "10px";
            
            btnOptie.onclick = () => verwerkQuizAntwoord(speler, optie, kostEl, knoppenContainer, modal);
            knoppenContainer.appendChild(btnOptie);
        });
    }


    // Toon de modal
    modal.classList.remove('verborgen');
}

function verwerkQuizAntwoord(speler, optie, kostEl, knoppenContainer, modal) {
    // Maak de knoppen leeg zodat ze niet meer kunnen klikken
    knoppenContainer.innerHTML = "";
    
    if (optie.goed) {
        kostEl.innerHTML = `<strong style="color: #2e7d32;">Juist!</strong><br>${optie.uitleg}<br><br>Geen kosten.`;
    } else {
        kostEl.innerHTML = `<strong style="color: #c62828;">Fout!</strong><br>${optie.uitleg}<br><br>Kost: - € ${optie.kost}`;
        speler.saldo -= optie.kost;
        updateDashboard();
    }

    // Voeg een 'Doorgaan' knop toe
    const btnDoorgaan = document.createElement('button');
    btnDoorgaan.textContent = "Doorgaan";
    btnDoorgaan.className = "btn-primary";
    btnDoorgaan.onclick = () => sluitKanskaart(modal);
    knoppenContainer.appendChild(btnDoorgaan);
}

// --- HULPFUNCTIES VOOR DE KANSKAARTEN ---

function verwerkKanskaart(speler, bedrag, modal) {
    speler.saldo -= bedrag;
    updateDashboard(); // Update het saldo op het scherm
    sluitKanskaart(modal);
}

function sluitKanskaart(modal) {
    modal.classList.add('verborgen');
    volgendeBeurt(); // Geef de beurt door aan de volgende speler
}

function voerRisicoUit(speler, boete, resultaatEl, modal, knoppenContainer) {
    // Verberg de 'Ja/Nee' knoppen tijdens het dobbelen
    knoppenContainer.style.display = 'none';
    resultaatEl.textContent = "🎲 Aan het dobbelen...";

    // Simuleer een korte wachttijd voor spanning
    setTimeout(() => {
        const worp = Math.floor(Math.random() * 6) + 1; // Genereer 1 t/m 6
        
        if (worp <= 3) {
            resultaatEl.textContent = `Je gooide ${worp}. Oei! Je krijgt een boete van € ${boete}.`;
            speler.saldo -= boete;
            updateDashboard();
        } else {
            resultaatEl.textContent = `Je gooide ${worp}. Oef! Je hebt geluk, de lamp werkt weer. Geen kosten.`;
        }

        // Genereer een "Doorgaan" knop nadat het resultaat bekend is
        setTimeout(() => {
            knoppenContainer.innerHTML = ""; // Maak container leeg
            knoppenContainer.style.display = 'flex'; // Toon container weer
            
            const btnDoorgaan = document.createElement('button');
            btnDoorgaan.textContent = "Doorgaan";
            btnDoorgaan.onclick = () => sluitKanskaart(modal);
            knoppenContainer.appendChild(btnDoorgaan);
        }, 1000); // 1 seconde wachten voor de knop verschijnt zodat ze de tekst kunnen lezen

    }, 800); // 0.8 seconden 'dobbel'-tijd
}

function handelBetaaldagAf(speler) {
    const modal = document.getElementById('betaaldag-modal');
    const tekstEl = document.getElementById('betaaldag-tekst');
    const overzichtEl = document.getElementById('betaaldag-overzicht');
    const eindsaldoEl = document.getElementById('betaaldag-eindsaldo');
    const btnAfronden = document.getElementById('btn-einde-beurt');

    // 1. Bereken de lening-aflossing (€ 550 per openstaande lening)[cite: 1]
    const totaalAflossen = speler.leningen * 550;
    if (speler.leningen > 0) {
        speler.saldo -= totaalAflossen;
    }

    // 2. Bereken de inkomsten: Loondienst + Kindergeld
    const loon = speler.fiche.startLoon;
    const kindergeld = speler.fiche.kindergeldBedrag;
    const totaleInkomsten = loon + kindergeld;

    // Stort de inkomsten op het saldo
    speler.saldo += totaleInkomsten;

    // 3. Bouw de tekst voor de modal op
    tekstEl.textContent = `${speler.naam}, de maand is voorbij! Je leningen zijn verrekend en je ontvangt je maandloon en kindergeld.`;
    
    let overzichtHTML = `<p>Maandloon: + € ${loon}</p>`;
    if (kindergeld > 0) {
        overzichtHTML += `<p>Kindergeld: + € ${kindergeld}</p>`;
    }

    if (speler.leningen > 0) {
        overzichtHTML += `<p>Lening aflossing (${speler.leningen}x): - € ${totaalAflossen}</p>`;
    } else {
        overzichtHTML += `<p>Openstaande leningen: Geen (€ 0)</p>`;
    }

    overzichtEl.innerHTML = overzichtHTML;

    eindsaldoEl.textContent = `Nieuw saldo: € ${speler.saldo}`;
    eindsaldoEl.style.color = speler.saldo >= 0 ? "#2e7d32" : "#c62828";

    // 4. Reset parameters voor de volgende maand
    speler.positie = 0; 
    speler.leningen = 0; 
    speler.huidigeVasteKostIndex = 0; 

    updateDashboard(); 
    tekenPionnen(); 
    
    btnAfronden.textContent = "Start nieuwe maand";
    modal.classList.remove('verborgen');

    btnAfronden.onclick = function() {
        modal.classList.add('verborgen');
        volgendeBeurt(); 
    };
}

function neemLening(spelerId) {
    // Zoek de juiste speler op basis van de ID
    const speler = spelers.find(s => s.id === spelerId);
    
    if (speler) {
        // Voeg 500 euro toe aan het saldo en verhoog het aantal leningen met 1
        speler.saldo += 500;
        speler.leningen += 1;
        
        // Ververs het dashboard zodat het nieuwe saldo en de leningen direct zichtbaar zijn
        updateDashboard();
    }
}

function toonGezinInfo(spelerId) {
    const speler = spelers.find(s => s.id === spelerId);
    if (!speler) return;

    const modal = document.getElementById('gezin-info-modal');
    const titelEl = document.getElementById('info-gezin-titel');
    const tekstEl = document.getElementById('info-gezin-tekst');
    const btnSluiten = document.getElementById('btn-sluit-gezin-info');

    titelEl.textContent = speler.fiche.naam;

    // Bouw de lijst met extra informatie op
    let extraHTML = `
        <p><strong>👥 Samenstelling:</strong> ${speler.fiche.samenstelling}</p>
        <p><strong>💼 Werk:</strong> ${speler.fiche.werk}</p>
        <p><strong>💶 Maandelijks loon:</strong> € ${speler.fiche.startLoon}</p>
        <p><strong>💶 Kindergeld:</strong> ${speler.fiche.kindergeld}</p>
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ddd;">
        <p><strong>📌 Extra informatie:</strong></p>
        <ul style="margin-left: 20px; margin-top: 5px;">
    `;

    speler.fiche.extra.forEach(punt => {
        extraHTML += `<li>${punt}</li>`;
    });

    extraHTML += `</ul>`;
    tekstEl.innerHTML = extraHTML;

    modal.classList.remove('verborgen');

    btnSluiten.onclick = function() {
        modal.classList.add('verborgen');
    };
}