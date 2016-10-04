module.exports = function(app) {
  app.directive('catDirective', function() {
    return {
      restrict: 'E',
      scope: {
        catinfo: '='
      },
      templateUrl: './templates/cat-template.html'
    }
  })
}
