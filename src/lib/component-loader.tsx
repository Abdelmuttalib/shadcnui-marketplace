export const loadComponent = async (style: string, componentName: string) => {
  const lowerCaseComponentName = componentName.toLocaleLowerCase();
  try {
    const md = await import(
      `@/registry/${style || "carbon"}/example/${lowerCaseComponentName}-demo`
    );
    console.log(md, md[componentName]);
    return md["default"];
    // return md[componentName];
  } catch (error) {
    console.error(
      `Error loading component ${componentName} from style ${style}:`,
      error
    );
    return null;
  }
};

export async function loadComponentDemo(
  style: string,
  componentName: string
): Promise<React.ComponentType | null> {
  const lowerCaseComponentName = componentName.toLocaleLowerCase();
  try {
    const md = await import(
      `@/registry/${style || "carbon"}/example/${lowerCaseComponentName}-demo`
    );
    return md["default"];
    // return md[componentName];
  } catch (error) {
    console.error(
      `Error loading component ${componentName} demo with style ${style}:`,
      error
    );
    return null;
  }
}
