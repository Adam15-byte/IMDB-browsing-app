# IMDB Browsing app
Simple app used to browse IMDB library of most popular movies, Top TV shows and Top movies.

## Table of contents
* [General info](#general-info)
* [Technologies](#Technologies)
* [Screenshots](#Screenshots)
* [Further improvments](#Further-improvments)

## General info
Simple App with FlatList used to show local data downloaded from IMDB API. The App can easily be hooked to get live data from IMDB. 

The main list is animated. The element moving to the middle is pushed upwards. The image in the background is currently changed upon changing the tab screen or clicking on the element of scrollable list.

Made with the help of tutorial by Catalin Miron:
https://www.youtube.com/watch?v=yV-2HRzNX9o

## Technologies
* React Native Bottom Tabs Navigator
* React Native Reanimated
* Expo Linear Gradient
* Hooks: useRef, useEffect, useState, useContext, createContext

## Screenshots
![sample1](http://paulatrenuje.pl/wp-content/uploads/2022/03/Simulator-Screen-Shot-iPhone-11-2022-03-23-at-21.40.35.png)
![sample2](http://paulatrenuje.pl/wp-content/uploads/2022/03/Simulator-Screen-Shot-iPhone-11-2022-03-23-at-21.41.35.png)
![sample3](http://paulatrenuje.pl/wp-content/uploads/2022/03/Simulator-Screen-Shot-iPhone-11-2022-03-23-at-21.42.24.png)

## Further improvments
The background images should change on scroll of the FlatList.

