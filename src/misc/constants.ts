export const errorPlaceholderUrl: Function = (
  width: number,
  height: number
): string =>
  `https://via.placeholder.com/${width}x${height}?text=Error+While+Loading+Photo`;

export const imageUrl: string = "https://picsum.photos/";
export const w: number = 800;
export const m: number = 20;
export const imagePlaceholders: Array<Object> = [
  { width: 696, height: 240 },
  { width: 300, height: 300 },
  { width: 220, height: 253 },
  { width: 559, height: 299 },
  { width: 143, height: 253 },
  { width: 546, height: 252 }
];
