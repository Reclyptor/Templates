import ${NAME}Component from "./${NAME}";
import { ${NAME}Props } from "./${NAME}.types";

export const DefaultProps: ${NAME}Props = {
};

export const ${NAME} = (props: ${NAME}Props) => {
  return <${NAME}Component { ...props } />;
};

export default () => <${NAME}Component { ...DefaultProps } />;
