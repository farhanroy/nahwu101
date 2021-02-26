module.exports = {
  title: 'Nahwu 101',
  tagline: 'Platform belajar nahwu dengan mudah',
  url: 'https://nahwu101.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'farhanroy', // Usually your GitHub org/user name.
  projectName: 'nahwu101', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Nahwu101',
      logo: {
        alt: 'Nahwu101 Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/farhanroy/nahwu101',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Materi',
          items: [
            {
              label: 'Nahwu',
              to: 'docs/',
            },
            {
              label: 'Kalimat',
              to: 'docs/kalimat',
            },
            // {
            //   label: 'Irob',
            //   to: 'docs/irob',
            // },
            // {
            //   label: 'Makrifat & Nakiroh',
            //   to: 'docs/makrifat_akiroh',
            // },
          ],
        },
        {
          title: 'Contact Person',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/farhanroy__',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/farhansekargadung',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/farhanroy__',
            },
          ],
        },
        {
          title: 'Kontributor',
          items: [
            {
              label: 'Roy Farchan',
              to: 'https://facebook.com/farhanroy.1',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nahwu101 Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'site.webmanifest', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],
};
