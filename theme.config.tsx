import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import icon from "./public/logo.png"

const config: DocsThemeConfig = {
  // logo: <span>What I Learned</span>,
  logo: (
    <>
      <span style={{ marginLeft: ".4em", fontWeight: 900, fontSize: "30px" }}>
        🦁
      </span>
    </>
  ),
  project: {
    link: "https://github.com/Manoj0Marmat/portfolio",
  },
  docsRepositoryBase: "https://github.com/Manoj0Marmat/portfolio",
   head: (
    <>
       <link rel="icon" href="https://i.ibb.co/Dk0L0Wd/logo.png" type="image/x-icon"></link>
    </>
  ),
  footer: {
    text: "Maintained by Manoj Marmat.",
  },
};

export default config;
