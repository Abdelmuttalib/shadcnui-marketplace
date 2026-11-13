import { examples } from "./examples-registry";
import { ExampleRenderer } from "./example-renderer";
import { StyleName } from "@/registry/styles";

export function PageExamplesList({ style }: { style: StyleName }) {
  return (
    <div className="grid gap-6">
      {examples.map((example) => (
        <div key={example.name}>
          <h2>{example.title}</h2>

          <ExampleRenderer style={style as any} name={example.name} />
        </div>
      ))}
    </div>
  );
}

export const getPageExamples = (style: StyleName) => {
  return [
    <ExampleRenderer key="mail" style={style as any} name="mail" />,
    <ExampleRenderer key="cards" style={style as any} name="cards" />,
    <ExampleRenderer
      key="authentication"
      style={style as any}
      name="authentication"
    />,
    <ExampleRenderer
      key="settings-profile"
      style={style as any}
      name="forms"
    />,
    <ExampleRenderer key="dashboard" style={style as any} name="dashboard" />,
    <ExampleRenderer key="music" style={style as any} name="music" />,
    <ExampleRenderer key="playground" style={style as any} name="playground" />,
    // <ExampleRenderer key="task" style={style as any} name="task" />,
  ];
};
