Classes created automatically through the command

`php bin/console doctrine:mapping:import "App\Entity" annotation --path=src/Entity`

The construct function was then made by hand.

I also removed the @ORM\GeneratedValue(strategy="IDENTITY") annotation, as the ID comes directly from the json.