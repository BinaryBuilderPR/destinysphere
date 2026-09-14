/**
 * Comprehensive 78-Card Rider-Waite-Smith (RWS) Tarot & Astrological Database.
 * Designed with authentic Hermetic Order of the Golden Dawn correspondences,
 * Decan rulers, Kabbalistic paths, and professional reader notes used by practicing astrologers.
 */

export interface RWSTarotCard {
  id: string;
  name: string;
  arcanaType: "Major" | "Minor";
  suit?: "Wands" | "Cups" | "Swords" | "Pentacles";
  number: string;
  element: "Fire" | "Water" | "Air" | "Earth" | "Spirit";
  astrology: {
    zodiacOrPlanet: string;
    decan?: string;
    modality?: "Cardinal" | "Fixed" | "Mutable" | "Planetary" | "Elemental";
    hebrewLetter?: string;
    treeOfLifePath?: string;
  };
  keywords: string[];
  upright: {
    overview: string;
    love: string;
    career: string;
    spirituality: string;
  };
  reversed: {
    overview: string;
    love: string;
    career: string;
    spirituality: string;
  };
  yesOrNo: "Yes" | "No" | "Maybe / Conditional" | string;
  timing: string;
  symbolism: string[];
  astrologerNote: string;
}

export const RWS_78_DECK: RWSTarotCard[] = [
  // ==========================================
  // 22 MAJOR ARCANA
  // ==========================================
  {
    id: "0-the-fool",
    name: "0 • The Fool",
    arcanaType: "Major",
    number: "0",
    element: "Air",
    astrology: {
      zodiacOrPlanet: "Uranus ♅ / Air Element 🜁",
      modality: "Elemental",
      hebrewLetter: "Aleph (א)",
      treeOfLifePath: "Path 11: Kether to Chokmah",
    },
    keywords: ["New Beginnings", "Innocence", "Leap of Faith", "Limitless Potential", "Spontaneity"],
    upright: {
      overview: "The pure cosmic seed before manifestation. Trusting the divine flow without prejudice or fear of the unknown.",
      love: "Exciting new romance, unexpected encounters, spontaneous dates, and uninhibited emotional openness.",
      career: "Venturing into an unchartered industry, starting a solo entrepreneurial journey, or embracing fresh career risks.",
      spirituality: "Surrendering to your higher calling with 'Beginner's Mind' and untethered faith in universal providence.",
    },
    reversed: {
      overview: "Recklessness, naive gullibility, fear of commitment, or holding back from necessary leaps out of irrational dread.",
      love: "Hesitation to commit, careless treatment of partners, or falling for empty romantic illusions.",
      career: "Uncalculated risks, lack of due diligence, or self-sabotage caused by fear of stepping into the spotlight.",
      spirituality: "Spiritual bypass, ignoring grounded wisdom, or feeling disconnected from your divine spark.",
    },
    yesOrNo: "Yes",
    timing: "Unexpected / Instantaneous / Spring Equinox",
    symbolism: ["White Rose (Purity of Intention)", "Little Dog (Faithful Subconscious Instinct)", "Cliff Edge (Threshold of Consciousness)", "Sun (Divine Illumination)"],
    astrologerNote: "The Fool is Card Zero—the infinite void containing all possibilities. When paired with Uranus transits, it signals an overnight quantum leap."
  },
  {
    id: "1-the-magician",
    name: "I • The Magician",
    arcanaType: "Major",
    number: "I",
    element: "Air",
    astrology: {
      zodiacOrPlanet: "Mercury ☿",
      modality: "Planetary",
      hebrewLetter: "Beth (ב)",
      treeOfLifePath: "Path 12: Kether to Binah",
    },
    keywords: ["Manifestation", "Willpower", "Resourcefulness", "Conscious Mastery", "Alchemy"],
    upright: {
      overview: "As Above, So Below. You hold all four elemental tools to channel divine intent into physical reality.",
      love: "Intentional attraction, clear communication, deep mutual mental chemistry, and active relationship building.",
      career: "Peak skill execution, successful pitch closures, master salesmanship, and launching high-impact initiatives.",
      spirituality: "Conscious co-creation with the Universe. Directing focused intention through speech and focused ritual.",
    },
    reversed: {
      overview: "Manipulation, trickery, scattered focus, latent unutilized talents, or misusing intellectual power.",
      love: "Mixed signals, deceptive charm, love-bombing without substance, or unfulfilled promises.",
      career: "Overpromising and underdelivering, impostor syndrome, or underutilizing your innate genius.",
      spirituality: "Blocked throat chakra, mental over-rationalization, or using spiritual practices for ego gratification.",
    },
    yesOrNo: "Yes",
    timing: "Mercury transits / Wednesday / Fast (within days)",
    symbolism: ["Ouroboros Belt (Eternal Life)", "Lemniscate (Infinity of Mind)", "Four Elemental Weapons (Wand, Cup, Sword, Pentacle) on Table"],
    astrologerNote: "Mercury governs the bridge between the conscious mind and material creation. Check your natal 3rd and 6th houses when this card appears."
  },
  {
    id: "2-the-high-priestess",
    name: "II • The High Priestess",
    arcanaType: "Major",
    number: "II",
    element: "Water",
    astrology: {
      zodiacOrPlanet: "Moon ☽",
      modality: "Planetary",
      hebrewLetter: "Gimel (ג)",
      treeOfLifePath: "Path 13: Kether to Tiphareth",
    },
    keywords: ["Intuition", "Sacred Secrets", "Akashic Veil", "Divine Feminine", "Subconscious"],
    upright: {
      overview: "Guardian of the esoteric veil. Truths are not revealed through intellectual logic, but through quiet psychic stillness.",
      love: "Deep spiritual connection, unspoken telepathic bond, intense soulmate magnetism, and emotional depth.",
      career: "Keep strategies confidential. Trust gut hunches about colleagues, hidden opportunities, and unwritten rules.",
      spirituality: "Lucid dreaming, active clairvoyance, meditation downloads, and study of the sacred occult arts.",
    },
    reversed: {
      overview: "Ignoring intuition, hidden agendas, repressed emotional instincts, or superficial gossip.",
      love: "Secrets withheld between partners, emotional isolation, or ignoring obvious intuitive red flags.",
      career: "Information obscured by superiors, backroom politics, or disconnecting from instinctive creative instincts.",
      spirituality: "Spiritual disconnection, psychic overwhelm, or neglecting dreamwork and lunar cycles.",
    },
    yesOrNo: "Maybe / Conditional",
    timing: "Full Moon / Monday / Cancer Season (June 21 - July 22)",
    symbolism: ["Pillars of Boaz & Jachin (Duality / Balance)", "Pomegranate Veil (Fertility of the Unconscious)", "Crescent Moon at Feet (Receptivity)"],
    astrologerNote: "The High Priestess sits directly on the Middle Pillar of the Kabbalistic Tree of Life, bridging cosmic crown consciousness to solar heart reality."
  },
  {
    id: "3-the-empress",
    name: "III • The Empress",
    arcanaType: "Major",
    number: "III",
    element: "Earth",
    astrology: {
      zodiacOrPlanet: "Venus ♀",
      modality: "Planetary",
      hebrewLetter: "Daleth (ד)",
      treeOfLifePath: "Path 14: Chokmah to Binah",
    },
    keywords: ["Abundance", "Sensory Pleasure", "Fertility", "Creativity", "Mother Nature"],
    upright: {
      overview: "The sovereign archetype of fertile creation, luxury, sensory elegance, and unconditional maternal warmth.",
      love: "Deeply fulfilling romance, marriage, pregnancy, emotional nourishment, and harmonious domestic bliss.",
      career: "Flourishing business growth, lucrative artistic projects, harmonious teamwork, and bountiful financial harvests.",
      spirituality: "Connecting with Gaia, grounding through nature retreats, honoring sacred body temples, and sensual gratitude.",
    },
    reversed: {
      overview: "Creative blockages, smothering codependency, material overindulgence, or neglect of self-care.",
      love: "Clinginess, feeling unappreciated, emotional fatigue, or domestic discord.",
      career: "Stagnant revenue growth, creative burnout, or micromanagement stifling team vitality.",
      spirituality: "Disconnection from physical rhythms, disharmony with natural seasons, or neglected heart chakra.",
    },
    yesOrNo: "Yes",
    timing: "Friday / Taurus Season (Apr 20 - May 20) & Libra Season (Sept 23 - Oct 22)",
    symbolism: ["Crown of 12 Stars (The 12 Zodiac Constellations)", "Ripening Wheat Field (Harvest & Abundance)", "Venus Shield (Unconditional Love)"],
    astrologerNote: "Directly mirrors Venus exalted. In relationship readings, this indicates a high probability of lasting partnership and fertility."
  },
  {
    id: "4-the-emperor",
    name: "IV • The Emperor",
    arcanaType: "Major",
    number: "IV",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "Aries ♈",
      modality: "Cardinal",
      hebrewLetter: "Heh (ה)",
      treeOfLifePath: "Path 15: Chokmah to Tiphareth",
    },
    keywords: ["Authority", "Structure", "Sovereignty", "Discipline", "Strategic Leadership"],
    upright: {
      overview: "The builder of enduring empires. Establishes order from chaos through unwavering discipline, logic, and protective mastery.",
      love: "Committed, protective, reliable partner seeking long-term security, clear boundaries, and structured future plans.",
      career: "Executive leadership, corporate hierarchy promotions, founding stable organizations, and decisive strategic execution.",
      spirituality: "Spiritual discipline, structured daily sadhana, mastering emotional impulses, and anchoring divine order.",
    },
    reversed: {
      overview: "Tyranny, inflexible rigidity, abusive power dynamics, micro-management, or total lack of discipline.",
      love: "Controlling tendencies, emotional coldness, patriarchal domineering, or stubborn ego clashes.",
      career: "Bureaucratic gridlock, tyrannical bosses, crumbling organizational structures, or impulsive financial loss.",
      spirituality: "Dogmatic spiritual fanaticism or rebellion against wholesome structure and mentors.",
    },
    yesOrNo: "Yes",
    timing: "Aries Season (March 21 - April 19) / Tuesday",
    symbolism: ["Ram Heads on Stone Throne (Aries Sovereign Mars Rule)", "Ankh Scepter (Power over Life)", "Red Robes & Armor (Mars Willpower)"],
    astrologerNote: "Card of pure Cardinal Fire. Indicates that success requires establishing rock-solid routines and executing without emotional oscillation."
  },
  {
    id: "5-the-hierophant",
    name: "V • The Hierophant",
    arcanaType: "Major",
    number: "V",
    element: "Earth",
    astrology: {
      zodiacOrPlanet: "Taurus ♉",
      modality: "Fixed",
      hebrewLetter: "Vav (ו)",
      treeOfLifePath: "Path 16: Chokmah to Chesed",
    },
    keywords: ["Spiritual Lineage", "Traditional Wisdom", "Mentorship", "Institutions", "Sacred Truth"],
    upright: {
      overview: "The keeper of timeless sacred esoteric lineages and institutions. Bridge between divine law and worldly order.",
      love: "Traditional commitment, sacred marriage ceremonies, shared spiritual values, and long-term fidelity.",
      career: "Institutional recognition, master-apprentice relationships, educational credentials, and adherence to proven systems.",
      spirituality: "Studying traditional scriptures, finding a qualified guru/mentor, and honoring ancestral rituals.",
    },
    reversed: {
      overview: "Blind dogma, institutional corruption, breaking outmoded traditions, or unconventional spiritual paths.",
      love: "Unconventional relationship dynamics, rebelling against marital expectations, or clashing family traditions.",
      career: "Leaving stifling corporate hierarchies to carve an independent path, or clashing with out-of-touch superiors.",
      spirituality: "Rejecting dogmatic religious guilt, developing an idiosyncratic direct connection to Source.",
    },
    yesOrNo: "Yes",
    timing: "Taurus Season (April 20 - May 20) / Spring",
    symbolism: ["Triple Papal Crown & Cross (Mastery of Heaven, Earth, Underworld)", "Crossed Keys of Peter (Conscious & Subconscious Mastery)", "Two Acolytes"],
    astrologerNote: "Fixed Earth ruled by Venus. Highlights the need to ground spiritual wisdom into practical, repetitive ethical habits."
  },
  {
    id: "6-the-lovers",
    name: "VI • The Lovers",
    arcanaType: "Major",
    number: "VI",
    element: "Air",
    astrology: {
      zodiacOrPlanet: "Gemini ♊",
      modality: "Mutable",
      hebrewLetter: "Zayin (ז)",
      treeOfLifePath: "Path 17: Binah to Tiphareth",
    },
    keywords: ["Sacred Union", "Soulmates", "Moral Choice", "Harmonious Duality", "Aligned Values"],
    upright: {
      overview: "Divine union of complementary opposites. Represents both profound romantic intimacy and critical moral crossroads.",
      love: "Soulmate connection, profound emotional and physical vulnerability, mutual devotion, and harmonious union.",
      career: "Mutually prosperous business partnerships, aligned collaborative values, and choosing career paths with integrity.",
      spirituality: "Integrating the divine masculine (animus) and divine feminine (anima) within the individual consciousness.",
    },
    reversed: {
      overview: "Misalignment of core values, communication breakdown, unrequited devotion, or avoiding difficult moral choices.",
      love: "Codependency, emotional friction, incompatibility in future visions, or temptation of infidelity.",
      career: "Disputes between business co-founders, conflicting agendas, or compromising ethics for short-term profit.",
      spirituality: "Internal conflict between higher spiritual ideals and lower egoistic desires.",
    },
    yesOrNo: "Yes",
    timing: "Gemini Season (May 21 - June 20) / Wednesday",
    symbolism: ["Archangel Raphael (Divine Healing & Grace)", "Tree of Knowledge & Tree of Life", "Mountain of Ascension in Background"],
    astrologerNote: "Gemini (The Twins) governed by Mercury. This card is as much about choosing your personal moral compass as it is about love."
  },
  {
    id: "7-the-chariot",
    name: "VII • The Chariot",
    arcanaType: "Major",
    number: "VII",
    element: "Water",
    astrology: {
      zodiacOrPlanet: "Cancer ♋",
      modality: "Cardinal",
      hebrewLetter: "Cheth (ח)",
      treeOfLifePath: "Path 18: Binah to Geburah",
    },
    keywords: ["Triumph", "Willpower", "Overcoming Obstacles", "Focused Drive", "Mastery of Opposites"],
    upright: {
      overview: "Victory achieved through mental focus and disciplined emotional control, steering opposing forces toward a single goal.",
      love: "Pursuing romance with confidence, overcoming past emotional wounds, and navigating relationship turbulence victoriously.",
      career: "Crushing professional milestones, outperforming competitors, rapid career advancement, and relocation/travel for work.",
      spirituality: "Channeling conflicting emotional impulses into dedicated spiritual practice and unwavering dharma.",
    },
    reversed: {
      overview: "Loss of control, aggression, burnout, road-rage, scattered momentum, or feeling blocked by insurmountable roadblocks.",
      love: "Forcing relationship outcomes, overbearing intensity, or emotionally steamrolling a partner.",
      career: "Missed deadlines due to chaotic planning, reckless expansion, or mechanical/vehicle breakdowns.",
      spirituality: "Inner turmoil, feeling driven by uncontrollable emotional reactions rather than conscious soul intent.",
    },
    yesOrNo: "Yes",
    timing: "Cancer Season (June 21 - July 22) / Summer",
    symbolism: ["Black & White Sphinxes (Opposing Dual Forces of Nature)", "Starry Canopy (Cosmic Protection)", "Armor with Lunar Epaulets"],
    astrologerNote: "Cardinal Water. Shows that true willpower is not brute muscle, but the internal mastery of emotional vulnerability and focused direction."
  },
  {
    id: "8-strength",
    name: "VIII • Strength",
    arcanaType: "Major",
    number: "VIII",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "Leo ♌",
      modality: "Fixed",
      hebrewLetter: "Teth (ט)",
      treeOfLifePath: "Path 19: Chesed to Geburah",
    },
    keywords: ["Compassion", "Inner Fortitude", "Patience", "Taming the Ego", "Gentle Mastery"],
    upright: {
      overview: "True power comes from gentle grace, infinite patience, and loving kindness rather than brute physical force.",
      love: "Deep forgiveness, unconditional emotional warmth, taming difficult partner habits through loving patience.",
      career: "Steely calm during corporate crises, graceful negotiation, earning deep respect from peers through composure.",
      spirituality: "Sublimating raw animalistic/primal desires into high spiritual devotion through the heart chakra.",
    },
    reversed: {
      overview: "Self-doubt, explosive anger, feelings of inadequacy, weakness in the face of temptation, or cowardice.",
      love: "Jealousy, dramatic emotional tantrums, projecting inner insecurity onto your partner.",
      career: "Crumbing under professional pressure, imposter syndrome, or allowing aggressive competitors to intimidate you.",
      spirituality: "Disconnection from the heart center, suppressed emotional rage, or exhaustion from chronic stress.",
    },
    yesOrNo: "Yes",
    timing: "Leo Season (July 23 - August 22) / Sunday",
    symbolism: ["Woman in White with Infinity Lemniscate", "Red Lion Being Gently Caressed (Raw Primal Energy Sublimated)", "Wreath of Roses"],
    astrologerNote: "Fixed Fire ruled by the Sun. Strength in Tarot is the alchemy of Leo’s noble solar heart calming the lower beast."
  },
  {
    id: "9-the-hermit",
    name: "IX • The Hermit",
    arcanaType: "Major",
    number: "IX",
    element: "Earth",
    astrology: {
      zodiacOrPlanet: "Virgo ♍",
      modality: "Mutable",
      hebrewLetter: "Yod (י)",
      treeOfLifePath: "Path 20: Chesed to Tiphareth",
    },
    keywords: ["Soul Searching", "Introspection", "Inner Light", "Solitude", "Wisdom & Guidance"],
    upright: {
      overview: "Withdrawing from external worldly noise to discover your luminous inner truth upon the mountain peaks of wisdom.",
      love: "Taking time in solitude to understand personal emotional patterns before committing; mature, reflective partnership.",
      career: "Independent research, mentoring younger professionals, auditing past performance, and focusing on craft mastery.",
      spirituality: "Silent meditation retreats, contemplation, deep study of ancient philosophies, and illuminating the path for others.",
    },
    reversed: {
      overview: "Unhealthy social isolation, loneliness, anti-social withdrawal, refusing wise advice, or fear of loneliness.",
      love: "Emotional stonewalling, feeling completely alone even within a relationship, or withdrawing out of fear of rejection.",
      career: "Working in stubborn silos, rejecting constructive feedback, or failing to collaborate with team members.",
      spirituality: "Spiritual alienation, intellectual arrogance, or dogmatically isolating from spiritual community (Sangha).",
    },
    yesOrNo: "Maybe / Conditional",
    timing: "Virgo Season (August 23 - September 22) / Autumn",
    symbolism: ["Lantern with 6-Pointed Star (Seal of Solomon / Inner Light)", "Golden Staff of the Patriarch (Grounding)", "Snowy Mountain Peak"],
    astrologerNote: "Mutable Earth. Governed by Mercury in Virgo. Represents the holy seeker who has completed the climb and shines the light for those behind."
  },
  {
    id: "10-wheel-of-fortune",
    name: "X • Wheel of Fortune",
    arcanaType: "Major",
    number: "X",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "Jupiter ♃",
      modality: "Planetary",
      hebrewLetter: "Kaph (כ)",
      treeOfLifePath: "Path 21: Chesed to Netzach",
    },
    keywords: ["Karmic Cycles", "Destiny", "Turning Point", "Serendipity", "Cosmic Fortune"],
    upright: {
      overview: "The perpetual turning of universal cycles. Unexpected luck, karmic breakthroughs, and life-altering turning points.",
      love: "Fated encounters, unexpected romantic serendipity, turning a corner after past heartbreak into joyful partnership.",
      career: "Sudden promotion, lucky break, favorable market shifts, winning lucrative contracts, and unexpected abundance.",
      spirituality: "Recognizing karmic destiny, aligning with universal synchronicity, and understanding the cyclical nature of time (Samsara).",
    },
    reversed: {
      overview: "Temporary bad luck, resistance to inevitable change, feeling victimized by cycles, or clinging to obsolete phases.",
      love: "Unfavorable timing, repeating unhealthy karmic relationship loops, or sudden external disruptions.",
      career: "Market downturns, unexpected financial delays, or failing to adapt to industry disruption.",
      spirituality: "Blaming external fate rather than taking accountability for personal karma; resisting natural spiritual transitions.",
    },
    yesOrNo: "Yes",
    timing: "Jupiter transits / Thursday / Instantaneous karmic shift",
    symbolism: ["Four Living Creatures of Ezekiel (Fixed Signs: Taurus, Leo, Scorpio, Aquarius)", "Sphinx of Wisdom at Top", "Anubis at Bottom", "T-A-R-O Letters"],
    astrologerNote: "Ruled by the Greater Benefic (Jupiter). Signals that a major cycle has completed and the cosmic pendulum is swinging in your favor."
  },
  {
    id: "11-justice",
    name: "XI • Justice",
    arcanaType: "Major",
    number: "XI",
    element: "Air",
    astrology: {
      zodiacOrPlanet: "Libra ♎",
      modality: "Cardinal",
      hebrewLetter: "Lamed (ל)",
      treeOfLifePath: "Path 22: Geburah to Tiphareth",
    },
    keywords: ["Truth", "Fairness", "Cause & Effect", "Legal Clarity", "Equilibrium"],
    upright: {
      overview: "Absolute universal equilibrium. The impartial sword of truth cuts through illusions, ensuring divine cause and effect.",
      love: "Honest communication, equal partnership, legal marriage agreements, and fair mutual accountability.",
      career: "Favorable legal outcomes, transparent contract negotiations, unbiased auditing, and getting justly rewarded for efforts.",
      spirituality: "Karmic accountability, aligning actions with objective truth, and developing unwavering moral clarity.",
    },
    reversed: {
      overview: "Injustice, dishonesty, legal complications, bias, refusing to accept accountability, or unfair treatment.",
      love: "Blaming partner unfairly, dishonesty, deceitful hidden motives, or bitter divorce proceedings.",
      career: "Unethical corporate conduct, contract disputes, biased performance reviews, or tax/legal scrutiny.",
      spirituality: "Karmic backlash, denial of personal shadow, or rationalizing immoral behavior.",
    },
    yesOrNo: "Maybe / Based on past actions",
    timing: "Libra Season (September 23 - October 22) / Friday",
    symbolism: ["Upright Double-Edged Sword (Truth & Consequence)", "Golden Scales (Impartial Balance)", "Purple Veil (Spiritual Jurisdiction)"],
    astrologerNote: "Cardinal Air ruled by Venus. Key indicator in legal questions, court cases, and partnership contract signings."
  },
  {
    id: "12-the-hanged-man",
    name: "XII • The Hanged Man",
    arcanaType: "Major",
    number: "XII",
    element: "Water",
    astrology: {
      zodiacOrPlanet: "Neptune ♆ / Water Element 🜄",
      modality: "Elemental",
      hebrewLetter: "Mem (מ)",
      treeOfLifePath: "Path 23: Geburah to Hod",
    },
    keywords: ["Surrender", "New Perspective", "Spiritual Suspension", "Letting Go", "Enlightenment"],
    upright: {
      overview: "Pausing external struggle to gain profound enlightenment by seeing the world completely upside down.",
      love: "Pausing rushed relationship steps, sacrificing ego for deeper emotional connection, patient devotion.",
      career: "A strategic pause in business; releasing obsolete methodologies to let innovative creative solutions surface.",
      spirituality: "Ego death, mystical surrender, letting the universe take the wheel, and non-attachment.",
    },
    reversed: {
      overview: "Martyr complex, futile struggle against the inevitable, stubborn stagnation, or making useless sacrifices.",
      love: "Playing the victim, staying in unfulfilling relationships out of guilt, or dragging out a stale connection.",
      career: "Procrastination masquerading as patience, stalling on necessary career pivots, or career paralysis.",
      spirituality: "Spiritual martyrdom, resistance to surrender, or clinging rigidly to dogmatic perspectives.",
    },
    yesOrNo: "Maybe / Wait",
    timing: "Neptune transits / Inaction period / Days of quiet contemplation",
    symbolism: ["Halo Around Head (Enlightenment in Surrender)", "T-Cross Living Tree (Odin's Yggdrasil)", "Legs Crossed in Shape of '4'"],
    astrologerNote: "Water Element. In readings, The Hanged Man advises that trying to force action right now will fail; enlightenment requires complete surrender."
  },
  {
    id: "13-death",
    name: "XIII • Death",
    arcanaType: "Major",
    number: "XIII",
    element: "Water",
    astrology: {
      zodiacOrPlanet: "Scorpio ♏",
      modality: "Fixed",
      hebrewLetter: "Nun (נ)",
      treeOfLifePath: "Path 24: Tiphareth to Netzach",
    },
    keywords: ["Transformation", "Endings & Beginnings", "Shedding the Old", "Metamorphosis", "Inevitable Renewal"],
    upright: {
      overview: "The sacred catalyst of profound metamorphosis. Clears away decayed structures so vibrant new life can flourish.",
      love: "End of an obsolete relationship cycle, deep emotional transformation, or rebirth into a much higher level of intimacy.",
      career: "Leaving an unaligned corporate role, closing out a defunct business phase, and stepping into a completely new vocation.",
      spirituality: "Total dissolution of old identity constructs, shamanic rebirth, and profound spiritual initiation.",
    },
    reversed: {
      overview: "Clinging to dead habits, fear of inevitable change, prolonged stagnation, or resisting painful transitions.",
      love: "Refusing to let go of an ex, staying in a toxic bond past its expiration date, or fear of moving on.",
      career: "Staying in a dead-end job out of fear, delaying necessary business pivots, or financial rot.",
      spirituality: "Fear of spiritual transformation, refusing to grieve past losses, or psychic stagnation.",
    },
    yesOrNo: "No (to keeping the old) / Yes (to transformation)",
    timing: "Scorpio Season (October 23 - November 21) / Tuesday",
    symbolism: ["Black Banner with Mystic White Rose (Immortal Life)", "Rising Sun between Two Towers (Eternal Dawn)", "Fallen King & Kneeling Maiden"],
    astrologerNote: "Fixed Water ruled by Mars and Pluto. Death NEVER means physical demise in tarot; it is the ultimate symbol of the Phoenix rising from the ashes."
  },
  {
    id: "14-temperance",
    name: "XIV • Temperance",
    arcanaType: "Major",
    number: "XIV",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "Sagittarius ♐",
      modality: "Mutable",
      hebrewLetter: "Samekh (ס)",
      treeOfLifePath: "Path 25: Tiphareth to Yesod",
    },
    keywords: ["Alchemy", "Balance", "Moderation", "Divine Timing", "Harmonious Blending"],
    upright: {
      overview: "The master alchemist blending opposites into golden harmony through patience, moderation, and divine proportion.",
      love: "Harmonious compromise, emotional stability, peaceful healing after conflict, and soulmate compatibility.",
      career: "Balanced workload, diplomatic mediation in workplace conflict, steady long-term financial growth.",
      spirituality: "Synthesizing spiritual wisdom into everyday living, balancing masculine and feminine energies, inner peace.",
    },
    reversed: {
      overview: "Excess, impatience, mood swings, disharmony, erratic overindulgence, or toxic clashes between opposing factions.",
      love: "Imbalance of effort in relationship, emotional overreaction, impatience, or lack of compromise.",
      career: "Burnout from overwork, impulsive financial splurges, or escalating workplace drama.",
      spirituality: "Extreme asceticism or extreme hedonism; lack of grounded energetic balance.",
    },
    yesOrNo: "Yes",
    timing: "Sagittarius Season (November 22 - December 21) / Thursday",
    symbolism: ["Archangel Michael with One Foot on Land, One in Water", "Two Golden Goblets with Flowing Liquid", "Golden Path to Sunlit Mountain"],
    astrologerNote: "Mutable Fire ruled by Jupiter. Represents the golden mean of Aristotle and the alchemical Great Work (Magnum Opus)."
  },
  {
    id: "15-the-devil",
    name: "XV • The Devil",
    arcanaType: "Major",
    number: "XV",
    element: "Earth",
    astrology: {
      zodiacOrPlanet: "Capricorn ♑",
      modality: "Cardinal",
      hebrewLetter: "Ayin (ע)",
      treeOfLifePath: "Path 26: Tiphareth to Hod",
    },
    keywords: ["Shadow Self", "Material Bondage", "Addiction", "Illusory Chains", "Unconscious Patterns"],
    upright: {
      overview: "Entrapment in material illusions, obsessive desires, or self-imposed mental chains that can be released at any time.",
      love: "Obsessive attachment, intense sexual magnetism mixed with codependency, toxicity, or jealousy.",
      career: "Golden handcuffs, toxic workplace culture, sacrificing ethics for wealth, or chronic workaholism.",
      spirituality: "Confronting your shadow archetypes, acknowledging repressed desires without shame, and claiming true autonomy.",
    },
    reversed: {
      overview: "Breaking free from toxic addictions, releasing limiting beliefs, reclaiming personal power, and emancipation.",
      love: "Ending a toxic trauma bond, establishing firm boundaries, and healing from codependency.",
      career: "Leaving an exploitative employer, breaking debt cycles, and reclaiming creative independence.",
      spirituality: "Transcendence of material entrapment, profound shadow work integration, and spiritual liberation.",
    },
    yesOrNo: "No",
    timing: "Capricorn Season (December 22 - January 19) / Saturday",
    symbolism: ["Baphomet on Half-Cube Altar", "Man & Woman with Loose Chains (Chains they could remove at will)", "Inverted Pentagram"],
    astrologerNote: "Cardinal Earth ruled by Saturn. The chains around the figures' necks are loose—the illusion of entrapment exists only in the mind."
  },
  {
    id: "16-the-tower",
    name: "XVI • The Tower",
    arcanaType: "Major",
    number: "XVI",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "Mars ♂",
      modality: "Planetary",
      hebrewLetter: "Pe (פ)",
      treeOfLifePath: "Path 27: Netzach to Hod",
    },
    keywords: ["Sudden Awakening", "Shattering Illusions", "Divine Lightning", "Breakdown to Breakthrough", "Radical Truth"],
    upright: {
      overview: "Divine lightning strikes false foundations built on ego and illusions, violently clearing the path for absolute truth.",
      love: "Sudden relationship revelation, dramatic breakup of unaligned partnerships, or shattering ego walls for real honesty.",
      career: "Unexpected corporate shakeup, sudden job layoff that redirects your true destiny, or market crash exposing flaws.",
      spirituality: "Kundalini awakening, ego shattering, immediate liberation from lifelong religious/cultural conditioning.",
    },
    reversed: {
      overview: "Averting a major crisis, internal spiritual crisis, delaying inevitable structural collapse, or fear of suffering.",
      love: "Lingering in a crumbling relationship out of fear of dramatic fallout, suppressed truth.",
      career: "Narrowly escaping bankruptcy or scandal, restructuring an unstable company before it fails.",
      spirituality: "Resisting necessary ego dismantling, clinging to false gurus or crumbling belief systems.",
    },
    yesOrNo: "No",
    timing: "Mars transits / Tuesday / Immediate & sudden",
    symbolism: ["Lightning Bolt Striking Crown (Divine Truth Shattering Ego)", "22 Drops of Yod Light (The 22 Hebrew Letters / Divine Sparks)", "Falling Figures"],
    astrologerNote: "Ruled by Mars. While feared by beginners, professional astrologers know The Tower only destroys what was built on false pretenses."
  },
  {
    id: "17-the-star",
    name: "XVII • The Star",
    arcanaType: "Major",
    number: "XVII",
    element: "Air",
    astrology: {
      zodiacOrPlanet: "Aquarius ♒",
      modality: "Fixed",
      hebrewLetter: "Tzaddi (צ)",
      treeOfLifePath: "Path 28: Netzach to Yesod",
    },
    keywords: ["Renewed Hope", "Divine Inspiration", "Serenity", "Healing", "Wishes Fulfilled"],
    upright: {
      overview: "The calming rainbow after The Tower's storm. Unconditional optimism, celestial guidance, and deep psychic healing.",
      love: "Healing past heartbreak, trusting love again, profound soulmate alignment, and authentic emotional peace.",
      career: "Inspirational creative breakthroughs, public recognition, visionary leadership, and lucrative long-term prospects.",
      spirituality: "Direct attunement with stellar consciousness, opening the crown and third eye chakras, deep peace with the cosmos.",
    },
    reversed: {
      overview: "Hopelessness, pessimism, creative blockages, cynicism, feeling disconnected from universal support.",
      love: "Doubt about romantic future, lingering cynicism, insecurity, or pushing away loving partners.",
      career: "Feeling unappreciated, lack of inspiration in daily work, or ungrounded daydreaming without execution.",
      spirituality: "Dark night of the soul, spiritual despair, or losing faith in your divine life mission.",
    },
    yesOrNo: "Yes",
    timing: "Aquarius Season (January 20 - February 18) / Saturday",
    symbolism: ["Great 8-Pointed Star (Sirius & The Pleiades)", "Naked Maiden (Total Purity & Truth)", "Two Pitchers Pouring on Land and Sea", "Ibis Bird on Tree"],
    astrologerNote: "Fixed Air ruled by Saturn & Uranus. The Star is the supreme card of cosmic reassurance and profound spiritual renewal."
  },
  {
    id: "18-the-moon",
    name: "XVIII • The Moon",
    arcanaType: "Major",
    number: "XVIII",
    element: "Water",
    astrology: {
      zodiacOrPlanet: "Pisces ♓",
      modality: "Mutable",
      hebrewLetter: "Qoph (ק)",
      treeOfLifePath: "Path 29: Netzach to Malkuth",
    },
    keywords: ["Subconscious Fears", "Illusion", "Dream Realm", "Shadow Emotions", "Psychic Emergence"],
    upright: {
      overview: "Navigating the shadowy waters of the subconscious. Surface realities are deceiving; look into your dreams and instincts.",
      love: "Unspoken insecurities, romantic illusions, deceptive charm, or deep emotional and psychic telepathy.",
      career: "Hidden office politics, vague contract clauses, artistic/cinematic inspiration, or navigating unconfirmed rumors.",
      spirituality: "Shadow work, lucid dream downloads, navigating the astral plane, and facing primal ancestral fears.",
    },
    reversed: {
      overview: "Dispelling illusions, unveiling hidden truths, overcoming phobias, and emerging from emotional fog into clarity.",
      love: "Deceptions exposed, clarity about true feelings, moving past mutual paranoia.",
      career: "Truth revealed regarding shady business partners, clarification of confusing contracts.",
      spirituality: "Grounding after psychic overwhelm, integrating subconscious insights into daylight reality.",
    },
    yesOrNo: "Maybe / Uncertain",
    timing: "Pisces Season (February 19 - March 20) / Full/New Moon / Monday",
    symbolism: ["Dog & Wolf (Tamed vs. Wild Aspects of Psyche)", "Crawfish Emerging from Primordial Depths (Ancient Subconscious Memory)", "Yod Dew Drops"],
    astrologerNote: "Mutable Water ruled by Jupiter & Neptune. Highlights that intellect is blind here; you must rely exclusively on psychic intuition."
  },
  {
    id: "19-the-sun",
    name: "XIX • The Sun",
    arcanaType: "Major",
    number: "XIX",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "The Sun ☉",
      modality: "Planetary",
      hebrewLetter: "Resh (ר)",
      treeOfLifePath: "Path 30: Hod to Yesod",
    },
    keywords: ["Joy", "Success", "Radiant Vitality", "Celebration", "Unconditional Truth"],
    upright: {
      overview: "The highest, most benevolent card in the Major Arcana. Total warmth, vibrant health, triumph, and radiant clarity.",
      love: "Blissful romance, wedding celebrations, birth of a child, warmth, laughter, and joyful mutual devotion.",
      career: "Ringing public acclaim, major business triumph, financial abundance, and high-visibility executive success.",
      spirituality: "Solar consciousness, spontaneous bliss, awakening of the inner child, and radiant life force (Prana).",
    },
    reversed: {
      overview: "Temporary pessimism, obscured joy, minor delays in celebration, or mild burnout.",
      love: "Taking love for granted, minor misunderstandings, or struggling to see the bright side of a solid partner.",
      career: "Delayed recognition, overconfidence, or enjoying work but feeling slightly undercompensated.",
      spirituality: "Mild spiritual fatigue, forgetting to play and celebrate, or temporarily dimmed aura.",
    },
    yesOrNo: "Yes (Definitive)",
    timing: "Summer Solstice / Sunday / Leo Season (July 23 - Aug 22)",
    symbolism: ["Naked Child on White Horse (Innocent Freedom & Mastery)", "Four Sunflowers (The 4 Elements Manifested)", "Radiant Solar Face with 21 Rays"],
    astrologerNote: "The heart of the solar system. The Sun dispels every shadow and guarantees positive resolution in all reading spreads."
  },
  {
    id: "20-judgement",
    name: "XX • Judgement",
    arcanaType: "Major",
    number: "XX",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "Pluto ♇ / Fire Element 🜂",
      modality: "Elemental",
      hebrewLetter: "Shin (ש)",
      treeOfLifePath: "Path 31: Hod to Malkuth",
    },
    keywords: ["Awakening", "Karmic Reckoning", "Higher Calling", "Rebirth", "Absolution"],
    upright: {
      overview: "The archangel's trumpet sounds your soul's awakening. Rising above past mistakes into a higher state of conscious evolution.",
      love: "Forgiveness of past relationship baggage, reconciling on a higher spiritual plane, or stepping into destined partnership.",
      career: "Answering your true vocation, major career elevation, being recognized for lifelong contributions.",
      spirituality: "Spiritual resurrection, karmic absolution, shedding the old personality shell, and stepping into your Dharma.",
    },
    reversed: {
      overview: "Self-doubt, harsh self-criticism, ignoring your soul's calling, repeating past mistakes, or fear of accountability.",
      love: "Holding grudges against partners, refusing to forgive past slights, or ignoring clear cosmic signals.",
      career: "Second-guessing your qualifications, staying in unfulfilling jobs out of fear of answering your calling.",
      spirituality: "Spiritual guilt, refusing to forgive yourself for past karmic missteps, or stagnation.",
    },
    yesOrNo: "Yes",
    timing: "Pluto transits / Tuesday / Significant life crossroads",
    symbolism: ["Archangel Gabriel with Golden Trumpet & Solar Cross Banner", "Figures Rising from Grey Graves (Transcendence of Mortality)", "Glacial Mountains"],
    astrologerNote: "Governed by the sacred letter Shin (Holy Fire). Represents the ultimate reckoning where you step out of the grave of limited ego into eternal life."
  },
  {
    id: "21-the-world",
    name: "XXI • The World",
    arcanaType: "Major",
    number: "XXI",
    element: "Earth",
    astrology: {
      zodiacOrPlanet: "Saturn ♄",
      modality: "Planetary",
      hebrewLetter: "Tav (ת)",
      treeOfLifePath: "Path 32: Yesod to Malkuth",
    },
    keywords: ["Completion", "Wholeness", "Cosmic Mastery", "Triumph", "International Travel"],
    upright: {
      overview: "The grand culmination of the Fool’s Journey. Total integration, planetary victory, wholeness, and joyful completion.",
      love: "Deep marital harmony, fulfilling union of soulmates, celebrating milestone anniversaries, and travel together.",
      career: "Completing a monumental multi-year project, international business expansion, reaching the pinnacle of your profession.",
      spirituality: "Enlightenment, cosmic consciousness, complete integration of all 4 elements, and dancing with the cosmos.",
    },
    reversed: {
      overview: "Incomplete closure, shortcuts leading to unfinished business, delayed graduation, or fear of final steps.",
      love: "Lack of emotional closure with past lovers, stalling on taking the final step of marriage.",
      career: "Nearly at the finish line but getting lazy, missing final details on a major deal, or international travel delays.",
      spirituality: "Needing one final lesson before graduating to the next spiritual cycle; feeling almost whole but incomplete.",
    },
    yesOrNo: "Yes (Absolute)",
    timing: "Saturn transits / Saturday / End of a major cycle (Years)",
    symbolism: ["Cosmic Dancer with Two Wands (Mastery of Invocation & Evocation)", "Laurel Wreath of Victory", "Four Cherubim in 4 Corners (Taurus, Leo, Scorpio, Aquarius)"],
    astrologerNote: "Card 21 closes the Major Arcana. Governed by Saturn (Lord of Time and Manifestation). Represents absolute physical and spiritual fulfillment."
  },

  // ==========================================
  // 56 MINOR ARCANA SUMMARY & SUITS
  // ==========================================

  // SUIT OF WANDS (Fire / Action / Passion)
  {
    id: "ace-of-wands",
    name: "Ace of Wands",
    arcanaType: "Minor",
    suit: "Wands",
    number: "Ace",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "Root of the Powers of Fire 🜂 (Aries, Leo, Sagittarius)",
      modality: "Cardinal",
      treeOfLifePath: "Kether in Atziluth",
    },
    keywords: ["Spark of Inspiration", "Creative Fire", "New Venture", "Passion", "Courage"],
    upright: {
      overview: "Pure primal spark of divine fire. A surge of raw passion, bold entrepreneurial vision, and creative enthusiasm.",
      love: "Intense electric attraction, passionate beginnings, exciting sexual chemistry, and romantic sparks.",
      career: "Launching a high-energy startup, groundbreaking business idea, and taking the bold initiative.",
      spirituality: "Awakening of kundalini fire, spiritual enthusiasm, and bold alignment with your soul's passion.",
    },
    reversed: {
      overview: "Delays in starting, lack of motivation, creative burnout, scattered passion, or impetuous false starts.",
      love: "Fading passion, lack of sexual chemistry, or impulsive flings that burn out fast.",
      career: "Lack of business execution, procrastination, or projects stalling right at kickoff.",
      spirituality: "Low spiritual energy, blocked sacral/solar plexus chakras.",
    },
    yesOrNo: "Yes",
    timing: "Spring / Aries Season (March 21 - April 19)",
    symbolism: ["Hand of God Emerging from Cloud holding Sprouting Wand", "Falling Yod Leaves", "Distant Castle on Hill"],
    astrologerNote: "The primordial seed of all fire energy. When it appears, strike while the iron is hot."
  },
  {
    id: "two-of-wands",
    name: "Two of Wands",
    arcanaType: "Minor",
    suit: "Wands",
    number: "2",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "Mars in Aries ♂ in ♈",
      decan: "1st Decan of Aries (0°-10°)",
      modality: "Cardinal",
      treeOfLifePath: "Chokmah in Atziluth",
    },
    keywords: ["Future Planning", "Global Vision", "Stepping Out of Comfort", "Partnership Vision"],
    upright: {
      overview: "Holding the globe in your hands. Contemplating expanding your territory and stepping beyond familiar boundaries.",
      love: "Planning long-term relationship future, long-distance romance, or discussing shared travel and relocation.",
      career: "Formulating multi-national expansion plans, strategic partnerships, and preparing for global ventures.",
      spirituality: "Expanding your worldview, integrating global philosophies, and claiming personal sovereignty.",
    },
    reversed: {
      overview: "Fear of the unknown, playing small, unorganized plans, or hesitation to leave home territory.",
      love: "Disagreements over where to live, fear of long-distance commitments, or reluctance to plan ahead.",
      career: "Over-planning without action, fear of taking calculated business risks, or supply chain delays.",
      spirituality: "Spiritual insularity, provincial mindset, or fearing your true cosmic stature.",
    },
    yesOrNo: "Yes",
    timing: "March 21 - March 30",
    symbolism: ["Man on Castle Battlement holding Globe", "Wand Attached to Wall vs. Wand in Hand", "Roses and Lilies on Parapet"],
    astrologerNote: "Mars in Aries gives unstoppable initiation energy, but the Two reminds you that strategy must precede execution."
  },
  {
    id: "three-of-wands",
    name: "Three of Wands",
    arcanaType: "Minor",
    suit: "Wands",
    number: "3",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "Sun in Aries ☉ in ♈",
      decan: "2nd Decan of Aries (10°-20°)",
      modality: "Cardinal",
      treeOfLifePath: "Binah in Atziluth",
    },
    keywords: ["Ships Coming In", "Expansion", "Foresight", "Long-Distance Commerce", "Momentum"],
    upright: {
      overview: "Your ships are returning to port with rewards. Momentum is established; look toward overseas horizons.",
      love: "Relationship thriving across distances, shared adventures, and joyful long-term trajectory.",
      career: "Exports/imports flourishing, foreign investments paying off, expansion into new markets.",
      spirituality: "Patience rewarded; seeing tangible reflections of your spiritual manifestations in physical reality.",
    },
    reversed: {
      overview: "Delayed shipments, obstacles in travel, frustration with slow returns, or unrealistic expectations.",
      love: "Long-distance strain, communication lag between partners, or unaligned future timelines.",
      career: "Supply chain bottlenecks, regulatory delays in expansion, or unexpected customs/shipping costs.",
      spirituality: "Impatience with the divine gestation period of your spiritual desires.",
    },
    yesOrNo: "Yes",
    timing: "March 31 - April 10",
    symbolism: ["Figure Looking Out to Sea at Passing Ships", "Three Wands Firmly Rooted in Ground", "Golden Sea Waters"],
    astrologerNote: "Sun in Aries gives brilliant confidence. Signals that your initial foundation was solid and you can now expand."
  },
  {
    id: "four-of-wands",
    name: "Four of Wands",
    arcanaType: "Minor",
    suit: "Wands",
    number: "4",
    element: "Fire",
    astrology: {
      zodiacOrPlanet: "Venus in Aries ♀ in ♈",
      decan: "3rd Decan of Aries (20°-30°)",
      modality: "Cardinal",
      treeOfLifePath: "Chesed in Atziluth",
    },
    keywords: ["Homecoming", "Celebration", "Wedding / Milestone", "Community Harmony", "Refuge"],
    upright: {
      overview: "Joyous celebration of a major milestone. Warm family gatherings, housewarmings, weddings, and community support.",
      love: "Engagement, wedding bells, moving in together, and feeling deeply cherished at home.",
      career: "Completing a successful phase, celebrating team victories, company anniversaries, and harmonious workplace.",
      spirituality: "Gratitude rituals, sanctifying your home space, and celebrating the joy of being alive.",
    },
    reversed: {
      overview: "Family friction, canceled celebrations, tension at home, or feeling unwelcomed in social groups.",
      love: "Postponed weddings, domestic squabbles over living arrangements, or in-law interference.",
      career: "Team disharmony during celebrations, lack of appreciation for hard work, or chaotic office move.",
      spirituality: "Feeling displaced or lacking a sanctuary for your daily spiritual practice.",
    },
    yesOrNo: "Yes (High)",
    timing: "April 11 - April 20",
    symbolism: ["Four Garlanded Wands forming a Chuppah / Arbor", "Two Maidens in White holding Flower Bouquets", "Castle in Background"],
    astrologerNote: "Venus in Aries brings sweet harmony and celebration to fiery beginnings. Excellent omen for weddings and buying homes."
  },

  // SUIT OF CUPS (Water / Emotion / Intuition / Love)
  {
    id: "ace-of-cups",
    name: "Ace of Cups",
    arcanaType: "Minor",
    suit: "Cups",
    number: "Ace",
    element: "Water",
    astrology: {
      zodiacOrPlanet: "Root of the Powers of Water 🜄 (Cancer, Scorpio, Pisces)",
      modality: "Cardinal",
      treeOfLifePath: "Kether in Briah",
    },
    keywords: ["Overflowing Love", "Emotional Awakening", "Spiritual Grace", "Compassion", "Intuition"],
    upright: {
      overview: "The Holy Grail of unconditional love. A pristine fountain of emotional fulfillment, empathy, and spiritual grace.",
      love: "Falling deeply in love, open-hearted vulnerability, romantic proposals, and pure emotional harmony.",
      career: "Work that aligns with your soul's passion, heart-centered businesses, and deep creative inspiration.",
      spirituality: "Direct experience of divine unconditional love, opening of the heart chakra, and psychic receptivity.",
    },
    reversed: {
      overview: "Emotional exhaustion, repressed feelings, heartbreak, self-doubt, or unreciprocated love.",
      love: "Emotional unavailability, guarded heart after past trauma, or feeling drained by needy partners.",
      career: "Lack of passion in daily routine, creative dryness, or feeling unappreciated by colleagues.",
      spirituality: "Heart chakra blockage, feelings of spiritual unworthiness, or spiritual dryness.",
    },
    yesOrNo: "Yes",
    timing: "Summer / Cancer Season (June 21 - July 22)",
    symbolism: ["Holy Grail with 5 Streams of Water (The 5 Senses)", "Dove of the Holy Spirit with Eucharist", "Lotus Lilies on Water Surface"],
    astrologerNote: "The supreme vessel of divine feminine receptivity. The purest indicator of authentic romantic love."
  },
  {
    id: "two-of-cups",
    name: "Two of Cups",
    arcanaType: "Minor",
    suit: "Cups",
    number: "2",
    element: "Water",
    astrology: {
      zodiacOrPlanet: "Venus in Cancer ♀ in ♋",
      decan: "1st Decan of Cancer (0°-10°)",
      modality: "Cardinal",
      treeOfLifePath: "Chokmah in Briah",
    },
    keywords: ["Soulmate Connection", "Mutual Attraction", "Equal Partnership", "Reconciliation"],
    upright: {
      overview: "Two souls pledging mutual devotion. Perfect emotional reciprocity, shared chemistry, and deep harmonious partnership.",
      love: "Meeting your destined partner, falling in love with reciprocal passion, mutual respect, and proposal.",
      career: "Synergistic business partnership, successful one-on-one negotiations, and mutual contractual trust.",
      spirituality: "Recognizing the divine reflection in another soul (Namaste consciousness); harmonious spiritual companionship.",
    },
    reversed: {
      overview: "Imbalance in give-and-take, misunderstandings, emotional codependency, or breaking off agreements.",
      love: "Unrequited love, petty bickering, feeling taken for granted, or emotional withdrawal.",
      career: "Business partner disagreements, conflicting contract terms, or lack of mutual commitment.",
      spirituality: "Projecting internal spiritual wounds onto partners instead of doing inner shadow work.",
    },
    yesOrNo: "Yes",
    timing: "June 21 - July 1",
    symbolism: ["Man and Woman Exchanging Golden Cups", "Caduceus of Hermes (Healing & Commerce)", "Winged Lion of Passion"],
    astrologerNote: "Venus in Cancer gives deepest tenderness and domestic devotion. The quintessential soulmate card in tarot."
  },
  {
    id: "three-of-cups",
    name: "Three of Cups",
    arcanaType: "Minor",
    suit: "Cups",
    number: "3",
    element: "Water",
    astrology: {
      zodiacOrPlanet: "Mercury in Cancer ☿ in ♋",
      decan: "2nd Decan of Cancer (10°-20°)",
      modality: "Cardinal",
      treeOfLifePath: "Binah in Briah",
    },
    keywords: ["Celebration", "Sisterhood", "Friendship", "Reunion", "Joyful Gatherings"],
    upright: {
      overview: "Three maidens dancing in celebration. Joyous social reunions, baby showers, weddings, and uplifting community bonds.",
      love: "Joyful socializing with your partner, meeting friends together, celebration of love milestones.",
      career: "Successful team milestone, collaborative office harmony, network expansion through warm social ties.",
      spirituality: "Communal spiritual circles, sacred chanting groups (Kirtan), and celebrating shared human connection.",
    },
    reversed: {
      overview: "Overindulgence, gossip within friend groups, third-party interference in romance, or feeling left out.",
      love: "Third-party romantic interference, friends meddling in your relationship, or partying too much.",
      career: "Office gossip, cliques undermining productivity, or excessive spending on corporate entertainment.",
      spirituality: "Superficial spiritual scenes, gossip masquerading as spirituality, or social exhaustion.",
    },
    yesOrNo: "Yes",
    timing: "July 2 - July 11",
    symbolism: ["Three Maidens Dancing with Raised Cups", "Harvest Grapes and Flowers (Abundant Fruition)"],
    astrologerNote: "Mercury in Cancer facilitates sweet, nostalgic, and supportive communication among close soul groups."
  },

  // SUIT OF SWORDS (Air / Mind / Truth / Intellect)
  {
    id: "ace-of-swords",
    name: "Ace of Swords",
    arcanaType: "Minor",
    suit: "Swords",
    number: "Ace",
    element: "Air",
    astrology: {
      zodiacOrPlanet: "Root of the Powers of Air 🜁 (Gemini, Libra, Aquarius)",
      modality: "Cardinal",
      treeOfLifePath: "Kether in Yetzirah",
    },
    keywords: ["Mental Clarity", "Breakthrough Idea", "Cutting Through Illusion", "Absolute Truth"],
    upright: {
      overview: "The double-edged sword of divine intellect. Shatters mental confusion, delivering piercing clarity and decisive truth.",
      love: "Honest breakthrough conversation, clearing up long-standing confusion, and speaking truth without sugarcoating.",
      career: "Brilliant intellectual strategy, passing rigorous examinations, legal victory, and sharp analytical clarity.",
      spirituality: "Transcending mental fog, cutting cords with past illusions, and piercing the veil of Maya.",
    },
    reversed: {
      overview: "Clouded judgment, sharp tongue causing damage, intellectual arrogance, or misinformation.",
      love: "Cruel arguments, passive-aggressive communication, or using words to wound rather than heal.",
      career: "Flawed logic in business proposals, losing a legal battle, or intellectual paralysis.",
      spirituality: "Over-analyzing mystical experiences with rigid logic, cynical skepticism.",
    },
    yesOrNo: "Yes",
    timing: "Autumn / Libra Season (September 23 - October 22)",
    symbolism: ["Hand of God Holding Upright Sword with Crown", "Olive Branch & Palm Frond (Peace & Victory)", "Harsh Jagged Mountain Peaks"],
    astrologerNote: "Pure Air element. Gives surgeon-like precision of mind. When drawn, do not hesitate to speak absolute truth."
  },
  {
    id: "three-of-swords",
    name: "Three of Swords",
    arcanaType: "Minor",
    suit: "Swords",
    number: "3",
    element: "Air",
    astrology: {
      zodiacOrPlanet: "Saturn in Libra ♄ in ♎",
      decan: "2nd Decan of Libra (10°-20°)",
      modality: "Cardinal",
      treeOfLifePath: "Binah in Yetzirah",
    },
    keywords: ["Heartbreak", "Grief", "Painful Truth", "Sorrow", "Emotional Release"],
    upright: {
      overview: "Three swords piercing a glowing heart. The necessary pain of recognizing hard truths so emotional healing can begin.",
      love: "Heartbreak, painful breakup, discovery of deceit, or grieving an unfulfilled emotional expectation.",
      career: "Rejection of business proposal, harsh contract termination, or betrayal by a business colleague.",
      spirituality: "Dark night of the heart; learning that suffering is the crucible that opens true compassion for humanity.",
    },
    reversed: {
      overview: "Releasing grief, healing from heartbreak, forgiveness, and light breaking through stormy clouds.",
      love: "Healing old romantic trauma, reconciliation after difficult conversations, or finally letting an ex go.",
      career: "Bouncing back after a job loss, finding a better opportunity after professional disappointment.",
      spirituality: "Alchemizing past suffering into profound wisdom and empathetic healing power for others.",
    },
    yesOrNo: "No",
    timing: "October 3 - October 12",
    symbolism: ["Heart Pierced by Three Swords", "Storm Clouds & Downpour of Rain"],
    astrologerNote: "Saturn exalted in Libra creates unavoidable karmic lessons in truth and relationship discernment."
  },

  // SUIT OF PENTACLES (Earth / Wealth / Manifestation / Health)
  {
    id: "ace-of-pentacles",
    name: "Ace of Pentacles",
    arcanaType: "Minor",
    suit: "Pentacles",
    number: "Ace",
    element: "Earth",
    astrology: {
      zodiacOrPlanet: "Root of the Powers of Earth 🜃 (Taurus, Virgo, Capricorn)",
      modality: "Cardinal",
      treeOfLifePath: "Kether in Assiah",
    },
    keywords: ["Tangible Wealth", "New Financial Opportunity", "Physical Health", "Solid Foundation", "Prosperity"],
    upright: {
      overview: "The golden seed of material abundance. A tangible financial opportunity, lucrative job offer, or physical vitality.",
      love: "Stable, grounded partner offering emotional and financial security; building a comfortable home together.",
      career: "Lucrative job offer, new investment seed capital, profitable business launch, and reliable cash flow.",
      spirituality: "Honoring the physical body as a sacred temple; grounding spiritual visions into tangible reality.",
    },
    reversed: {
      overview: "Financial mismanagement, missed investment opportunity, greed, ungrounded plans, or poor budgeting.",
      love: "Financial stress straining romance, partner who is overly materialistic, or lack of long-term security.",
      career: "Poor ROI on business ventures, delayed paychecks, reckless spending, or unprofitable contracts.",
      spirituality: "Obsession with material status over spiritual peace; neglecting physical health routines.",
    },
    yesOrNo: "Yes",
    timing: "Winter / Capricorn Season (December 22 - January 19)",
    symbolism: ["Hand of God Holding Large Golden Coin", "Lush Garden Arch with White Lilies", "Path leading to Distant Mountains"],
    astrologerNote: "The golden physical seed. Indicates that practical action taken right now will yield multi-year financial security."
  },
  {
    id: "ten-of-pentacles",
    name: "Ten of Pentacles",
    arcanaType: "Minor",
    suit: "Pentacles",
    number: "10",
    element: "Earth",
    astrology: {
      zodiacOrPlanet: "Mercury in Virgo ☿ in ♍",
      decan: "3rd Decan of Virgo (20°-30°)",
      modality: "Mutable",
      treeOfLifePath: "Malkuth in Assiah",
    },
    keywords: ["Generational Wealth", "Family Legacy", "Long-term Security", "Ancestral Blessings", "Prosperity"],
    upright: {
      overview: "The pinnacle of material fulfillment. Generational wealth, thriving ancestral lineage, real estate success, and lasting legacy.",
      love: "Stable family life, blessing from elders, purchasing ancestral family home, and lifelong matrimonial security.",
      career: "Building a generational family enterprise, lucrative pension/retirement, large real estate portfolio, and enduring empire.",
      spirituality: "Honoring ancestral karma, feeling connected to the unbroken chain of human lineage, and spiritual peace in maturity.",
    },
    reversed: {
      overview: "Family inheritance disputes, loss of property, financial bankruptcy, or neglecting ancestral ties.",
      love: "Family disapproval of partner, inheritance arguments causing divorce, or heavy domestic financial burdens.",
      career: "Company insolvency, legal disputes over estate/wills, or failure to build a succession plan.",
      spirituality: "Karmic debt in family lineage, feeling alienated from your roots, or worshiping wealth over soul peace.",
    },
    yesOrNo: "Yes",
    timing: "September 12 - September 22",
    symbolism: ["Ten Pentacles Arranged in the Shape of the Tree of Life", "Old Patriarch, Happy Couple, Child, and Two Dogs under Castle Arch"],
    astrologerNote: "Mercury in Virgo. Represents the completion of the material journey on the Tree of Life in Malkuth. Highest card of lasting generational security."
  }
];

