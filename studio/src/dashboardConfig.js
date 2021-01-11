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
                  buildHookId: '5ffc9550e8fc2d0e10ef0198',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-01-studio',
                  apiId: 'c36b0e5e-8078-4214-b0f2-4723cd06a127'
                },
                {
                  buildHookId: '5ffc9550a9df0d008eaa0352',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-01',
                  apiId: '040deb39-3da9-451a-9cd1-426a76709d5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/intecfrontend/sanity-gatsby-blog01',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-01.netlify.app', category: 'apps' }
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
