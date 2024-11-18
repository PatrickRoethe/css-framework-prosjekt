# README - SosialApp

## Overview
SosialApp is a simple social media platform where users can log in, view posts from other users, and explore their profile. The app consists of three main pages: authentication (login), feed, and user profile. While there is a form for creating posts, no functionality exists to store or retrieve data since there is no backend or API integration. Same goes for other functions, and pages like profile/feed.

## Technologies Used
- **Bootstrap**: A framework for responsive web design and UI components.
- **SASS**: A CSS preprocessor for efficient styling, with support for variables, mixins, and more.
- **JavaScript**: Used for responsive mobile menu functionality.
- **GitHub Pages**: Used for hosting and distributing the project.

## Features
- **Login**: Users can log in through the authentication page with a valid username and password (minimum 8 characters).
- **Feed**: A list of example posts from the user and other users, with an option to sort posts by newest or oldest ( non-functional)
- **Profile**: View the user's profile, including profile image, username, follower count, and a follow button (currently non-functional).

## Installation
Follow these steps to get the project up and running locally:

1. Clone the project to your local machine:
  - git clone https://github.com/PatrickRoethe/css-framework-prosjekt.git

2. Install the necessary dependencies:
- npm install

3.Run the development server (with live updates):
- npm run watch

4.Deploy the app (if needed):
- npm run deploy

## GitHub Pages Link
You can view the deployed app on GitHub Pages:  
https://patrickroethe.github.io/css-framework-prosjekt/homepage.html

## Future Work
- **Implement proper authentication**: Current authentication is static (only front-end login with min-length 8 on password). Implement full API-based authentication for more security and functionality.
- **Implement interaction with API**: After authentication, the app can be extended to interact with an API for creating posts, deleting posts, and other interactive functions a commercial social app would require.
- **Improved design**: Explore opportunities to enhance the user interface (UI), such as adding animations, better layouts, and more interactive elements. Dive deeper into colors, and improve overall styling.
- **Add functionality**: To search, sort, create, follow and all functions that a commercial social app would require.
- **Add nightmode**: Add a nightmode button for the page.


