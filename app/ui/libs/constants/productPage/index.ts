import { aiChatbotsPageData } from "./aiChatbots";
import { aiAgentsPageData } from "./aiAgents";
import { voicePageData } from "./voiceAI";
import { socialToolsPageData } from "./socialMediaTools";
import { customSolutionsPageData } from "./customSolutions";
import { otherToolsPageData } from "./otherTools";

export const productPagesMap: Record<string, unknown> = {
  chatbots: aiChatbotsPageData,
  agents: aiAgentsPageData,
  voice: voicePageData,
  social: socialToolsPageData,
  custom: customSolutionsPageData,
  tools: otherToolsPageData,
};
