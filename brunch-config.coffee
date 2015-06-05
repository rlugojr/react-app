exports.config =
  # See http://brunch.io for docs.
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(?!app)/
    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'app.js'
