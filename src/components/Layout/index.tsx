import { Component } from "solid-js";
import { A, RouteSectionProps } from "@solidjs/router";

const Layout: Component<RouteSectionProps> = ({ children }) => {
  return (
    <>
      <header class="container p-4 mx-auto">
        <nav class="flex gap-3">
          <A href="/">Home</A>
          <A href="/notes">Notes</A>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;
