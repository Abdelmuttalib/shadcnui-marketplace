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
    defaultRadius: "0.5rem",
  },
  {
    name: "carbon",
    label: "Carbon",
    defaultRadius: "0rem",
  },
  {
    name: "catalyst",
    label: "Catalyst",
    defaultRadius: "0.6rem",
  },
  {
    name: "linear",
    label: "Linear",
    defaultRadius: "0.5rem",
  },
  {
    name: "material",
    label: "Material",
    defaultRadius: "0.75rem",
  },
  {
    name: "spectrum",
    label: "Spectrum",
    defaultRadius: "0.4rem",
  },
  {
    name: "wedges",
    label: "Wedges",
    defaultRadius: "0.5rem",
  },
  {
    name: "moon",
    label: "Moon",
    defaultRadius: "0.6rem",
  },
  {
    name: "lucid",
    label: "Lucid",
    defaultRadius: "0.5rem",
  },
  {
    name: "snow",
    label: "Snow",
    defaultRadius: "0.4rem",
  },
  {
    name: "neon",
    label: "Neon",
    defaultRadius: "0rem",
  },
  {
    name: "libelle",
    label: "Libelle",
    defaultRadius: "0rem",
  },
];

export type StyleRegistry = (typeof styles)[number];
