module.exports = function(app) {
  require('./CatDirective')(app);
  require('./DogDirective')(app);
};
