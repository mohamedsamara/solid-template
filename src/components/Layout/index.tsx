import { Component } from "solid-js";
import { RouteSectionProps } from "@solidjs/router";

import NavItem from "components/NavItem";

const Layout: Component<RouteSectionProps> = ({ children }) => {
  return (
    <>
      <header class="container p-4 mx-auto">
        <nav class="flex gap-3">
          <NavItem href="/" end>
            Home
          </NavItem>
          <NavItem href="/notes">Notes</NavItem>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;
