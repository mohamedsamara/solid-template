import { splitProps, JSX, Component } from "solid-js";

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

const Input: Component<InputProps> = (props) => {
  const [themeProps, restProps] = splitProps(props, ["class"]);

  return (
    <input
      autocomplete="off"
      type={props.type}
      classList={{
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50":
          true,
        [themeProps.class || ""]: Boolean(themeProps.class),
      }}
      {...restProps}
    />
  );
};

export { Input };
