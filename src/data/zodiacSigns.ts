export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  element: string;
  dates: string;
  ruler: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    symbol: "♈",
    element: "Fire",
    dates: "Mar 21 - Apr 19",
    ruler: "Mars",
  },
  {
    id: "taurus",
    name: "Taurus",
    symbol: "♉",
    element: "Earth",
    dates: "Apr 20 - May 20",
    ruler: "Venus",
  },
  {
    id: "gemini",
    name: "Gemini",
    symbol: "♊",
    element: "Air",
    dates: "May 21 - Jun 20",
    ruler: "Mercury",
  },
  {
    id: "cancer",
    name: "Cancer",
    symbol: "♋",
    element: "Water",
    dates: "Jun 21 - Jul 22",
    ruler: "Moon",
  },
  {
    id: "leo",
    name: "Leo",
    symbol: "♌",
    element: "Fire",
    dates: "Jul 23 - Aug 22",
    ruler: "Sun",
  },
  {
    id: "virgo",
    name: "Virgo",
    symbol: "♍",
    element: "Earth",
    dates: "Aug 23 - Sep 22",
    ruler: "Mercury",
  },
  {
    id: "libra",
    name: "Libra",
    symbol: "♎",
    element: "Air",
    dates: "Sep 23 - Oct 22",
    ruler: "Venus",
  },
  {
    id: "scorpio",
    name: "Scorpio",
    symbol: "♏",
    element: "Water",
    dates: "Oct 23 - Nov 21",
    ruler: "Mars & Pluto",
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    symbol: "♐",
    element: "Fire",
    dates: "Nov 22 - Dec 21",
    ruler: "Jupiter",
  },
  {
    id: "capricorn",
    name: "Capricorn",
    symbol: "♑",
    element: "Earth",
    dates: "Dec 22 - Jan 19",
    ruler: "Saturn",
  },
  {
    id: "aquarius",
    name: "Aquarius",
    symbol: "♒",
    element: "Air",
    dates: "Jan 20 - Feb 18",
    ruler: "Saturn & Uranus",
  },
  {
    id: "pisces",
    name: "Pisces",
    symbol: "♓",
    element: "Water",
    dates: "Feb 19 - Mar 20",
    ruler: "Jupiter & Neptune",
  },
];
