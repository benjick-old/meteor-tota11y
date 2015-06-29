Package.describe({
  name: 'benjick:tota11y',
  version: '0.0.3',
  summary: 'an accessibility (a11y) visualization toolkit http://khan.github.io/tota11y/',
  git: 'https://github.com/benjick/meteor-tota11y',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'tota11y/build/tota11y.min.js',
  ], 'client');
});
