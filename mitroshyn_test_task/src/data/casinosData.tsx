export interface CasinosData {
  title: string;
  betAmount: number;
  getAmount: number;
  starsAmount: number;
  logoUrl: string;
}

export const MOCK_CASINOS_DATA: CasinosData[] = [
  {
    title: "Grosvenor Casinos",
    betAmount: 10,
    getAmount: 400,
    starsAmount: 5,
    logoUrl: "/images/logos/grosvenor_logo.svg",
  },
  {
    title: "Happy Spins",
    betAmount: 10,
    getAmount: 400,
    starsAmount: 4,
    logoUrl: "/images/logos/happy_spins_logo.svg",
  },
  {
    title: "Hajper",
    betAmount: 10,
    getAmount: 400,
    starsAmount: 3,
    logoUrl: "/images/logos/hajper_logo.svg",
  },
];
