
const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'steam-games-in-common',
        user: {
            name: 'viligante8',
            email: 'viligante8@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)