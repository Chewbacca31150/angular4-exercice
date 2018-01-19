# AppMultipage

First, install npm `https://nodejs.org/en/`
If you don't have angular cli, install it : `npm install -g @angular/cli`
Then, in the main folder, do `npm install`
To run the project, use: `ng serve`

# TODO

Dans ce projet, nous appelons une api Star Wars.
Le component appelé par défaut est personnage-list. Pour le voir, aller dans app.routes.ts.

Le but de l'exercice est d'afficher les premiers noms des personnages et lors d'un clic sur l'un d'entre eux, afficher ses détails. Nous irons par la suite plus loin en faisant en sorte de se connecter à l'application et de se déconnecter et faire en sorte de bloquer telle ou telle page si l'on n'est pas connecté.
Nous allons développer pour l'instant une solution simple.

Pour ce faire :

1. Dans personnage-list.component > navigateToDetails(url: string), setter urlPersonnage dans personnage-list.component.ts avec l'url mise en paramètre dans la fonction puis avec this.router.navigate(['urlADonner']), appeler perso. Nous aborderons les routes plus tard, par curiosité, regarder dans app.routes.ts comment les routes sont faites. En appelant this.router.navigate avec l'url correspondante, nous passons par ce fichier qui changera l'url en conséquence et chargera le component ensuite.
2. Appeler l'api Star Wars dans shared/personnage.service.ts > getOne(). Regarder un exemple étant dans la méthode plus haut
3. Intégrer personnageService dans personnage-detail.component.ts. Regarder l'exemple dans personnage-list.component.ts
4. Dans personnage-detail.component.ts, suivre les instructions.