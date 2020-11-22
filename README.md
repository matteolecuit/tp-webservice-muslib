# tp-webservice-muslib
Awesome music lib made with spring and react

# Utilisation

Une version déployée de l'application est disponible ici : https://ws-tp-muslib-front.serveurspaul.duckdns.org/

## 1 - Initialisation du projet

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
Si une action ne fonctionne pas, essayer de vous connecter, cela devrait résoudre le problème.