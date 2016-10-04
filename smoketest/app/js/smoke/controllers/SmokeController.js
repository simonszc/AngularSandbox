module.exports = function(app) {
  app.controller('SmokeController', ['$scope', function() {
    this.smoke = 'fire';
    this.cats = [
      {
        name: "Archie",
        icon: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg",
        age: 12
      },
      {
        name: "Luna",
        icon: "https://s-media-cache-ak0.pinimg.com/236x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
        age: 3
      },
      {
        name: 'Mittens',
        icon: "http://static.boredpanda.com/blog/wp-content/uploads/2015/09/Instagrams-most-famous-cat-Nala165604f5fc88e5f.jpg",
        age: 7
      }
    ]
  }])
}
