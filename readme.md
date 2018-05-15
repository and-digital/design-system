# AND Digital Design System

The AND Digital Design System is a CSS library that should be used for all AND Digital products to maintain consistency and branding. It should 
speed up intial set up and help you remain on brand even if it changes.

For more information on how to use The AND Digital Design System, visit the [Wiki](https://github.com/and-digital/design-system/wiki/)

## Quick start
Several quick start options are available:

- [Download the latest release](https://github.com/and-digital/design-system/releases).
- Clone the repo: `git clone https://github.com/and-digital/design-system.git`.

Check the [Wiki](https://github.com/and-digital/design-system/wiki/getting-started) for information on getting started 
and how to use the library.

## CDN
Coming soon...

## SASS
The AND Digital Design System uses SASS to build its components and modules. 
- brand-components.scss - 'Atoms' (lighter, fluffier).
- brand.scss - Including modules

You can override *some* variables such as the breakpoints. Just include these variables before brand to override.
Brand uses [Bootstraps mobile-first grid](https://getbootstrap.com/docs/4.0/layout/grid/).

More info in [Theming](https://github.com/and-digital/design-system/wiki/theming).

## Fonts

The AND Digital Design System uses assets stored on the CDN to load fonts and icons so you will need to include this in the head of your page.

```html
<link rel="stylesheet" href="https://s3-eu-west-1.amazonaws.com/static.andigital.com/fonts/fonts.css" type="text/css">
```
