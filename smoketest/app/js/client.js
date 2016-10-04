'use strict';

const angular = require('angular');

var SmokeApp = angular.module('SmokeApp', []);
require('./smoke')(SmokeApp);
