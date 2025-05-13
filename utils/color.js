function toHSL(hex) {
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

  var colorInHSL = "hsl(" + h + ", " + s + "%, " + l + "%)";

  return colorInHSL;
}

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
    acc[`--color-${name}-${key}`] = toHSL(color[key]);
    return acc;
  }, {});
}

// #212121,#1C1C1C,#171717,#121212,#0E0E0E,#090909,#040404
// #212121,#404040,#606060,#808080,#9F9F9F,#BFBFBF,#DFDFDF

// #0092e9

// generate ranges from 50 to 950 for #0092e9
// use #0092e9 as base color
const color = {
  blue: {
    500: "#0092e9",
  },
};

// #0092E9#0075BA#005E95#004B77#003C5F#00304C#00263D#001E31#001827#00131F Black
// Tints of Dodger Blue #0092E9
// #0092E9#33A8ED#5CB9F1#7DC7F4#97D2F6#ACDBF8#BDE2F9#CAE8FA#D5EDFB#DDF1FC White
// Shades of Dodger Blue #0092E9

const dodgerBlue = {
  50: "#DDF1FC",
  100: "#CAE8FA",
  200: "#ACDBF8",
  300: "#7DC7F4",
  400: "#33A8ED",
  500: "#0092E9",
};

console.log(convertColorToHSL(colors.indigo, "primary"));
// console.log(toHSL("#faf9f6"));
// console.log(toHSL("#111111"));
// console.log(toHSL("#040404"));

// '--color-primary-50': 'hsl(201, 84%, 93%)',
// '--color-primary-100': 'hsl(203, 83%, 89%)',
// '--color-primary-200': 'hsl(203, 84%, 82%)',
// '--color-primary-300': 'hsl(203, 84%, 72%)',
// '--color-primary-400': 'hsl(202, 84%, 56%)',
// '--color-primary-500': 'hsl(202, 100%, 46%)',
// '--color-primary-600': 'hsl(202, 100%, 34%)',
// '--color-primary-700': 'hsl(202, 100%, 22%)',
// '--color-primary-800': 'hsl(202, 100%, 10%)',
// '--color-primary-900': 'hsl(202, 100%, 5%)',
// '--color-primary-950': 'hsl(202, 100%, 3%)',
