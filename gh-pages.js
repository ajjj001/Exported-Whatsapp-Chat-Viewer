var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/ajjj001/Exported-Whatsapp-Chat-Viewer.git', // Update to point to your repository
        user: {
            name: 'ajjj001', // update to use your name
            email: 'abdullahjawaid1999@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);