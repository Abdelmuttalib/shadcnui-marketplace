export function hexToHSL(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  // s = s * 100;
  // s = Math.round(s);
  // l = l * 100;
  // l = Math.round(l);

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  var colorInHSL = formatHSL(h, s, l);

  return colorInHSL;
}

function formatHSL(h, s, l) {
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

function toLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

// Function to convert HEX to OKLCH
// export function hexToOklch(hex) {
//   // Remove the # if present
//   hex = hex.replace("#", "");

//   // Parse RGB values
//   const r = parseInt(hex.slice(0, 2), 16) / 255;
//   const g = parseInt(hex.slice(2, 4), 16) / 255;
//   const b = parseInt(hex.slice(4, 6), 16) / 255;

//   // Convert RGB to linear RGB
//   const toLinear = (c) =>
//     c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
//   const rLin = toLinear(r);
//   const gLin = toLinear(g);
//   const bLin = toLinear(b);

//   // Convert linear RGB to XYZ
//   const x = rLin * 0.4124564 + gLin * 0.3575761 + bLin * 0.1804375;
//   const y = rLin * 0.2126729 + gLin * 0.7151522 + bLin * 0.072175;
//   const z = rLin * 0.0193339 + gLin * 0.119192 + bLin * 0.9503041;

//   // Normalize for D65 white point
//   const xN = x / 0.95047;
//   const yN = y / 1.0;
//   const zN = z / 1.08883;

//   // Convert XYZ to LAB
//   const f = (t) => (t > 0.008856 ? Math.cbrt(t) : (t * 903.3 + 16) / 116);
//   const l = 116 * f(yN) - 16;
//   const a = 500 * (f(xN) - f(yN));
//   const bVal = 200 * (f(yN) - f(zN));

//   // Convert LAB to OKLAB
//   const lOklab = l / 100;
//   const m = a * 0.3963377774 + bVal * 0.2158037573 + lOklab * 0.2104542553;
//   const n = a * -0.1055613458 + bVal * -0.0638541728 + lOklab * 0.793617785;

//   // Get Chroma and Hue
//   const c = Math.sqrt(m * m + n * n);
//   const h = Math.atan2(n, m) * (180 / Math.PI);
//   const hNormalized = h < 0 ? h + 360 : h;

//   // Return OKLCH as a CSS-compatible string
//   return `oklch(${(lOklab * 100).toFixed(2)} ${c.toFixed(
//     2
//   )} ${hNormalized.toFixed(2)})`;
// }

// Example usage
// const oklchColor = hexToOklch("#0f62fe");
// console.log(oklchColor);
// oklch(0.96 0.34 200.50)

// Function to convert RGB to OKLab
export function rgbToOklab(r, g, b) {
  // Normalize RGB values to the range [0, 1]
  r = r / 255;
  g = g / 255;
  b = b / 255;

  // Linearize RGB values
  r = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  // Convert to linear light values
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  // Apply the OKLab transformation
  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

  return { L, a, b: b_ };
}

// Function to convert OKLab to OKLCH
export function oklabToOklch(L, a, b) {
  const C = Math.sqrt(a * a + b * b); // Chroma
  const h = Math.atan2(b, a); // Hue in radians

  // Convert hue to degrees and ensure it's in [0, 360)
  let H = h * (180 / Math.PI);
  if (H < 0) {
    H += 360;
  }

  return { L, C, H };
}

// Function to convert RGB to OKLCH
export function rgbToOklch(r, g, b) {
  const oklab = rgbToOklab(r, g, b);
  return oklabToOklch(oklab.L, oklab.a, oklab.b);
}

// Example usage
// const rgb = [197, 193, 105]; // Amber color
// const oklch = rgbToOklch(rgb[0], rgb[1], rgb[2]);

// console.log(
//   `oklch(${(oklch.L * 100).toFixed(2)}% ${oklch.C.toFixed(
//     10
//   )} ${oklch.H.toFixed(10)})`
// );
// rgb(197, 193, 105)
// oklch(79.53% 0.1108226359 106.3531987795)

// Function to convert OKLab to OKLCH

export function hexToOklch(hex) {
  // Remove the # if present
  hex = hex.replace("#", "");

  // Parse RGB values from the HEX string
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Function to convert RGB to OKLab

  // Convert RGB to OKLCH
  const oklab = rgbToOklab(r, g, b);
  const oklch = oklabToOklch(oklab.L, oklab.a, oklab.b);

  // Return OKLCH as a CSS-compatible string
  return `oklch(${((oklch.L * 100) / 100).toFixed(2)} ${oklch.C.toFixed(
    2
  )} ${oklch.H.toFixed(2)})`;
}

// 39.71% / 100 = 0.3971

// Example usage
// const hexColor = "#0f62fe"; // Example HEX color
// console.log(hexToOklch(hexColor));
// oklch(55.65% 0.2429924241 261.9528826991)

// #edf5ff
// #d0e2ff
// #a6c8ff
// #78a9ff
// #4589ff
// #0f62fe
// #0043ce
// #002d9c
// #001d6c
// #001141

// #f4f4f4
// #e0e0e0
// #c6c6c6
// #a8a8a8
// #8d8d8d
// #6f6f6f
// #525252
// #393939
// #262626
// #161616

// const grays = [
//   "#f4f4f4",
//   "#e0e0e0",
//   "#c6c6c6",
//   "#a8a8a8",
//   "#8d8d8d",
//   "#6f6f6f",
//   "#525252",
//   "#393939",
//   "#262626",
//   "#161616",
// ];

// const hexColors = [
//   "#edf5ff",
//   "#d0e2ff",
//   "#a6c8ff",
//   "#78a9ff",
//   "#4589ff",
//   "#0f62fe",
//   "#0043ce",
//   "#002d9c",
//   "#001d6c",
//   "#001141",
// ];

// for (let i = 0; i < hexColors.length; i++) {
//   const color = grays[i];
//   console.log(`--color-gray-${i + 1}00`, hexToOklch(color));
// }

// #da1e28
// console.log(hexToOklch("#da1e28"));

// #6929c4
// #009d9a
// #ee5396
// #1192e8
// #fa4d56

// console.log(toHSL('#040a15')); // hsl(210, 55%, 3%)

// --color-gray-50: #f8fafc; /* #f8fafc */
// --color-gray-100: #f1f5f9; /* #f1f5f9 */
// --color-gray-200: #e2e8f0; /* #e2e8f0 */
// --color-gray-300: #cbd5e1; /* #cbd5e1 */
// --color-gray-400: #94a3b8; /* #94a3b8 */
// --color-gray-500: #64748b; /* #64748b */
// --color-gray-600: #475569; /* #475569 */
// --color-gray-700: #334155; /* #334155 */
// --color-gray-800: #1e293b; /* #1e293b */
// --color-gray-900: #0f172a; /* #0f172a */
// --color-gray-950: #020617; /* #020617 */

const colors = {
  // gray: {
  //   50: "#fafafa",
  //   100: "#f4f4f5",
  //   200: "#e4e4e7",
  //   300: "#d4d4d8",
  //   400: "#a1a1aa",
  //   500: "#71717a",
  //   600: "#52525b",
  //   700: "#3f3f46",
  //   800: "#27272a",
  //   900: "#18181b",
  //   950: "#09090b",
  // },
  gray: {
    50: "#DFDFDF",
    100: "#BFBFBF",
    200: "#9F9F9F",
    300: "#808080",
    400: "#606060",
    500: "#404040",
    600: "#212121",
    700: "#1C1C1C",
    800: "#171717",
    900: "#121212",
    950: "#0E0E0E",
  },

  // 50
  // #eef2ff
  // 100
  // #e0e7ff
  // 200
  // #c7d2fe
  // 300
  // #a5b4fc
  // 400
  // #818cf8
  // 500
  // #6366f1
  // 600
  // #4f46e5
  // 700
  // #4338ca
  // 800
  // #3730a3
  // 900
  // #312e81
  // 950
  // #1e1b4b

  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b",
  },
  // '--color-primary-50': 'hsl(226, 100%, 97%)',
  // '--color-primary-100': 'hsl(226, 100%, 94%)',
  // '--color-primary-200': 'hsl(228, 96%, 89%)',
  // '--color-primary-300': 'hsl(230, 94%, 82%)',
  // '--color-primary-400': 'hsl(234, 89%, 74%)',
  // '--color-primary-500': 'hsl(239, 84%, 67%)',
  // '--color-primary-600': 'hsl(243, 75%, 59%)',
  // '--color-primary-700': 'hsl(245, 58%, 51%)',
  // '--color-primary-800': 'hsl(244, 55%, 41%)',
  // '--color-primary-900': 'hsl(242, 47%, 34%)',
  // '--color-primary-950': 'hsl(244, 47%, 20%)'
};

function convertColorToHSL(color, name) {
  return Object.keys(color).reduce((acc, key) => {
    acc[`--color-${name}-${key}`] = hexToHSL(color[key]);
    return acc;
  }, {});
}

// #212121,#1C1C1C,#171717,#121212,#0E0E0E,#090909,#040404
// #212121,#404040,#606060,#808080,#9F9F9F,#BFBFBF,#DFDFDF
