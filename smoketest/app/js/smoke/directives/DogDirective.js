module.exports = function(app) {
  app.directive('dogDirective', function() {
    return {
      restrict: 'E',
      scope: {
        doginfo: '=',
      },
      templateUrl: './templates/dog-template.html'
    }
  })
}
