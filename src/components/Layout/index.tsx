import { Component } from "solid-js";
import { A, RouteSectionProps } from "@solidjs/router";

const Layout: Component<RouteSectionProps> = ({ children }) => {
  return (
    <div class="min-h-screen flex flex-col bg-slate-50">
      <header class="container p-4 mx-auto my-8">
        <nav class="flex gap-3">
          <A href="/">Home</A>
          <A href="/notes">Notes</A>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
