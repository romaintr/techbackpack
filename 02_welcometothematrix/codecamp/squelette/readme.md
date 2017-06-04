# Techbackpack

## Cours 2 : Welcome to the Matrix

### Positionnement et alignement

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>The Daily challenge</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto|Source+Sans+Pro|Pacifico" rel="stylesheet">
    <link href="style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
     <header>
      <nav>
        <span id="logo">The Daily Challenge </span>
        <ul>
          <li><a href="#apropos">A propos </a></li>
          <li><a href="#download">Télécharger</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="baseline">
        <h1>Tentez de nouvelles expériences !</h1>
        <p>
          <a href="#download">Démarrez maintenant</a>
        </p>
      </section>
      <section id="apropos">

          <h2>Un défi chaque jour</h2>
          <p>Recevez <strong>de nouveaux challenges </strong> tous les jours </p>
          <img src="https://media.giphy.com/media/AWv3UAFkgz39u/giphy.gif" alt="picture description" width="300">

          <h2>Partagez vos exploits</h2>
          <p>Envoyez une photo ou une vidéo <strong> de vos exploits </strong> à vos amis</p>
          <img src="    https://media.giphy.com/media/pWfzRNzOfHOvu/giphy.gif" alt="picture description" width="300">

          <h2>Suivez vos amis </h2>
          <p>Suivez les <strong> défis réalisés </strong>  par vos amis </p>
          <img src="https://media.giphy.com/media/HzJfzaP8UzXc4/giphy.gif" alt="picture description" width="300">

          <h2>Lancez des défis</h2>
          <p>Voter et proposer de  <strong>nouveaux défis</strong> à vos amis ou à la communauté</p>
          <img src="https://media.giphy.com/media/bLiUT0AeHCkF2/giphy.gif" alt="picture description" width="300">

       </section>
       <section id="download">
          L'application sera bientot disponible sur l'Apple Store et Google Play
       </section>  
    </main>
    <footer>
      <p>Cette application est proposée le codecamp CMI Dauphine 2017 </p>
    </footer>
  </body>
</html>
```

### La mise en forme

```
/* style.css */

body{
  background: #fff;
  color: #000; 
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  margin:0;
}

nav{
  display:inline;
  font-size: 1em;
  font-family: 'Source Sans Pro', sans-serif;
} 

h1{
  font-family: 'Roboto', sans-serif;
  color:  #41A3C0; 
  font-weight: bolder;
  font-size: 2em;
}

h2 {
  font-family: 'Roboto', sans-serif;
  color: #3b4563;
  font-weight: lighter;
  font-size: 1.5em;
}

p{
  color: #8e9bac;
}

a { 
  color: #29324B;
}

a:hover {
  text-decoration: none;
  color: rgb(225, 0, 152);
}

#logo{
  color: rgb(225, 0, 152);
  font-size: 35px;
  font-family: 'Pacifico', cursive;
}

/* Mis en forme de la baseline */
#baseline{
  background-color: #41A3C0;
  text-align: center;
  background-size: cover;
  padding: 150px;
  color: white;
  text-shadow: 1px 1px 5px black;
}

#baseline h1 {
  color: white;
  font-size: 50px;
}

#baseline a {
  color: white;
  font-size: 30px;
  font-weight: lighter;
  text-decoration: none;
}

.feature{
  border: 1px solid #F2F2F2;
  background: #FAFAFA;
  margin: 15px;
  padding: 15px 0;
  text-align: center;
}

```