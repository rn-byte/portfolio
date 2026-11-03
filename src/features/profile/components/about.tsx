import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/features/profile/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose className="text-justify leading-relaxed prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-strong:text-zinc-950 dark:prose-strong:text-white prose-strong:font-bold prose-a:text-zinc-900 dark:prose-a:text-sky-400">
          <Markdown>{USER.about}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
