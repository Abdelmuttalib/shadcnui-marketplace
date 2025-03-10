import { useEffect, useState } from "react";

import { useLoadComponents } from "@/hooks/use-load-component";
import { loadComponent } from "@/lib/component-loader";

// type Components = {

// }

export function ComponentLoader({ style }: { style: string }) {
  const [components, setComponents] = useState({});

  useEffect(() => {
    const loadComponents = async () => {
      const Badge = await loadComponent(style, "Badge");
      const Button = await loadComponent(style, "Button");
      const Switch = await loadComponent(style, "Switch");
      // const Tabs = await loadComponent(style, "Tabs");
      // const TabsList = await loadComponent(style, "TabsList");
      // const TabsTrigger = await loadComponent(style, "TabsTrigger");
      const Checkbox = await loadComponent(style, "Checkbox");

      setComponents({
        Badge,
        Button,
        Switch,
        // Tabs,
        // TabsList,
        // TabsTrigger,
        Checkbox,
      });
    };

    loadComponents();
  }, [style]);

  if (!components.Badge || !components.Button) {
    return <div>Loading components...</div>;
  }

  return (
    <div>
      <h1>Component Showcase - {style} Style</h1>
      <components.Badge>Badge</components.Badge>
      <components.Button>Button</components.Button>
      <components.Switch />
      {/* <components.Tabs>
        <components.TabsList>
          <components.TabsTrigger value="tab1">Tab 1</components.TabsTrigger>
          <components.TabsTrigger value="tab2">Tab 2</components.TabsTrigger>
        </components.TabsList>
      </components.Tabs> */}
      <components.Checkbox />
    </div>
  );
}

export function ComponentLoad({
  style,
  _components,
}: {
  style: string;
  _components: any[];
}) {
  const loadedComponents = useLoadComponents(style, _components);

  useEffect(() => {
    console.log("loadedComponents2222", loadedComponents);
  }, [loadedComponents]);

  if (!loadedComponents) {
    return <div>Loading components...</div>;
  }

  console.log("loadedComponents", loadedComponents);

  return (
    <div>
      {/* <loadedComponents.Badge /> */}

      {/* {loadedComponents.Badge ? (
        <loadedComponents.Badge />
      ) : (
        <p>nothing to show</p>
      )} */}
      {/* <loadedComponents.Badge>Badge</loadedComponents.Badge> */}
      {/* {_components.map((componentName) => {
        return (
          <div key={componentName}>
            <h1>{componentName}</h1>
            {loadedComponents[componentName]}
          </div>
        );
      })} */}
    </div>
  );

  // return (
  //   <div>
  //     <h1>Component Showcase - {style} Style</h1>
  //     <components.Badge>Badge</components.Badge>
  //     <components.Button>Button</components.Button>
  //     <components.Switch />
  //     {/* <components.Tabs>
  //       <components.TabsList>
  //         <components.TabsTrigger value="tab1">Tab 1</components.TabsTrigger>
  //         <components.TabsTrigger value="tab2">Tab 2</components.TabsTrigger>
  //       </components.TabsList>
  //     </components.Tabs> */}
  //     <components.Checkbox />
  //   </div>
  // );
}
