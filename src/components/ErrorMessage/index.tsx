import { Component, Show } from "solid-js";

type Props = {
  error: string;
};

const ErrorMessage: Component<Props> = (props) => {
  return (
    <Show when={props.error.length}>
      <p class="text-sm font-medium text-destructive">{props.error}</p>
    </Show>
  );
};

export default ErrorMessage;
