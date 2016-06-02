_ = require 'lodash'
grunt = require 'grunt'
cli = require './cli'

class Hog
  constructor : ( opts = {} ) ->
    @config = {}
    @tasks = []

    @hogfile = grunt.file.findup('Hogfile.{js,coffee}', nocase : true)
    unless @hogfile
      return grunt.fatal('Unable to find Hogfile.',
        grunt.fail.code.MISSING_GRUNTFILE)

    require(@hogfile).call @
    @configGrunt()

  configGrunt : =>
    #console.log JSON.stringify @config, null, 2
    @pkg = grunt.file.readJSON('package.json')
    @config.pkg = @pkg
    grunt.initConfig @config
    @loadGruntNpmTasks()
    for t in @tasks
      grunt.registerTask.apply grunt, t
    cli()

  loadGruntNpmTasks : =>
    dev = Object.keys @pkg.devDependencies
    deps = (f for f in dev when f.indexOf('grunt-') is 0)
    grunt.loadNpmTasks t for t in deps

  configure : ( opts ) ->
    @config = _.extend @config, opts

  task : ( name, arg... ) ->
    if Array.isArray name
      return @tasks.push name

    if name.indexOf(':') > 0
      cfg = {}
      [t, n] = name.split ':'
      cfg[ t ] = {}
      cfg[ t ][ n ] = if arg.length is 1 then arg[ 0 ] else arg
      return @configure cfg

    @tasks.push arguments

module.exports = Hog
