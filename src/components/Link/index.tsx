import { Component, splitProps } from "solid-js";
import { A, AnchorProps } from "@solidjs/router";

const Link: Component<AnchorProps> = (props) => {
  const [themeProps, restProps] = splitProps(props, ["class", "activeClass"]);

  return (
    <A
      classList={{
        "font-medium text-slate-600 hover:text-slate-700 transition duration-200 ease-in-out ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2":
          true,
        [themeProps.class || ""]: Boolean(themeProps.class),
      }}
      activeClass={`text-slate-800 hover:text-slate-900 ${
        themeProps.activeClass ? themeProps.activeClass : ""
      }`}
      {...restProps}
    >
      {props.children}
    </A>
  );
};

export default Link;
