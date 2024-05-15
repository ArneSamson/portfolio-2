<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../blog.css" />
    <link rel="icon" href="https://arnesamson.be/assets/favicon/favicon.svg" type="image/x-icon">
    <title>Stage week 7 & 8</title>
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
      Week 7 en 8 van mijn stage bij Flux
    </h1>

    <p>
        Hupla, nog eens 2 weken voorbij. Ik heb weer veel bijgeleerd en veel gedaan.       
    </p>

    <h2>Nog altijd UI ontwikkeling</h2>

    <p>
        Ik heb de afgelopen tijd nog altijd veel werk verzet op het gebied van UI-ontwikkeling. Dit omvatte het opsplitsen van UI-pagina's, 
        het toevoegen van nieuwe componenten en het stylen ervan voor een betere gebruikerservaring. 
        Ik heb knoppen en toggles toegevoegd voor moduleselecties, materiaalkeuzes, afwerkingen en andere opties. Om de interactie te verbeteren, 
        heb ik indicatoren en tooltips geïmplementeerd. Ik heb later wel de toggles terug weggedaan omdat knoppen meer in lijn waren met de rest van de UI. Daarnaast heb ik een landingspagina gemaakt met knoppen voor moduleselectie.
    </p>

    <p>
        Op het gebied van functionaliteit heb ik logica ontwikkeld om ervoor te zorgen dat ten minste één module moet worden geselecteerd. 
        Verder heb ik soepele overgangen en animaties toegevoegd voor module-interacties, zoals het openen/sluiten van deuren en lerpende bewegingen. 
        Ik heb ook functionaliteit toegevoegd voor het schakelen tussen verschillende opties, zoals maten van wijnrekken en afwerkingen van tafels. 
        Het is nu mogelijk om materialen en afwerkingen globaal voor alle modules tegelijk te selecteren, waardoor de gebruiksvriendelijkheid wordt verbeterd.
    </p>
    
    <img src="./media/1.png" alt="UI" class="img" />

    <h2>Kleine visuele 3D aanpassingen</h2>

    <p>
        In het proces van model- en textuurupdates heb ik verschillende modellen in het project bijgewerkt. 
        Ik heb de juiste UV-mapping en texturen toegepast op modellen voor een betere visuele representatie. Daarnaast heb ik een texture preloader geïntegreerd voor vloeiendere textuurovergangen. 
        Ook heb ik aanpassingen gemaakt aan materialen, waaronder ruwheid, metaalheid en toonmappingbelichting.
    </p>

    <p>
        Hiernaast heb ik ook barkrukken toegevoegd aan de tafel. Deze waren eerst niet aanwezig en zorgden voor een betere visuele representatie van de tafel.
    </p>

    <img src="./media/2.png" alt="Barkrukken" class="img" />

    <h2>PDF's genereren</h2>

    <p>
        Ik heb een functionaliteit toegevoegd om PDF's te genereren van de geselecteerde modules en opties. 
        Dit omvatte het gebruiken van een PDF-generator (react-pdf) die de geselecteerde modules en opties weergeeft in een overzichtelijke indeling. 
        Ik heb de PDF-stijl aangepast naar het voorbeeld dat de klant had geleverd. 
        Natuurlijk wil je niet dat opties van niet geselecteerde modules in je overzicht en op de PDF komen dus ik heb ook fucntionaliteit toegevoegd om enkel opties te tonen van geselecteerde modules.
    </p>
    
    <p>
        De PDF's kunnen nu worden gedownload en opgeslagen voor toekomstig gebruik.
    </p>

    <img src="./media/3.png" alt="PDF" class="img" />

    <h2>Die code proper houden hé</h2>

    <p>
        Om de code proper te houden en de prestaties te optimaliseren, heb ik ongebruikte code, componenten, 
        imports en uitgecommentarieerde regels verwijderd. Ook heb ik prestatieverbeteringen doorgevoerd door onnodige renders en herrenders te 
        verminderen en bepaalde functionaliteiten tijdelijk uit te schakelen voor debugdoeleinden.
    </p>

    <p>
        Ik heb uitgebreid getest en geëxperimenteerd met verschillende instellingen, materialen en texturen om de gewenste visuele effecten te bereiken. 
        Hierbij heb ik problemen opgelost met betrekking tot modelrotaties, materiaalselecties en UI-functionaliteit.
    </p>

    <p>
        Tot slot heb ik samen met andere bijdragers samengewerkt door pull requests en merges te integreren om wijzigingen en updates in het project op te nemen. 
        Ik heb versiebeheer uitgevoerd, inclusief branching, merging en conflictoplossing. Kleine aanpassingen zijn gemaakt om de algehele projectkwaliteit en gebruikerservaring te verbeteren. 
        Kortom, mijn recente inspanningen hebben zich gericht op het verfijnen van de gebruikersinterface, het verbeteren van de functionaliteit, 
        het bijwerken van modellen en texturen, en het zorgen voor propere code en optimalisatie in het project.
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
