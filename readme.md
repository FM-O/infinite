#A lire pour lancer le projet
_Les commandes suivantes sont à taper à la racine du projet du projet (infinite)_

+ Si vous ne disposez pas de npm (node.js) ni Bower installés sur votre machine, veuillez suivre la procédure suivante :
+ Si vous disposez de npm mais pas de bower, passez directement à l'étape 2
+ Si vous disposez de Bower installé sur votre machine passez à l'étape 3

## 1. Installation de Node.js

+ Rendez-vous sur ce lien et suivez les instructions :

[Node.js](https://nodejs.org/en/)

+ Une fois Node.Js installé vérifiez que vous vous pouvez bien accéder à npm en tapant cette commande dans votre terminal :

```
$ npm -v
```

## 2. Installation de Bower

+ Bower peut s'installer grace au gestionnaire de package npm
+ Il s'agit de la méthode la plus simple selon moi
+ Tapez la commande suivante dans votre terminal

```
$ npm install -g bower
```

**NB: Il peut arriver notamment sur les systèmes Microsoft que bower soit installé mais que la commande soit indisponible dans le terminal.
Dans la plupart des cas il s'agira d'une variable d'environnement mal configurée, il suffit d'ajouter le chemin de bower au "PATH"**

## 3. Installation des dépendances

+ Rendez-vous à la racine du projet et tapez la commande suivante à partir de votre terminal :

**NB: Il est nécessaire que vous ayez installé Git sur votre machine avant de pouvoir lancer cette commande si tel n'est pas le cas suivez ce [lien](https://git-scm.com/book/fr/v1/D%C3%A9marrage-rapide-Installation-de-Git) pour savoir comment l'installer.**

```
$ bower install
```

+ Les dépendances du projets sont installées et vous pouvez lancer le projet

## 4. Procédure de lancement du projet

+ Infinite est un projet très simple et léger, le point d'entrée est un fichier index.php
+ Pour lancer le projet il suffit de se rendre dans le répertoire en ayant un serveur php disponible en local
+ lancez votre serveur, rendez-vous dans le répertoire "infinite" (soit le root du projet), et si tout se passe bien vous devriez attérir sur le site !