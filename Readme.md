How much you know the Marvel Cinematic Universe? Do you want to test your knowledge with this visual game?

If yes, so [click here to play game!](https://mcu-webgame.herokuapp.com/)

# Before starting
This game works only in for desktop devices and only in Mozilla Firefox! Other browsers (i.e. Chrome, Safari, Edge, etc.) doesn't support it.

Follow this steps before playing:
1. Open Firefox browser and type ```about:config``` in search bar;
2. Search the variable ```security.fileuri.strict_origin_policy``` and set it to ```false``` (if you are using a previous version of Mozilla Firefox search ```privacy.file_unique_origin```);
3. Read the user guide below.

# How to play
To start the project, it’s necessary click on the link above or open the index.html file in the browser if you have cloned the repository.

NB: the project is implemented on a 2560x1600 screen, so it’s likely that on screens with lower resolution a correct display will not be obtained. In this case we recommend reducing the page zoom to 90% or 80%.

# User guide
The goal of this pleasant game is to insert the heroes of the Marvel Cinematic Universe into each of the numerous films in which it has appeared.

At the beginning of the game the data of the characters and the films will be loaded and automatically the timer will be started (it is possible to pause and reset). At the bottom we have all the information about the game:
- how many characters are missing to insert [Missing Heroes];
- how many movies have been completed [Movies Completed];
- how many errors have been committed by inserting a character in a film in which never appeared [Fails];
- and finally the user's score is displayed [Score] (an additional bonus is applied to each correct move, in the event of a wrong move this bonus is reset).

In the left section you can scroll through the list of heroes from which they will be selected to be able to insert them into the film. Furthermore, if you stay over the character with the mouse, you can view the name and how many movies must still be inserted.

Clicking on one of these heroes, it will be displayed in a red box on the right side, where the films are displayed. The world of films can be explored by moving the films in all directions and you can zoom in or zoom out on them. Now it’s possible to move the chosen character towards the film in which he participated by performing a simple drag and drop operation. If the user inserts the character in a correct film then he will be seen appearing in that film, in case of error he will instead bounce towards the initial frame.

If the character is inserted in all the films, he can no longer be selected for further movement.

In case of doubt it’s possible to reveal a character from one of the films, but at the cost of several points from those accumulated during the game. However, we hope that none of our players will use this feature!

Designed by Daniele Mainella & Matteo Aquilani
