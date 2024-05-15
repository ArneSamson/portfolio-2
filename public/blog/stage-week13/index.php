<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../blog.css" />
    <link rel="icon" href="https://arnesamson.be/assets/favicon/favicon.svg" type="image/x-icon">
    <title>Stage week 13</title>
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
      Week 13 van mijn stage bij Flux
    </h1>

    <h2>
        "Ends are not bad things, they just mean that something else is about to begin."
    </h2>

    <h1>Instanties enzo</h1>

    <p>
        Instanties maken van objecten in React Three Fiber zorgt voor een grote performance boost. 
        In plaats van een object 100 keer te dupliceren, maak je 1 instantie van dat object en plaats je die 100 keer.
        Dit heb ik gedaan voor wijnflessen in de frigo. Ik moest de logica wel een beetje aanpassen om één enkele wijnfles nog op een andere manier in te laden. 
    </p>

    <p>
        Ik heb de instanties manier ook geprobeert om scharnieren te maken voor de deuren van de toren module. 
        Dit bleek uiteindelijk niet ideaal voor de rotatie van de scharnieren. Ik heb ze dan ingebouwd in de modellen van de deur en de toren module zelf.
    </p>

    <img src="./media/1.png" alt="">

    <h1>Nog wat speciale gevalletjes (en frustraties)</h1>

    <p>
        De klant had nog een document doorgestuurd met heel wat feedback en aanpassingen in. Ik moet zeggen dat ik het zeker niet eens ben met een aantal punten.
        Het overview scherm en de fonts zien er "cheap" uit volgens hem, wat ik totaal niet snap. Maar bon, je moet leveren wat de klant wilt zeker?
    </p>

    <p>
        Hierbij had ik dan ook weer meer info over wat er moest gebeuren in de configurator. 
        Heel veel punten had ik eigenlijk al moeten hebben in week 1, voor dat er ook maar 1 lijn code was geschreven. Dit is iets dat me wel heel hard frustreert. 
        Ik had liever gehad dat ik vanaf het begin wist wat er moest gebeuren, zodat ik alles in één keer kon schrijven. 
        Eigenlijk hadden we moeten samenzitten met de klant vanaf dat er groen licht was voor het project, om er achter te komen hoe de klant de UI wilt, fonts, kleuren enzovoort.
    </p>

    <p>
        Buiten deze frustraties heb ik dan in zijn feedback gefilterd wat ik nog kon doen in de laatste week. 
        Zo heb ik nog uitzonderingen van materialen gecodeerd (als je afronding neemt dan kun je bijvoorbeeld gaan hout materiaal nemen), 
        een koffiezetapparaat toegevoegd, de boven genoemde scharnieren, schuiven in de tafel module, etc.
    </p>

    <h1>Spinner deluxe</h1>

    <p>
        De spinner GIF was wat "old-school", dus heb ik Illustrato en After Effects geopend en een nieuwe gemaakt op basis van het logo van Studio Rombauts.
        Omdat het een GIF is kon ik het niet zomaar in de code toevoegen. React-Three-Fiber heeft een eigen ingebouwd laad-component, 
        die heb ik gekopieerd en aangepast zodat het ook GIF formaat accepteert.
    </p>

    <img src="https://raw.githubusercontent.com/ArneSamson/il-giro/main/public/images/GIF/ilGiroLoading.gif" alt="" style="height: 50px; width: auto">

    <h1>Dat was het dan</h1>

    <p>
        We zijn op het einde gekomen. Ik vond het een enorm leerrijke ervaring, ik heb leuke collega's ontmoet, en ik heb gevonden wat ik wil doen als werk voor de komende jaren. 
        Ik vind het best wel jammer om de leuke mensen van Flux achter te laten, maar ik kijk ook wel uit naar het afwerken van mijn eindwerk en daarmee ook mijn studies. 
        Daarna wil ik genieten van een lange zomer en, wie weet, kom ik nog wel eens terug naar Flux, als gast of als collega. 
        Ik weet allesinds dat ze me hier met open armen ontvangen en graag nog van me horen. Dat zal ik zeker nooit vergeten.
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
