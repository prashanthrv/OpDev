OpDev = Ember.Application.create();

OpDev.Router.map(function() {
  // put your routes here
  this.route('/');
  this.route('projects');
  this.route('sources');
  this.route('settings');
  this.route('about');
});

OpDev.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});