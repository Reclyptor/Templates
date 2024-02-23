import React from "react";
import { ${NAME}Props } from "./${NAME}.types";
import { ${NAME} as ${NAME}Component, DefaultProps } from "./${NAME}.demo";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import documentation from "./${NAME}.mdx";

export default {
  title: "${NAME}",
  component: ${NAME}Component,
  parameters: { docs: { page: documentation } }
} as ComponentMeta<typeof ${NAME}Component>;

const Template = (args: ${NAME}Props) => <${NAME}Component { ...args } />;

export const ${NAME}: ComponentStory<typeof ${NAME}Component> = Template.bind({});
${NAME}.args = { ...DefaultProps };
