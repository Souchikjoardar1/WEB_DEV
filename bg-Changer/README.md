# Color Memory Game

A React game that plays a sequence of colors for the player to repeat. The game compares the selections in order and offers a longer round on replay.

## Run locally

Use Node.js 22 or later with npm. From this folder, run the following commands.

```sh
npm ci
npm run dev
```

Open the URL shown in the terminal. Choose **Start Game**, wait for playback to finish, then select the colors in the same order.

- `npm run lint` checks the code with ESLint.
- `npm run build` creates the static build in `dist/`.

The game logic and controls are in [`src/App.jsx`](src/App.jsx).
