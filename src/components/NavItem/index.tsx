import { Component, splitProps } from "solid-js";
import { AnchorProps } from "@solidjs/router";

import Link from "components/Link";

const NavItem: Component<AnchorProps> = (props) => {
  return (
    <Link
      class="hover:bg-slate-100 py-2 px-3 rounded-md"
      activeClass="bg-slate-100"
      {...props}
    />
  );
};

export default NavItem;
