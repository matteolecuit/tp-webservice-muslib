# tp-webservice-muslib
Awesome music lib made with spring and react

# Utilisation

Une version déployée de l'application est disponible ici : https://ws-tp-muslib-front.serveurspaul.duckdns.org/

## 1 - Installation du projet

### Installation du back

 - Se rendre dans le dossier back
 - Configurer le fichier `application.properties` en renseignant les données pour la base de données
 - Lancer la commande `mvn install`
 - Lancer le serveur

### Installation du front

- Se rendre dans le dossier front
- Lancer la commande `yarn``
- Lancer le serveur via la commande `npm start``

Il est possible d'appeler la route /init afin d'ajouter des données dans la base, notamment un compte admin.
Sur la version déployé, cette étape à déjà été réalisée.

## 2 - Comptes utilisateurs et administrateurs

La route /init créé un utilisateur administrateur et 2 utilisateurs normaux. Leurs identifiants sont :

- admin@mail.com : pwd

- user1@mail.com : pwd
- user2@mail.com : pwd

Il est bien sûr possible de s'inscrire pour ajouter un utilisateur.


## 3 - Utilisation de l'appli

La plupart des fonctionnalités demandées sont implémentées. La partie CRUD en tant qu'administrateur est accessible via le bouton option en haut à droite une fois connecté.

Il manque cependant des messages d'erreurs en cas de problème de droits sur une action. Il s'agit d'un manque purement front-end car les appels retournent bien des erreurs 403.
Si une action ne fonctionne pas, essayez de vous connecter, cela devrait résoudre le problème.

# Bugs connus

- Aucun message d'erreur en cas de retour 403
- Problème d'affichage si l'écran à une résolution plus faible que 1920x1080