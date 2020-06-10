module.exports = {
  title: 'Devin',
  base: '/blog/',
  serviceWorker: true,
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/logo.jpeg'
    }]
  ],
  markdown: {
    // 显示代码行号
    lineNumbers: false
  },
  themeConfig: {
    logo: "",
    nav: [{
        text: '首页',
        link: '/timeLine/'
      },
      {
        text: '技术',
        link: '/technology/'
      },
      {
        text: '生活',
        link: '/life/'
      },
      {
        text: '思考',
        link: '/ponder/'
      },
      {
        text: '标签库',
        link: '/tags/'
      },
      {
        text: '关于',
        link: '/about/'
      },
      // { text: '留言板', link:'/massage/'},
      {
        text: '链接',
        items: [{
          text: 'GitHub',
          link: 'https://github.com/774848686'
        },{
          text:'博客园',
          link:'https://www.cnblogs.com/zdf-xue/'
        },{
          text:'daily notes',
          link:"https://github.com/774848686/daily-notes"
        },{
          text:'NPM',
          link:"https://www.npmjs.com/settings/devin2016/packages"
        } ]
      }
    ],
    lastUpdated: '最后更新时间',
  },
  configureWebpack: {
    output: {
      
    }
  }
}