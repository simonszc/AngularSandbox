module.exports = function(app) {
  app.controller('SmokeController', ['$scope', function() {
    this.smoke = 'fire';
  }])
}
