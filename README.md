# 🛠️ Pixelit Tools - Gratis Toolkit

**Live op:** `tools.pixelit.be`

Professionele gratis tools voor ondernemers als lead magnets voor pixelit.be services.

---

## 📦 INHOUD

### **Homepage** (`/`)
- Tools Hub met dynamische tool grid
- Powered by `tools-config.js`
- Makkelijk nieuwe tools toevoegen

### **Gratis Tools** (`/tools/`)
1. **Project Profit Checker** - Winstberekening voor vaste prijs projecten
2. **Website Speed Score** - Performance analyse tool
3. **SEO Quick Scan** - Basis SEO health check
4. **GDPR Privacy Check** - Compliance assessment

---

## 🚀 DEPLOYMENT NAAR VERCEL

### **Stap 1: GitHub Repository**

```bash
# Maak nieuwe repo: pixelit-tools
# Upload alle bestanden uit deze folder
```

**Folder structuur:**
```
pixelit-tools/
├── index.html              # Tools hub homepage
├── tools-config.js         # Dynamische configuratie
├── tools/
│   ├── profitchecker.html
│   ├── speed-checker.html
│   ├── seo-scanner.html
│   └── gdpr-checker.html
├── vercel.json             # Vercel configuratie
├── package.json            # Project metadata
└── README.md               # Dit bestand
```

### **Stap 2: Vercel Project Aanmaken**

1. Ga naar https://vercel.com
2. Klik **"Add New..."** → **"Project"**
3. Selecteer je GitHub repo: **pixelit-tools**
4. **Framework Preset:** Other (of None)
5. **Root Directory:** Leave empty (gebruik root)
6. **Build Command:** Leave empty
7. **Output Directory:** Leave empty
8. Klik **"Deploy"**

**Wacht 30-60 seconden...**

✅ **Live op:** `pixelit-tools.vercel.app`

### **Stap 3: Custom Domain**

1. Vercel Dashboard → Je project → **Settings** → **Domains**
2. Klik **"Add"**
3. Vul in: `tools.pixelit.be`
4. Vercel geeft DNS instructies:

```
Type: CNAME
Name: tools
Value: cname.vercel-dns.com
TTL: Auto
```

5. **Ga naar je DNS provider** (hosting control panel)
6. **Voeg CNAME record toe** met bovenstaande waarden
7. **Wacht 5-10 minuten** voor DNS propagatie

✅ **Live op:** `https://tools.pixelit.be`

---

## ⚙️ CONFIGURATIE

### **Email Address Updaten**

Update `info@pixelit.be` in alle bestanden:

```bash
# In alle tool HTML bestanden:
# Zoek: info@pixelit.be
# Vervang met jouw echte email
```

### **Nieuwe Tool Toevoegen**

**Stap 1:** Maak `new-tool.html` in `/tools/` folder

**Stap 2:** Voeg toe aan `tools-config.js`:

```javascript
{
    id: "new-tool",
    title: "Tool Naam",
    icon: "🎨",
    description: "Wat doet de tool?",
    url: "/tools/new-tool.html",
    status: "live",
    badge: "Gratis",
    category: "business"
}
```

**Stap 3:** Commit & push naar GitHub

Vercel deployed automatisch! ✨

---

## 🔗 CROSS-LINKING

### **Tools → Dashboard**

Onderaan elke tool:
```html
<a href="https://dashboard.pixelit.be">
  Probeer onze Premium Dashboard →
</a>
```

### **Dashboard → Tools**

In dashboard menu:
```html
<a href="https://tools.pixelit.be">
  🎁 Gratis Tools
</a>
```

---

## 📊 URLS STRUCTURE

```
tools.pixelit.be/                    → Tools hub (homepage)
tools.pixelit.be/tools/profitchecker → Profit Calculator
tools.pixelit.be/tools/speed-checker → Speed Test
tools.pixelit.be/tools/seo-scanner   → SEO Scan
tools.pixelit.be/tools/gdpr-checker  → GDPR Check
```

---

## 🎨 FEATURES

- ✅ Dynamische tool grid (powered by tools-config.js)
- ✅ Responsive design (mobiel + desktop)
- ✅ Tailwind CSS styling
- ✅ Glassmorphism effects
- ✅ Smooth animations
- ✅ Email capture forms (ready voor Mailchimp)
- ✅ Upsell CTAs naar premium diensten

---

## 🔧 ONDERHOUD

### **Tool Status Wijzigen**

In `tools-config.js`:

```javascript
// Van "Binnenkort" naar "Live"
status: "coming"  →  status: "live"
badge: "Binnenkort"  →  badge: "Gratis"
url: "#"  →  url: "/tools/tool-name.html"
```

### **Tool Verwijderen**

Delete het hele object uit `tools-config.js`

### **Volgorde Wijzigen**

Sleep objecten in `tools-config.js` naar gewenste positie

---

## 📈 ANALYTICS (Later Toevoegen)

**Google Analytics:**
```html
<!-- Add to <head> of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

**Plausible Analytics:**
```html
<script defer data-domain="tools.pixelit.be" src="https://plausible.io/js/script.js"></script>
```

---

## 📧 EMAIL CAPTURE (Later Koppelen)

Alle tools hebben email capture forms ready.

**Opties:**
- Mailchimp
- MailerLite
- Sendinblue
- ConvertKit

**Integratie:**
Update form `action` attributes in tool HTML bestanden.

---

## ✅ POST-DEPLOYMENT CHECKLIST

- [ ] Vercel project deployed
- [ ] Custom domain ingesteld (tools.pixelit.be)
- [ ] DNS propagation check (nslookup tools.pixelit.be)
- [ ] Alle tools testen
- [ ] Email addresses geüpdatet
- [ ] Cross-links naar dashboard werken
- [ ] Mobile responsive check
- [ ] Analytics toegevoegd (optioneel)

---

## 🚀 VOLGENDE STAPPEN

**Week 1:**
- [ ] Promoot tools op LinkedIn
- [ ] Share in relevante Facebook groups
- [ ] Email naar bestaande klanten

**Week 2-4:**
- [ ] Verzamel eerste 100 users
- [ ] Email capture koppelen
- [ ] A/B test verschillende CTAs

**Maand 2:**
- [ ] Analytics analyseren
- [ ] Conversion naar dashboard optimaliseren
- [ ] Nieuwe tools toevoegen op basis van feedback

---

## 🆘 TROUBLESHOOTING

**Tools laden niet:**
→ Check vercel.json routing configuratie
→ Hard refresh (Ctrl+F5)

**Links werken niet:**
→ Check tools-config.js URLs beginnen met `/tools/`
→ Check vercel.json routes

**Domain werkt niet:**
→ Check DNS propagatie: `nslookup tools.pixelit.be`
→ Wacht 5-10 minuten

**Wijzigingen niet zichtbaar:**
→ Vercel cached agressief - wacht 30 sec
→ Of: Invalidate cache in Vercel settings

---

## 📞 SUPPORT

**Website:** pixelit.be  
**Email:** info@pixelit.be  
**Dashboard:** dashboard.pixelit.be

---

**🎉 Je tools platform is klaar!**

*Built with ❤️ by Claude for pixelit.be*