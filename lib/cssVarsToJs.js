function cssVarsToJs(cssText) {
  const lines = cssText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("--"));
  const cssObject = {};

  lines.forEach((line) => {
    const [key, value] = line
      .split(":")
      .map((part) => part.trim().replace(";", ""));
    cssObject[key] = value;
  });

  return cssObject;
}

// Example Usage:
const cssText = `
  --material-color-gray-50: 0.985 0.035 260; /* oklch(0.985 0.035 260) #f4f4f4 */
  --material-color-gray-100: 0.97 0.0354 260; /* oklch(0.97 0.035 260) #e0e0e0 */
  --material-color-gray-200: 0.922 0.035 260; /* oklch(0.922 0.035 260) #c6c6c6 */
  --material-color-gray-300: 0.87 0.0354 260; /* oklch(0.87 0.035 260) #a8a8a8 */
  --material-color-gray-400: 0.708 0.035 260; /* oklch(0.708 0.035 260) #8d8d8d */
  --material-color-gray-500: 0.556 0.035 260; /* oklch(0.556 0.035 260) #6f6f6f */
  --material-color-gray-600: 0.439 0.035 260; /* oklch(0.439 0.035 260) #525252 */
  --material-color-gray-700: 0.351 0.035 260; /* oklch(0.371 0.035 260) #393939 */
  --material-color-gray-800: 0.24 0.035 260; /* oklch(0.269 0.035 260) #262626 */
  --material-color-gray-900: 0.205 0.035 260; /* oklch(0.205 0.035 260) #161616 */
  --material-color-gray-950: 0.145 0.035 260; /* oklch(0.145 0.035 260) #0f0f0f */
`;

console.log(cssVarsToJs(cssText));
