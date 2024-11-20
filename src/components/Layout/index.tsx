import { Component } from "solid-js";
import { A, RouteSectionProps } from "@solidjs/router";

const Layout: Component<RouteSectionProps> = ({ children }) => {
  return (
    <div class="min-h-screen flex flex-col bg-slate-50">
      <header>
        <nav class="flex gap-2">
          <A href="/">Home</A>
          <A href="/notes">Notes</A>
        </nav>
      </header>
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;
