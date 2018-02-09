# BrAND

BrAND is a CSS library that should be used for all AND Digital products to maintain consistency and branding. It should 
speed up intial set up and help you remain on brand even if it changes.

For more information on how to use BrAND, visit the [Wiki](https://github.com/fakesamgregory/BrAND/wiki)

## Quick start
Several quick start options are available:

- [Download the latest release](https://github.com/fakesamgregory/brAND/releases).
- Clone the repo: `git clone https://github.com/ANDigital/and-brand.git`.
- Install with npm: `npm i @fakesamgregory/brand --save-dev`.

Check the [Wiki](https://github.com/fakesamgregory/brAND/wiki/getting-started) for information on getting started 
and how to use the library.

## CDN
Coming soon...

## NPM
To install BrAND in your node modules simply run...

```
npm i @fakesamgregory/brand
```

## SASS
BrAND uses SASS to build its components and modules. 
- brand-components.scss - 'Atoms' (lighter, fluffier).
- brand.scss - Including modules

```scss
// your-main.scss

@import "node_modules/@fakesamgregory/brand/scss/brand-components"; 

// or 
@import "node_modules/@fakesamgregory/brand/scss/brand";
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
[guidlines](https://github.com/fakesamgregory/brAND/blob/develop/.github/ISSUE_GUIDELINES.md) for information and guidlines 
on raising an issue.
