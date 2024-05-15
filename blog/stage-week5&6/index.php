<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../blog.css" />
    <link rel="icon" href="https://arnesamson.be/assets/favicon/favicon.svg" type="image/x-icon">
    <title>Stage week 5 & 6</title>
  </head>
  <body>

    <?php 
    $password = "ArnesStageBlog092910";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["password"] === $password) {
        ?>


    <a href="../">
      <img
        class="logo"
        src="https://arnesamson.be/assets/logo/samsonic-logo-c4cfed90.svg"
        alt="logo"
      />
    </a>

    <h1>
      Week 5 en 6 van mijn stage bij Flux
    </h1>

    <p>
        UI en UX zijn belangrijk voor een configurator, en daarom heb ik de afgelopen weken veel tijd gestoken in het verfijnen van de UI en de flow.
        We hebben ook een aantal modellen van de klant gekregen en die implementeerde ik in de app.        
    </p>

    <img src="./media/1.png" alt="loaded app screen" />

    <h2>Nieuwe modellen</h2>

    <p>
        De nieuwe modellen die ik heb gekregen van de klant waren een hele uitdaging om te implementeren.
        Ze waren niet op een optimale manier opgebouwd en waren veel te zwaar. Op het web zou dit er voor zorgen dat zwakkere apparaten de app niet kunnen draaien. Het zorgt ook voor veel onnodige data overdracht.
        Ik heb dus ook deze weken veel tijd in Blender doorgebracht om deze modellen te optimaliseren en te verbeteren.
    </p>

    <p>
        Met mijn collega's lach ik al eens hoe slecht de modellen van de klant zijn opgebouwd, maar het is wel een goede oefening voor mij om te leren hoe ik modellen moet optimaliseren en hoe ik ze beter kan maken.
    </p>

    <p>
        Een van de modellen die ik heb gekregen was een model van een kraan. Deze had een kleni filter gaasje op het einde van het mondstuk, en bestond uit een goeie 5000 objecten. Ik kon ze zelfs niet allemaal tegelijk verwijderen want dat deed mijn pc crashen. 
        Bij andere modellen heb ik de kwaliteit wat naar benenden gehaald, want het heeft geen zin om een stoel te hebben die uit even veel vertices bestaat als al de rest van mijn scene te samen, als je dat verschil niet eens kunt zien in de configurator.
    </p>

    <p>
        Bij alle modellen van de keuken modules heb ik ze ook modulair gemaakt zodat je ze op een optimale manier van afgerond naar recht kunt veranderen. 
        Je wilt namelijk niet een volledig nieuw model inladen als je enkel maar een ageronde onderkant wilt, dat is niet goed voor de performance. 
        Dit zorgt wel voor problemen met de UV map, het geen wat bepaald hoe een afbeelding op een model wordt geplakt, maar ook hierop vond ik een oplossing. 
        Je kunt meerde uv maps meegeven met een model. Als de gebruiker voor een ageronde onderkant kiest dan maak ik de rechte onderant onzichtbaar, de afgerone zichtbaar en plaats ik de juiste uv map op de keuken module.
    </p>

    <img src="./media/2.png" alt="Blender object mode view" />
    
    <h2>Nog meer UI aanpassingen</h2>

    <p>
        Ik heb de UI nog meer aangepast. Nu is deze transparent en staat als een overlay over de 3D scene. 
        Dit geeft het een meer luxueze look.
    </p>

    <p>
        Wat ook nog helpt voor de luxueze look is de afwerking van buttons en sliders, het juiste font gebruiken en border radia. 
        Ik heb enkel maar positieve feedback op deze aanpassingen gekregen. Ik ben natuurlijk niet zelf met alles gekomen, maar heb veel inspiratie gehaald uit andere configurators en websites en veel geluisterd naar de feedback van de stagementoren en de andere stagairs.
    </p>

    <img src="./media/3.png" alt="UI" />

    <h2>Animaties</h2>

    <p>
        Ik heb ook een aantal animaties toegevoegd aan de app. ZO is de slider geainmeerd en ook het openen van een detail blokje. 
        Hiernaast heb ik ook het openen van de schuiven en deuren verandert naar een toggle i.p.v. een slider en dit heb ik dan ook geainmeerd met lerping (linear Interpolation). 
        Hier heb ik toch een hele tijd naar zitten zoeken hoe het het best kon. Uiteindelijk heeft mijn collega mij een duwtje in de goeie richting geven.
    </p>

    <p>
        Ik zat ook vast met het dynamisch inladen van nieuwe materialen. Met mijn eerste manier flikekrde het scherm eerst omdat deze de volledige scene hertekende wanneer ik een nieuw materiaal selecteerde. 
        Ik wou dus alle materialen preloaden zodat dit niet meer gebeurde. Dit was me bijna gelukt, maar na er 1.5 uur op te zitten broeden heb ik mijn mentor gevraagd om hulp. Hij gaf me al snel een stukje code uit een ander project dat ik gewoon moet kopiëren en plakken. 
        Met deze code wordt er gewacht totdat de materialen zijn ingeladen en dan pas worden ze toegevoegd aan de scene.
    </p>

    <h2>Verloren moeite?</h2>

    <p>
        We hebben in begin week 6 met de klant gebeld, ik vond dat eigenljk wel spannend. Zelf durfde ik niets te zeggen en heb ik enkel geluisterd. Mijn mentor en de CEO hadden wat vragen voorbereid en samen vroegen we dan ook wat de klant van de app vond en hoe het zit met bepaalde praktische zaken. 
        Ik ben zo ook teweten gekomen dat ik 101 verschillende uitzonderingen in de app ga moeten voorzien. Als je materiaal a neemt dan kun je enkel b en c nemen voor het tafelblad, tenzij het materiaal c is dan kun je enkel a... 
        Zo'n zaken vind ik niet leuk want uitzonderingen coderen is gewoon heel veel werk, en je wilt die tijd liever spenderen aan echte resultaten op te leveren.
    </p>

    <p>
        Ik heb ook een aantal dingen gemaakt die ik uiteindelijk niet ga gebruiken. Zo heb ik een hele tijd gestoken in het maken van een 'drag and drop' systeem voor de modules. 
        Dit was een hele uitdaging en ik heb er veel van geleerd, maar uiteindelijk gaan we het niet gebruiken. 
        Ik heb ook een 'hover' effect gemaakt voor de modules, maar dit was niet nodig voor de klant. 
    </p>

    <p>
        Ik weet dat soms dingen worden aangepast in het midden van een project, en op zich is niet erg want ik heb er veel uit geleerd maar het is wel jammer van de tijd die ik erin heb gestoken. 
        Ik vind het zelfs nog meer jammer omdat de functies echt heel goed waren uitgewerkt.
        Maar niets aan te doen, de klant moet blij zijn, en ik kan de functies overnemen naar toekomstige projecten.
    </p>

    <?php
        } else {
            echo "Wrong password";
        }
    } else {
    ?>
        <a href="../">
            <img
                class="logo"
                src="https://arnesamson.be/assets/logo/samsonic-logo-c4cfed90.svg"
                alt="logo"
            />
        </a>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Submit</button>
        </form>
    <?php
    }    
    ?>

  </body>
</html>
