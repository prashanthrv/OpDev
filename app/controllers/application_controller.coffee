module.exports = (app) ->
  class app.ApplicationController

    # GET /
    @index = (req, res) ->
      res.render 'index',
        view: 'index'

    # GET /projects
    @projects = (req, res) ->
      res.render 'projects',
        view: 'projects'

    # GET /about
    @about = (req, res) ->
      res.render 'about',
        view: 'about'
