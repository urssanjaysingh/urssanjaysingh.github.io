# Portfolio — split-file structure

## What changed
`index.html` ab sirf shell hai. Har section ek `data-include="partials/xyz.html"`
attribute wale container me hai. `js/include.js` page load hone par ye sab
partials `fetch()` karke unke container me inject kar deta hai, aur uske
baad `js/script.js` ko dynamically load karta hai (taaki theme toggle,
nav links wagera un elements ko find kar sake jo tab tak DOM me aa chuke hote hain).

## Final folder structure
```
/
├── index.html
├── css/
│   ├── style.css        ← same as before (copy from your existing repo)
│   └── media.css        ← same as before
├── js/
│   ├── include.js        ← new loader (already created)
│   └── script.js         ← same as before (copy from your existing repo)
├── partials/
│   ├── header.html
│   ├── profile.html
│   ├── about.html
│   ├── skills.html
│   ├── projects.html
│   ├── contact.html
│   └── footer.html
└── assets/                ← same as before (images, resume PDF, favicons)
```

Bas `css/style.css`, `js/script.js`, aur `assets/` folder apne existing
repo se copy kar lena — unme koi change nahi kiya gaya hai.

## ⚠️ Important — GitHub Pages pe hi test karna
`fetch()` local file system (`file://`) pe CORS ki wajah se kaam nahi karta.
Agar aap `index.html` ko seedha double-click karke browser me khologe to
sections load nahi honge.

Local testing ke liye koi bhi local server use karo:
- VS Code me "Live Server" extension, ya
- terminal me: `python -m http.server` (phir `http://localhost:8000` kholo)

GitHub Pages pe (`urssanjaysingh.github.io`) ye automatically theek se
kaam karega kyunki wo https:// se serve karta hai.

## Naya section add karna ho to
1. `partials/newsection.html` banao.
2. `index.html` me `<section id="new" data-include="partials/newsection.html"></section>` add karo.
3. `script.js` me agar us section ko specifically target karta hoga to check kar lena.
