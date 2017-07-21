var assert    = require('assert');
var fs        = require('fs');
var postcss   = require('postcss');
var classPrfx = require('..');

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8').trim();
}

describe('postcss-class-prefix', function() {
  it('prefixes all classes', function() {
    var output = postcss()
                .use(classPrfx('parent-wrapper'))
                .process(fixture('source.css')).css;
    var expected = fixture('source.expected.css');

    assert.equal(output, expected);
  });

  it('ignores a classes given in `ignore`', function() {
    var output = postcss()
              .use(classPrfx('parent-wrapper', { ignore: /^is-/ }))
              .process(fixture('filter.css')).css;
    var expected = fixture('filter.expected.css');

    assert.equal(output, expected);
  });
});
