# Global exports example

POC of exporting utility functions within a module with no exports defined

## Install
This project uses yarn but can be used with npm too
```shell
yarn install
```

## Usage

Build with:

```shell
yarn build
```

Test with:
```shell
yarn start
```

You'll see the following output:

```text
$ node ./dist/bundle.js
foo result: foo
bar result: bar
```

## Globals mapping
Every exported function should be declared in exports-loader query:

```javascript
// webpack.config.js
module: {
  rules: [
    {
      test: require.resolve('./src/globals.js'),
      // foo and bar functions will be exported globally, but baz will not
      use: 'exports-loader?foo=foo,bar=bar'
    }
  ]
}
```