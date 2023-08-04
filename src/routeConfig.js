module.exports = [
  {
    path: '/',
    component: '@theme/DocHomePage',
    exact: true,
  },
  {
    path: '/docs',
    component: '@theme/DocPage',
    routes: [
      {
        path: '/docs/getting-started',
        component: '@theme/GettingStarted',
        sidebar: '@theme/GettingStartedSidebar',
      },
      {
        path: '/docs/configuration',
        component: '@theme/Configuration',
        sidebar: '@theme/ConfigurationSidebar',
      },
      // Add more routes for additional documentation pages
    ],
  },
  {
    path: '/blog',
    component: '@theme/BlogPage',
    exact: true,
  },
  {
    path: '/blog/category/:category',
    component: '@theme/BlogPage',
    exact: true,
  },
  {
    path: '/blog/:slug',
    component: '@theme/BlogPostPage',
    exact: true,
  },
  // Add more routes for additional pages
];
  