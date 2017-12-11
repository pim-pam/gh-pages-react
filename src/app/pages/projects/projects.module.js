'use strict';

import './projects.scss';

import projectsController from './projects.controller.js';

const projectsModule = angular.module('projects-module', []);

projectsModule.controller('projectsController', projectsController);

export default projectsModule;