Bustle.Router.map(function() {
  this.resource('headlines', {path: '/'});
  this.resource('news', function() {
    this.resource('vrArticle');
    this.resource('vgArticle');
    this.resource('mobileGamesArticle');
  });
});
