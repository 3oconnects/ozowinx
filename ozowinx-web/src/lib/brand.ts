/**
 * The Ozowinx spectrum.
 *
 * Every hex here is sampled from the master logo (Logo.png) — the ribbon runs
 * blue → teal → green → amber → violet → red, and these are those stops. The
 * tints are the same hues lifted to a surface weight that body copy still
 * passes contrast against.
 *
 * Used to colour ordered sequences — the five services, the four process
 * steps, the industry tiles — by position, so the assignment is systematic
 * rather than a colour picked per item. The order is the ribbon's order.
 */
export type BrandColor = {
  name: string;
  /** Line and text weight. Contrast-checked against white. */
  hex: string;
  /** Fill weight for icon plates and badges. */
  tint: string;
};

export const SPECTRUM: BrandColor[] = [
  { name: 'blue', hex: '#0046FE', tint: '#E7EEFF' },
  { name: 'teal', hex: '#00908F', tint: '#DEF5F5' },
  { name: 'green', hex: '#009D4A', tint: '#E1F6EA' },
  { name: 'amber', hex: '#C96A00', tint: '#FFF0DC' },
  { name: 'violet', hex: '#7211F0', tint: '#EFE7FE' },
  { name: 'red', hex: '#E11F2C', tint: '#FDE7E9' },
];

/** Colour for position `i` in a sequence, wrapping past the end. */
export function brandAt(i: number): BrandColor {
  return SPECTRUM[((i % SPECTRUM.length) + SPECTRUM.length) % SPECTRUM.length];
}

/**
 * The logo's three verbs, in the logo's three colours.
 * These are fixed by the tagline — do not reassign them by position.
 */
export const VERBS = {
  Build: { hex: '#0057E8', tint: '#E7EEFF' },
  Modernize: { hex: '#009D4A', tint: '#E1F6EA' },
  Scale: { hex: '#E11F2C', tint: '#FDE7E9' },
} as const;

/** Full ribbon sweep, for rules and progress bars. */
export const RIBBON =
  'linear-gradient(90deg,#0EB8FE,#0046FE,#7211F0,#C920EF,#E11F2C,#FD8605,#FEC40E,#8BE427,#00BBBA)';
