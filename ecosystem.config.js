module.exports = {
    apps: [{
        name: "app",
        script: "app.js"
    }],
    deploy: {
        sand: {
            key: '~/.ssh/id_rsa.pub',
            user: "dev",
            host: ["sand.oshcut.com"],
            ref: 'origin/master',
            repo: 'git@github.com:hannah10e/hello-world.git',
            path: "/home/dev/sand/hello-world",
            'post-deploy': "yarn && pm2 start ecosystem.config.js"
        }
    }
}

// sources:
// https://pm2.keymetrics.io/docs/usage/application-declaration/
// https://pm2.io/docs/runtime/guide/easy-deploy-with-ssh/
// https://gist.github.com/hoangmirs/b2cb60e0aa60019f0c8b13927ce9d0a2