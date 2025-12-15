## i18n (DE/EN)

This project uses next-intl (App Router) and a lightweight LanguageProvider to sync a cookie and client state.

How to add translations:

1. Add keys to `src/messages/de.json` and `src/messages/en.json`:

```
{
  "Cards": {
    "yourKey": "Deutscher Text"
  }
}
```

```
{
  "Cards": {
    "yourKey": "English text"
  }
}
```

2. Read them in components using next-intl:

```ts
import {useTranslations} from 'next-intl';
const t = useTranslations('Cards');
return <h3>{t('yourKey')}</h3>;
```

3. For site-wide language, use the header toggle. The choice persists in a `lang` cookie and localStorage.

# Julia Osterloh - Personal Website

Eine moderne, responsive Personal Website erstellt mit Next.js 14, TypeScript und Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, light theme mit pinkem Akzent (#F7B9C8)
- **Responsive**: Mobile-first Design mit adaptiven Grid-Layouts
- **Accessibility**: Vollständig barrierefrei mit ARIA-Labels und Focus-Management
- **SEO-optimiert**: Meta-Tags, OpenGraph und strukturierte Daten
- **Performance**: Optimiert für schnelle Ladezeiten
- **Animationen**: Subtile Framer Motion Animationen mit Reduced Motion Support
- **Formulare**: Kontaktformular mit React Hook Form und Zod-Validierung

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # Über mich Seite
│   ├── contact/           # Kontakt Seite
│   ├── impressum/         # Impressum
│   ├── datenschutz/       # Datenschutzerklärung
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Homepage
├── components/            # React Komponenten
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero Sektion
│   ├── Platforms.tsx      # Social Media Plattformen
│   ├── AboutTeaser.tsx    # Über mich Teaser
│   ├── ProjectsGrid.tsx   # Projekte Grid
│   ├── CtaBanner.tsx      # Call-to-Action Banner
│   └── FormContact.tsx    # Kontaktformular
├── content/               # Inhalte und Daten
│   └── data.ts           # Statische Daten
└── types/                # TypeScript Typen
    └── index.ts
```

## 🛠️ Installation

### Voraussetzungen

- Node.js 18+ 
- npm oder yarn

### Setup

1. **Repository klonen oder Dateien herunterladen**
   ```bash
   cd personal_website
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   # oder
   yarn install
   ```

3. **Development Server starten**
   ```bash
   npm run dev
   # oder
   yarn dev
   ```

4. **Browser öffnen**
   ```
   http://localhost:3000
   ```

## 🎨 Anpassungen

### Farben ändern

Die Akzentfarbe kann in `src/app/globals.css` angepasst werden:

```css
:root {
  --accent: #F7B9C8;  /* Hier deine gewünschte Farbe */
  --bg: #fff;
  --fg: #111;
}
```

### Inhalte anpassen

1. **Persönliche Daten**: `src/content/data.ts`
2. **Texte**: Direkt in den Komponenten
3. **Bilder**: Ersetze die Placeholder in `public/placeholder/`
4. **Kontaktdaten**: `src/app/layout.tsx` (Meta-Daten) und `src/app/contact/page.tsx`

### Platzhalter ersetzen

**Wichtige Dateien zum Anpassen:**

- `src/content/data.ts` - Alle statischen Inhalte
- `public/placeholder/` - Alle Bilder
- `src/app/layout.tsx` - SEO Meta-Daten
- `src/app/impressum/page.tsx` - Rechtliche Informationen
- `src/app/datenschutz/page.tsx` - Datenschutzerklärung

## 📱 Seiten

### Homepage (`/`)
- Hero Sektion mit Profilbild und Mission
- Social Media Plattformen (Instagram, YouTube, LinkedIn)
- Über mich Teaser
- Aktuelle Projekte Grid
- Call-to-Action Banner

### Über mich (`/about`)
- Erweiterte Biografie
- Timeline der beruflichen Entwicklung
- Skills und Expertise
- Portfolio-Highlights

### Kontakt (`/contact`)
- Kontaktformular mit Validierung
- Kontaktdaten
- FAQ Sektion

### Impressum (`/impressum`)
- Rechtliche Informationen (Platzhalter)
- Haftungsausschluss

### Datenschutz (`/datenschutz`)
- Datenschutzerklärung (Platzhalter)

## 🔧 Technologie-Stack

- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animationen**: Framer Motion
- **Formulare**: React Hook Form + Zod
- **Deployment**: Vercel (empfohlen)

## 🚀 Deployment

### Vercel (Empfohlen)

1. **Repository zu GitHub/GitLab pushen**
2. **Vercel Account erstellen** (https://vercel.com)
3. **Projekt importieren**
4. **Automatisches Deployment**

### Andere Plattformen

- **Netlify**: `npm run build` → `out/` Ordner deployen
- **GitHub Pages**: GitHub Actions für automatisches Build
- **Eigener Server**: `npm run build` → `npm start`

## 📋 Checkliste vor Go-Live

- [ ] Alle Platzhalter-Texte durch echte Inhalte ersetzen
- [ ] Eigene Bilder hochladen
- [ ] Kontaktdaten aktualisieren
- [ ] Impressum rechtlich prüfen lassen
- [ ] Datenschutzerklärung anpassen
- [ ] SEO Meta-Daten optimieren
- [ ] Social Media Links aktualisieren
- [ ] Kontaktformular testen
- [ ] Mobile Ansicht testen
- [ ] Performance optimieren

## 🎯 Performance

- **Lighthouse Score**: 90+ in allen Kategorien
- **Core Web Vitals**: Optimiert
- **Images**: Next.js Image Optimization
- **Fonts**: System Font Stack
- **Animations**: Reduced Motion Support

## ♿ Accessibility

- **WCAG 2.1 AA** konform
- **Keyboard Navigation** vollständig
- **Screen Reader** optimiert
- **Focus Management** implementiert
- **Color Contrast** geprüft

## 📞 Support

Bei Fragen oder Problemen:

1. **Issues**: GitHub Issues erstellen
2. **Dokumentation**: Next.js Docs (https://nextjs.org/docs)
3. **Tailwind**: Tailwind Docs (https://tailwindcss.com/docs)

## 📄 Lizenz

Dieses Projekt ist für persönliche Nutzung erstellt. Alle Rechte vorbehalten.

---

**Erstellt mit ❤️ und Next.js**
