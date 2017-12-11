'use strict';

import projectsTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/projects/projects.html';
import asyncTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/async-page-example/async.html';


function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';

    $stateProvider
        .state('projects', {
          url: '/projects',
          templateUrl: projectsTemplate,
          controller: 'projectsController',
          resolve: {
            asyncPreloading: resolverProvider.asyncPagePrealoading
          }
        })

        .state('async', {
          url: '/async',
          templateUrl: asyncTemplate,
          controller: 'asyncController',
          resolve: {
            asyncPreloading: resolverProvider.asyncPagePrealoading
          }
        })
    ;


  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

