import { Component, JSX } from "solid-js";

import { useEscapeKey } from "lib/hooks";
import Button from "../Button";
import { CloseIcon } from "../Icons";

interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const Dialog: Component<DialogProps> = (props) => {
  useEscapeKey(props.onClose);

  const handleBackdropClick = (e: Event) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  return (
    <div
      class={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
        props.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        class={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-full bg-white rounded-lg shadow-lg ${
          props.isOpen ? "block" : "hidden"
        }`}
      >
        <div class="flex justify-between items-center p-6">
          <h2 class="text-xl font-bold">{props.title}</h2>
          <Button
            variant="secondary"
            size="icon"
            class="rounded-full"
            onClick={props.onClose}
          >
            <CloseIcon />
          </Button>
        </div>
        <div class="overflow-y-scroll max-h-[calc(100vh-8rem)]">
          <div class="p-6">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
