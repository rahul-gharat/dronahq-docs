// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Build stunning internal tools, blazing fast",
  tagline:
    "Low code toolkit for developers to quickly build internal tools, digital journeys, operational apps on top of any data source or APIs.",
  favicon: "img/dronahq-logo-32x32.png",

  // Set the production url of your site here
  url: "https://rahul-gharat.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rahul-gharat", // Usually your GitHub org/user name.
  projectName: "dronahq-docs", // Usually your repo name.

  onBrokenLinks: "warn", // 'throw',
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/rahul-gharat/dronahq-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/rahul-gharat/dronahq-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        debug: true
      }),
    ],
  ],

  plugins: ["docusaurus-plugin-sass"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/dronahq-social-card.jpg",
      docs: {
        sidebar: {
          // hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: false,
        title: "",
        logo: {
          alt: "DronaHQ",
          src: "img/dronahq-name-logo-light.svg",
          srcDark: "img/dronahq-name-logo-dark.svg",
          href: "/",
        },
        items: [
          {
            // type: 'docSidebar',
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
            to: "/docs/introduction",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://community.dronahq.com/",
            label: "Community",
            position: "left",
          },
          {
            href: "https://github.com/rahul-gharat/dronahq-docs/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://dronahq.com/Stack Overflow',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://dronahq.com/Discord',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://dronahq.com/Twitter',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/rahul-gharat/dronahq-docs/',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} DronaHQ, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

module.exports = config;
