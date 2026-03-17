# Kautik Mandve Portfolio

Personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion.

Live site: [kautik-mandve.vercel.app](https://kautik-mandve.vercel.app)

## Overview

This repository contains a single-page portfolio with a terminal-inspired visual style. The site highlights projects, experience, skills, achievements, education, and contact information.

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

## Project Structure

```text
app/
  components/
    About.tsx
    Achievements.tsx
    Contact.tsx
    Education.tsx
    Experience.tsx
    Hero.tsx
    Navbar.tsx
    Projects.tsx
    Skills.tsx
    TerminalWindow.tsx
  globals.css
  icon.svg
  layout.tsx
  page.tsx
```

## Editing Notes

- Main page composition lives in `app/page.tsx`.
- Shared metadata and favicon setup live in `app/layout.tsx` and `app/icon.svg`.
- Global styling and the terminal theme live in `app/globals.css` and `tailwind.config.ts`.
- Most site content is hard-coded directly inside the section components under `app/components/`.

## Deployment

The site is configured as a standard Next.js app and can be deployed on Vercel or any compatible Next.js hosting platform.
