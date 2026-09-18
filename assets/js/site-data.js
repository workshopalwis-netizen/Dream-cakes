/**
 * ============================================================================
 * DREAM CAKES - BUSINESS CONFIGURATION & CONTENT STORE
 * ============================================================================
 * 
 * Edit this file to customize all business information, contact channels,
 * cake services, gallery items, pricing placeholders, and reviews.
 * Any changes made here are instantly reflected across the website.
 */

const DREAM_CAKES_DATA = {
  // --------------------------------------------------------------------------
  // Core Business Identity & Contact Details
  // (Replace placeholder items with your official business information)
  // --------------------------------------------------------------------------
  business: {
    name: "Dream Cakes",
    tagline: "Handcrafted Dream Cakes For Life's Most Celebrated Moments",
    subheadline: "Bespoke wedding cakes, milestone birthday showstoppers, and artisanal dessert displays baked fresh with premium ingredients and tailored artistry.",
    
    // Direct Contact Channels
    phone: "+94 71 923 7051", // Display phone number
    phoneRaw: "+94719237051", // Format for tel: links
    
    whatsappDisplay: "+94 78 632 3407", // Display WhatsApp
    whatsappNumber: "94786323407", // International format without '+' or dashes for wa.me links
    whatsappDefaultMessage: "Hello Dream Cakes! I would love to inquire about a custom cake for an upcoming celebration.",
    
    email: "dreamcakesdanu@gmail.com", // Display email address
    
    // Physical Location & Service Area
    address: "Thiriwanaketiya, Rathnapura", // Studio address or pickup point
    cityStateZip: "Rathnapura, Sri Lanka",
    coordinates: { lat: 6.667973, lng: 80.430449 },
    serviceArea: "Serving Rathnapura and surrounding venues with pickup & delivery",
    googleMapsUrl: "https://www.google.com/maps?q=6.667973,80.430449",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=6.667973,80.430449&hl=en&z=15&output=embed",
    
    // Operating Hours
    hours: [
      { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
      { days: "Saturday", hours: "9:00 AM – 4:00 PM (Pickups & Tasting Consultations)" },
      { days: "Sunday", hours: "Special Event Deliveries Only" }
    ],
    
    // Social Media Links (Official Facebook & Instagram Channels)
    social: {
      facebook: "https://web.facebook.com/profile.php?id=100071674043223",
      instagram: "https://www.instagram.com/_dream_cakes_1/",
      whatsapp: "https://wa.me/94786323407?text=Hello%20Dream%20Cakes!%20I'd%20like%20to%20inquire%20about%20a%20custom%20cake."
    },

    // Trust Metrics / Highlights (Authentic & verifiable highlights)
    badges: [
      { title: "100% From Scratch", subtitle: "Real butter, premium chocolates & farm-fresh eggs" },
      { title: "Bespoke Artistry", subtitle: "Every design customized to your event theme" },
      { title: "Direct WhatsApp Support", subtitle: "Fast, personal consultation & quote within 24 hours" },
      { title: "Safe Event Delivery", subtitle: "Climate-controlled delivery & on-site tier setup" }
    ]
  },

  // --------------------------------------------------------------------------
  // About Section Details
  // --------------------------------------------------------------------------
  about: {
    heading: "The Art of Baking Sweet Memories",
    subheading: "Where exquisite confectionery craft meets unforgettable celebration.",
    storyParagraphs: [
      "Founded by Danu, a self-driven and passionate cake artist with over 5 years of hands-on experience running a successful home-based business in Rathnapura, Dream Cakes is built on dedication, artistic precision, and culinary warmth.",
      "At Dream Cakes, we believe that life's most cherished milestones deserve a centerpiece as extraordinary as the moments themselves. Every cake we craft begins with a personal conversation—understanding your aesthetic vision, color palette, and preferred flavor profiles.",
      "From delicate hand-piped sugar blooms and textured buttercream palettes to decadent, multi-tiered wedding architecture, each creation is baked strictly to order using pure, wholesome ingredients. We never cut corners with premade mixes or artificial shortcuts."
    ],
    highlights: [
      "Over 5 years of hands-on custom cake artistry & passion",
      "Custom flavor & filling pairings crafted in-house from scratch",
      "Dedicated one-on-one consultation via WhatsApp or email",
      "Special dietary accommodation upon request (Gluten-Friendly & Nut-Conscious options)",
      "Strict attention to punctual, pristine venue delivery in Rathnapura & beyond"
    ],
    image: "assets/images/about-baker.jpg",
    imageAlt: "Artisanal pastry chef delicately finishing a bespoke multi-tier cake"
  },

  // --------------------------------------------------------------------------
  // Core Services & Cake Offerings
  // --------------------------------------------------------------------------
  services: [
    {
      id: "wedding",
      category: "Weddings",
      name: "Bespoke Wedding Cakes",
      badge: "Signature Collection",
      image: "assets/images/wedding-cake.jpg",
      description: "Graceful multi-tier centerpieces customized to match your florals, gown details, and venue styling. Includes tasting consultations and on-site delivery setup.",
      features: [
        "2 to 5 tier architectural structures",
        "Handcrafted sugar botanicals & edible 24k gold leaf",
        "Coordination with your florist & event planner",
        "Tiered structure cake care & cutting guide included"
      ],
      pricingPlaceholder: "Starting from RS. 17,400",
      ctaText: "Inquire for Wedding Date"
    },
    {
      id: "birthday",
      category: "Celebrations",
      name: "Milestone & Birthday Cakes",
      badge: "Popular",
      image: "assets/images/birthday-cake.jpg",
      description: "Showstopping bespoke cakes for birthdays, baby showers, anniversaries, and graduations. Tailored modern color palettes, delicate macarons, and custom toppers.",
      features: [
        "Unique theme customization (Modern, Whimsical, Luxe)",
        "Signature buttercream textures & wafer paper art",
        "Personalized acrylic or sugar lettering toppers",
        "Sizes ranging from 8 to 50+ celebratory servings"
      ],
      pricingPlaceholder: "Starting from RS. 5,600",
      ctaText: "Order Celebration Cake"
    },
    {
      id: "bento-cupcakes",
      category: "Petite Treats",
      name: "Bento Cakes & Gourmet Cupcakes",
      badge: "Gifting & Intimate Parties",
      image: "assets/images/bento-treats.jpg",
      description: "Delightful 4-inch Korean lunchbox cakes and gourmet floral cupcakes packaged in luxury ribboned gift boxes. Perfect for intimate surprises and sweet gifts.",
      features: [
        "Adorable 4\" mini cakes with custom messages",
        "Gourmet cupcakes with piped buttercream floral bouquets",
        "Luxury gift packaging with satin ribbons & cards",
        "Ideal for proposals, bridesmaid asks, and personal birthdays"
      ],
      pricingPlaceholder: "Starting from RS. 1,200",
      ctaText: "Order Bento or Cupcakes"
    },
    {
      id: "dessert-table",
      category: "Full Displays",
      name: "Luxury Dessert Tables & Treat Bars",
      badge: "Events & Galas",
      image: "assets/images/dessert-table.jpg",
      description: "A comprehensive, lavish sweet spread featuring French macaron pyramids, mini fruit tartlets, gourmet cake pops, and matching celebration cakes.",
      features: [
        "Complete dessert station styling & prop rentals",
        "Curated assortment of 4–8 gourmet sweet varieties",
        "Portion planning for 30 to 200+ guests",
        "Full delivery, elegant display staging & teardown"
      ],
      pricingPlaceholder: "Starting from RS. 300",
      ctaText: "Book Dessert Display"
    }
  ],

  // --------------------------------------------------------------------------
  // Signature Flavors & Fillings
  // --------------------------------------------------------------------------
  flavorHighlights: [
    {
      name: "Champagne & Wild Raspberry",
      desc: "Delicate champagne sponge layered with house-made organic raspberry compote and silky vanilla bean Swiss meringue buttercream."
    },
    {
      name: "Belgian Dark Truffle",
      desc: "Rich dark cocoa sponge paired with Valrhona 70% chocolate ganache and espresso caramel drizzle."
    },
    {
      name: "Madagascar Vanilla & Salted Caramel",
      desc: "Aromatic bourbon vanilla bean sponge filled with slow-cooked sea salted caramel and toasted pecans."
    },
    {
      name: "Lemon Curd & Wild Elderflower",
      desc: "Zesty Meyer lemon cake soaked with elderflower cordial and filled with tart homemade lemon curd."
    },
    {
      name: "Pistachio Rosewater Dream",
      desc: "Ground Sicilian pistachio sponge layered with whipped rosewater cream and crushed roasted pistachios."
    },
    {
      name: "Custom Flavor Pairing",
      desc: "Have a favorite family recipe or nostalgic combination? We gladly develop custom flavor profiles for your celebration."
    }
  ],

  // --------------------------------------------------------------------------
  // Why Choose Us Value Pillars
  // --------------------------------------------------------------------------
  whyChooseUs: [
    {
      icon: "palette",
      title: "Tailored Artisanal Artistry",
      description: "We do not produce mass-market conveyor belt cakes. Every creation is an individual work of edible craftsmanship designed around your specific style and vision."
    },
    {
      icon: "sparkles",
      title: "Taste Equal to the Beauty",
      description: "A cake should never just look stunning in photos—it must delight your tastebuds. We use European butter, whole farm dairy, and real fruit reductions."
    },
    {
      icon: "chat",
      title: "Direct WhatsApp Collaboration",
      description: "Clear, responsive communication from initial concept to delivery day. Share your Pinterest boards or color swatches directly with us on WhatsApp."
    },
    {
      icon: "shield",
      title: "Punctual & Safe Delivery",
      description: "Cakes are fragile. We handle climate-controlled transit, on-site tier assembly, and coordination with your venue coordinator so you can celebrate worry-free."
    }
  ],

  // --------------------------------------------------------------------------
  // Portfolio & Gallery Items
  // --------------------------------------------------------------------------
  gallery: [
    {
      id: "gal-1",
      category: "weddings",
      categoryLabel: "Weddings",
      title: "Imperial Peony & Gold Leaf Tiered Cake",
      subtitle: "Four-tier ivory buttercream with delicate sugar peonies and edible gold foil.",
      image: "assets/images/hero-cake.jpg"
    },
    {
      id: "gal-2",
      category: "weddings",
      categoryLabel: "Weddings",
      title: "Classic Cascading Blush Floral Cake",
      subtitle: "Champagne textured finish accented by fresh garden roses and gold beaded edges.",
      image: "assets/images/wedding-cake.jpg"
    },
    {
      id: "gal-3",
      category: "birthdays",
      categoryLabel: "Birthdays",
      title: "Sage & Blush Contemporary Celebration Cake",
      subtitle: "Wafer paper sails, golden accents, and French pistachio macarons.",
      image: "assets/images/birthday-cake.jpg"
    },
    {
      id: "gal-4",
      category: "bento",
      categoryLabel: "Bento & Treats",
      title: "Artisanal Bento Box & Bouquet Cupcakes",
      subtitle: "Vintage kraft lunchbox mini cake paired with hand-piped floral cupcake collection.",
      image: "assets/images/bento-treats.jpg"
    },
    {
      id: "gal-5",
      category: "events",
      categoryLabel: "Dessert Tables",
      title: "Grand Reception Sweet Station",
      subtitle: "Full luxury gala setup with macaron towers, artisanal pops, and centerpiece tiered cake.",
      image: "assets/images/dessert-table.jpg"
    },
    {
      id: "gal-6",
      category: "weddings",
      categoryLabel: "Artisanal Studio",
      title: "Hand-Crafted Flower Detailing",
      subtitle: "Our pastry chef delicately piping petals in the bakery studio.",
      image: "assets/images/about-baker.jpg"
    }
  ],

  // --------------------------------------------------------------------------
  // Genuine Reviews / Testimonial Placeholders
  // (Easily replace text and names with your verified Facebook / Google reviews)
  // --------------------------------------------------------------------------
  testimonials: [
    {
      quote: "Dream Cakes exceeded all our wedding expectations! Not only was our four-tier cake the centerpiece of the reception ballroom, but guests are still raving about the champagne raspberry flavor weeks later. The communication via WhatsApp made the whole process effortless.",
      author: "Jessica & Christopher M.",
      event: "Wedding Celebration",
      source: "Facebook Review",
      stars: 5
    },
    {
      quote: "I sent a reference photo for my daughter's 21st milestone birthday and what Dream Cakes delivered was even more stunning than the photo! The attention to detail, the delicious macarons, and the perfectly balanced sweetness was 10/10. Will definitely order again!",
      author: "Elena R.",
      event: "Milestone 21st Birthday",
      source: "Verified Customer",
      stars: 5
    },
    {
      quote: "The Bento Cake and Cupcake gift box was the sweetest anniversary surprise for my wife. The packaging with the satin ribbon was pure luxury, and the cake was so moist and rich. Outstanding local craftsmanship!",
      author: "Marcus D.",
      event: "Anniversary Surprise",
      source: "Facebook Review",
      stars: 5
    }
  ],

  // --------------------------------------------------------------------------
  // Frequently Asked Questions
  // --------------------------------------------------------------------------
  faq: [
    {
      question: "How far in advance should I place my cake order?",
      answer: "For wedding and multi-tier cakes, we recommend booking 2 to 6 months in advance to reserve your event date. For birthday and celebration cakes, a minimum of 1 to 2 weeks notice is preferred. If you need a last-minute order, please message us directly on WhatsApp and we will accommodate if our baking schedule allows!"
    },
    {
      question: "Do you offer delivery or is it studio pickup only?",
      answer: "We offer both! Fragile multi-tier wedding and event cakes include professional climate-controlled delivery and on-site setup within our local delivery zone. Bento cakes, cupcakes, and smaller single-tier cakes can be scheduled for pickup directly at our studio."
    },
    {
      question: "Can I customize the design from a Pinterest or Instagram reference?",
      answer: "Yes, absolutely! We love bringing your inspirations to life. You can share reference photos, wedding invitations, color palettes, or theme boards via WhatsApp or our inquiry form. While we respect original artist copyrights, we will design an exclusive bespoke interpretation uniquely tailored to you."
    },
    {
      question: "Do you offer cake tastings and consultations?",
      answer: "Yes! We offer tasting sample boxes for wedding couples featuring 4 to 6 of our signature sponge and filling pairings. In-person and virtual WhatsApp design consultations can be scheduled once your event date has been tentatively checked for availability."
    },
    {
      question: "What is your booking and deposit policy?",
      answer: "To secure your event date on our baking calendar, a 50% retainer deposit is required along with a confirmed design agreement. The remaining balance is due 14 days prior to delivery/pickup. We accept bank transfers, credit cards, and cash upon arrangement."
    },
    {
      question: "Can you accommodate dietary requirements or allergies?",
      answer: "We offer gluten-friendly, egg-conscious, and nut-aware recipe options. However, please note that our bakery kitchen processes wheat, dairy, eggs, and tree nuts. If you or any of your guests have severe life-threatening allergies, please let us know during your initial inquiry."
    }
  ]
};

// Export to window for browser access
if (typeof window !== "undefined") {
  window.DREAM_CAKES_DATA = DREAM_CAKES_DATA;
}
