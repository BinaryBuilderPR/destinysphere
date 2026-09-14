export interface ZodiacSign {
  id: string;
  name: string;
  latinName: string;
  symbol: string;
  glyph: string;
  dates: string;
  startMonth: number; // 1-12
  startDay: number;
  endMonth: number;
  endDay: number;
  element: "Fire" | "Earth" | "Air" | "Water";
  modality: "Cardinal" | "Fixed" | "Mutable";
  rulingPlanet: string;
  house: string;
  polarity: "Yang / Masculine (Active)" | "Yin / Feminine (Receptive)";
  tarotCard: string;
  gemstone: string;
  powerColor: string;
  luckyNumbers: number[];
  luckyDay: string;
  tagline: string;
  summary: string;
  strengths: string[];
  shadows: string[];
  loveCompatibility: {
    best: string[];
    good: string[];
    challenging: string[];
    advice: string;
  };
  career: {
    archetype: string;
    bestFields: string[];
    wealthMindset: string;
  };
  mantra: string;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    latinName: "Aries the Ram",
    symbol: "The Ram",
    glyph: "♈",
    dates: "March 21 – April 19",
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
    element: "Fire",
    modality: "Cardinal",
    rulingPlanet: "Mars (God of Drive & Courage)",
    house: "1st House of Self, Physical Vitality & Initiation",
    polarity: "Yang / Masculine (Active)",
    tarotCard: "IV • The Emperor",
    gemstone: "Diamond & Red Jasper",
    powerColor: "Crimson & Royal Gold",
    luckyNumbers: [1, 9, 17, 27],
    luckyDay: "Tuesday",
    tagline: "The Fearless Pioneer & Cosmic Catalyst",
    summary:
      "Aries is the dynamic first sign of the zodiac, representing pure primal lifeforce, bold leadership, and unstoppable initiative. As a Cardinal Fire sign ruled by Mars, Aries leaps into uncharted territory where others hesitate.",
    strengths: [
      "Courageous and fiercely independent",
      "Natural-born trailblazer and inspirer",
      "Passionate, energetic, and transparent",
      "Quick to overcome setbacks with resilience",
    ],
    shadows: [
      "Impulsiveness and impatience with slower processes",
      "Tendency to start projects without finishing",
      "Can appear confrontational or self-centered under stress",
    ],
    loveCompatibility: {
      best: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
      good: ["Libra", "Aries"],
      challenging: ["Cancer", "Capricorn"],
      advice:
        "Cultivate active listening and let your partner share the lead. Romance thrives when mutual respect equals fiery passion.",
    },
    career: {
      archetype: "The Visionary Entrepreneur & Commander",
      bestFields: ["Entrepreneurship", "Strategic Leadership", "Athletics", "Emergency Response", "Technology Innovation"],
      wealthMindset: "High-risk, high-reward instinct. Generates wealth through decisive first-mover advantage.",
    },
    mantra: "I boldly claim my divine purpose and lead with courageous clarity.",
  },
  {
    id: "taurus",
    name: "Taurus",
    latinName: "Taurus the Bull",
    symbol: "The Bull",
    glyph: "♉",
    dates: "April 20 – May 20",
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    element: "Earth",
    modality: "Fixed",
    rulingPlanet: "Venus (Goddess of Beauty, Value & Harmony)",
    house: "2nd House of Personal Wealth, Sensuality & Self-Worth",
    polarity: "Yin / Feminine (Receptive)",
    tarotCard: "V • The Hierophant",
    gemstone: "Emerald & Rose Quartz",
    powerColor: "Forest Green & Earthy Ochre",
    luckyNumbers: [2, 6, 15, 24],
    luckyDay: "Friday",
    tagline: "The Master of Enduring Abundance & Sensory Grace",
    summary:
      "Taurus is the sovereign builder of the zodiac. Grounded in earthly luxury and ruled by Venus, Taurus appreciates physical beauty, loyalty, stability, and enduring craftsmanship that outlasts transient trends.",
    strengths: [
      "Rock-solid loyalty and unwavering reliability",
      "Exceptional aesthetic and sensory discernment",
      "Patient, methodical, and financially astute",
      "Deeply calming and grounding presence",
    ],
    shadows: [
      "Stubborn resistance to necessary change",
      "Tendency toward material possessiveness",
      "Can fall into comfortable inertia or overindulgence",
    ],
    loveCompatibility: {
      best: ["Virgo", "Capricorn", "Cancer", "Pisces"],
      good: ["Scorpio", "Taurus"],
      challenging: ["Leo", "Aquarius"],
      advice:
        "Allow your emotional guard down gently. True security comes not only from stability, but from vulnerable emotional intimacy.",
    },
    career: {
      archetype: "The Master Architect & Sovereign Investor",
      bestFields: ["Finance & Asset Management", "Architecture & Real Estate", "Fine Culinary Arts", "Luxury Goods", "Agriculture & Botany"],
      wealthMindset: "Compounds prosperity methodically through tangible, high-quality enduring assets.",
    },
    mantra: "I am anchored in abundance, beauty, and unwavering peace.",
  },
  {
    id: "gemini",
    name: "Gemini",
    latinName: "Gemini the Twins",
    symbol: "The Twins",
    glyph: "♊",
    dates: "May 21 – June 20",
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
    element: "Air",
    modality: "Mutable",
    rulingPlanet: "Mercury (Messenger of Intellect & Synthesis)",
    house: "3rd House of Communication, Curiosity & Local Circles",
    polarity: "Yang / Masculine (Active)",
    tarotCard: "VI • The Lovers",
    gemstone: "Agate & Citrine",
    powerColor: "Solar Yellow & Bright Amber",
    luckyNumbers: [3, 5, 12, 23],
    luckyDay: "Wednesday",
    tagline: "The Quick-Silver Weaver of Ideas & Connections",
    summary:
      "Gemini is the curious alchemist of thought. Ruled by Mercury, Gemini moves at the speed of light between intellectual concepts, storytelling, social spheres, and innovative synthesis, bridging disparate worlds effortlessly.",
    strengths: [
      "Brilliant verbal and written eloquence",
      "Chameleonic adaptability and sharp wit",
      "Insatiable curiosity and fast learning curve",
      "Youthful, inventive, and socially magnetic",
    ],
    shadows: [
      "Scattered focus and intellectual restlessness",
      "Superficial engagement when bored",
      "Can overthink emotions rather than feeling them",
    ],
    loveCompatibility: {
      best: ["Libra", "Aquarius", "Aries", "Leo"],
      good: ["Sagittarius", "Gemini"],
      challenging: ["Virgo", "Pisces"],
      advice:
        "Seek a partner who stimulates your mind while grounding your wandering spirit. Depth is found by staying in one conversation longer.",
    },
    career: {
      archetype: "The Polymath & Global Communicator",
      bestFields: ["Journalism & Media", "Software & AI Prompting", "Public Relations", "Translation & Linguistics", "Digital Marketing"],
      wealthMindset: "Multi-stream income generator leveraging intellectual property and expansive networks.",
    },
    mantra: "I channel cosmic wisdom into transformative expression and connection.",
  },
  {
    id: "cancer",
    name: "Cancer",
    latinName: "Cancer the Crab",
    symbol: "The Crab",
    glyph: "♋",
    dates: "June 21 – July 22",
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
    element: "Water",
    modality: "Cardinal",
    rulingPlanet: "The Moon (Luminosity of Soul, Memory & Intuition)",
    house: "4th House of Home, Ancestry, Emotional Roots & Sanctuary",
    polarity: "Yin / Feminine (Receptive)",
    tarotCard: "VII • The Chariot",
    gemstone: "Moonstone & Pearl",
    powerColor: "Silvery White & Oceanic Pearl",
    luckyNumbers: [2, 7, 11, 20],
    luckyDay: "Monday",
    tagline: "The Intuitive Guardian of the Sacred Hearth",
    summary:
      "Cancer is the nurturing sanctuary of the zodiac. Guided by the shifting tides of the Moon, Cancer possesses profound emotional clairvoyance, ancestral memory, and an unmatched ability to protect and nourish those they love.",
    strengths: [
      "Exceptional intuitive and psychic empathy",
      "Fierce, protective loyalty to family and loved ones",
      "Deep emotional depth and poetic sensitivity",
      "Natural caregiver and creator of warm sanctuaries",
    ],
    shadows: [
      "Retreating into defensive shell when hurt",
      "Moody fluctuations aligned with lunar cycles",
      "Clinging to past grievances or nostalgic nostalgia",
    ],
    loveCompatibility: {
      best: ["Scorpio", "Pisces", "Taurus", "Virgo"],
      good: ["Capricorn", "Cancer"],
      challenging: ["Aries", "Libra"],
      advice:
        "Express your needs directly rather than expecting partners to read your emotional currents. Your vulnerability is your ultimate superpower.",
    },
    career: {
      archetype: "The Empathetic Healer & Cultural Custodian",
      bestFields: ["Psychotherapy & Counseling", "Hospitality & Interior Architecture", "Genealogy & Historical Preservation", "Culinary Arts", "Pediatrics"],
      wealthMindset: "Builds ancestral and generational wealth through emotional safety and real estate sanctuary.",
    },
    mantra: "I honor my sacred intuition and create safety wherever I flow.",
  },
  {
    id: "leo",
    name: "Leo",
    latinName: "Leo the Lion",
    symbol: "The Lion",
    glyph: "♌",
    dates: "July 23 – August 22",
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    element: "Fire",
    modality: "Fixed",
    rulingPlanet: "The Sun (Center of Radiance, Vitality & Sovereignty)",
    house: "5th House of Creative Joy, Romance, Play & Self-Expression",
    polarity: "Yang / Masculine (Active)",
    tarotCard: "VIII • Strength",
    gemstone: "Ruby & Sunstone",
    powerColor: "Solar Gold & Warm Saffron",
    luckyNumbers: [1, 4, 10, 19],
    luckyDay: "Sunday",
    tagline: "The Radiant Sovereign of Heart & Creative Fire",
    summary:
      "Leo is the majestic monarch of the zodiac. Ruled directly by the Sun, Leo radiates warmth, generosity, noble integrity, and theatrical brilliance, illuminating every room and inspiring others to shine in their own divine light.",
    strengths: [
      "Magnanimous, warm-hearted, and extraordinarily generous",
      "Charismatic stage presence and natural command",
      "Fiercely protective of dignity and loved ones",
      "Creative visionary with unshakeable self-belief",
    ],
    shadows: [
      "Craving external validation and applause",
      "Pride and reluctance to admit vulnerability or defeat",
      "Can overpower softer personalities unintentionally",
    ],
    loveCompatibility: {
      best: ["Aries", "Sagittarius", "Gemini", "Libra"],
      good: ["Aquarius", "Leo"],
      challenging: ["Taurus", "Scorpio"],
      advice:
        "True regal grace shines brightest when uplifting your partner's spotlight. Mutual admiration is the lifeblood of Leo love.",
    },
    career: {
      archetype: "The Creative Director & Sovereign Leader",
      bestFields: ["Performing Arts & Entertainment", "Executive Leadership", "Fashion & Luxury Branding", "High-Stakes Politics", "Philanthropic Patronage"],
      wealthMindset: "Attracts abundance through personal charisma, brand authority, and creative royalty.",
    },
    mantra: "I shine my divine light unapologetically and elevate all in my sphere.",
  },
  {
    id: "virgo",
    name: "Virgo",
    latinName: "Virgo the Maiden",
    symbol: "The Maiden / Virgin",
    glyph: "♍",
    dates: "August 23 – September 22",
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    element: "Earth",
    modality: "Mutable",
    rulingPlanet: "Mercury / Chiron (Discernment, Healing & Precision)",
    house: "6th House of Sacred Routine, Health, Craftsmanship & Service",
    polarity: "Yin / Feminine (Receptive)",
    tarotCard: "IX • The Hermit",
    gemstone: "Sapphire & Peridot",
    powerColor: "Sage Green & Platinum Ivory",
    luckyNumbers: [5, 14, 23, 32],
    luckyDay: "Wednesday",
    tagline: "The Sacred Alchemist of Precision & Sacred Service",
    summary:
      "Virgo is the discerning craftsman of reality. Governed by higher analytical Mercury, Virgo brings order from chaos, purifying physical and mental systems, and dedicated to perfecting practical wellness and timeless mastery.",
    strengths: [
      "Impeccable attention to detail and craftsmanship",
      "Profound diagnostic intelligence and problem-solving",
      "Humble, selfless dedication to meaningful service",
      "Holistic understanding of bodily and energetic wellness",
    ],
    shadows: [
      "Paralyzing perfectionism and inner harsh critic",
      "Micromanagement when feeling anxious",
      "Over-analyzing simple situations to exhaustion",
    ],
    loveCompatibility: {
      best: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
      good: ["Pisces", "Virgo"],
      challenging: ["Gemini", "Sagittarius"],
      advice:
        "Accept that imperfections are part of organic beauty. Offer yourself the same compassionate care you bestow on everyone else.",
    },
    career: {
      archetype: "The Master Diagnostician & Systems Architect",
      bestFields: ["Medicine & Holistic Healing", "Data Science & Quality Engineering", "Editorial & Scholarly Research", "Nutrition & Alchemy", "Financial Auditing"],
      wealthMindset: "Precision efficiency, disciplined budgeting, and high-value specialized expertise.",
    },
    mantra: "I dedicate my craft to truth, healing, and harmonious excellence.",
  },
  {
    id: "libra",
    name: "Libra",
    latinName: "Libra the Scales",
    symbol: "The Scales",
    glyph: "♎",
    dates: "September 23 – October 22",
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    element: "Air",
    modality: "Cardinal",
    rulingPlanet: "Venus (Goddess of Grace, Justice & Sacred Balance)",
    house: "7th House of Sacred Partnerships, Contracts & Divine Mirroring",
    polarity: "Yang / Masculine (Active)",
    tarotCard: "XI • Justice",
    gemstone: "Opal & Lapis Lazuli",
    powerColor: "Pastel Rose & Celestial Azure",
    luckyNumbers: [6, 15, 24, 33],
    luckyDay: "Friday",
    tagline: "The Diplomat of Divine Harmony & Aesthetic Truth",
    summary:
      "Libra is the elegant peacemaker of the cosmos. As the only inanimate zodiac symbol—the Golden Scales—Libra strives relentlessly for justice, aesthetic equilibrium, ethical symmetry, and transcendent partnership.",
    strengths: [
      "Flawless diplomatic tact and conflict mediation",
      "Refined aesthetic eye for proportion and elegance",
      "Champion of fairness, justice, and social balance",
      "Naturally charming, considerate, and conversational",
    ],
    shadows: [
      "Debilitating indecision when weighing endless sides",
      "People-pleasing to avoid uncomfortable discord",
      "Can mask personal grievances behind polite facades",
    ],
    loveCompatibility: {
      best: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
      good: ["Aries", "Libra"],
      challenging: ["Cancer", "Capricorn"],
      advice:
        "Do not sacrifice your core boundaries just to keep external peace. Harmonious union requires two distinct, empowered voices.",
    },
    career: {
      archetype: "The Chief Diplomat & Aesthetic Curator",
      bestFields: ["Law & Supreme Arbitration", "Art Direction & Haute Couture", "International Diplomacy", "Interior Styling", "Talent Representation"],
      wealthMindset: "Partnership-driven wealth creation through elite networks and refined market positioning.",
    },
    mantra: "I embody graceful balance, truth, and elevated harmony.",
  },
  {
    id: "scorpio",
    name: "Scorpio",
    latinName: "Scorpio the Scorpion & Phoenix",
    symbol: "The Scorpion / Phoenix / Eagle",
    glyph: "♏",
    dates: "October 23 – November 21",
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    element: "Water",
    modality: "Fixed",
    rulingPlanet: "Pluto & Mars (Lords of Rebirth, Mystery & Metamorphosis)",
    house: "8th House of Alchemical Transformation, Shared Wealth & Occult",
    polarity: "Yin / Feminine (Receptive)",
    tarotCard: "XIII • Death (Rebirth)",
    gemstone: "Black Obsidian & Topaz",
    powerColor: "Midnight Maroon & Obsidian Black",
    luckyNumbers: [8, 13, 22, 31],
    luckyDay: "Tuesday",
    tagline: "The Alchemical Mystic of Shadows & Rebirth",
    summary:
      "Scorpio is the fierce transformer of the zodiac. Moving across three evolutionary stages—the Scorpion, the Eagle, and the transcendent Phoenix—Scorpio dives into psychological depths, uncovering hidden truths and forging unbreakable resilience.",
    strengths: [
      "X-ray psychological intuition and deceit detection",
      "Unshakable courage in the face of crisis and loss",
      "Total emotional devotion and fierce loyalty",
      "Mastery of alchemical regeneration and renewal",
    ],
    shadows: [
      "Guarded secrecy and pervasive mistrust",
      "Tendency toward obsessive control or vindictiveness",
      "Difficulty forgiving deep wounds or emotional betrayal",
    ],
    loveCompatibility: {
      best: ["Cancer", "Pisces", "Virgo", "Capricorn"],
      good: ["Taurus", "Scorpio"],
      challenging: ["Leo", "Aquarius"],
      advice:
        "Surrender the need to stay in control. True emotional intimacy requires laying down the sting and trusting the alchemy of love.",
    },
    career: {
      archetype: "The Strategic Investigator & Master Alchemist",
      bestFields: ["Venture Capital & Private Equity", "Criminal Forensics & Intelligence", "Depth Psychology & Hypnotherapy", "Surgery & Oncology", "Esoteric Occult Research"],
      wealthMindset: "Command over leverage, joint ventures, and hidden undervalued assets.",
    },
    mantra: "I release what no longer serves and rise transformed from the ashes.",
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    latinName: "Sagittarius the Archer",
    symbol: "The Archer / Centaur",
    glyph: "♐",
    dates: "November 22 – December 21",
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    element: "Fire",
    modality: "Mutable",
    rulingPlanet: "Jupiter (Lord of Fortune, Philosophy & Infinite Expansion)",
    house: "9th House of Higher Learning, Global Travel, Law & Cosmic Philosophy",
    polarity: "Yang / Masculine (Active)",
    tarotCard: "XIV • Temperance",
    gemstone: "Turquoise & Blue Topaz",
    powerColor: "Royal Purple & Indigo Fire",
    luckyNumbers: [3, 9, 12, 21],
    luckyDay: "Thursday",
    tagline: "The Cosmic Pilgrim & Seeker of Infinite Truth",
    summary:
      "Sagittarius is the bold philosophical voyager of the zodiac. Ruled by expansive Jupiter, Sagittarius aims their fiery arrow at distant horizons, seeking universal truth, cultural wisdom, liberating humor, and cosmic optimism.",
    strengths: [
      "Boundless optimism, good humor, and magnetic enthusiasm",
      "Visionary philosophical depth and broad perspective",
      "Courageous adventurer who embraces global diversity",
      "Fierce champion of truth, free expression, and justice",
    ],
    shadows: [
      "Tactless bluntness and lack of emotional filter",
      "Commitment phobia when freedom feels constrained",
      "Over-promising due to excessive grandiosity",
    ],
    loveCompatibility: {
      best: ["Aries", "Leo", "Libra", "Aquarius"],
      good: ["Gemini", "Sagittarius"],
      challenging: ["Virgo", "Pisces"],
      advice:
        "Real adventure also includes the journey within a long-term partnership. Choose someone who travels alongside you spiritually.",
    },
    career: {
      archetype: "The Global Sage & Philosophical Pioneer",
      bestFields: ["Higher Academia & Philosophy", "International Publishing", "Adventure Tourism & Travel Media", "Constitutional Law", "Spiritual Guidance & Mentorship"],
      wealthMindset: "Abundance consciousness driven by Jupiterian luck, global commerce, and bold leaps of faith.",
    },
    mantra: "I expand my consciousness and trust the benevolent cosmic guidance.",
  },
  {
    id: "capricorn",
    name: "Capricorn",
    latinName: "Capricorn the Sea-Goat",
    symbol: "The Sea-Goat",
    glyph: "♑",
    dates: "December 22 – January 19",
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
    element: "Earth",
    modality: "Cardinal",
    rulingPlanet: "Saturn (Lord of Time, Structure & Master Karma)",
    house: "10th House of Career Prestige, Legacy, Public Standing & Authority",
    polarity: "Yin / Feminine (Receptive)",
    tarotCard: "XV • The Devil (Mastery of the Material)",
    gemstone: "Garnet & Black Tourmaline",
    powerColor: "Slate Charcoal & Obsidian Bronze",
    luckyNumbers: [4, 8, 13, 26],
    luckyDay: "Saturday",
    tagline: "The Master Architect of Timeless Legacy",
    summary:
      "Capricorn is the steadfast mountaineer of the cosmos. Governed by Saturn, Capricorn scales the steepest peaks through patience, relentless discipline, structural mastery, and a profound sense of generational duty.",
    strengths: [
      "Unrivaled discipline, patience, and work ethic",
      "Supreme executive leadership and organizational mastery",
      "Deeply dependable, pragmatic, and mature",
      "Builds lasting legacies that endure for generations",
    ],
    shadows: [
      "Cold aloofness or emotional suppression under stress",
      "Pessimistic cynicism when plans deviate",
      "Obsessive workaholism measuring worth solely by status",
    ],
    loveCompatibility: {
      best: ["Taurus", "Virgo", "Scorpio", "Pisces"],
      good: ["Cancer", "Capricorn"],
      challenging: ["Aries", "Libra"],
      advice:
        "Allow your playful, softer inner world to breathe. Love is not a performance milestone; let yourself be cherished just as you are.",
    },
    career: {
      archetype: "The Titan of Industry & Legacy Builder",
      bestFields: ["C-Suite Management & Governance", "Investment Banking & Sovereign Wealth", "Structural Engineering", "Real Estate Development", "Judiciary & Statecraft"],
      wealthMindset: "Long-term compounding, conservative risk management, and monumental legacy assets.",
    },
    mantra: "I master time and structure to build a legacy of enduring light.",
  },
  {
    id: "aquarius",
    name: "Aquarius",
    latinName: "Aquarius the Water-Bearer",
    symbol: "The Water-Bearer",
    glyph: "♒",
    dates: "January 20 – February 18",
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
    element: "Air",
    modality: "Fixed",
    rulingPlanet: "Uranus & Saturn (Lords of Revolution, Cosmic Awakening & Innovation)",
    house: "11th House of Collective Consciousness, Global Vision & Humanity",
    polarity: "Yang / Masculine (Active)",
    tarotCard: "XVII • The Star",
    gemstone: "Amethyst & Labradorite",
    powerColor: "Electric Cyan & Cosmic Platinum",
    luckyNumbers: [4, 7, 11, 22],
    luckyDay: "Saturday",
    tagline: "The Visionary Prophet of the New Golden Era",
    summary:
      "Aquarius is the revolutionary futurist of the zodiac. Pouring the waters of cosmic insight into the collective mind, Aquarius breaks outdated orthodoxies to establish humanitarian equality, avant-garde technology, and spiritual autonomy.",
    strengths: [
      "Futuristic, inventive, and progressive intellect",
      "Unshakable commitment to humanitarian freedom",
      "Original thinker who rejects dogmatic convention",
      "Egalitarian friend who values all souls equally",
    ],
    shadows: [
      "Detached intellectual aloofness",
      "Rebellious contrary nature purely for novelty",
      "Stubborn adherence to theoretical dogmas over human feeling",
    ],
    loveCompatibility: {
      best: ["Gemini", "Libra", "Aries", "Sagittarius"],
      good: ["Leo", "Aquarius"],
      challenging: ["Taurus", "Scorpio"],
      advice:
        "Connect through the heart chakra as well as the mind. True cosmic union blends visionary intellect with tender emotional presence.",
    },
    career: {
      archetype: "The Futuristic Pioneer & Systems Revolutionary",
      bestFields: ["Artificial Intelligence & Quantum Tech", "Astrophysics & Space Commerce", "Human Rights Advocacy", "Decentralized Finance & Web3", "Social Architecture"],
      wealthMindset: "Disruptive innovation, network equity, and visionary early-stage breakthroughs.",
    },
    mantra: "I liberate my vision to anchor the highest future for humanity.",
  },
  {
    id: "pisces",
    name: "Pisces",
    latinName: "Pisces the Two Fishes",
    symbol: "The Two Fishes",
    glyph: "♓",
    dates: "February 19 – March 20",
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
    element: "Water",
    modality: "Mutable",
    rulingPlanet: "Neptune & Jupiter (Lords of Dreams, Mysticism & Infinite Compassion)",
    house: "12th House of The Unconscious, Dreamtime, Karma & Spiritual Liberation",
    polarity: "Yin / Feminine (Receptive)",
    tarotCard: "XVIII • The Moon",
    gemstone: "Aquamarine & Fluorite",
    powerColor: "Seafoam Turquoise & Iridescent Violet",
    luckyNumbers: [3, 7, 12, 16],
    luckyDay: "Thursday",
    tagline: "The Mystical Dreamer of Oceanic Compassion",
    summary:
      "Pisces is the crowning mystical sign of the zodiac circle, containing a drop of all eleven preceding signs. Guided by ethereal Neptune, Pisces dissolves physical boundaries to channel transcendent art, psychic clairvoyance, and unconditional love.",
    strengths: [
      "Boundless empathy, compassion, and spiritual depth",
      "Extraordinary artistic, musical, and poetic imagination",
      "Natural psychic mediumship and lucid dream insight",
      "Selfless healer capable of profound forgiveness",
    ],
    shadows: [
      "Escapism into fantasy or unhealthy habits when overwhelmed",
      "Vague boundaries leading to emotional depletion",
      "Playing the martyr or victim in relational dynamics",
    ],
    loveCompatibility: {
      best: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
      good: ["Virgo", "Pisces"],
      challenging: ["Gemini", "Sagittarius"],
      advice:
        "Ground your ethereal feelings with healthy energetic boundaries. Loving deeply does not mean losing your own vessel.",
    },
    career: {
      archetype: "The Ethereal Mystic & Transcendent Artist",
      bestFields: ["Music & Film Composition", "Energy Healing & Sound Therapy", "Oceanography & Marine Ecology", "Spiritual Authorship", "Charitable Foundations"],
      wealthMindset: "Intuitive synchronicity, spiritual patronage, and channeling creative masterpieces that touch collective souls.",
    },
    mantra: "I surrender to the cosmic flow and radiate infinite divine love.",
  },
];

/**
 * Calculates Western Sun Sign from month and day.
 */
export function getZodiacSign(month: number, day: number): ZodiacSign {
  // Normalize
  for (const sign of ZODIAC_SIGNS) {
    if (sign.startMonth === sign.endMonth) {
      if (month === sign.startMonth && day >= sign.startDay && day <= sign.endDay) {
        return sign;
      }
    } else {
      if (
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay)
      ) {
        return sign;
      }
    }
  }
  // Default fallback
  return ZODIAC_SIGNS[0];
}

/**
 * Calculates Chinese Zodiac Animal from birth year.
 */
export function getChineseZodiac(year: number) {
  const animals = [
    { name: "Rat", glyph: "🐀", traits: "Resourceful, quick-witted, versatile, kind" },
    { name: "Ox", glyph: "🐂", traits: "Diligent, dependable, strong, determined" },
    { name: "Tiger", glyph: "🐅", traits: "Brave, competitive, unpredictable, confident" },
    { name: "Rabbit", glyph: "🐇", traits: "Quiet, elegant, kind, responsible" },
    { name: "Dragon", glyph: "🐉", traits: "Confident, intelligent, enthusiastic, charismatic" },
    { name: "Snake", glyph: "🐍", traits: "Enigmatic, intelligent, wise, intuitive" },
    { name: "Horse", glyph: "🐎", traits: "Animated, active, energetic, freedom-loving" },
    { name: "Goat / Sheep", glyph: "🐐", traits: "Calm, gentle, sympathetic, creative" },
    { name: "Monkey", glyph: "🐒", traits: "Sharp, smart, curious, innovative" },
    { name: "Rooster", glyph: "🐓", traits: "Observant, hardworking, courageous, punctual" },
    { name: "Dog", glyph: "🐕", traits: "Lovely, honest, prudent, loyal" },
    { name: "Pig", glyph: "🐖", traits: "Compassionate, generous, diligent, optimistic" },
  ];

  // 1900 was year of Rat (1900 % 12 === 4 -> adjust base: (year - 4) % 12)
  const index = Math.abs((year - 4) % 12);
  const animal = animals[index] || animals[0];

  const elements = ["Metal", "Water", "Wood", "Fire", "Earth"];
  // Chinese 10-year heavenly stem element
  const stem = Math.floor(((year - 4) % 10) / 2);
  const element = elements[stem >= 0 ? stem : 0] || "Wood";

  return {
    year,
    animal: animal.name,
    glyph: animal.glyph,
    traits: animal.traits,
    element,
    fullName: `${element} ${animal.name}`,
  };
}

/**
 * Calculates approximate Moon & Rising Sign archetypes based on hour of birth.
 */
export function getCalculatedPlanetaryAura(
  birthDate: Date,
  birthHour?: number
) {
  const sunSign = getZodiacSign(birthDate.getMonth() + 1, birthDate.getDate());
  
  // Deterministic astrological estimation for Moon & Rising when exact coordinates aren't live-queried
  const dayOfYear = Math.floor(
    (birthDate.getTime() - new Date(birthDate.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
  );
  
  // Moon shifts roughly every 2.5 days across 12 signs
  const moonIndex = (Math.floor(dayOfYear / 2.5) + birthDate.getFullYear() % 12) % 12;
  const moonSign = ZODIAC_SIGNS[moonIndex] || sunSign;

  // Rising (Ascendant) advances 1 sign every 2 hours from sunrise (~6 AM)
  let risingIndex = ZODIAC_SIGNS.findIndex((s) => s.id === sunSign.id);
  if (birthHour !== undefined && birthHour !== null) {
    const hoursFromSunrise = (birthHour - 6 + 24) % 24;
    const offset = Math.floor(hoursFromSunrise / 2);
    risingIndex = (risingIndex + offset) % 12;
  } else {
    // Default complementary ascendant if birth time unknown
    risingIndex = (risingIndex + 4) % 12;
  }
  const risingSign = ZODIAC_SIGNS[risingIndex] || sunSign;

  // Elemental balance
  const elements = [sunSign.element, moonSign.element, risingSign.element];
  const fireCount = elements.filter((e) => e === "Fire").length;
  const waterCount = elements.filter((e) => e === "Water").length;
  const airCount = elements.filter((e) => e === "Air").length;
  const earthCount = elements.filter((e) => e === "Earth").length;

  return {
    sunSign,
    moonSign,
    risingSign,
    elements: {
      fire: Math.round((fireCount / 3) * 100),
      water: Math.round((waterCount / 3) * 100),
      air: Math.round((airCount / 3) * 100),
      earth: Math.round((earthCount / 3) * 100),
    },
    dominantElement:
      fireCount >= waterCount && fireCount >= airCount && fireCount >= earthCount
        ? "Fire 🔥"
        : waterCount >= airCount && waterCount >= earthCount
        ? "Water 🌊"
        : airCount >= earthCount
        ? "Air 💨"
        : "Earth 🌱",
  };
}
