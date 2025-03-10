import { useEffect, useState } from "react";

import { loadComponent } from "@/lib/component-loader";

function useLoadComponent(style: string, componentName: string) {
  const [component, setComponent] = useState({});

  useEffect(() => {
    const loadComponent = async () => {
      const md = await loadComponent(style, componentName);
      setComponent(md);
    };

    loadComponent();
  }, [style, componentName]);

  return component;
}

type Components = {
  [key: string]: React.ReactNode;
};

export function useLoadComponents(style: string, _components: string[]) {
  const [components, setComponents] = useState<Record<string, React.ReactNode>>(
    {}
  );

  useEffect(() => {
    async function loadComponents() {
      let _comps = {};
      _components.forEach(async (component) => {
        const comp = await loadComponent(style, component);
        console.log("comp", comp);
        _comps[component] = comp;
        // _comps = { ..._comps, [component]: comp };
      });

      // const Badge = await loadComponent(style, "Badge");

      setComponents(_comps);
    }

    loadComponents();
  }, [style, _components]);

  if (!components) {
    return null;
  }

  return components;
}
