export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edbb92beb4b84cdd87c728d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xg8bd48t',
                  apiId: '6e6c2b60-29f2-442f-a367-6e61219a0910'
                },
                {
                  buildHookId: '5edbb92b2908fecb5299cfa7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9nxpreez',
                  apiId: 'd4af3781-1113-40ca-93ec-11ec245ff3d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/updx/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9nxpreez.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
