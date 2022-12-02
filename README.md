# !Win, une équipe gagnante

Nous sommes heureux de vous présenter notre projet, une application web type `serious game` qui permet de sensibiliser les jeunes à la problématique des IST (Infections Sexuellement Transmissibles).

## Contexte

Après ces heures de rush intense (oui, nous avons travaillé la plupart du temps), nous avons pu réaliser notre projet.

On a débuté notre réflexion en se demandant quel genre de jeu pourrait être intéressant pour les jeunes. Nous avons donc décidé de nous baser sur un jeu textuel sembleable à des messages, et nous avions deux pistes se présenant à nous :

1. Un jeu très narratif qui raconte une histoire et qui permet de faire passer un message, avec pour avantages que le message passe mieux si on a le temps de s'attacher au personnage, et que nous n'avions pas à réaliser beaucoup d'embranchements secondaires à l'histoire. L'inconvénient de cette méthode est que le jeu est très linéaire, et que le joueur ne peut pas vraiment s'impliquer dans l'histoire, il ne peut que la suivre. De plus, il est difficile de garder longtemps un utilisateur sur un jeu linéaire : il s'agit de texte et cela n'a pas d'intérêt pour un jeune qui a accès à des jeux vidéo très immersifs (et qui sont d'autant plus intéressants que l'on peut y jouer avec ses amis).

2. L'autre solution était de faire un jeu avec au contraire beaucoup d'embranchements mais des histoires courtes, avec pour avantages que le joueur peut s'impliquer dans l'histoire, et que le jeu est plus interactif. Cela permet de garder l'utilisateur impliqué dans le jeu, nous permettant de lui faire passer un message (si ce n'est plus facilement, du moins il ne quittera pas la page tout de suite en voyant des pavés de texte)

## Notre solution

Comme vous aurez certainement pu tester, nous avons choisi l'approche 2 : on s'est dit que garder l'utilisateur impliqué dans le jeu était plus important que de lui faire passer un message, car si il quitte tout de suite la page, le message ne serait jamais passé dans tous les cas.

Le vrai challenge était de trouver un moyen de faire passer un message sans que cela soit trop lourd pour l'utilisateur. Nous avons donc décidé de faire un jeu avec des histoires courtes, et de faire passer le message à travers des dialogues entre les personnages.

## L'intégration des sponsors

Évidemment, les défis proposés ont été longuement étudiés par notre équipe, et nous sommes partis sur un combo "Open Data" et "IA".

Ces défis était très intéressants pour nous dans la mesure où ils se recoupaient les uns les autres, et donc réduisait notre charge de travail, nous dégageant du temps pour nous concentrer sur le développement des fonctionnalités principales du jeu.

### Open Data

Dans la catégorie Open Data, nous avons été quelques peu confus quand aux défis relevés. Le premier nous indiquait d'utiliser l'API `api.gouv.fr` et l'autre nous disait d'utiliser `data.gouv.fr`. Au final, nous considérons avoir relevé les deux défis, mais d'une manière un peu particulière. En effet, `data.gouv.fr` est techniquement accessible à travers l'API `api.gouv.fr`, et nous avons décidé d'utiliser donc les contenus de `data.gouv.fr`. **MAIS**, cela ne s'arrête pas là. En effet, un jeu de données intéressant se trouvait sur le site `data.gouv.fr` (Laboratoires d'analyses médicales VIHTEST à Paris), mais les jeux de données n'était potentiellement pas actualisés et surtout il fallait faire des analyses locales des fichiers pour les formater. Avec une analyse de l'API `data.gouv.fr`, nous avons remarqué un lien vers l'API de la ville de Paris qui fournissait les données les plus actualisés, sous forme d'API (donc on espère pas trop loin du sujet originel d'utiliser l'API `api.gouv.fr`). De plus, le jeu de données étant disponible sur `data.gouv.fr`, nous avons pris la liberté d'utiliser l'API plutôt qu'un _dump_ du jeu de données, toujours pour des raisons de données actualisées et pour le challenge de l'utilisation d'une API.

### IA

Concernant l'IA, rebelotte ! Dans le sujet intitulé `Mettez l’IA de DALL-E dans votre projet !`, la description nous a laissé perplexes : nous avons remarqué que ce n'était pas l'utilisation de DALL-E qui était obligatoire, mais l'utilisation d'une API OPENAI. De plus, nous avons complétement abandonné l'idée d'utiliser DALL-E lorsque nous avons vu son coût : au plus nous pouvions générer une dizaine d'images gratuitement.
Alors, nous sommes partis sur une idée de GPT-3 pour compléter des définitions de mots.

### Minimalisme

N'oublions pas le challenge minimalisme ! Nous avons donc décidé de faire un jeu textuel, avec une interface minimaliste : une "chatbox" pour les dialogues, et deux boutons pour les choix. Nous avons également décidé de ne pas utiliser de musique, car nous trouvions que cela n'était pas nécessaire pour un jeu textuel, et que cela pouvait être gênant pour l'utilisateur.

On pense avoir relevé ce challenge, mais nous sommes ouverts à toute critique.

## Conclusion

Nous avons passé un très bon moment à développer ce jeu, et nous espérons que vous l'apprécierez autant que nous. Nous avons appris beaucoup de choses, et nous espérons que vous en aurez appris aussi en jouant à notre jeu.

En bref, cette nuit blanche a été très enrichissante, et malgré le fait que nous avons eu quelques difficultés, nous sommes très fiers du résultat final.

Bon jeu !

## Remerciements

Nous tenons à remercier l'ensemble de l'équipe de la nuit de l'info, ainsi que les sponsors pour nous avoir permis de développer ce jeu. Nous remercions particulièrement M. Synave qui nous sauvé la mise sur une grosse erreur de notre part. Enfin, merci à vous de nous avoir lu jusqu'ici, et nous espérons que vous apprécierez notre jeu !
