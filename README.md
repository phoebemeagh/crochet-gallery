# Crochet Gallery

A small website to show some of my completed crochet patterns, built with React, TypeScript and Chakra UI.

<!-- Add a screenshot once the gallery looks the way you want, for example: -->
<!-- ![Crochet Gallery screenshot](docs/screenshot.png) -->

**Live demo:** coming soon

## Status

This is a work in progress, and the roadmap below shows what is done and what is planned.

- [x] Project set up with Vite, React, TypeScript and Chakra UI
- [ ] Responsive photo gallery with title, description and tags for each piece
- [ ] Filter the gallery by tag
- [ ] Click a photo to view it larger
- [ ] Automated tests and a GitHub Actions workflow
- [ ] Deployed live
- [ ] Backend API and database, with a password-protected page for adding new pieces

## Tech stack

- [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for development and builds
- [Chakra UI v3](https://chakra-ui.com/) for components and styling
- [ESLint](https://eslint.org/) for linting

## Getting started

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
git clone https://github.com/phoebemeagh/crochet-gallery.git
cd crochet-gallery
npm install
npm run dev
```

Then open the local address that the terminal prints.

### Other scripts

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Starts the development server        |
| `npm run build`   | Type-checks and builds for production |
| `npm run preview` | Serves the production build locally  |
| `npm run lint`    | Runs ESLint                          |

## Project structure

```text
public/imgs/        Photos of the finished pieces
src/data/works.tsx     The list of pieces (title, photo, description, tags)
src/components/       Gallery components such as WorkCard
src/components/ui/    Chakra UI starter components, added with the Chakra CLI
src/App.tsx           The page layout
src/main.tsx          App entry point, wrapped in the Chakra provider
```

## Adding a piece

1. Put a photo in `public/images/`. Remove any location data from it.
2. Add an entry to the list in `src/data/works.ts`:

   ```ts
    {
      id: "eagle-work",
      projectName: "Eagle blanket",
      projectDescription:
        "Blanket with eagle pattern using a public alpha pattern.",
      pattern: "https://pin.it/6cRUpSW23",
      images: ["/imgs/eagle_work.jpg"],
      toolsUsed: "5.5 mm crochet hook, 100% cotton yarn DK",
      tags: ["blanket", "cotton", "free"],
    }
   ```


## Design notes

- The pieces live in a typed data file, so the components don't change when the data later moves to a database behind an API.
- Photos are lazy-loaded so the page stays fast.