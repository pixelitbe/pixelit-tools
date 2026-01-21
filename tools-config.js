// ============================================
// PIXELIT.BE TOOLS CONFIGURATIE
// ============================================
// 
// HOE TE GEBRUIKEN:
// 1. Tool toevoegen? → Voeg een nieuw object toe aan de array
// 2. Tool verwijderen? → Verwijder het object
// 3. Volgorde wijzigen? → Sleep de objecten in de gewenste volgorde
// 4. Status wijzigen? → Pas "status" aan ("live", "coming", of "premium")
//
// ============================================

const toolsConfig = [
    // GRATIS TOOLS
    {
        id: "profit-checker",
        title: "Project Profit Checker",
        icon: "💰",
        description: "Stop met gokken. Bereken of je vaste prijs winstgevend is en ontdek je minimale uurtarief.",
        url: "/tools/profitchecker.html",
        status: "live",        // "live", "coming", of "premium"
        badge: "Gratis",       // "Gratis", "Premium", of "Binnenkort"
        category: "business"   // "business", "web", "security", "design"
    },
    {
        id: "speed-checker",
        title: "Website Speed Score",
        icon: "⚡",
        description: "Test de laadsnelheid van je website en ontdek hoe je performance kan verbeteren.",
        url: "/tools/speed-checker.html",
        status: "live",
        badge: "Gratis",
        category: "web"
    },
    {
        id: "seo-scanner",
        title: "SEO Quick Scan",
        icon: "🔍",
        description: "Controleer de SEO-gezondheid van je website in 5 seconden. Eenvoudig en direct resultaat.",
        url: "/tools/seo-scanner.html",
        status: "live",
        badge: "Gratis",
        category: "web"
    },
    {
        id: "gdpr-checker",
        title: "GDPR Privacy Check",
        icon: "🔒",
        description: "Is je website GDPR-proof? Check het in 2 minuten met onze simpele privacy scan.",
        url: "/tools/gdpr-checker.html",
        status: "live",
        badge: "Gratis",
        category: "security"
    },

    // BINNENKORT
    {
        id: "domain-generator",
        title: "Domain Name Generator",
        icon: "🌐",
        description: "Vind de perfecte domeinnaam voor je bedrijf met AI-powered suggesties en beschikbaarheidscheck.",
        url: "#",
        status: "coming",
        badge: "Binnenkort",
        category: "design"
    },
    {
        id: "image-optimizer",
        title: "Image Size Optimizer",
        icon: "🖼️",
        description: "Comprimeer je afbeeldingen zonder kwaliteitsverlies. Upload en download geoptimaliseerde files.",
        url: "#",
        status: "coming",
        badge: "Binnenkort",
        category: "web"
    },
    {
        id: "password-checker",
        title: "Wachtwoord Sterkte Meter",
        icon: "🔐",
        description: "Test hoe sterk je wachtwoorden zijn en krijg tips voor betere beveiliging.",
        url: "#",
        status: "coming",
        badge: "Binnenkort",
        category: "security"
    },
    {
        id: "hosting-calculator",
        title: "Hosting Cost Calculator",
        icon: "💻",
        description: "Bereken wat je echt nodig hebt voor hosting en vergelijk kosten tussen providers.",
        url: "#",
        status: "coming",
        badge: "Binnenkort",
        category: "web"
    }

    // NIEUWE TOOL TOEVOEGEN? Kopieer onderstaand template:
    /*
    {
        id: "unique-tool-id",
        title: "Tool Naam",
        icon: "🎨",  // Kies een emoji op https://emojipedia.org
        description: "Korte beschrijving van wat de tool doet.",
        url: "tool-filename.html",  // Of "#" voor binnenkort
        status: "live",  // "live", "coming", of "premium"
        badge: "Gratis",  // "Gratis", "Premium", of "Binnenkort"
        category: "business"  // "business", "web", "security", "design"
    }
    */
];

// ============================================
// SITE CONFIGURATIE
// ============================================

const siteConfig = {
    siteName: "pixelit.be",
    tagline: "Professionele Tools voor Slimme Ondernemers",
    description: "Ontdek onze gratis tools om je bedrijf naar een hoger niveau te tillen. Van winstberekeningen tot website optimalisatie - alles wat je nodig hebt.",
    
    contact: {
        email: "info@pixelit.be",
        subject: "Interesse in Custom Tools"
    },
    
    cta: {
        title: "Heb je een custom tool nodig?",
        description: "We bouwen op maat gemaakte tools en automatisaties voor jouw bedrijf. Van calculators tot volledige workflows - wij maken het mogelijk.",
        buttonText: "Neem Contact Op"
    }
};

// ============================================
// EXPORT (niet aanpassen)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toolsConfig, siteConfig };
}