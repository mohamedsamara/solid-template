import { splitProps, JSX } from "solid-js";
import { type Component } from "solid-js";

import { cn } from "../../lib/utils";

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

const Input: Component<InputProps> = (props) => {
  return (
    <input
      autocomplete="off"
      type={props.type}
      class={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props.class
      )}
      {...props}
    />
  );
};

export { Input };
