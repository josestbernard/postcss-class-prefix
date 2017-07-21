# postcss-parent-scope

A [PostCSS](https://github.com/postcss/postcss) plugin to scope CSS with a parent class.

wrap
__Example input__

```css
.Component { /* ... */ }
.Component--modifier { /* ... */ }
.Component-descendent { /* ... */ }
.Component1, .Component2 { /* ... */ }
```

__Example output__
`parentScope('parent-wrapper')`
```css
.parent-wrapper .Component { /* ... */ }
.parent-wrapper .Component--modifier { /* ... */ }
.parent-wrapper .Component-descendent { /* ... */ }
.parent-wrapper .Component1, .parent-wrapper .Component2 { /* ... */ }

```


## Installation

```
npm install postcss-parent-scope
```

## Usage

```javascript
var fs        = require('fs');
var postcss   = require('postcss');
var parentScope = require('postcss-parent-scope');

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = postcss()
          .use(parentScope('parent-class'))
          .process(css);
```

### Using the `ignore` option

```javascript
var fs        = require('fs');
var postcss   = require('postcss');
var parentScope = require('postcss-parent-scope');

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = postcss()
          .use(parentScope('parent-class', { ignore: [/ng-/, 'some-class-to-ignore']}))
          .process(css);
```

## License

MIT

* Based on [postcss-class-prefix](https://github.com/thompsongl/postcss-class-prefix)
