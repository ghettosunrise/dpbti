# README #

This template for landing page development use gulp with browsersync, scss, jade, autoprefixer and more features

### What is this repository for? ###

* for front-end development of landing pages for Monochrome development band
* Version 1.2.1

### How do I get set up? ###

* template for front-end development
* Configuration: gulp with browsersync and other features, scss, jade
* Dependencies: node v.7 or more
* Database configuration: no DB
* How to run: first install packages (npm i) after run command gulp gulp-jade
* Deployment instructions: gulp minify (minify css, js, and img in current directory)


### JADE ###

* all jade files in template directory.
* to create new page add new jade file in template/pages directory
* to change variables (title, description, gtmID) cnange variables in template/common/variables.jade
* footer scripts can be changed in template/common/scripts.jade
* all partials of page (head, header, sections, footer, modals, forms) can be modifed and writed in template/partials/ directory
* to remove some parts from index.jade just commented line in template/pages/index.jade

### SCSS ###
* in sass directory we have libs.scss main.scss media.scss and 3 directories(common, lib, partials)
* to remove unnided libs just commented line in libs.scss
* fonts, mixins, variables and begin styles in sass/common directory
* all stales for pages partials(header, sections, footer, forms, buttons, ...) in sass/partials directory

### Who do I talk to? ###

* Repo owner or admin holodniak.e from Monochrome development band
* Email of repo owner holodniak.e@gmail.com


### FEATURES ###


### COUTDOWN ###
* to use countdown use this code
```
	<div class='simpleCountdown' data-cookies='yep' data-extra='4,0,0' id="countdown1"></div>
	<div class='simpleCountdown' data-cookies='nope' data-date='2017,1,18,0' id="countdown2"></div>
```
* or in jade
```
	.simpleCountdown#countdown1(data-cookies='yep' data-extra='4,0,0')
	.simpleCountdown#countdown2(data-cookies='nope' data-date='2018,1,19,0')
```

### ANCHOR SCROLLER ###
* to simple use of anchor scroller just add class 'btn-anchor' in button and in attr href write name of link to scroll
* example
```
	<a href="#top" class="btn-anchor">to top</a>
	<a name="top"></a>
```

### VALIDATION OF FORMS ###
* to validete form uses validator.js, also in phone input uses intlTelInput.min.js and scripts to autocountry code

### VIDEOPOPUP ###
* to open video in popup use this example (for vimeo and youtube)
```
	<a href="#modal-contact" data-video='vimeo' data-srcvideo='193236599'>Open vimeo</a>
	<a href="#modal-contact" data-video='youtube' data-srcvideo='NL1tbgaiwlM'>Open youtube</a>
```
### ChangeLog ###

## v. 1.2.3  ##
* remove php for utm
* remove old bootstrap
* change breakpoints in bootstrap4

## v. 1.2.2  ##
* remove php for utm
* remove old bootstrap
* change breakpoints in bootstrap4

## v. 1.2.1  ##
* fix bugs
* add automating loading utm with javaScript
* add loading animation to form

## v. 1.2.0  ##
* add bootstrap4 grid system
* update minify function to minify files






