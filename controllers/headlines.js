Bustle.HeadlinesController = Ember.Controller.extend({
  startPicture: '#';
  actions: {
    previousArticle: function() {
      var articles = [
        '../img/ps3.jpg',
        '../img/vr.jpg',
        '../img/shield.png';
        var i = articles.indexOf(this.get('startPicture'));
        if (i < 1){
        i = 3;
        this.set('startPicture', articles[i - 1]);
        console.log(i);
      } else {
        this.set('startPicture', articles[i - 1]);
        console.log(i);
      }
    },
    nextArticle: function() {
      var articles = [
        '../img/ps3.jpg',
        '../img/vr.jpg',
        '../img/shield.png';
        var i = articles.indexOf(this.get('startPicture'));
        if (i >= articles.length -1){
        i = -1;
        this.set('startPicture', articles[i + 1]);
        console.log(i);
      } else {
        this.set('startPicture', articles[i + 1]);
        console.log(i);
      }
    }
  }
});
