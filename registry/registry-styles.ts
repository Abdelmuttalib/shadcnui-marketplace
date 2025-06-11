// export const styles = [
//   {
//     name: "new-york",
//     label: "New York",
//   },
//   {
//     name: "default",
//     label: "Default",
//   },
// ] as const;

// export const styles = stylesDataList.map((style) => ({
//   name: style.name,
//   label: style.title,
// }));

export const styles = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "carbon",
    label: "Carbon",
  },
  {
    name: "catalyst",
    label: "Catalyst",
  },
  {
    name: "linear",
    label: "Linear",
  },
  {
    name: "material",
    label: "Material",
  },
  {
    name: "spectrum",
    label: "Spectrum",
  },
  {
    name: "wedges",
    label: "Wedges",
  },
  {
    name: "moon",
    label: "Moon",
  },
  {
    name: "lucid",
    label: "Lucid",
  },
  {
    name: "snow",
    label: "Snow",
  },
  {
    name: "neon",
    label: "Neon",
  },
  {
    name: "libelle",
    label: "Libelle",
  },
];

export type StyleRegistry = (typeof styles)[number];
