# Gulf Coast HVAC

Fictional Gulf Coast service company site. Built as a portfolio piece for local-business web work.

**Live:** [cns1700.github.io/gulf-coast-hvac](https://cns1700.github.io/gulf-coast-hvac/)

This is a multi-page demo. Paid client jobs I take are usually a **single landing page** with file handoff. This repo shows I can also structure a small service-business site (home, services, area, about, contact).

---

## Open it on your computer

1. Download or clone the folder.
2. Open `index.html` in a browser.
3. Or, from the folder, run a static server so links behave like a real site:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

No build step. No npm. HTML, one CSS file, one JS file.

---

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Home / hero / call-to-action |
| `services.html` | Service list |
| `service-area.html` | Towns and coverage |
| `about.html` | Short company story |
| `contact.html` | Request form |
| `css/styles.css` | All layout and colors |
| `js/main.js` | Mobile menu + contact form check |
| `favicon.svg` | Tab icon |
| `images/` | Photos and graphics |

---

## Where to change the usual client stuff

Company facts are written **in each HTML page** (not in a database).

Search the HTML for:

- Phone number
- Email
- Hours
- Address
- Service-area town names
- The about paragraph

If you change the phone, change it on every page so the header and footer stay in sync.

Colors and spacing live in `css/styles.css`. Look at the top of that file for shared values (backgrounds, links, buttons). You do not need JavaScript to change the look.

---

## What the JavaScript does (learning notes)

`js/main.js` is the only script. It does two jobs:

1. **Mobile menu.** The Menu button toggles the `is-open` class on `.site-nav`. CSS shows or hides the list. `aria-expanded` stays in sync for screen readers. Clicking a nav link closes the menu.
2. **Contact form check.** On submit it stops the normal send, reads name / phone / ZIP, and either shows `#form-error` or hides the form and shows `#form-thanks`.

This contact form does **not** email anyone. It is a front-end check for the demo. A real client would get a form pointed at their email tool, Netlify Forms, or Formspree after they host the files.

Ideas used here: `querySelector`, `addEventListener`, `classList`, `if`, and `.value.trim()`.

---

## How a client would use these files

Zip the whole folder and they can:

- Drag the files into Netlify Drop, GitHub Pages, or any static host
- Or paste the HTML into Squarespace / WordPress later (that is extra work)

They need their own domain. I do not keep hosting in my name.

---

## Honest limits

- Fictional business. Not a real HVAC company.
- Form does not deliver leads until it is wired to a host that can receive posts.
- Phone, hours, and address are repeated on each page. Change all copies.
- No booking calendar, no live chat, no SEO retainers.
