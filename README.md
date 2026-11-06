# css-toolkit

Eine modulare, abhängigkeitsfreie CSS-Sammlung für wiederverwendbare Webprojekte: Design-Tokens, Reset, Layout, Komponenten, Utilities, Dark Mode und Druckstyles. Kein Build-Schritt nötig.

## Features

- **Design-Tokens** als CSS Custom Properties – Farben, Typografie, Abstände, Radien, Schatten, Z-Index
- **Cascade Layers** (`@layer`) für vorhersagbare Spezifität ohne `!important`-Kämpfe
- **Light & Dark Mode** – automatisch über `prefers-color-scheme` oder manuell über `data-theme`
- **Barrierefreiheit** – sichtbare Fokuszustände, Screenreader-Hilfen, Skip-Link, `prefers-reduced-motion`
- **Responsive Layout** – Container, Grid, Stack und Cluster
- **Komponenten** – Buttons, Karten, Formulare, Navigation, Hinweisboxen, Tabellen, Modals
- **Utilities** – Abstände, Text, Flexbox, Radien, Schatten, Animationen
- **Druckoptimierung** – entfernt Hintergründe, zeigt Linkziele an

## Schnellstart

Alle Module auf einmal einbinden:

```html
<link rel="stylesheet" href="css/main.css" />
```

Oder nur einzelne Module (Tokens werden für Komponenten benötigt):

```html
<link rel="stylesheet" href="css/base/variables.css" />
<link rel="stylesheet" href="css/components/button.css" />
```

### Per CDN (eine einzige Datei)

Für Webseiten ohne Build gibt es eine gebündelte Datei ohne `@import`, inklusive aller Themes:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/nekuro22/css-sample@main/dist/toolkit.min.css"
/>
```

Für produktive Seiten lieber auf einen festen Stand pinnen (Commit oder Tag statt `@main`). Das Bundle wird mit `npm run build` neu erzeugt.

### Ohne Klassen

Normales, semantisches HTML sieht ohne eine einzige Klasse gut aus. Das Toolkit gestaltet `<body>` als zentrierten Rahmen sowie `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, Listen, Bilder, Tabellen, Formulare, Buttons, `<details>` und `<dialog>` direkt über Element-Selektoren ([`css/base/classless.css`](css/base/classless.css)). Beispiel: [`examples/classless.html`](examples/classless.html).

Die Regeln haben Spezifität 0. Klassen wie `.btn`, `.card` oder `.container` und eigene Styles überschreiben sie jederzeit. Wer den Seitenrahmen selbst baut, setzt `<body class="fluid">`.

Eine vollständige Beispielseite findest du unter [`examples/index.html`](examples/index.html).

## Struktur

```
css-toolkit/
├── css/
│   ├── main.css              # Einstiegspunkt, lädt alle Module in Layer-Reihenfolge
│   ├── base/
│   │   ├── variables.css     # Design-Tokens (hier anpassen)
│   │   ├── reset.css         # Moderner CSS-Reset
│   │   ├── typography.css    # Überschriften, Fließtext, Code, Zitate
│   │   ├── classless.css     # Klassenloses Styling für semantisches HTML
│   │   └── accessibility.css # Fokus, Skip-Link, Screenreader-Hilfen
│   ├── layout/
│   │   ├── container.css     # Zentrierter Inhaltsbereich
│   │   └── grid.css          # Grid, Stack, Cluster
│   ├── components/
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── form.css
│   │   ├── navbar.css
│   │   ├── alert.css
│   │   ├── table.css
│   │   └── modal.css
│   ├── utilities/
│   │   ├── spacing.css       # m-*, p-*, gap-*
│   │   ├── text.css          # Farbe, Größe, Gewicht, Ausrichtung
│   │   ├── display.css       # display, Flexbox, Breakpoints
│   │   ├── effects.css       # Radien, Schatten, Rahmen, Hintergründe
│   │   └── animations.css    # fade-in, spin, pulse
│   ├── themes/               # 19 Themes (light, dark, ocean, forest, sunset, midnight,
│   │                         #   high-contrast, mono, paper, swiss, aurora, obsidian,
│   │                         #   editorial, corporate, enterprise, saas, fintech,
│   │                         #   healthcare, graphite)
│   └── print.css             # Druckstyles
└── examples/
    └── index.html            # Demoseite aller Komponenten
```

## Layer-Reihenfolge

Von niedriger zu hoher Priorität:

```
reset → base → layout → components → utilities → themes → print
```

Eigene Styles, die **außerhalb** eines Layers stehen, überschreiben alle Module. Das ist beabsichtigt – so lässt sich das Toolkit ohne Konflikte erweitern.

## Themes

Im Ordner [`css/themes/`](css/themes) liegen 19 fertige Themes in vier Kategorien. Alle überschreiben die Design-Tokens; einige ergänzen dezente Details wie Hintergrundverläufe oder Serifen-Überschriften.

**Standard**

| Theme         | Attribut                     | Beschreibung                                      |
| ------------- | ---------------------------- | ------------------------------------------------- |
| Light         | `data-theme="light"`         | Explizit helles Theme                             |
| Dark          | `data-theme="dark"`          | Dunkles Theme (folgt auch `prefers-color-scheme`) |
| Ocean         | `data-theme="ocean"`         | Kühle Türkis- und Petrol-Töne                     |
| Forest        | `data-theme="forest"`        | Natürliche Grüntöne                               |
| Sunset        | `data-theme="sunset"`        | Warme Orange- und Rosatöne                        |
| Midnight      | `data-theme="midnight"`      | Tiefes Violett-Blau mit hellen Akzenten           |
| High Contrast | `data-theme="high-contrast"` | Maximaler Kontrast, ohne Schatten                 |

**Minimalistisch**

| Theme | Attribut             | Beschreibung                                      |
| ----- | -------------------- | ------------------------------------------------- |
| Mono  | `data-theme="mono"`  | Reines Schwarz-Weiß, keine Radien, keine Schatten |
| Paper | `data-theme="paper"` | Warmes Papier mit Serifenschrift                  |
| Swiss | `data-theme="swiss"` | Internationaler Stil: harte Linien, ein Akzent    |

**Premium**

| Theme     | Attribut                 | Beschreibung                                     |
| --------- | ------------------------ | ------------------------------------------------ |
| Aurora    | `data-theme="aurora"`    | Edles Dark-Theme mit dezentem Indigo-Glasverlauf |
| Obsidian  | `data-theme="obsidian"`  | Tiefes Schwarz mit zurückhaltendem Gold-Akzent   |
| Editorial | `data-theme="editorial"` | Magazin-Look mit Serifen-Überschriften           |
| Corporate | `data-theme="corporate"` | Klarer Business-Stil in Grau und sattem Blau     |

```html
<!-- Automatisch: folgt der Systemeinstellung (nur Dark / Light) -->
<html lang="de"></html>

<!-- Festes Theme -->
<html lang="de" data-theme="ocean"></html>
```

Umschalten per JavaScript:

```js
document.documentElement.dataset.theme = "forest";
```

Eigenes Theme anlegen: Datei unter `css/themes/` erstellen, alle Farb-Tokens aus `base/variables.css` in `:root[data-theme="mein-theme"]` setzen und in `main.css` importieren.

Umschalten per JavaScript:

```js
document.documentElement.dataset.theme = "dark";
```

## Design-Tokens anpassen

Alle zentralen Werte liegen in [`css/base/variables.css`](css/base/variables.css). Beispiel – andere Markenfarbe:

```css
:root {
  --color-primary: #7c3aed;
  --color-primary-hover: #6d28d9;
}
```

Änderungen an Farb-Tokens müssen im Dark Mode ([`css/themes/dark.css`](css/themes/dark.css)) gespiegelt werden.

## Browser-Unterstützung

Benötigt moderne Browser mit Unterstützung für Cascade Layers, `color-mix()` und logische Eigenschaften:

| Browser | Mindestversion |
| ------- | -------------- |
| Chrome  | 111            |
| Firefox | 113            |
| Safari  | 16.4           |
| Edge    | 111            |

## Entwicklung

```bash
npm install
npm run lint      # Stylelint prüfen
npm run format    # Prettier formatieren
```

## Mitwirken

Beiträge sind willkommen. Bitte vor einem Pull Request `npm run lint` ausführen und die Änderung in `examples/index.html` prüfen.

## Lizenz

[MIT](LICENSE)
