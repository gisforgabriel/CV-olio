# CV-olio

A Jekyll template for a simple two page CV &amp; portfolio website. It is compatible with all modern browsers and will be seen in all its glory by those browsing without [NoScript](https://noscript.net/) et al.

- responsive
- uses [golden ratio](https://en.wikipedia.org/wiki/Golden_ratio) where appropriate
- no CSS frameworks
- no external dependencies
- no JavaScript
- fonts embedded in CSS
- favicon embedded in CSS
- inline SVG icons (rather than icon fonts)
- custom CSS for printing CV page

Demo site - https://cv-olio.netlify.com/cv

[![Build Status](https://travis-ci.org/gisforgabriel/CV-olio.svg?branch=master)](https://travis-ci.org/gisforgabriel/CV-olio)

## Customisation

### _config.yml

Option | Description | Required | Default | Notes
------ | ----------- | :------: | ------- | -----
`owner` | Your full name | :white_check_mark: | | used in page titles
`github` | Your Github username (without the @) | | | used in navigation menu
`baseurl` | | | | see [Serve Command Options](http://jekyllrb.com/docs/configuration/#serve-command-options) in the docs
`url` | | :white_check_mark: | | 
`pattern-style` | Your prefered pattern style | | `none` | used for the background in large viewports
`pattern-foreground` | Colour of pattern itself | | `black` | use CSS [named colours](http://www.w3schools.com/colors/colors_names.asp), or hex values
`pattern-background` | Colour of pattern background | | `white` | use CSS [named colours](http://www.w3schools.com/colors/colors_names.asp), or hex values
`pattern-size` | Width and height of individual pattern tiles | | `1` | use integers (compiles to multiples of `em`)
`language` | declared language of site | :white_check_mark: | `en` | [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)

### Portfolio items

Item descriptions are simply taken from the Markdown beneath the YAML.

Option | Description | Required | Default | Notes
------ | ----------- | :------: | ------- | -----
`title` | Item title | :white_check_mark: | | avoid >40 characters
`employer` | Name of organisation/person this work was created for | | |
`image` | File name of corresponding image in `/_images` | | `title`.jpg |
`skill`¹ | List of skills associated with this work | | | comma separated list
`link` | Link to relevant page on external site | | |
`link-text` | Anchor text for `link` | | `link` |
`display-order` | Custom sort by ascending integer value | | alphabetical by filename |

¹ Not yet working

### Favicon

Edit `/_includes/favicon.html` to either use a base64 encoded favicon or link to an external file.

## Credits

Many thanks to the people behind the projects this project relies on:

- [PatternBolt](https://github.com/buseca/patternbolt) - Ruggero Motta, Martin Iturrieta (The MIT License)
- [Lora](https://github.com/cyrealtype/Lora-Cyrillic) - Olga Karpushina, Alexei Vanyashin (SIL Open Font License)
- [Muli](https://github.com/vernnobile/MuliFont) - Vernon Adams (SIL Open Font License)
- [Entypo](https://github.com/danielbruce/entypo) - Daniel Bruce (CC BY-SA 4.0)
- [Jekyll](https://github.com/jekyll/jekyll) - (The MIT License)