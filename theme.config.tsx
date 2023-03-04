import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

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
    link: "https://github.com/Manoj0Marmat/what-i-learned-notes",
  },
  docsRepositoryBase: "https://github.com/Manoj0Marmat/what-i-learned-notes",
  footer: {
    text: "Maintained by Manoj Marmat.",
  },
  // primaryHue: 50,
};

export default config;
