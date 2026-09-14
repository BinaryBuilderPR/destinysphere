export interface TarotCard {
  id: string;
  name: string;
  number: string;
  element: "Fire" | "Water" | "Air" | "Earth" | "Spirit";
  symbol: string;
  keywords: string[];
  uprightMeaning: string;
  interpretations: {
    past: string;
    present: string;
    future: string;
  };
  advice: string;
  arcanaType?: "Major" | "Minor";
  suit?: "Wands" | "Cups" | "Swords" | "Pentacles";
  astrology?: string;
}

export const TAROT_DECK: TarotCard[] = [
  // ==========================================
  // 22 MAJOR ARCANA
  // ==========================================
  {
    id: "the-fool",
    name: "0 • The Fool",
    number: "0",
    element: "Air",
    symbol: "✧",
    arcanaType: "Major",
    astrology: "Uranus ♅ / Air",
    keywords: ["New Beginnings", "Innocence", "Leap of Faith", "Spontaneity"],
    uprightMeaning: "A pure commencement filled with limitless potential, urging you to trust the unknown with an open heart.",
    interpretations: {
      past: "A bold leap of faith or sudden new beginning laid the spiritual foundation for where you stand today.",
      present: "You are standing at the threshold of a fresh cycle. Release over-analysis and take the courageous next step.",
      future: "An unexpected breakthrough will liberate you from old constraints, opening doors to joyful adventures."
    },
    advice: "Trust your intuition and embrace beginner's mind without fear of mistakes."
  },
  {
    id: "the-magician",
    name: "I • The Magician",
    number: "I",
    element: "Air",
    symbol: "☿",
    arcanaType: "Major",
    astrology: "Mercury ☿",
    keywords: ["Manifestation", "Resourcefulness", "Power", "Inspired Action"],
    uprightMeaning: "You possess all four elements—fire, water, air, earth—necessary to shape your reality into divine form.",
    interpretations: {
      past: "You discovered your innate personal power and mastered key skills that now empower your creative pursuits.",
      present: "The cosmos has aligned resources directly in your hands. Direct your willpower toward clear, intentional action.",
      future: "Your focused vision will crystallize into tangible material success and leadership authority."
    },
    advice: "Channel your mental clarity into decisive action; what you focus upon will multiply."
  },
  {
    id: "the-high-priestess",
    name: "II • The High Priestess",
    number: "II",
    element: "Water",
    symbol: "☽",
    arcanaType: "Major",
    astrology: "Moon ☽",
    keywords: ["Intuition", "Sacred Knowledge", "Divine Feminine", "Subconscious"],
    uprightMeaning: "The guardian of the veil between the conscious and unconscious, revealing truths hidden beneath the surface.",
    interpretations: {
      past: "A profound period of introspection or spiritual awakening attuned you to subtle intuitive frequencies.",
      present: "Look beyond surface appearances. Secrets and unspoken emotional dynamics will reveal themselves in quiet stillness.",
      future: "Your inner wisdom will guide you unerringly through complex decisions where logic alone falls short."
    },
    advice: "Honor your inner voice and pay close attention to dreams and synchronicities."
  },
  {
    id: "the-empress",
    name: "III • The Empress",
    number: "III",
    element: "Earth",
    symbol: "♀",
    arcanaType: "Major",
    astrology: "Venus ♀",
    keywords: ["Abundance", "Fertility", "Nurturing", "Sensory Bliss"],
    uprightMeaning: "The mother archetype of creation, bestowing fertile growth, artistic grace, and unconditional warmth.",
    interpretations: {
      past: "Nurturing relationships and creative investments from your past are now ready to yield abundant fruit.",
      present: "You are in an expansive season of creativity, emotional warmth, and material comfort. Celebrate the beauty around you.",
      future: "A period of flourishing prosperity, fulfilling family bonds, or a long-cherished creative birth approaches."
    },
    advice: "Cultivate self-care and allow life's natural abundance to flow without grasping."
  },
  {
    id: "the-emperor",
    name: "IV • The Emperor",
    number: "IV",
    element: "Fire",
    symbol: "♈",
    arcanaType: "Major",
    astrology: "Aries ♈",
    keywords: ["Authority", "Structure", "Stability", "Mastery"],
    uprightMeaning: "The sovereign ruler who brings order out of chaos through disciplined architecture, wisdom, and protective boundaries.",
    interpretations: {
      past: "Disciplined habits or an authoritative mentor provided the structure you needed to withstand previous storms.",
      present: "Take command of your circumstances with clear boundaries, strategic planning, and unshakeable composure.",
      future: "You will achieve lasting stability and recognized authority in your professional or personal domain."
    },
    advice: "Establish solid routines and lead with integrity rather than rigidity."
  },
  {
    id: "the-hierophant",
    name: "V • The Hierophant",
    number: "V",
    element: "Earth",
    symbol: "♉",
    arcanaType: "Major",
    astrology: "Taurus ♉",
    keywords: ["Spiritual Wisdom", "Tradition", "Mentorship", "Higher Truth"],
    uprightMeaning: "The bridge between worldly consciousness and timeless sacred lineage, offering divine counsel.",
    interpretations: {
      past: "Traditional values, structured education, or ancestral lineages formed your core ethical compass.",
      present: "Seek counsel from trusted mentors or proven spiritual traditions to navigate current dilemmas.",
      future: "You will step into the role of a trusted guide, teacher, or spiritual anchor for your community."
    },
    advice: "Honor proven wisdom and align your daily conduct with your highest spiritual principles."
  },
  {
    id: "the-lovers",
    name: "VI • The Lovers",
    number: "VI",
    element: "Air",
    symbol: "♊",
    arcanaType: "Major",
    astrology: "Gemini ♊",
    keywords: ["Sacred Union", "Soulmates", "Values Alignment", "Choice"],
    uprightMeaning: "A divine meeting of complementary energies, representing deep romantic devotion and critical moral choices.",
    interpretations: {
      past: "A significant relationship or moral crossroad shaped your understanding of authentic connection.",
      present: "You are invited into vulnerability and open-hearted union with a soulmate or aligned venture.",
      future: "A harmonious partnership grounded in mutual respect and shared spiritual purpose will blossom."
    },
    advice: "Choose with your heart's highest integrity and communicate with transparent honesty."
  },
  {
    id: "the-chariot",
    name: "VII • The Chariot",
    number: "VII",
    element: "Water",
    symbol: "♋",
    arcanaType: "Major",
    astrology: "Cancer ♋",
    keywords: ["Triumph", "Determination", "Willpower", "Focused Drive"],
    uprightMeaning: "Harnessing opposing emotional and mental currents into unified, unstoppable forward momentum.",
    interpretations: {
      past: "Fierce determination enabled you to overcome significant obstacles and build inner resilience.",
      present: "Stay laser-focused on your primary objective. Do not let conflicting distractions derail your course.",
      future: "Decisive triumph over long-standing difficulties and swift progress toward your cherished goals."
    },
    advice: "Maintain self-discipline and steer opposing forces with calm, unswerving confidence."
  },
  {
    id: "strength",
    name: "VIII • Strength",
    number: "VIII",
    element: "Fire",
    symbol: "♌",
    arcanaType: "Major",
    astrology: "Leo ♌",
    keywords: ["Inner Fortitude", "Compassion", "Patience", "Grace"],
    uprightMeaning: "True power flows from compassionate mastery, gentle patience, and loving kindness rather than raw brute force.",
    interpretations: {
      past: "You weathered deep emotional challenges by discovering an unbreakable inner reservoir of quiet grace.",
      present: "Meet tense situations with soft words and unconditional composure. You hold the upper hand.",
      future: "Your patient endurance will dissolve hostile opposition and win the loyalty of others."
    },
    advice: "Tame volatile emotions through loving awareness rather than forceful suppression."
  },
  {
    id: "the-hermit",
    name: "IX • The Hermit",
    number: "IX",
    element: "Earth",
    symbol: "♍",
    arcanaType: "Major",
    astrology: "Virgo ♍",
    keywords: ["Soul Searching", "Solitude", "Inner Light", "Wisdom"],
    uprightMeaning: "Withdrawing from external noise to kindle the eternal lantern of your inner spiritual light upon the mountain of truth.",
    interpretations: {
      past: "A period of solitude or introspective study allowed you to distill essential life lessons.",
      present: "Step back from chaotic social demands. The answers you seek are waiting in peaceful silence.",
      future: "You will achieve profound philosophical clarity that illuminates not only your path, but inspires others."
    },
    advice: "Take quiet time to reflect and let your inner lantern guide your next steps."
  },
  {
    id: "wheel-of-fortune",
    name: "X • Wheel of Fortune",
    number: "X",
    element: "Fire",
    symbol: "♃",
    arcanaType: "Major",
    astrology: "Jupiter ♃",
    keywords: ["Karmic Shifts", "Destiny", "Turning Point", "Serendipity"],
    uprightMeaning: "The grand cosmic wheel turns in your favor, ushering in auspicious breakthroughs, serendipity, and new cycles.",
    interpretations: {
      past: "Unforeseen twists of fate shifted your trajectory, closing old doors and preparing you for elevation.",
      present: "The tides of fortune are turning. Be ready to seize unexpected synchronicities appearing in your field.",
      future: "A stroke of divine luck and karmic reward will elevate your material and spiritual circumstances."
    },
    advice: "Embrace universal flow with gratitude and adapt swiftly to positive turning points."
  },
  {
    id: "justice",
    name: "XI • Justice",
    number: "XI",
    element: "Air",
    symbol: "♎",
    arcanaType: "Major",
    astrology: "Libra ♎",
    keywords: ["Truth", "Fairness", "Karmic Balance", "Accountability"],
    uprightMeaning: "The impartial scales of divine equilibrium, cutting through falsehood to restore balance and ethical clarity.",
    interpretations: {
      past: "Honest choices and karmic accountability in past situations have created a clean slate for you.",
      present: "Evaluate your current dilemma with objective fairness and absolute truthfulness.",
      future: "A legal, contractual, or interpersonal conflict will be resolved with total fairness in your favor."
    },
    advice: "Act with uncompromising integrity and weigh all perspectives before making decisions."
  },
  {
    id: "the-hanged-man",
    name: "XII • The Hanged Man",
    number: "XII",
    element: "Water",
    symbol: "♆",
    arcanaType: "Major",
    astrology: "Neptune ♆",
    keywords: ["Surrender", "New Perspective", "Letting Go", "Pause"],
    uprightMeaning: "A sacred suspension of struggle to gain higher spiritual perspective by seeing the world upside down.",
    interpretations: {
      past: "Releasing control in a past circumstance allowed unexpected enlightenment to flood your awareness.",
      present: "Surrender the urge to force immediate outcomes. Rest in peaceful patience and shift your angle of view.",
      future: "A spiritual breakthrough will liberate you from habitual mental loops and bring serene clarity."
    },
    advice: "Release stubborn resistance and look at your current challenge from a completely fresh angle."
  },
  {
    id: "transformation",
    name: "XIII • Transformation",
    number: "XIII",
    element: "Water",
    symbol: "♏",
    arcanaType: "Major",
    astrology: "Scorpio ♏",
    keywords: ["Rebirth", "Metamorphosis", "Endings & Beginnings", "Renewal"],
    uprightMeaning: "The sacred death of obsolete identity layers, clearing the soil for glorious new spiritual bloom.",
    interpretations: {
      past: "A profound ending of an obsolete phase cleared the space necessary for your current spiritual evolution.",
      present: "Release what no longer serves your soul. Do not cling to dead leaves; spring is preparing to blossom.",
      future: "A total Phoenix-like rebirth will empower you with radiant purpose and liberated joy."
    },
    advice: "Welcome necessary closure with grace; what falls away makes room for your highest destiny."
  },
  {
    id: "temperance",
    name: "XIV • Temperance",
    number: "XIV",
    element: "Fire",
    symbol: "♐",
    arcanaType: "Major",
    astrology: "Sagittarius ♐",
    keywords: ["Alchemy", "Harmony", "Patience", "Divine Timing"],
    uprightMeaning: "The master alchemist blending opposites into golden equilibrium through patience, moderation, and divine timing.",
    interpretations: {
      past: "Patient moderation and emotional balance helped you navigate past volatility without losing your center.",
      present: "Blend differing opinions and energies with diplomatic grace. Divine timing is orchestrating resolution.",
      future: "A state of sublime peace, physical vitality, and emotional serenity will permeate your life."
    },
    advice: "Practice moderation in all things and trust that the divine formula is coming together perfectly."
  },
  {
    id: "the-shadow",
    name: "XV • The Shadow",
    number: "XV",
    element: "Earth",
    symbol: "♑",
    arcanaType: "Major",
    astrology: "Capricorn ♑",
    keywords: ["Shadow Integration", "Breaking Chains", "Liberation", "Material Clarity"],
    uprightMeaning: "Illuminating the subconscious illusions and self-imposed limitations that keep your divine spark bound.",
    interpretations: {
      past: "You confronted unhealthy attachments or limiting beliefs that previously restricted your authentic expression.",
      present: "Examine where fear or material obsession is clouding your freedom. The chains are loose—step out.",
      future: "Complete liberation from toxic patterns and reclamation of your unshakeable personal sovereignty."
    },
    advice: "Acknowledge your shadow without judgment and choose conscious freedom over habitual fear."
  },
  {
    id: "the-tower",
    name: "XVI • The Tower",
    number: "XVI",
    element: "Fire",
    symbol: "♂",
    arcanaType: "Major",
    astrology: "Mars ♂",
    keywords: ["Sudden Awakening", "Truth Revelation", "Breakthrough", "Liberation"],
    uprightMeaning: "Divine lightning shatters structures built on false assumptions, instantly clearing the horizon for pure truth.",
    interpretations: {
      past: "A sudden shakeup shattered old illusions, freeing you from a path that was out of soul alignment.",
      present: "Do not fear sudden revelations or changes. What is crumbling was built on unstable ground.",
      future: "A breakthrough awakening will swiftly clear away stagnation, creating space for authentic architecture."
    },
    advice: "Surrender what cannot stand in the light of truth and welcome the fresh horizon."
  },
  {
    id: "the-star",
    name: "XVII • The Star",
    number: "XVII",
    element: "Air",
    symbol: "♒",
    arcanaType: "Major",
    astrology: "Aquarius ♒",
    keywords: ["Hope", "Inspiration", "Serenity", "Healing"],
    uprightMeaning: "The celestial beacon of unconditional hope, psychic rejuvenation, and radiant divine inspiration after the storm.",
    interpretations: {
      past: "A quiet glimmer of faith carried you through dark nights, keeping your spirit attuned to higher realms.",
      present: "Breathe in cosmic peace. Your prayers are heard, and your path is blessed with renewed clarity and hope.",
      future: "A long-cherished wish will materialize into tangible reality, filling your heart with profound gratitude."
    },
    advice: "Keep your vision elevated and pour your creative blessings into the world without hesitation."
  },
  {
    id: "the-moon",
    name: "XVIII • The Moon",
    number: "XVIII",
    element: "Water",
    symbol: "♓",
    arcanaType: "Major",
    astrology: "Pisces ♓",
    keywords: ["Intuition", "Dream Realm", "Unveiling Mystery", "Psychic Depth"],
    uprightMeaning: "Navigating the mysterious waters of subconscious memory, dreams, and psychic impressions.",
    interpretations: {
      past: "Navigating deep emotional uncertainty strengthened your psychic radar and empathetic sensitivity.",
      present: "Trust your nocturnal dreams and gut feelings over surface logic. Hidden truths will soon come to light.",
      future: "The fog will lift, unveiling radiant clarity and deep psychological freedom."
    },
    advice: "Honor your intuition and do not make hasty conclusions while the moonlight is still shifting."
  },
  {
    id: "the-sun",
    name: "XIX • The Sun",
    number: "XIX",
    element: "Fire",
    symbol: "☉",
    arcanaType: "Major",
    astrology: "The Sun ☉",
    keywords: ["Joy", "Success", "Radiance", "Vitality"],
    uprightMeaning: "The crowning glory of total warmth, joyful vitality, luminous success, and unclouded happiness.",
    interpretations: {
      past: "A period of authentic joy, creative accomplishment, or childlike wonder established your optimism.",
      present: "You are surrounded by golden solar blessings. Share your radiance, celebrate your wins, and shine brightly.",
      future: "A triumphant breakthrough in love, health, and career that fills your days with laughter and prosperity."
    },
    advice: "Step boldly into the sunlight; your authenticity is your greatest superpower."
  },
  {
    id: "judgement",
    name: "XX • Judgement",
    number: "XX",
    element: "Fire",
    symbol: "♇",
    arcanaType: "Major",
    astrology: "Pluto ♇",
    keywords: ["Awakening", "Higher Calling", "Reckoning", "Absolution"],
    uprightMeaning: "The archangel's trumpet awakens your soul into its highest evolution, releasing past karma with absolution.",
    interpretations: {
      past: "Answering an important inner calling transformed your identity and elevated your consciousness.",
      present: "You are being summoned to step into a higher octave of leadership and purpose. Forgive the past and rise.",
      future: "A spiritual rebirth and clear resolution of long-standing karmic cycles."
    },
    advice: "Heed your soul's calling without second-guessing; you are ready for this elevation."
  },
  {
    id: "the-world",
    name: "XXI • The World",
    number: "XXI",
    element: "Earth",
    symbol: "♄",
    arcanaType: "Major",
    astrology: "Saturn ♄",
    keywords: ["Completion", "Wholeness", "Integration", "Triumph"],
    uprightMeaning: "The grand completion of the Hero's Journey, stepping into total harmony, cosmic mastery, and planetary wholeness.",
    interpretations: {
      past: "A major multi-year cycle was successfully completed, giving you the foundation of a seasoned master.",
      present: "Celebrate the culmination of your efforts. You have integrated all elements into harmonious wholeness.",
      future: "International expansion, monumental fulfillment of lifelong ambitions, and joyful wholeness."
    },
    advice: "Celebrate this glorious milestone and prepare to step onto the next spiral of conscious evolution."
  },

  // ==========================================
  // SUIT OF WANDS (Fire Element - 14 Cards)
  // ==========================================
  {
    id: "ace-of-wands",
    name: "Ace of Wands",
    number: "Ace",
    element: "Fire",
    symbol: "🔥",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Aries / Leo / Sagittarius",
    keywords: ["Inspiration", "Creative Spark", "New Venture", "Passion"],
    uprightMeaning: "A burst of fiery creative energy and bold new beginnings in career and ventures.",
    interpretations: {
      past: "A spark of inspired passion ignited the journey you are currently walking.",
      present: "A breakthrough creative or career opportunity is right in front of you. Seize the momentum.",
      future: "A high-impact venture will take flight, energized by your authentic enthusiasm."
    },
    advice: "Take bold, immediate initiative while the creative fire is burning hot."
  },
  {
    id: "two-of-wands",
    name: "Two of Wands",
    number: "2",
    element: "Fire",
    symbol: "🌍",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Mars in Aries",
    keywords: ["Planning", "Global Vision", "Expansion", "Decisions"],
    uprightMeaning: "Holding the world in your hands, planning international or long-term growth.",
    interpretations: {
      past: "Careful strategic planning set the stage for your current reach.",
      present: "Look beyond your comfort zone. Formulate your long-term expansion strategy.",
      future: "You will expand into exciting new territories and partnerships."
    },
    advice: "Combine bold vision with structured planning before taking the next leap."
  },
  {
    id: "three-of-wands",
    name: "Three of Wands",
    number: "3",
    element: "Fire",
    symbol: "⛵",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Sun in Aries",
    keywords: ["Ships Returning", "Expansion", "Foresight", "Momentum"],
    uprightMeaning: "Your ships are coming in with rewards. Expansion and long-term travel are favored.",
    interpretations: {
      past: "Initial investments and ventures are beginning to return positive results.",
      present: "Watch your ventures gain international momentum and celebrate initial wins.",
      future: "A lucrative multi-market expansion will reward your long-term patience."
    },
    advice: "Look to distant horizons and keep expanding your network."
  },
  {
    id: "four-of-wands",
    name: "Four of Wands",
    number: "4",
    element: "Fire",
    symbol: "🏰",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Venus in Aries",
    keywords: ["Homecoming", "Celebration", "Milestone", "Harmony"],
    uprightMeaning: "Joyous milestone celebrations, weddings, housewarmings, and domestic bliss.",
    interpretations: {
      past: "A joyful family milestone or achievement anchored your emotional security.",
      present: "Celebrate your recent wins with your loved ones and community.",
      future: "A major engagement, home purchase, or joyful celebration is on the horizon."
    },
    advice: "Take time to celebrate how far you have come with those you love."
  },
  {
    id: "five-of-wands",
    name: "Five of Wands",
    number: "5",
    element: "Fire",
    symbol: "⚔️",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Saturn in Leo",
    keywords: ["Competition", "Healthy Rivalry", "Creative Friction", "Debate"],
    uprightMeaning: "Dynamic competition and differing opinions that sharpen your skills.",
    interpretations: {
      past: "A competitive environment pushed you to refine your talents and stand out.",
      present: "Navigate minor workplace debates with composure and clear arguments.",
      future: "You will emerge victorious in a competitive arena through superior skill."
    },
    advice: "Treat competition as a catalyst to elevate your game rather than an obstacle."
  },
  {
    id: "six-of-wands",
    name: "Six of Wands",
    number: "6",
    element: "Fire",
    symbol: "🏆",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Jupiter in Leo",
    keywords: ["Victory", "Public Acclaim", "Recognition", "Triumph"],
    uprightMeaning: "Riding the white horse of victory with public praise and career accolades.",
    interpretations: {
      past: "A hard-earned triumph earned you respect and professional credibility.",
      present: "Public recognition and success are shining upon your efforts right now.",
      future: "A prestigious award, promotion, or public milestone will elevate your status."
    },
    advice: "Accept your well-deserved praise with humility and grace."
  },
  {
    id: "seven-of-wands",
    name: "Seven of Wands",
    number: "7",
    element: "Fire",
    symbol: "🛡️",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Mars in Leo",
    keywords: ["Holding Ground", "Courage", "Defending Beliefs", "Resilience"],
    uprightMeaning: "Standing at the high ground, successfully defending your position against all odds.",
    interpretations: {
      past: "You held your ground under pressure and defended your vision successfully.",
      present: "Stand firm in your convictions. You hold the moral and strategic high ground.",
      future: "You will overcome all challengers and maintain your hard-earned position."
    },
    advice: "Do not back down; your persistence will secure your victory."
  },
  {
    id: "eight-of-wands",
    name: "Eight of Wands",
    number: "8",
    element: "Fire",
    symbol: "⚡",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Mercury in Sagittarius",
    keywords: ["Swift Momentum", "Fast Travel", "Quick News", "Alignment"],
    uprightMeaning: "Rapid acceleration of events, swift messages, travel, and instant progress.",
    interpretations: {
      past: "A whirlwind period of fast decisions propelled you into your current position.",
      present: "Events are moving at lightning speed. Expect quick messages and resolutions.",
      future: "Swift travel and rapid progression toward your goals without delays."
    },
    advice: "Stay agile and act quickly to catch the swift current of events."
  },
  {
    id: "nine-of-wands",
    name: "Nine of Wands",
    number: "9",
    element: "Fire",
    symbol: "🛡️",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Moon in Sagittarius",
    keywords: ["Resilience", "Last Stand", "Perseverance", "Guarded Strength"],
    uprightMeaning: "One final push before total victory. You are tired but undeniably strong.",
    interpretations: {
      past: "You endured exhausting trials that built unshakeable emotional armor.",
      present: "You are almost at the finish line. Muster your final burst of endurance.",
      future: "Your perseverance will pay off, bringing lasting safety and fulfillment."
    },
    advice: "Do not give up at the final hurdle; victory is closer than you think."
  },
  {
    id: "ten-of-wands",
    name: "Ten of Wands",
    number: "10",
    element: "Fire",
    symbol: "🎒",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Saturn in Sagittarius",
    keywords: ["Heavy Burden", "Overcommitment", "Delegation", "End of Struggle"],
    uprightMeaning: "Carrying a heavy load of responsibilities. It is time to delegate.",
    interpretations: {
      past: "Taking on too many duties alone caused fatigue and burnout.",
      present: "Delegate non-essential tasks. You do not have to carry everything by yourself.",
      future: "Dropping the heavy burden will free your energy for creative joy."
    },
    advice: "Share the workload and release responsibilities that are not yours."
  },
  {
    id: "page-of-wands",
    name: "Page of Wands",
    number: "Page",
    element: "Fire",
    symbol: "📜",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Earth of Fire",
    keywords: ["Exciting News", "Enthusiastic Explorer", "Curiosity", "Fresh Idea"],
    uprightMeaning: "A joyful messenger bringing creative news, bold proposals, and travel invitations.",
    interpretations: {
      past: "A playful spark of curiosity led you to discover a new passion.",
      present: "An exciting message or creative proposal is arriving. Stay curious.",
      future: "A fresh project will awaken your youthful passion and adventurous spirit."
    },
    advice: "Explore new ideas with playful enthusiasm and an open mind."
  },
  {
    id: "knight-of-wands",
    name: "Knight of Wands",
    number: "Knight",
    element: "Fire",
    symbol: "🐎",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Fire of Fire",
    keywords: ["Passionate Action", "Adventure", "Charisma", "Impulsive Drive"],
    uprightMeaning: "Charismatic, high-energy pursuer charging ahead with fiery romance and bold ambition.",
    interpretations: {
      past: "A bold, charismatic move accelerated your romantic or professional journey.",
      present: "Channel your fiery passion into decisive action, but avoid recklessness.",
      future: "An exhilarating adventure or passionate romance will sweep into your life."
    },
    advice: "Pursue your goals with bold courage, keeping an eye on long-term sustainability."
  },
  {
    id: "queen-of-wands",
    name: "Queen of Wands",
    number: "Queen",
    element: "Fire",
    symbol: "🌻",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Water of Fire (Aries-Taurus)",
    keywords: ["Magnetic Charisma", "Confidence", "Warmth", "Fertile Power"],
    uprightMeaning: "Radiant, magnetic, confident leader who lights up any room with warmth and authority.",
    interpretations: {
      past: "Embodying self-assurance and warmth attracted loyal allies to your side.",
      present: "Step fully into your magnetic confidence. You inspire and uplift everyone around you.",
      future: "You will command high visibility, creative independence, and flourishing success."
    },
    advice: "Own your radiance unapologetically and lead with generous warmth."
  },
  {
    id: "king-of-wands",
    name: "King of Wands",
    number: "King",
    element: "Fire",
    symbol: "👑",
    arcanaType: "Minor",
    suit: "Wands",
    astrology: "Air of Fire (Sagittarius-Capricorn)",
    keywords: ["Visionary Leader", "Entrepreneurship", "Inspiration", "Mastery"],
    uprightMeaning: "The grand visionary executive who turns bold ideas into thriving empires.",
    interpretations: {
      past: "Visionary leadership and decisive execution built the kingdom you now oversee.",
      present: "Take executive command of your projects and inspire your team to greatness.",
      future: "You will achieve lasting authority, widespread respect, and business mastery."
    },
    advice: "Lead with visionary clarity, inspiring others through high ethical standards."
  },

  // ==========================================
  // SUIT OF CUPS (Water Element - 14 Cards)
  // ==========================================
  {
    id: "ace-of-cups",
    name: "Ace of Cups",
    number: "Ace",
    element: "Water",
    symbol: "💧",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Cancer / Scorpio / Pisces",
    keywords: ["Overflowing Love", "Emotional Fulfillment", "Spiritual Grace", "Intimacy"],
    uprightMeaning: "The Holy Grail of unconditional love, intuitive awakening, and heart opening.",
    interpretations: {
      past: "A profound opening of the heart allowed deep love and compassion to enter your life.",
      present: "Your emotional cup is running over with love, peace, and creative inspiration.",
      future: "A blissful soul connection or joyful emotional rebirth awaits you."
    },
    advice: "Open your heart fully and let divine love flow through you without fear."
  },
  {
    id: "two-of-cups",
    name: "Two of Cups",
    number: "2",
    element: "Water",
    symbol: "🥂",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Venus in Cancer",
    keywords: ["Soulmate Bond", "Mutual Devotion", "Equal Partnership", "Romance"],
    uprightMeaning: "A harmonious meeting of two hearts in mutual love, respect, and emotional balance.",
    interpretations: {
      past: "A soulmate connection or harmonious agreement built a foundation of trust.",
      present: "Experience the beauty of equal reciprocity and mutual romantic attraction.",
      future: "A destined partnership will deepen into lasting devotion and shared harmony."
    },
    advice: "Nurture genuine mutual respect and celebrate emotional reciprocity."
  },
  {
    id: "three-of-cups",
    name: "Three of Cups",
    number: "3",
    element: "Water",
    symbol: "🎉",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Mercury in Cancer",
    keywords: ["Celebration", "Sisterhood", "Friendship", "Reunion"],
    uprightMeaning: "Joyous gatherings, community celebrations, reunions, and uplifted spirits.",
    interpretations: {
      past: "Supportive friendships and joyous celebrations nourished your spirit.",
      present: "Gather with your soul tribe to celebrate love, friendship, and shared joy.",
      future: "A wonderful celebration, wedding, or reunion will lift your heart."
    },
    advice: "Celebrate life with your community and share your blessings."
  },
  {
    id: "four-of-cups",
    name: "Four of Cups",
    number: "4",
    element: "Water",
    symbol: "🍃",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Moon in Cancer",
    keywords: ["Apathy", "Contemplation", "Missed Gift", "Meditation"],
    uprightMeaning: "Turning inward in contemplation, but beware of ignoring the golden cup offered by the universe.",
    interpretations: {
      past: "A period of emotional withdrawal allowed you to re-evaluate your true desires.",
      present: "Look up from your contemplation; an unexpected divine gift is being offered to you.",
      future: "You will awaken from apathy with renewed gratitude for life's hidden blessings."
    },
    advice: "Open your eyes to subtle blessings waiting right in front of you."
  },
  {
    id: "five-of-cups",
    name: "Five of Cups",
    number: "5",
    element: "Water",
    symbol: "🍷",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Mars in Scorpio",
    keywords: ["Grief & Healing", "Spilled Wine", "Two Cups Standing", "Forgiveness"],
    uprightMeaning: "Mourning spilled wine while forgetting that two golden cups still stand behind you.",
    interpretations: {
      past: "A painful disappointment taught you the art of emotional resilience and release.",
      present: "Acknowledge your grief, but turn around to see the love and support that remains.",
      future: "Emotional healing will turn your sorrow into profound compassion and new beginnings."
    },
    advice: "Shift your focus from what was lost to the abundant love that still stands."
  },
  {
    id: "six-of-cups",
    name: "Six of Cups",
    number: "6",
    element: "Water",
    symbol: "🌸",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Sun in Scorpio",
    keywords: ["Nostalgia", "Childhood Innocence", "Soul Memories", "Reconnection"],
    uprightMeaning: "Sweet memories, reuniting with an old friend or childhood sweetheart, pure innocence.",
    interpretations: {
      past: "Innocent childhood passions and ancestral memories shape your current values.",
      present: "A sweet message or reunion from the past brings warmth and healing.",
      future: "You will reconnect with your inner child and experience pure, joyful playfulness."
    },
    advice: "Honor sweet memories from your past while living fully in the present."
  },
  {
    id: "seven-of-cups",
    name: "Seven of Cups",
    number: "7",
    element: "Water",
    symbol: "☁️",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Venus in Scorpio",
    keywords: ["Choices", "Illusion vs Reality", "Daydreams", "Clarity"],
    uprightMeaning: "Seven floating cups of fantasy. Ground your dreams into one clear, actionable choice.",
    interpretations: {
      past: "Navigating many tempting illusions helped you sharpen your discernment.",
      present: "Do not get lost in endless daydreams. Choose the path aligned with your true values.",
      future: "Clear discernment will dissolve confusion and reveal the one true path."
    },
    advice: "Ground your imaginative visions into practical, realistic steps."
  },
  {
    id: "eight-of-cups",
    name: "Eight of Cups",
    number: "8",
    element: "Water",
    symbol: "🚶",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Saturn in Pisces",
    keywords: ["Walking Away", "Higher Quest", "Leaving the Stale", "Spiritual Journey"],
    uprightMeaning: "Walking away from what is no longer emotionally fulfilling to seek higher spiritual truth.",
    interpretations: {
      past: "Courageously walking away from an unfulfilling situation cleared your path.",
      present: "It is time to let go of outgrown emotional habits and climb toward higher peaks.",
      future: "A transformative spiritual quest will lead you to authentic, lasting peace."
    },
    advice: "Have the courage to walk away from what no longer feeds your soul."
  },
  {
    id: "nine-of-cups",
    name: "Nine of Cups",
    number: "9",
    element: "Water",
    symbol: "🌟",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Jupiter in Pisces",
    keywords: ["Wish Card", "Contentment", "Emotional Satisfaction", "Abundance"],
    uprightMeaning: "The famous 'Wish Card'. Total emotional satisfaction, luxury, and dreams fulfilled.",
    interpretations: {
      past: "A heartfelt wish from your past has blossomed into present contentment.",
      present: "Bask in deep satisfaction, good health, and joyful fulfillment.",
      future: "Your most cherished personal wish will come true with abundant blessings."
    },
    advice: "Count your blessings and celebrate your emotional and material abundance."
  },
  {
    id: "ten-of-cups",
    name: "Ten of Cups",
    number: "10",
    element: "Water",
    symbol: "🌈",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Mars in Pisces",
    keywords: ["Domestic Bliss", "Rainbow of Joy", "Family Harmony", "Everlasting Love"],
    uprightMeaning: "The rainbow of complete emotional fulfillment, happy family life, and harmonious union.",
    interpretations: {
      past: "A foundation of family warmth and emotional security supported your growth.",
      present: "You are surrounded by peaceful domestic harmony, laughter, and true love.",
      future: "Lifelong marital bliss, a happy home, and deep emotional wholeness."
    },
    advice: "Cherish the simple, everyday moments of love with your family and partner."
  },
  {
    id: "page-of-cups",
    name: "Page of Cups",
    number: "Page",
    element: "Water",
    symbol: "🐟",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Earth of Water",
    keywords: ["Sweet Message", "Intuitive Spark", "Poetic Heart", "Wonder"],
    uprightMeaning: "A fish popping out of a cup. A sweet romantic message, creative spark, or poetic delivery.",
    interpretations: {
      past: "An intuitive hunch or sweet artistic project opened your heart.",
      present: "Expect a tender, heartfelt message or creative invitation.",
      future: "A new artistic passion or tender romantic encounter will delight you."
    },
    advice: "Stay open to intuitive synchronicities and express your feelings gently."
  },
  {
    id: "knight-of-cups",
    name: "Knight of Cups",
    number: "Knight",
    element: "Water",
    symbol: "🕊️",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Fire of Water",
    keywords: ["Romantic Proposal", "Chivalry", "Dreamer", "Heartfelt Offer"],
    uprightMeaning: "The romantic knight offering the golden cup of love, poetic devotion, and harmony.",
    interpretations: {
      past: "A heartfelt romantic gesture or creative offer set a romantic cycle in motion.",
      present: "A romantic proposal, artistic partnership, or heartfelt invitation is arriving.",
      future: "You will be swept off your feet by authentic emotional romance and chivalry."
    },
    advice: "Follow your heart's authentic passion and share your romantic truth."
  },
  {
    id: "queen-of-cups",
    name: "Queen of Cups",
    number: "Queen",
    element: "Water",
    symbol: "🌊",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Water of Water (Gemini-Cancer)",
    keywords: ["Deep Empathy", "Intuitive Mastery", "Compassion", "Emotional Healing"],
    uprightMeaning: "The loving, clairvoyant queen whose heart is an oceanic sanctuary of empathy and wisdom.",
    interpretations: {
      past: "Nurturing intuitive wisdom and deep empathy guided you through storms.",
      present: "Trust your psychic feelings completely. Your emotional intelligence is your superpower.",
      future: "You will become a trusted emotional healer and compassionate sanctuary for others."
    },
    advice: "Set healthy emotional boundaries while keeping your compassionate heart open."
  },
  {
    id: "king-of-cups",
    name: "King of Cups",
    number: "King",
    element: "Water",
    symbol: "⚓",
    arcanaType: "Minor",
    suit: "Cups",
    astrology: "Air of Water (Scorpio-Sagittarius)",
    keywords: ["Emotional Mastery", "Composure", "Diplomacy", "Wise Counsel"],
    uprightMeaning: "The master of emotional equilibrium who remains calm and compassionate even amidst raging seas.",
    interpretations: {
      past: "Emotional maturity and wise diplomacy resolved tense relationship dynamics.",
      present: "Lead with emotional composure, empathy, and wise discernment.",
      future: "You will achieve unshakeable emotional serenity and respected leadership."
    },
    advice: "Balance deep empathy with calm mental logic in all communications."
  },

  // ==========================================
  // SUIT OF SWORDS (Air Element - 14 Cards)
  // ==========================================
  {
    id: "ace-of-swords",
    name: "Ace of Swords",
    number: "Ace",
    element: "Air",
    symbol: "🗡️",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Gemini / Libra / Aquarius",
    keywords: ["Clarity", "Breakthrough Idea", "Truth", "Decisive Victory"],
    uprightMeaning: "The double-edged sword of truth cutting through illusion to deliver crystal clarity.",
    interpretations: {
      past: "A breakthrough realization shattered confusion and set you on a clear path.",
      present: "Speak the truth with precision. A decisive intellectual breakthrough is yours.",
      future: "Total mental clarity, legal victory, and triumphant problem resolution."
    },
    advice: "Cut away falsehoods and speak your absolute truth with calm confidence."
  },
  {
    id: "two-of-swords",
    name: "Two of Swords",
    number: "2",
    element: "Air",
    symbol: "⚖️",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Moon in Libra",
    keywords: ["Truce", "Difficult Choice", "Blindfolded Standoff", "Weighing Paths"],
    uprightMeaning: "A blindfolded standoff. Remove the blindfold and make the necessary decision.",
    interpretations: {
      past: "A period of indecision or temporary truce kept conflicting energies balanced.",
      present: "Do not avoid the decision any longer. Listen to your inner voice and choose.",
      future: "The stalemate will break, revealing a clear, peaceful way forward."
    },
    advice: "Face the facts honestly and make the necessary choice without fear."
  },
  {
    id: "three-of-swords",
    name: "Three of Swords",
    number: "3",
    element: "Air",
    symbol: "💔",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Saturn in Libra",
    keywords: ["Heartbreak", "Grief Release", "Truth Hurting", "Healing"],
    uprightMeaning: "The necessary pain of recognizing hard truth so deep healing and renewal can take place.",
    interpretations: {
      past: "A painful emotional disappointment taught you deep discernment and empathy.",
      present: "Allow yourself to grieve and release past heartbreak; the storm is passing.",
      future: "Profound emotional healing and rebirth will restore your heart to peace."
    },
    advice: "Feel your feelings fully so they can release and heal completely."
  },
  {
    id: "four-of-swords",
    name: "Four of Swords",
    number: "4",
    element: "Air",
    symbol: "🕊️",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Jupiter in Libra",
    keywords: ["Rest & Recovery", "Meditation", "Sanctuary", "Rejuvenation"],
    uprightMeaning: "Resting the sword in the sanctuary. Taking essential mental rest before the next chapter.",
    interpretations: {
      past: "A period of quiet convalescence restored your mental and physical energy.",
      present: "Step away from mental stress. Rest your mind, meditate, and recharge your battery.",
      future: "You will emerge from this restful retreat with renewed vigor and mental focus."
    },
    advice: "Prioritize deep sleep, meditation, and quiet downtime to restore mental clarity."
  },
  {
    id: "five-of-swords",
    name: "Five of Swords",
    number: "5",
    element: "Air",
    symbol: "⚔️",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Venus in Aquarius",
    keywords: ["Hollow Victory", "Picking Battles", "Conflict Resolution", "Humility"],
    uprightMeaning: "A hollow victory won at too great a cost. Choose peace over winning petty arguments.",
    interpretations: {
      past: "A conflict taught you that being kind is often more important than being right.",
      present: "Pick your battles wisely. Walk away from toxic arguments that drain your peace.",
      future: "You will establish peaceful boundaries that protect your mental well-being."
    },
    advice: "Release the ego's need to win every debate; choose inner peace."
  },
  {
    id: "six-of-swords",
    name: "Six of Swords",
    number: "6",
    element: "Air",
    symbol: "🛶",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Mercury in Aquarius",
    keywords: ["Transition to Calm", "Moving On", "Smooth Waters", "Travel"],
    uprightMeaning: "Ferrying across choppy waters to peaceful, tranquil shores. Leaving turmoil behind.",
    interpretations: {
      past: "Leaving a troubled environment behind set you on the course toward healing.",
      present: "You are transitioning into much calmer, smoother emotional waters right now.",
      future: "Peaceful relocation, smooth travel, and serene mental clarity ahead."
    },
    advice: "Trust that the worst is behind you; keep moving toward calmer waters."
  },
  {
    id: "seven-of-swords",
    name: "Seven of Swords",
    number: "7",
    element: "Air",
    symbol: "🦊",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Moon in Aquarius",
    keywords: ["Strategy", "Discretion", "Tactics", "Avoiding Confrontation"],
    uprightMeaning: "Sneaking away with the swords. Strategic thinking, discretion, and working smartly.",
    interpretations: {
      past: "Clever strategy or discretion helped you protect your interests under difficult conditions.",
      present: "Keep your plans confidential. Work behind the scenes with strategic finesse.",
      future: "A clever, non-confrontational solution will bypass obstacles effortlessly."
    },
    advice: "Maintain privacy about your upcoming moves and use clever diplomacy."
  },
  {
    id: "eight-of-swords",
    name: "Eight of Swords",
    number: "8",
    element: "Air",
    symbol: "🕸️",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Jupiter in Gemini",
    keywords: ["Self-Imposed Traps", "Mental Liberation", "Blindfold", "Clarity"],
    uprightMeaning: "Bound by mental fears, yet the swords do not touch you and your feet are free to walk out.",
    interpretations: {
      past: "Overcoming self-limiting beliefs showed you that fear was merely an illusion.",
      present: "Recognize that your current trapped feeling is mental. You have the power to walk away.",
      future: "You will shed all self-imposed limitations and reclaim your empowered autonomy."
    },
    advice: "Remove the mental blindfold and realize how much freedom you truly possess."
  },
  {
    id: "nine-of-swords",
    name: "Nine of Swords",
    number: "9",
    element: "Air",
    symbol: "🛌",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Mars in Gemini",
    keywords: ["Nightmare Passing", "Anxiety Release", "Dawn Approaching", "Relief"],
    uprightMeaning: "Waking up from a nightmare. The dawn is rising, and reality is far brighter than your anxious fears.",
    interpretations: {
      past: "A dark night of mental worry passed, leaving you stronger and more grounded.",
      present: "Release catastrophic thinking. Your worst fears will not materialize.",
      future: "The sun will rise on your worries, bringing immediate relief and calm sleep."
    },
    advice: "Talk to a trusted friend and remind yourself that thoughts are not facts."
  },
  {
    id: "ten-of-swords",
    name: "Ten of Swords",
    number: "10",
    element: "Air",
    symbol: "🌅",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Sun in Gemini",
    keywords: ["Rock Bottom Behind", "Golden Dawn", "Final Ending", "Rebirth"],
    uprightMeaning: "The absolute end of a painful chapter. The golden dawn breaks on the horizon; you can only rise from here.",
    interpretations: {
      past: "The definitive end of a painful cycle freed you completely from past burdens.",
      present: "The ordeal is completely over. Turn your eyes to the golden dawn of new beginnings.",
      future: "A triumphant resurrection and fresh start unburdened by past baggage."
    },
    advice: "Accept the finality of this closure and welcome the bright new dawn."
  },
  {
    id: "page-of-swords",
    name: "Page of Swords",
    number: "Page",
    element: "Air",
    symbol: "🦅",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Earth of Air",
    keywords: ["Curious Intellect", "Mental Agility", "Vigilance", "Truth Seeking"],
    uprightMeaning: "Sharp, witty, inquisitive student of truth, ready to learn and question everything.",
    interpretations: {
      past: "Sharp curiosity and quick learning helped you master essential knowledge.",
      present: "Stay mentally alert and do thorough research before signing contracts.",
      future: "A new intellectual pursuit or study will stimulate your mind and open doors."
    },
    advice: "Ask sharp questions, gather facts, and communicate with crystal clarity."
  },
  {
    id: "knight-of-swords",
    name: "Knight of Swords",
    number: "Knight",
    element: "Air",
    symbol: "🌪️",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Fire of Air",
    keywords: ["Swift Action", "Direct Truth", "Fierce Intellect", "Decisiveness"],
    uprightMeaning: "Charging into battle with laser-sharp intellect, cutting through delays with unstoppable velocity.",
    interpretations: {
      past: "A decisive, fast-paced action broke through stagnation and cleared your path.",
      present: "Execute your ideas without hesitation, but be mindful of diplomatic tone.",
      future: "A swift intellectual victory will solve a complex problem in record time."
    },
    advice: "Charge forward with focused determination while maintaining strategic awareness."
  },
  {
    id: "queen-of-swords",
    name: "Queen of Swords",
    number: "Queen",
    element: "Air",
    symbol: "👑",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Water of Air (Virgo-Libra)",
    keywords: ["Sharp Discernment", "Clear Boundaries", "Independence", "Honesty"],
    uprightMeaning: "The sovereign of sharp discernment who speaks absolute truth with grace, wit, and firm boundaries.",
    interpretations: {
      past: "Clear boundaries and honest discernment protected your emotional freedom.",
      present: "Cut through emotional drama with calm, objective logic and fair boundaries.",
      future: "You will achieve respected intellectual authority and total emotional independence."
    },
    advice: "Be direct, fair, and honest in all dealings without allowing sentimentality to cloud judgment."
  },
  {
    id: "king-of-swords",
    name: "King of Swords",
    number: "King",
    element: "Air",
    symbol: "⚖️",
    arcanaType: "Minor",
    suit: "Swords",
    astrology: "Air of Air (Taurus-Gemini)",
    keywords: ["Intellectual Mastery", "Justice", "Ethical Leadership", "Strategic Genius"],
    uprightMeaning: "The supreme judicial intellect who judges all situations with impartial truth and strategic genius.",
    interpretations: {
      past: "Disciplined analysis and ethical conduct earned you high respect and authority.",
      present: "Lead with analytical clarity, ethical principles, and sound strategic judgment.",
      future: "You will successfully resolve a legal, corporate, or intellectual challenge with flying colors."
    },
    advice: "Base your decisions purely on truth, facts, and the highest ethical standards."
  },

  // ==========================================
  // SUIT OF PENTACLES (Earth Element - 14 Cards)
  // ==========================================
  {
    id: "ace-of-pentacles",
    name: "Ace of Pentacles",
    number: "Ace",
    element: "Earth",
    symbol: "🪙",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Taurus / Virgo / Capricorn",
    keywords: ["Tangible Wealth", "New Job / Asset", "Physical Health", "Prosperity"],
    uprightMeaning: "The golden seed of financial abundance, lucrative investments, and vibrant physical vitality.",
    interpretations: {
      past: "A solid material opportunity laid the foundation for your current financial stability.",
      present: "A lucrative financial offer or property opportunity is ready to be planted.",
      future: "Long-term prosperity, material security, and vibrant bodily health."
    },
    advice: "Plant the seed of practical investment now and nurture it with steady discipline."
  },
  {
    id: "two-of-pentacles",
    name: "Two of Pentacles",
    number: "2",
    element: "Earth",
    symbol: "🤹",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Jupiter in Capricorn",
    keywords: ["Juggling Priorities", "Adaptability", "Financial Balance", "Flexibility"],
    uprightMeaning: "Skillfully juggling multiple responsibilities and finances with playful balance.",
    interpretations: {
      past: "Adaptability and resourcefulness helped you navigate multiple competing demands.",
      present: "Keep your financial and work priorities balanced with lighthearted flexibility.",
      future: "You will master the flow of money and time, creating effortless multi-tasking success."
    },
    advice: "Stay flexible, budget wisely, and flow with life's daily rhythm."
  },
  {
    id: "three-of-pentacles",
    name: "Three of Pentacles",
    number: "3",
    element: "Earth",
    symbol: "🏛️",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Mars in Capricorn",
    keywords: ["Master Craftsmanship", "Team Collaboration", "Skill Recognition", "Quality"],
    uprightMeaning: "Master craftsman collaborating with architect and monk. High skill recognition and team success.",
    interpretations: {
      past: "Dedication to craft excellence earned you respect among seasoned professionals.",
      present: "Collaborate with talented teammates. Your unique skills are valued and praised.",
      future: "A prestigious project completed with high acclaim will boost your career reputation."
    },
    advice: "Work collaboratively with experts and uphold the highest standards of quality."
  },
  {
    id: "four-of-pentacles",
    name: "Four of Pentacles",
    number: "4",
    element: "Earth",
    symbol: "🔒",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Sun in Capricorn",
    keywords: ["Financial Security", "Holding Wealth", "Frugality", "Releasing Greed"],
    uprightMeaning: "Holding on firmly to wealth and security. Establish safety, but avoid fearful hoarding.",
    interpretations: {
      past: "Prudent savings and financial conservatism protected you during lean seasons.",
      present: "Your finances are secure, but do not let fear keep you from generous flow.",
      future: "Unshakeable financial security and solid material foundation."
    },
    advice: "Protect your assets wisely while maintaining an open, generous spirit."
  },
  {
    id: "five-of-pentacles",
    name: "Five of Pentacles",
    number: "5",
    element: "Earth",
    symbol: "❄️",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Mercury in Taurus",
    keywords: ["Temporary Hardship", "Seeking Warmth", "Stained Glass Window", "Hope"],
    uprightMeaning: "Walking in the snow outside the church, unaware of the glowing warm sanctuary right above you.",
    interpretations: {
      past: "Surviving a season of material scarcity proved your unbreakable resilience.",
      present: "Do not suffer in isolation. Reach out; support, warmth, and sanctuary are available.",
      future: "You will step out of the cold into a warm, supportive financial community."
    },
    advice: "Ask for assistance; there is a warm sanctuary waiting to welcome you."
  },
  {
    id: "six-of-pentacles",
    name: "Six of Pentacles",
    number: "6",
    element: "Earth",
    symbol: "⚖️",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Moon in Taurus",
    keywords: ["Generosity", "Karmic Giving & Receiving", "Charity", "Fair Flow"],
    uprightMeaning: "The scales of charitable distribution. Generous giving and receiving in perfect karmic balance.",
    interpretations: {
      past: "Generosity shown to others in the past is returning to bless you manifold.",
      present: "You are in a position to give generously or receive timely financial assistance.",
      future: "A benevolent grant, loan approval, or unexpected bonus will arrive."
    },
    advice: "Share your abundance with gratitude and accept blessings with an open heart."
  },
  {
    id: "seven-of-pentacles",
    name: "Seven of Pentacles",
    number: "7",
    element: "Earth",
    symbol: "🌱",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Saturn in Taurus",
    keywords: ["Patient Cultivation", "Long-term Investment", "Harvest Assessment", "Patience"],
    uprightMeaning: "Leaning on the hoe, admiring the growing vine. Patience while your long-term investments ripen.",
    interpretations: {
      past: "Hard, unglamorous labor planted the seeds that are now growing steadily.",
      present: "Do not rush the harvest. Trust the natural gestation period of your projects.",
      future: "A bountiful financial harvest will reward your steadfast long-term discipline."
    },
    advice: "Be patient; what you have carefully planted is growing on divine schedule."
  },
  {
    id: "eight-of-pentacles",
    name: "Eight of Pentacles",
    number: "8",
    element: "Earth",
    symbol: "🔨",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Sun in Virgo",
    keywords: ["Mastery of Craft", "Apprenticeship", "Dedicated Practice", "Skill"],
    uprightMeaning: "Hammering each pentacle with devotion and focus. Mastery achieved through loving repetition.",
    interpretations: {
      past: "Hours of deliberate practice and study elevated your professional mastery.",
      present: "Focus on honing your craft. Your meticulous attention to detail will set you apart.",
      future: "You will be recognized as an elite master in your chosen professional discipline."
    },
    advice: "Devote yourself to daily practice and take deep pride in your craft."
  },
  {
    id: "nine-of-pentacles",
    name: "Nine of Pentacles",
    number: "9",
    element: "Earth",
    symbol: "🦅",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Venus in Virgo",
    keywords: ["Luxury & Sovereignty", "Financial Independence", "Self-Sufficiency", "Grace"],
    uprightMeaning: "Lady in the lush vineyard with falcon on wrist. Total self-earned financial independence and luxury.",
    interpretations: {
      past: "Disciplined personal effort created the financial autonomy you enjoy today.",
      present: "Enjoy the refined fruits of your labor in your sanctuary of beauty and peace.",
      future: "Complete financial independence, property ownership, and serene luxury."
    },
    advice: "Relish your independence and treat yourself to the refined comforts you have earned."
  },
  {
    id: "ten-of-pentacles",
    name: "Ten of Pentacles",
    number: "10",
    element: "Earth",
    symbol: "🏰",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Mercury in Virgo",
    keywords: ["Generational Wealth", "Family Legacy", "Lasting Security", "Ancestral Blessing"],
    uprightMeaning: "The pinnacle of material fulfillment. Generational wealth, thriving lineage, and lasting legacy.",
    interpretations: {
      past: "Ancestral wisdom and long-term planning created multi-generational stability.",
      present: "Celebrate lasting family harmony, thriving real estate, and financial security.",
      future: "You will build an enduring financial and spiritual legacy for future generations."
    },
    advice: "Think in multi-generational timelines and honor the blessings of family."
  },
  {
    id: "page-of-pentacles",
    name: "Page of Pentacles",
    number: "Page",
    element: "Earth",
    symbol: "🌱",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Earth of Earth",
    keywords: ["Eager Student", "New Financial Venture", "Grounded Ambition", "Learning"],
    uprightMeaning: "Gazing admiringly at the golden coin. A dedicated student eager to build practical wealth.",
    interpretations: {
      past: "Eager curiosity and disciplined study laid the foundation for your career.",
      present: "A grounded educational or investment opportunity is presenting itself. Study it carefully.",
      future: "Diligent learning will blossom into a highly lucrative, stable career path."
    },
    advice: "Approach new financial skills with humility, diligence, and thorough research."
  },
  {
    id: "knight-of-pentacles",
    name: "Knight of Pentacles",
    number: "Knight",
    element: "Earth",
    symbol: "🚜",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Fire of Earth",
    keywords: ["Methodical Progress", "Reliability", "Hard Work", "Unwavering Loyalty"],
    uprightMeaning: "The most reliable knight in tarot. Steady, methodical progress that guarantees eventual success.",
    interpretations: {
      past: "Unwavering work ethic and reliability proved your trustworthiness to mentors.",
      present: "Keep grinding steadily. Your methodical routine is building an unbreakable empire.",
      future: "Slow, steady progress will culminate in solid financial triumph."
    },
    advice: "Stay consistent and execute your daily responsibilities with pride and patience."
  },
  {
    id: "queen-of-pentacles",
    name: "Queen of Pentacles",
    number: "Queen",
    element: "Earth",
    symbol: "🐇",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Water of Earth (Sagittarius-Capricorn)",
    keywords: ["Nurturing Abundance", "Practical Magic", "Sensory Comfort", "Hospitality"],
    uprightMeaning: "The sovereign of grounded abundance, hospitality, healthy cooking, and warm domestic wealth.",
    interpretations: {
      past: "Grounded resourcefulness and maternal care nurtured your environment.",
      present: "Balance business acumen with loving domestic warmth and healthy nutrition.",
      future: "A thriving, comfortable estate filled with material abundance and loving peace."
    },
    advice: "Care for your body, home, and finances with loving, practical mindfulness."
  },
  {
    id: "king-of-pentacles",
    name: "King of Pentacles",
    number: "King",
    element: "Earth",
    symbol: "👑",
    arcanaType: "Minor",
    suit: "Pentacles",
    astrology: "Air of Earth (Leo-Virgo)",
    keywords: ["Financial Emperor", "Business Titan", "Material Mastery", "Philanthropy"],
    uprightMeaning: "The master of material reality with the golden Midas touch. Unshakable business success.",
    interpretations: {
      past: "Disciplined financial investments and business acumen built your prosperous foundation.",
      present: "Exercise executive command over assets and enjoy the stability of your empire.",
      future: "Pinnacle wealth, thriving enterprises, and generous philanthropic impact."
    },
    advice: "Manage your resources with wisdom, generosity, and long-term foresight."
  }
];
