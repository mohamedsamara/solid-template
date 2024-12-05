import { splitProps, JSX, Component } from "solid-js";

interface TextareaProps
  extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: Component<TextareaProps> = (props) => {
  const [themeProps, restProps] = splitProps(props, ["class"]);

  return (
    <textarea
      classList={{
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm":
          true,
        [themeProps.class || ""]: Boolean(themeProps.class),
      }}
      {...restProps}
    />
  );
};

export { Textarea };
