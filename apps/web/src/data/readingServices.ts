export interface ReadingTier {
  id: string;
  name: string;
  badge?: string;
  priceUSD: number;
  priceINR: number;
  duration: string;
  deliverables: string[];
  popular?: boolean;
}

export interface ReadingService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  glyph: string;
  assignedMaster: string;
  masterRole: string;
  masterAvatar: string;
  tradition: string;
  highlightPoints: string[];
  tiers: ReadingTier[];
}

export const READING_SERVICES: Record<string, ReadingService> = {
  tarot: {
    id: "tarot",
    title: "Tarot Card Reading",
    subtitle: "Sacred Rider-Waite-Smith & Hermetic Arcana Channel",
    description: "Unlock profound clairvoyant insights into your past karmic roots, present crossroads, and ascending future possibilities.",
    iconName: "tarot",
    glyph: "🃏",
    assignedMaster: "High Astrologer Elena",
    masterRole: "Clairvoyant Tarot Master (15+ Yrs Lineage)",
    masterAvatar: "/astrologer-avatar.jpg",
    tradition: "Hermetic Golden Dawn & RWS Lineage",
    highlightPoints: [
      "Full 78-Card Grand Deck Spread (Major & Minor Arcana)",
      "Past, Present, and Future Karmic Timeline Analysis",
      "Actionable Advice for Love, Career & Spiritual Growth",
      "Direct Channeling from High Astrologer Elena",
    ],
    tiers: [
      {
        id: "essential",
        name: "Essential Oracle Spread",
        priceUSD: 29,
        priceINR: 1999,
        duration: "In-depth Written Dossier (Delivered in 24h)",
        deliverables: [
          "5-Card Comprehensive Spread Analysis",
          "Audio Voice Recording from Astrologer Elena",
          "High-Resolution Astrological Card Chart",
        ],
      },
      {
        id: "master",
        name: "Live 1-on-1 Master Consultation",
        priceUSD: 49,
        priceINR: 3499,
        duration: "45 Minutes Live Consultation",
        popular: true,
        deliverables: [
          "45-Min Private Video / Audio Session with Elena",
          "10-Card Celtic Cross & Twin Flame Spread",
          "Ask Unlimited Direct Questions during session",
          "Full Session Recording & Custom Written Remedies",
        ],
      },
      {
        id: "vip",
        name: "Grand Destiny VIP Blueprint",
        priceUSD: 89,
        priceINR: 5999,
        duration: "75 Minutes Deep Dive + 1-Year Calendar",
        deliverables: [
          "75-Min Master Session with Astrologer Elena",
          "Combined Tarot + Natal Birth Chart Ephemeris",
          "12-Month Month-by-Month Predictive Transit Calendar",
          "Personalized Crystal & Affirmation Prescription",
        ],
      },
    ],
  },
  moonology: {
    id: "moonology",
    title: "Moonology Reading",
    subtitle: "Lunar Phase Tides & Emotional Soul Blueprint",
    description: "Harness the magnetic power of the Moon to understand your emotional cycles, subconscious desires, and optimal manifestation windows.",
    iconName: "moonology",
    glyph: "🌙",
    assignedMaster: "Lady Seraphina",
    masterRole: "Lunar & Ancestral Clairvoyant (18+ Yrs Lineage)",
    masterAvatar: "/astrologer-avatar.jpg",
    tradition: "Classical Hellenistic & Esoteric Moonology",
    highlightPoints: [
      "Natal Moon Phase & Lunar Zodiac Sign Decoding",
      "New Moon Manifestation & Full Moon Release Timelines",
      "Emotional Shadow Work & Intuitive Channeling",
      "Lunar Transit Guidance for the Upcoming Year",
    ],
    tiers: [
      {
        id: "essential",
        name: "Lunar Phase Report",
        priceUSD: 29,
        priceINR: 1999,
        duration: "Comprehensive Written Lunar Dossier",
        deliverables: [
          "Natal Moon Sign & House Placement Analysis",
          "Upcoming 6-Month Lunar Cycle Calendar",
          "Personalized Lunar Water & Meditation Ritual",
        ],
      },
      {
        id: "master",
        name: "Live Lunar Consultation",
        priceUSD: 49,
        priceINR: 3499,
        duration: "45 Minutes Live Session",
        popular: true,
        deliverables: [
          "45-Min Private Session with Lady Seraphina",
          "Void-of-Course Moon Navigations for Relationships",
          "Direct Question Answering for Emotional Decisions",
          "Custom Lunar Altar & Crystal Prescription",
        ],
      },
      {
        id: "vip",
        name: "Grand Lunar Manifestation Matrix",
        priceUSD: 89,
        priceINR: 5999,
        duration: "75 Minutes VIP Session",
        deliverables: [
          "75-Min Session + 1-Year Lunar Calendar",
          "Comprehensive Eclipse & Supermoon Impact Analysis",
          "Personalized Manifestation & Ritual Guidance",
          "Audio Hypnotherapy Meditation Channeled for You",
        ],
      },
    ],
  },
  kundali: {
    id: "kundali",
    title: "Vedic Kundali Analysis",
    subtitle: "Parashara Vedic Janam Kundali & Dasha Forecast",
    description: "Ancient Vedic astrology birth chart calculations revealing your soul's karmic blueprint, career trajectory, and planetary remedies.",
    iconName: "kundali",
    glyph: "☸️",
    assignedMaster: "Pandit Rajesh Shastri",
    masterRole: "Vedic Jyotish Acharya (25+ Yrs Lineage)",
    masterAvatar: "/astrologer-avatar.jpg",
    tradition: "Varanasi Parampara & Parashara Jyotish",
    highlightPoints: [
      "Exact Lagna (Ascendant), Moon & Navamsha (D9) Chart",
      "Mahadasha & Antardasha Planetary Timeline Analysis",
      "Manglik, Kaal Sarp, Sade Sati & Dosha Checks",
      "Vedic Gemstone, Mantra, and Yantra Prescriptions",
    ],
    tiers: [
      {
        id: "essential",
        name: "Janam Kundali Dossier",
        priceUSD: 29,
        priceINR: 1999,
        duration: "Complete 25-Page Vedic Report",
        deliverables: [
          "Full Kundali Chart Calculations (Lagna, D9, D10)",
          "Current Dasha & Transit Impact Analysis",
          "Auspicious Gemstone & Rudraksha Recommendations",
        ],
      },
      {
        id: "master",
        name: "Live Kundali Consultation",
        priceUSD: 49,
        priceINR: 3499,
        duration: "45 Minutes Live Consultation",
        popular: true,
        deliverables: [
          "45-Min Private Session with Pandit Rajesh Shastri",
          "Kundali Milan (Relationship Matchmaking) Check",
          "Career, Wealth & Health Dasha Timing",
          "Personal Vedic Puja & Stotra Prescription",
        ],
      },
      {
        id: "vip",
        name: "Complete Life Path & Muhurta VIP",
        priceUSD: 89,
        priceINR: 5999,
        duration: "75 Minutes VIP Session + Remedies",
        deliverables: [
          "75-Min Master Consultation with Pandit Rajesh",
          "5-Year Comprehensive Mahadasha Timeline",
          "Auspicious Muhurta Dates for Business & Marriage",
          "Energized Yantra Blueprint sent to your address",
        ],
      },
    ],
  },
  numerology: {
    id: "numerology",
    title: "Numerology Reading",
    subtitle: "Pythagorean & Chaldean Sacred Number Matrix",
    description: "Decode the mathematical vibrational codes of your birth name and date of birth to master your career, destiny, and personal cycles.",
    iconName: "numerology",
    glyph: "🔢",
    assignedMaster: "Master Kaelen Vance",
    masterRole: "Pythagorean Numerology Architect (12+ Yrs Lineage)",
    masterAvatar: "/astrologer-avatar.jpg",
    tradition: "Pythagorean & Ancient Chaldean Numerology",
    highlightPoints: [
      "Life Path, Soul Urge & Expression Number Calculations",
      "Karmic Debt & Master Numbers (11, 22, 33) Decoding",
      "Personal Year & Month Vibration Cycles",
      "Name Spelling Correction for Maximum Prosperity",
    ],
    tiers: [
      {
        id: "essential",
        name: "Core Number Matrix",
        priceUSD: 29,
        priceINR: 1999,
        duration: "Detailed Written Numerology Profile",
        deliverables: [
          "Complete Breakdown of all 5 Core Numbers",
          "Current Personal Year Forecast & Power Months",
          "Lucky Numbers & Power Colors Guide",
        ],
      },
      {
        id: "master",
        name: "Live Numerology Strategy",
        priceUSD: 49,
        priceINR: 3499,
        duration: "45 Minutes Live Consultation",
        popular: true,
        deliverables: [
          "45-Min Private Session with Master Kaelen",
          "Name Compatibility & Business Name Vibration",
          "Financial & Career Opportunity Windows",
          "Phone Number & Vehicle Number Analysis",
        ],
      },
      {
        id: "vip",
        name: "Master Number Sovereign VIP",
        priceUSD: 89,
        priceINR: 5999,
        duration: "75 Minutes VIP Session",
        deliverables: [
          "75-Min Session + Name Optimization Dossier",
          "Full Corporate / Business Entity Number Matrix",
          "Life Cycle Pinnacles & Challenges Roadmap",
          "Lucky Bank Account & Signature Analysis",
        ],
      },
    ],
  },
  "candle-wax": {
    id: "candle-wax",
    title: "Candle Wax Reading",
    subtitle: "Ancient Ceromancy & Elemental Flame Channeling",
    description: "An ancient form of divination where melted wax is poured into sacred blessed water, revealing symbols, faces, and spiritual blocks.",
    iconName: "candle-wax",
    glyph: "🕯️",
    assignedMaster: "Lady Seraphina",
    masterRole: "Ceromancy Seer & Energy Healer (18+ Yrs Lineage)",
    masterAvatar: "/astrologer-avatar.jpg",
    tradition: "Mediterranean & Celtic Ceromancy",
    highlightPoints: [
      "Physical Wax Formation Analysis by Master Seer",
      "Flame Height, Flicker, and Smoke Aura Decoding",
      "Aura Cleansing & Evil Eye (Nazar) Blockage Check",
      "Clear Guidance for Relationship Intentions",
    ],
    tiers: [
      {
        id: "essential",
        name: "Ceromancy Symbol Report",
        priceUSD: 29,
        priceINR: 1999,
        duration: "Wax Reading Photo & Written Interpretation",
        deliverables: [
          "High-Resolution Photos of Wax Formations",
          "Complete Symbol & Shape Decoding",
          "Spiritual Cleansing Candle Guidance",
        ],
      },
      {
        id: "master",
        name: "Live Ceromancy Ritual",
        priceUSD: 49,
        priceINR: 3499,
        duration: "45 Minutes Live Candle Ritual",
        popular: true,
        deliverables: [
          "45-Min Live Ceromancy & Wax Pouring with Seraphina",
          "Immediate Symbol Interpretation for Your Question",
          "Energy Cord-Cutting & Emotional Release",
          "Personal Protection Herb & Candle Recipe",
        ],
      },
      {
        id: "vip",
        name: "Alchemical Transformation VIP",
        priceUSD: 89,
        priceINR: 5999,
        duration: "75 Minutes Deep Elemental Ritual",
        deliverables: [
          "75-Min Multi-Candle Sacred Water Ritual",
          "3-Month Aura Protection & Shielding",
          "Direct Spirit Guide Channeling",
          "Custom Blessed Talisman Guidance",
        ],
      },
    ],
  },
  "krishna-cards": {
    id: "krishna-cards",
    title: "Krishna Oracle Cards",
    subtitle: "Divine Transcendental Guidance & Gita Wisdom",
    description: "Receive heart-centered transcendental wisdom from the sacred Krishna Oracle deck, providing solace, spiritual dharma, and loving clarity.",
    iconName: "krishna-cards",
    glyph: "🪶",
    assignedMaster: "Pandit Rajesh Shastri",
    masterRole: "Vedic Scholar & Bhakti Seer (25+ Yrs Lineage)",
    masterAvatar: "/astrologer-avatar.jpg",
    tradition: "Bhakti Tradition & Bhagavad Gita Wisdom",
    highlightPoints: [
      "Dharma & Life Purpose Clarification",
      "Karmic Relationships & Soul Contracts",
      "Sacred Mantras for Peace, Devotion & Abundance",
      "Overcoming Spiritual Despair & Finding Joy",
    ],
    tiers: [
      {
        id: "essential",
        name: "Divine Message Spread",
        priceUSD: 29,
        priceINR: 1999,
        duration: "Transcendental Written Dossier",
        deliverables: [
          "3-Card Divine Message Analysis",
          "Personalized Bhagavad Gita Shloka & Meaning",
          "Daily Krishna Peace Meditation Chant",
        ],
      },
      {
        id: "master",
        name: "Live Krishna Oracle Session",
        priceUSD: 49,
        priceINR: 3499,
        duration: "45 Minutes Live Spiritual Guidance",
        popular: true,
        deliverables: [
          "45-Min Private Session with Pandit Rajesh",
          "7-Card Dharma & Karma Resolution Spread",
          "Direct Chanting & Mantra Transmission",
          "Spiritual Guidance for Family & Career Harmony",
        ],
      },
      {
        id: "vip",
        name: "Maha Dharma Sovereign VIP",
        priceUSD: 89,
        priceINR: 5999,
        duration: "75 Minutes Master Session",
        deliverables: [
          "75-Min Master Session + Full Dharma Chart",
          "Family Karma & Ancestral Blessing Analysis",
          "Complete Bhagavad Gita Life Guidebook",
          "Special Mahamantra Sadhana Plan",
        ],
      },
    ],
  },
  "lucky-numbers": {
    id: "lucky-numbers",
    title: "Lucky Numbers & Muhurta",
    subtitle: "Planetary Abundance Matrix & Auspicious Dates",
    description: "Calculate your most prosperous planetary numbers, lottery matrix vibrations, and exact auspicious Muhurta windows for major life ventures.",
    iconName: "lucky-numbers",
    glyph: "⭐",
    assignedMaster: "Master Kaelen Vance",
    masterRole: "Muhurta & Astro-Number Specialist (12+ Yrs Lineage)",
    masterAvatar: "/astrologer-avatar.jpg",
    tradition: "Hellenistic & Vedic Muhurta Timing",
    highlightPoints: [
      "Personal Wealth & Abundance Number Matrix",
      "Auspicious Dates for Contracts, Real Estate & Investments",
      "Daily Lucky Hours Based on Planetary Rulers",
      "Business Entity & Account Number Harmonic Optimization",
    ],
    tiers: [
      {
        id: "essential",
        name: "Wealth Number Dossier",
        priceUSD: 29,
        priceINR: 1999,
        duration: "Comprehensive Lucky Matrix Report",
        deliverables: [
          "Personal Lucky Numbers Matrix (1–99)",
          "Auspicious Days of the Week & Hours",
          "Wallet & Wealth Corner Feng Shui / Vastu Guide",
        ],
      },
      {
        id: "master",
        name: "Live Muhurta & Prosperity Strategy",
        priceUSD: 49,
        priceINR: 3499,
        duration: "45 Minutes Live Timing Session",
        popular: true,
        deliverables: [
          "45-Min Private Session with Master Kaelen",
          "Exact Dates & Times for Business Launches",
          "Vehicle, Real Estate & Property Number Analysis",
          "Harmonic Signature & Checkbook Number Tuning",
        ],
      },
      {
        id: "vip",
        name: "Billionaire Muhurta & Wealth VIP",
        priceUSD: 89,
        priceINR: 5999,
        duration: "75 Minutes Master Consultation",
        deliverables: [
          "75-Min Session + 1-Year Wealth Timing Calendar",
          "Stock / Market Trading Auspicious Cycles",
          "Full Corporate Entity Alignment & Banking Matrix",
          "Direct WhatsApp Line for Urgent Muhurta Queries",
        ],
      },
    ],
  },
};

