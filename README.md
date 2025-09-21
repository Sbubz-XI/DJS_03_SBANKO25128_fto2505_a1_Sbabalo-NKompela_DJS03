# DJS03: React Podcast Landing Page

Hey! This is my project **DJS03**, a React landing page for discovering podcasts. 🎧

I built this so users can explore podcasts in a clean, responsive grid, all powered by data fetched from an external API.

---

## What I Did

Here’s what’s going on in this app:

- Fetch podcast data from [Podcast API](https://podcast-api.netlify.app/) right when the page loads.
- Show a **loading spinner** while data is on its way.
- Handle errors or empty responses gracefully with a user-friendly message.
- Display all podcasts in a **grid** that looks good on desktop, tablet, and mobile.
- Each podcast preview shows:
  - The **cover image**
  - The **title**
  - **Number of seasons**
  - **Genres** (pulled from my local `data.js`)
  - Last updated info (formatted like “3 days ago”)
- Everything’s styled consistently, using **CSS Grid, Flexbox, or Tailwind**. I wanted it to look polished at any screen size.

---

## Tech Stuff

Here’s what I used to make it work:

- **React functional components**
- `useEffect()` to fetch data on mount
- `useState()` for storing podcasts and selected items
- `.map()` to render podcast cards dynamically
- Date formatting handled via **date-fns** or a small custom function
- Fetch API to get the data

---

## Components

### PodcastTile

Reusable component that shows each podcast’s preview card:

- Image
- Title
- Genres
- Number of seasons
- Last updated info

### PodModal

Opens when a podcast is clicked. Shows:

- Bigger image
- Full description
- Seasons and number of episodes per season
- Genres
- Last updated date

---

## Layout & Responsiveness

- Works on **mobile (≈375px)**, **tablet (~768px)**, and **desktop (≥1200px)**
- Grid layout adapts dynamically
- Smooth hover effects and spacing
- I focused on making it readable and visually clean, no matter the device

---

## What I Learned

While building this, I got better at:

- Fetching data from an API and handling loading/error states
- Dynamically rendering components based on API data
- Building reusable React components
- Working with responsive CSS (Grid and Flexbox)

---

## Running the Project

If you want to check it out locally:

```bash
# Install dependencies
npm install

# Start development server
npm start
```
