### :tw-1f4f9: Movie App

Movie app is a project made with** React** framework which represents a simple Movie App scheduler, where you can create, edit, and schedule by viewed/unviewed your favorite movies.

##### Images

###### - Desktop version flow 1/2

![Alt text](./public/img/desktop-1.gif "Desktop view 1")

###### - Desktop version flow 2/2

![Alt text](./public/img/desktop-2.gif ""Desktop view 2")

##### Scripts

1. To run aplication in local enviroment execute `npm run start`

2. To run tests in local enviroment execute `npm run test`

##### Scaffolding

```
movies-pbs
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ src
│  ├─ @types
│  │  └─ index.d.ts
│  ├─ App.css
│  ├─ App.tsx
│  ├─ _test
│  │  ├─ App.test.jsx
│  │  ├─ misc
│  │  │  ├─ Button.test.tsx
│  │  │  ├─ Filters.test.tsx
│  │  │  ├─ Input.test.tsx
│  │  │  ├─ Loader.test.tsx
│  │  │  ├─ Navbar.test.tsx
│  │  │  ├─ SearchBar.test.tsx
│  │  │  └─ __snapshots__
│  │  │     ├─ Button.test.tsx.snap
│  │  │     ├─ Filters.test.tsx.snap
│  │  │     ├─ Input.test.tsx.snap
│  │  │     ├─ Loader.test.tsx.snap
│  │  │     ├─ Navbar.test.tsx.snap
│  │  │     └─ SearchBar.test.tsx.snap
│  │  ├─ movies
│  │  │  ├─ Card.test.tsx
│  │  │  ├─ Form.test.tsx
│  │  │  ├─ GenreTab.test.tsx
│  │  │  └─ __snapshots__
│  │  │     ├─ Card.test.tsx.snap
│  │  │     ├─ Form.test.tsx.snap
│  │  │     └─ GenreTab.test.tsx.snap
│  │  ├─ screens
│  │  │  ├─ Detail.test.tsx
│  │  │  ├─ Home.test.tsx
│  │  │  └─ __snapshots__
│  │  │     ├─ Detail.test.tsx.snap
│  │  │     └─ Home.test.tsx.snap
│  │  └─ utils
│  │     ├─ mocks
│  │     │  └─ mock.js
│  │     └─ test-utils.tsx
│  ├─ assets
│  │  ├─ _colors.scss
│  │  ├─ _grid.scss
│  │  ├─ _normalize.scss
│  │  ├─ _utils.scss
│  │  └─ _variables.scss
│  ├─ components
│  │  ├─ misc
│  │  │  ├─ button
│  │  │  │  ├─ index.scss
│  │  │  │  └─ index.tsx
│  │  │  ├─ filters
│  │  │  │  └─ index.tsx
│  │  │  ├─ input
│  │  │  │  ├─ index.scss
│  │  │  │  └─ index.tsx
│  │  │  ├─ loader
│  │  │  │  ├─ index.scss
│  │  │  │  └─ index.tsx
│  │  │  ├─ navbar
│  │  │  │  └─ index.tsx
│  │  │  ├─ search-bar
│  │  │  │  ├─ index.scss
│  │  │  │  └─ index.tsx
│  │  │  └─ skeletons
│  │  │     └─ movie
│  │  │        ├─ index.scss
│  │  │        └─ index.tsx
│  │  └─ movies
│  │     ├─ card
│  │     │  ├─ index.scss
│  │     │  └─ index.tsx
│  │     ├─ form
│  │     │  ├─ index.scss
│  │     │  └─ index.tsx
│  │     └─ genre-tab
│  │        ├─ index.scss
│  │        └─ index.tsx
│  ├─ constants.js
│  ├─ hooks
│  │  └─ useKeypress.ts
│  ├─ index.js
│  ├─ index.scss
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.js
│  ├─ screens
│  │  ├─ detail
│  │  │  └─ index.tsx
│  │  └─ home
│  │     └─ index.tsx
│  ├─ services
│  │  ├─ BaseService.js
│  │  └─ ImageService.js
│  ├─ setupTests.js
│  └─ store
│     ├─ index.ts
│     └─ reducers
│        ├─ filtersReducer.ts
│        ├─ loadingReducer.ts
│        └─ moviesReducer.ts
└─ tsconfig.json
```

This project was created with **create-react-app** template, based on the following requirements:

####Front

- Redux used to implement the handling of state.
- Create an input where user can add the movie name they would like to watch.
- Create another input where user can add movie genres as tags.
- Each movie can have more than one genres.
- When user presses enter on genre input, it should show those genres below the
  movie name input
- User can add the same genre more than once and press enter; but that genre
  shouldn't show it the list again.
- Genres should be case insensitive. Use should not be able to add horror and Horror.
- Create a submit button where user can click to submit there movie.
- All the movies should show in a list where below the form with the following fields:-
  i. Checkbox that shows if movie is watched or not.
  ii. Movie name.
  iii. Genres.
  iv. Delete button.
- Watched/Checked movies should move down to the bottom of the list.
- If user unchecks a movie it should move to its original place.
- Add three radio buttons at the top of the list which say Horror, Romance, Comedy
  and a reset button.
- All the radio buttons should be unchecked by default.
- Selecting any of the radio buttons should show only the movies which are in that
  genre.
- Clicking on the reset button should show original list.
- Add an input above the list and below the radio buttons where user can search the
  movies based on their name.
- Show a loader when adding a movie or deleting a movie or searching for a movie.
  The delay should be 3 seconds.
- If go to route like /genre=romance, it should redirect me to a new page which
  should show the loader for 3 seconds and then only movies which have that genre.
  Extra points:-
- Add an edit button in the movie list. Clicking on the button should turn the movie
  name into an input tag with the movie name in it and also show a save button.
- Create another input where user can add movie genres as tags.
- Each movie can have more than one genres.
- When user presses enter on genre input, it should show those genres below the
  movie name input
- User can add the same genre more than once and press enter; but that genre
  shouldn't show it the list again.
- Genres should be case insensitive. Use should not be able to add horror and Horror.
- Create a submit button where user can click to submit there movie.
- All the movies should show in a list where below the form with the following fields:-
  i. Checkbox that shows if movie is watched or not.
  ii. Movie name.
  iii. Genres.
  iv. Delete button.
- Watched/Checked movies should move down to the bottom of the list.
- If user unchecks a movie it should move to its original place.
- Add three radio buttons at the top of the list which say Horror, Romance, Comedy
  and a reset button.
- All the radio buttons should be unchecked by default.
- Selecting any of the radio buttons should show only the movies which are in that
  genre.
- Clicking on the reset button should show original list.
- Add an input above the list and below the radio buttons where user can search the
  movies based on their name.
- Show a loader when adding a movie or deleting a movie or searching for a movie.
  The delay should be 3 seconds.
- If go to route like /genre=romance, it should redirect me to a new page which
  should show the loader for 3 seconds and then only movies which have that genre.
  Extra points:-
- Add an edit button in the movie list. Clicking on the button should turn the movie
  name into an input tag with the movie name in it and also show a save button.
  Which user can then edit and save.Which user can then edit and save.
