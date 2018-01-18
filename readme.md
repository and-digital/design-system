# BrAND

BrAND is the CSS library that should be used for all AND Digital products to maintain consistency and branding.

To get started, visit 

For more information on BrAND, visit the [Wiki](https://github.com/fakesamgregory/BrAND/wiki)

## Quick start
Several quick start options are available:

- [Download the latest release](http://and.digital/design/download).
- Clone the repo: `git clone https://github.com/ANDigital/and-brand.git`.
- Install with npm: `npm install @and.digital/brand`.

Check the [Wiki](https://github.com/fakesamgregory/brAND/wiki/getting-started) for information on getting started 
and how to use the library.

## CDN
Coming soon...

## NPM
To install BrAND in your node modules simply run...

```
npm install @and.digital/brand
```

## SASS
BrAND uses SASS to build its components and modules. If you just want the basics (lighter, fluffier) then import `brand.scss`

```scss
// your-main.scss

@import "node_modules/@and.digital/brand/scss/brand"; 
```

You can override *some* variables such as the breakpoints. Just include these variables before brand to override.
Brand uses [Bootstraps mobile-first grid](https://getbootstrap.com/docs/4.0/layout/grid/).

More info in [Theming](https://github.com/fakesamgregory/brAND/wiki/theming).

## Fonts

BrAND uses assets stored on the CDN to load fonts and icons so you will need to include this in the head of your page.

```html
<link rel="stylesheet" href="https://s3-eu-west-1.amazonaws.com/static.andigital.com/fonts/fonts.css" type="text/css">
```

## Issues and features

Please raise all feature and issues on [Github](https://github.com/andigtial/brand/issues). Follow the
[guidlines](https://github.com/andigital/brand/wiki/issues-and-features) for information and guidlines 
on raising an issue.
