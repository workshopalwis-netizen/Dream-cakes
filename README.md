# Dream Cakes — Premium Artisanal Bakery Website

A modern, responsive, high-conversion business website crafted for **Dream Cakes**, featuring bespoke cake galleries with full-screen lightbox viewing, interactive flavor tastings showcase, customer reviews, accessible FAQ accordions, and an instant WhatsApp custom cake inquiry system.

---

## 🌟 Key Features

- **Luxury Artisanal Brand Identity**: Warm editorial aesthetic using Playfair Display, Plus Jakarta Sans, soft ivory surfaces, and champagne gold accents.
- **Conversion-Focused Custom Cake Inquiry**:
  - Direct 1-Click WhatsApp Chat with structured pre-filled order inquiry generator.
  - Interactive Custom Cake Request Form (Name, Phone, Email, Event Date, Servings, Flavor Preferences, Design Notes).
- **Interactive Portfolio & Lightbox**:
  - Filter by Weddings, Celebrations, Bento & Treats, and Dessert Tables.
  - Full-screen modal with keyboard navigation (Arrows & Escape) and mobile swipe-friendly controls.
- **Zero-Dependency Architecture**: Built with pure semantic HTML5, modern CSS3, and vanilla ES6 JavaScript. No build steps, `npm`, or compilation required. Works natively in any modern browser.
- **Local SEO & Schema.org**: Includes `Bakery` and `LocalBusiness` JSON-LD structured data, Open Graph meta tags, and responsive viewport optimization.
- **Centralized Content Store**: All business contact info, hours, services, and reviews are organized in `assets/js/site-data.js` for instant updates.

---

## 🚀 How to View the Website

### Option 1: Double-Click to Open
Simply double-click `index.html` in your file manager (Finder) to open the site directly in Safari, Chrome, Edge, or Firefox.

### Option 2: Local Web Server
If you prefer running a local static server:
```bash
# macOS / Linux (using Python 3)
python3 -m http.server 8080

# Or with Node npx
npx serve
```
Then visit `http://localhost:8080` in your web browser.

---

## ✏️ How to Customize Business Information

You can update all information across the site in under 2 minutes by editing **`assets/js/site-data.js`**:

### 1. Update Contact & Social Media Details
Open `assets/js/site-data.js` and edit the `business` object:
```javascript
business: {
  phone: "+94 71 923 7051",          // Your display phone number
  whatsappNumber: "94786323407",      // Your WhatsApp number (country code + digits, no + or spaces)
  email: "dreamcakesdanu@gmail.com",
  address: "Thiriwanaketiya, Rathnapura",
  coordinates: "6.667973, 80.430449",
  social: {
    facebook: "https://web.facebook.com/profile.php?id=100071674043223",
    instagram: "https://www.instagram.com/_dream_cakes_1/"
  }
}
```

### 2. Update Operating Hours
Modify the `hours` array in `assets/js/site-data.js`:
```javascript
hours: [
  { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
  { days: "Saturday", hours: "9:00 AM – 4:00 PM" },
  { days: "Sunday", hours: "Special Event Deliveries Only" }
]
```

### 3. Add or Swap Cake Photos
To replace any photo:
1. Drop your new `.jpg` or `.png` images into `assets/images/`.
2. Update the filename reference in `assets/js/site-data.js` under `gallery` or `services`.

### 4. Update Genuine Customer Reviews
Add or edit client quotes in the `testimonials` list in `assets/js/site-data.js` and `index.html`.

---

## 📁 File Structure

```
Dream cakes/
├── index.html               # Main semantic HTML5 web page
├── README.md                # Documentation & customization guide
└── assets/
    ├── css/
    │   └── styles.css       # Complete luxury responsive CSS design system
    ├── js/
    │   ├── site-data.js     # Centralized business information & data store
    │   └── app.js           # Navigation, lightbox, FAQ, and WhatsApp form logic
    └── images/
        ├── logo.svg         # Vector brand logo
        ├── favicon.svg      # Vector browser icon
        ├── hero-cake.jpg    # High-res bespoke 5-tier hero cake
        ├── wedding-cake.jpg # Luxury blush floral wedding cake
        ├── birthday-cake.jpg# Contemporary milestone birthday cake
        ├── bento-treats.jpg # Korean bento cake & floral cupcakes
        ├── dessert-table.jpg# Full luxury event dessert station
        └── about-baker.jpg  # Artisanal bakery studio photo
```

---

## 🌐 Deploying to the Web

Because this website uses clean static web standards, it can be deployed for free in minutes on:
- **Netlify**: Drag and drop the `Dream cakes` folder into the Netlify app.
- **Vercel**: Run `vercel` or link your GitHub repository.
- **GitHub Pages**: Push this directory to a GitHub repository and turn on GitHub Pages in repository settings.
- **Traditional Web Host / cPanel**: Upload all files to your `public_html` folder via FTP or File Manager.
