OpDev = Ember.Application.create();

OpDev.Router.map(function() {
  // put your routes here
  this.route('/');
  this.resource('projects', function(){
  	this.route('index');
  	this.route('project', { path: "/:project_id" });
  });
  this.route('sources');
  this.route('settings');
  this.route('about');
});

//Routes
OpDev.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
OpDev.ProjectsRoute = Ember.Route.extend({
	model: function(){
		var tempObj = {'projects':[{'id':1,'project_id':3,'name':'Caesars'},{'id':2,'project_id':4,'name':'11500_issues'}]};
		return tempObj;
	}
});
OpDev.ProjectsIndexRoute = Ember.Route.extend({
	model: function(){
		return null;
	},
	renderTemplate: function() {this.render({into: 'projects', outlet: 'projectsubpage'});}//No I18N
});

OpDev.ProjectsProjectRoute = Ember.Route.extend({
	model: function(){
		return null;
	},
	renderTemplate: function() {this.render({into: 'projects', outlet: 'projectsubpage'});}//No I18N
});

OpDev.AboutRoute = Ember.Route.extend({
	model: function(){
		return null;
	}
});

//Views
OpDev.ProjectsIndexView = Ember.View.extend({
	templateName:'addnewproject'
});

OpDev.ProjectsProjectView = Ember.View.extend({
	templateName:'projectdetails'
});

OpDev.AboutView = Ember.View.extend({
	templateName:'aboutme'
});