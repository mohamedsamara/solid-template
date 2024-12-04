import { JSX } from "solid-js";

export interface SvgProps extends JSX.SvgSVGAttributes<SVGAElement> {}

export const CloseIcon = (props: SvgProps) => {
  return (
    <svg
      class={props.class || ""}
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
