import { ComponentPreview } from "@/components/component-preview";
import { ScreenContainer } from "@/components/container";
import { SuggestedComponentsSection } from "@/components/suggestion-blocks";
import { Code } from "@/components/views/docs/code";
import { blocksRegistry } from "@/config/data";

export default function FeaturesPage() {
  const featuresBlocks = blocksRegistry.features;
  return (
    <div>
      <ScreenContainer>
        {featuresBlocks.map((block, index) => {
          console.log("block", block);
          // console.log("block", block);
          return (
            <ComponentPreview
              key={block.id + index}
              id={block.id}
              title={block.title}
              description={block.description}
              category={block.category}
              component={block.id}
              fileName={block.fileName}
              // codePath={block.codePath}
              // className="mb-6 space-y-3 px-4 lg:mb-12 lg:px-0"
            >
              {/* <Code category={block.category} component={block.component} /> */}
              <Code
                category={block.category}
                component={block.id}
                fileName={block.fileName}
              />
            </ComponentPreview>
          );
        })}
      </ScreenContainer>

      {/* suggestion */}
      <ScreenContainer>
        <SuggestedComponentsSection exclude="features" />
      </ScreenContainer>
    </div>
  );
}
