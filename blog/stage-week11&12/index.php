<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../blog.css" />
    <link rel="icon" href="https://arnesamson.be/assets/favicon/favicon.svg" type="image/x-icon">
    <title>Stage week 11 & 12</title>
  </head>
  <style>
    .rainbow-text {
        background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        width: fit-content;
        }
  </style>
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
      Week 11 en 12 van mijn stage bij Flux
    </h1>

    <p>
        da ging snel seg...
    </p>

    <h1>UI en UX stopt dus wel...blijkbaar</h1>

    <p>
        Fantastisch nieuws!! Ik heb de voorbije 2 weken niets moeten aanpassen aan de UI. 😎
    </p>

    <h1>Ik ga hier toch even niet meer zijn.</h1>

    <p>
        Omdat stage eindigt maar het project nog niet 100% af is, zal Robbe, mijn stagebuddy, het project overnemen en afwerken. 
        We zijn 90-95% along the way maar die afwerking is wel echt belangrijk. Niet te vergeten dat de website nog in een wordpress omgeving moet worden gezet.
        Ik had 4 uurtjes even tijd waarvna ik niet wist hoe ik het moest invullen, dus ben ik spontaan een volledige documentatie beginnen schrijven voor de configurator. 
        Robbe heeft mij vanaf het begin begelijd en hij kent wel de grote lijnen van het project, maar het is toch handig dat hij een documentatie heeft waarin hij alles kan terugvinden.
        Robbe en Stijn (CEO) waren allesinds heel tevreden dat ik dit gedaan heb.
    </p>

    <img src="./media/2.png" alt="">

    <h1 class="rainbow-text">kleeeeeeurtjes enzo</h1>

    <p>
        De colorpicker die ik gemaakt heb met de RAL kleuren blijft in het project maar hij was gebouwd op de code via react-color. 
        Om beter te integreren voor ons project heb ik de colorpicker volledig vanaf nul geschreven. Dit gaf me meer controle over de styling en de functionaliteit.
        Ik heb er ook voor gezorgd dat de kleuren (swatches) elk een tooltip hebben met de RAL code. De input voor RAL kleuren werkt ook volledig.
    </p>

    <p>
        Hierdoor moest ik ook wel even de datastructuur aanpassen voor de PDF, zodat de RAL kleuren goed worden meegegeven.
    </p>

    <h1>SpiiiiIiiiIiIiIn</h1>

    <p>
        Dit spinner gifje heb ik gemaakt voor de configurator. Het is een gifje van een spinner die draait. 
        Hij wordt getoont als de materialen in de configurator aan het laden zijn. Dit kan soms wel een secondje duren omdat de materialen van de server moeten worden gehaald.
    </p>

    <img src="https://raw.githubusercontent.com/ArneSamson/il-giro/99df85223eddbee10ded7c99e01c3381560b2829/public/images/GIF/spinner.gif" alt="" style="height: 50px; width: auto">

    <h1>Yelllowcon</h1>

    <p>
        Omdat ik (blijkbaar) een high-potential leerling ben, heb ik een uitnodiging gekregen voor Yellowcon. Hierdoor was ik er dinsdag niet. 
        Ik vond Yellowcon echt super interessant wel, en ik heb er heel veel bijgeleerd. Ik zou het zeker aanraden aan iedereen die het zich kan veroorloven.
    </p>
    <P>
        Samen met de feestdag zorgde dit voor een hééél korte week.
        Ik heb maandag eigenlijk gewoon wat code opgekuist en vrijdag heb ik veranderingen van Robbe gemerged op mijn branch. Hij had een bug gefixt met de materialen.

    </P>
    <h1>You can download stuff now</h1>

    <p>
        Ten slotte heb ik een functie toegevoegd aan de configurator zodat de configuratie, samen met de modellen, en de materialen kan gedownload worden als een .glb bestand.
        Potentiële klanten zijn binnehuis architecten en zij moeten aan deze modellen aankunnen, niet enkel aan de offerte met informatie.
    </p>

    <img src="./media/1.png" alt="">

    <p>
        Hierboven zie je een voorbeeld van een download, die erna in Blender is geopend.
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
