import CarbonSinkPage from "./components/carbon";
import SinkPage from "./components/default";

export default function DemoPage() {
  return (
    <div className="grid p-4 max-w-5xl mx-auto">
      <SinkPage />
      <CarbonSinkPage />
    </div>
  );
}
