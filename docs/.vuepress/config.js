const { description, name } = require('../../package')
const { buildSidebars } = require('./versions')

module.exports = {
  base: '/',
  title: name,
  description: description,
  head: [
      ['link', { rel: "icon", type: "image/png", href: "/favicon.ico"}],
      ['script', { type: 'text/javascript', src: 'https://webkul.chatwhizz.com/chat-support/js/wk-chat-support.js', async: true }],
      ['style', {}, `
        .wk-cw-chatbot-textCointainer textarea#wk-cw-message{
          min-height: unset !important;
        }
        .wk-cw-liveChatCointainer,
        .wk-cw-liveChatCointainer .operator-to-user-msg{
          line-height: 1.4 !important;
        }
      `],
  ],
  themeConfig: {
    logo: '/logo.png',
    docsRepo: 'Qloapps/user-guide',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: true,
    nav: [
      {
        text: 'Download',
        link: 'https://qloapps.com/download/',
      },
      {
        text: 'Development Documentation',
        link: 'https://devdocs.qloapps.com/'
      },
      {
        text: 'Forum',
        link: 'https://forums.qloapps.com/'
      },
      {
        text: 'Extensions',
        link: 'https://qloapps.com/addons/'
      },
    ],

    sidebar: buildSidebars(),
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/medium-zoom',
      {
        background: '#000',
      }
    ],
    '@vuepress/plugin-back-to-top',
  ]
}
