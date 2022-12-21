# Accedo Design System

First of all, install all the dependencies by running the following command:
```bash
npm i
```
Then just run this command and the Storybook should open on your browser:
```bash
npm run dev
```

This is a soon to be released library which currently has reausable TV components.
After running the command above, the css is generated in a JavaScript file (src/styles/tokens.js) which is then used as basis for the styles across the application, but also many other styles are generated (build folder) inluding android, compose, ios, ios-swift and scss. These can be used in other applications to build new reusable components for other projects, languages and frameworks.