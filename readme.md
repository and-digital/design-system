# brAND

brAND is a CSS library that can be used for all AND Digital products to maintain consistency across them.

For more information on brAND, visit the [Wiki](https://github.com/fakesamgregory/brAND/wiki)

## CDN
Coming soon...

## NPM
To install brAND in your node modules simply run...

`npm install br-and`

## SASS
brAND uses SASS to build its components and modules. If you just want the basics (lighter, fluffier) then import `brand.scss`

```
// your-main.scss

@import "node_modules/br-and/scss/brand"; 
```

You can override *some* variables such as the breakpoints. Just include these variables before brand to override.
Brand uses [Bootstraps mobile-first grid](https://getbootstrap.com/docs/4.0/layout/grid/).

More info in [Theming](https://github.com/fakesamgregory/brAND/wiki/theming).

## Fonts

brAND uses assets stored on the CDN to load fonts and icons so you will need to include this in the head of your page.

```
<link rel="stylesheet" href="https://s3-eu-west-1.amazonaws.com/static.andigital.com/fonts/fonts.css" type="text/css">
```
