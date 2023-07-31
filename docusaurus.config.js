// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Build stunning internal tools, blazing fast',
  tagline:
    'Low code toolkit for developers to quickly build internal tools, digital journeys, operational apps on top of any data source or APIs.',
  favicon: 'img/dronahq-logo-32x32.png',
  // Set the production url of your site here
  url: 'https://rahul-gharat.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/dronahq-docs/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rahul-gharat', // Usually your GitHub org/user name.
  projectName: 'dronahq-docs', // Usually your repo name.
  onBrokenLinks: 'warn', // 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,
  staticDirectories: ['static', 'public'],
  webpack: {
    jsLoader: isServer => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  presets: [
    [
      // 'classic',
      // /** @type {import('@docusaurus/preset-classic').Options} */
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/rahul-gharat/dronahq-docs/tree/main/',
          routeBasePath: '/',
          // editUrl: ({ docPath }) => `https://github.com/rahul-gharat/dronahq-docs/blob/main/docs/${docPath}`,
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
          exclude: ['**/*.wip'],
          breadcrumbs: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: 'v2.x',
          //     badge: true,
          //     path: 'latest',
          //   },
          // },
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl: 'https://github.com/rahul-gharat/dronahq-docs/tree/main/',
        // },
        api: {
          path: "openapi.json",
          routeBasePath: "/apidocs",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    // [
    //   'content-docs',
    //   /** @type {import('@docusaurus/plugin-content-docs').Options} */
    //   ({
    //     id: 'wiki',
    //     path: 'wiki',
    //     routeBasePath: 'wiki',
    //     editUrl: ({ docPath }) => `https://github.com/rahul-gharat/dronahq-docs/blob/main/wiki/${docPath}`,
    //     // editCurrentVersion: true,
    //     docItemComponent: require.resolve('./src/components/CustomDocItem/CustomDocItemWiki.tsx'),
    //     // disableVersioning: true,
    //     breadcrumbs: false,
    //     sidebarPath: require.resolve('./sidebarsWiki.js'),
    //     showLastUpdateAuthor: true,
    //     showLastUpdateTime: true,
    //   }),
    // ],
    // [
    //   path.resolve(__dirname, './src/plugins/docusaurus-plugin-segment-analytics'),
    //   {
    //     prodKey: 'RQXoHRpNcmBKllUDihjDjupGv4AHn5TB',
    //     devKey: 'FRKElp5cyMax6GAdM8OVyNMIFVppgEgp',
    //     // boolean (defaults to false) on whether you want
    //     // to include analytics.page() automatically
    //     trackPage: true,
    //     // number (defaults to 50); time to wait after a route update before it should
    //     // track the page change, to implement this, make sure your `trackPage` property is set to `true`
    //     // trackPageDelay: 50,
    //   },
    // ],
    // [
    //   path.resolve(__dirname, './src/plugins/docusaurus-plugin-google-gtm'),
    //   {
    //     trackingID: 'GTM-PF5MQ2Z',
    //   },
    // ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/dronahq-social-card.jpg',
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rest', 'http', 'haskell', 'plsql', 'docker', 'nginx', 'markdown', 'csharp'],
      },
      // algolia: {
      //   // If Algolia did not provide you any appId, use 'BH4D9OD16A'
      //   appId: 'NS6GBGYACO',
      //   // Public API key: it is safe to commit it
      //   apiKey: '8f0f11e3241b59574c5dd32af09acdc8',
      //   indexName: 'hasura-graphql',
      //   // Optional: see doc section below
      //   // contextualSearch: true,
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   // externalUrlRegex: 'external\\.com|domain\\.com',
      //   // Optional: Algolia search parameters
      //   // searchParameters: {},
      // },
      // announcementBar: {
      //   id: 'announcementBar-3', // Increment on change
      //   content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus" >Twitter</a> ${TwitterSvg}`,
      // },
      // announcementBar: {
      //   id: 'announcement-bar-3',
      //   content:
      //     '<a target="_blank" rel="noopener noreferrer" href="https://hasura.io/events/hasura-con-2022/">Check out the product announcements from HasuraCon’22</a>',
      //   backgroundColor: '#511AAA',
      //   textColor: '#fff',
      // },
      navbar: {
        hideOnScroll: false,
        title: '',
        logo: {
          alt: 'DronaHQ',
          src: 'img/dronahq-name-logo-light.svg',
          srcDark: 'img/dronahq-name-logo-dark.svg',
          href: 'https://www.dronahq.com',
        },
        items: [
          {
            // type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
            to: '/introduction',
          },
          // {
          //   to: '/wiki',
          //   label: 'Wiki',
          //   position: 'left',
          // },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left',
          // },
          {
            to: 'https://community.dronahq.com/c/ask-community',
            label: 'Forum',
            position: 'left',
          },
          {
            to: 'https://discord.gg/QfN8yq4mqM',
            label: 'Discord',
            position: 'left',
          },
          {
            to: 'https://headwayapp.co/dronahq-changelog',
            label: "What's New",
            position: 'left',
          },
          {
            to: '/apidocs',
            label: "API Docs",
            position: 'left',
          },
          // {
          //   to: '/latest/hasura-cloud/overview',
          //   label: 'Hasura Cloud',
          //   className: 'header-hasura-cloud-link',
          //   position: 'left',
          // },
          // {
          //   to: '/latest/enterprise/overview',
          //   label: 'Hasura Enterprise',
          //   className: 'header-hasura-ee-link',
          //   position: 'left',
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          //   dropdownActiveClassDisabled: true,
          //   dropdownItemsAfter: [
          //     {
          //       href: 'https://hasura.io/docs/1.0/graphql/core/index.html',
          //       label: 'v1.x',
          //     },
          //   ],
          // },
          // {
          //   type: 'search',
          //   position: 'right',
          // },
          // {
          //   to: 'https://github.com/rahul-gharat/dronahq-docs',
          //   position: 'right',
          //   className: 'header-github-link',
          //   'aria-label': 'GitHub repository',
          // },
          {
            to: 'https://studio.dronahq.com/login.aspx',
            label: 'Login',
            position: 'right',
            className: 'nav-link_login',
          },
          {
            to: 'https://www.dronahq.com/signup/',
            label: 'Get Started',
            position: 'right',
            className: 'nav-link_getting-started',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://dronahq.com/Stack Overflow',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://dronahq.com/Discord',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://dronahq.com/Twitter',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/rahul-gharat/dronahq-docs/',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} DronaHQ, Inc. Built with Docusaurus.`,
      // },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
