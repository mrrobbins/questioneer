module.exports = function (grunt) {
  'use-strict';
  var appConfig = {
    name: 'spring-ng-foundation',
    js: [
        'src/app/app.js',
        'src/app/**/*.module.js',
        'src/app/**/*.controller.js',
        'src/app/**/*.service.js',
        'src/app/**/*.directive.js'
    ],
    tests: [
        'src/app/**/*.spec.js'
    ],
    templates: [
        'src/app/**/*.html'
    ],
    css: 'src/css/app.css'
  };

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: 'build',
          port:9000,
          middleware: function (connect, options, defaultMiddleware) {
            return [
                require('grunt-connect-proxy/lib/utils').proxyRequest,
                require('connect-livereload')({port: 9999}),
                defaultMiddleware
            ];
          }
        },
        proxies: [
          {
            context: '/api',
            host: 'localhost',
            port: 8080
          },
          {
            context: '/actuator',
            host: 'localhost',
            port: 8080
          }
        ]
      }
    }
  });

};
