const path = require('path');

module.exports = {
    rootPath: path.join(__dirname, '../views'),
    vueVersion: "2.3.4",
    template: {
        html: {
            start: '<!DOCTYPE html><html>',
            end: '</html>'
        },
        body: {
            start: '<body class="body">',
            end: '</body>'
        },
        template: {
            start: '<div id="app">',
            end: '</div>'
        }
    },
    head: {
        title: 'Hello this is a global title',
        scripts: [
            { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
            { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js' }
        ],
        styles: [
            { style: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
            { style: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'},
            { style: '/assets/css/main.css'}
        ]
    },
    data: {
        app: {
            name:'bSide'
        }
    }
};