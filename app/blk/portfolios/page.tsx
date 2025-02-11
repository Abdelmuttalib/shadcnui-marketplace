import { ComponentPreview } from "@/components/component-preview";
import { ScreenContainer } from "@/components/container";
import { SuggestedComponentsSection } from "@/components/suggestion-blocks";
import { Code } from "@/components/views/docs/code";
import { blocksRegistry } from "@/config/data";

export default function FeaturesPage() {
  const featuresBlocks = blocksRegistry.portfolios;
  return (
    <div>
      <ScreenContainer>
        {featuresBlocks.map((block, index) => {
          return (
            <ComponentPreview
              key={block.id + index}
              id={block.id}
              title={block.title}
              description={block.description}
              category={block.category}
              component={block.id}
              fileName={block.fileName}
            >
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
        <SuggestedComponentsSection exclude="portfolios" />
      </ScreenContainer>
    </div>
  );
}
