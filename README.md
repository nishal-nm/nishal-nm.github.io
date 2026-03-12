# nishal-nm.github.io — Personal Portfolio

My personal portfolio website. Clean, minimal, dark/light mode, data-driven.

**Live → [nishal-nm.github.io](https://nishal-nm.github.io)**

---

## Stack

- Vanilla HTML, CSS, JavaScript — no frameworks, no build step
- All content lives in `data/data.json` — the JS reads it and renders everything

## Structure

```
nishal-nm.github.io/
├── index.html            # Page shell (no hardcoded content)
├── data/
│   └── data.json         # ← edit this to update the site
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## Updating Content

Everything is in `data/data.json`. No need to touch HTML or JS.

| What you want to update | Where in data.json |
|---|---|
| New job or internship | `work[]` array |
| New project | `projects[]` array |
| New skill | `skills[].items[]` in the right category |
| New tech in the marquee | `marquee[]` array |
| Contact details | `contact{}` object |
| About text | `profile.about` |

After editing, just push:

```bash
git add data/data.json
git commit -m "your message"
git push
```

GitHub Pages picks it up automatically within a minute.

## Running Locally

The site uses `fetch()` to load `data.json`, so it needs a local server — opening `index.html` directly won't work.

```bash
npx serve .
```

Then open `http://localhost:3000`.

## Features

- Dark / light mode toggle with system preference detection and `localStorage` persistence
- Scroll-triggered fade animations
- Animated skill bars
- Custom cursor (desktop)
- Fully responsive

## Contact

- **Email** — [nishalshalu17@gmail.com](mailto:nishalshalu17@gmail.com)
- **LinkedIn** — [linkedin.com/in/nishal-nm](https://linkedin.com/in/nishal-nm)
- **GitHub** — [github.com/nishal-nm](https://github.com/nishal-nm)
