// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'validateIT',
  tagline: 'Validate CSV files based on the W3C CSV on the Web recommendations!',
  favicon: 'img/penguin_logo.svg',

  // Set the production url of your site here
  url: 'https://drexem.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/validateIT/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'drexem', // Usually your GitHub org/user name.
  projectName: 'validateIT', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js'
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/penguin_logo.svg',
      navbar: {
        title: 'validateIT',
        logo: {
          alt: 'validateIT logo',
          src: 'img/penguin_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://gitlab.mff.cuni.cz/kolcunm/csv-validator',
            label: 'GitLab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/kolcunmichal',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/michalkolcun/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/drexem',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.mff.cuni.cz/kolcunm',
              },
              {
                label: 'Graphic Designer',
                href: 'https://www.instagram.com/_zuz_m_/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitLab',
                href: 'https://gitlab.mff.cuni.cz/kolcunm/csv-validator',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} validateIT, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'bash']
      },
    }),
};

export default config;
