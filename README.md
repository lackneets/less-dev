# LESS Development Kit

Develop stylesheet in LESS, see the result changes on the fly.
 
## Installation

Install dependencies

```bash
npm install
```

Start watch changes and run livereload server.

```
gulp watch --PORT 35729
```

The default port will be `35729` if not specified


## Basic Usage

Include livereload helper in HTML

```html
<script src="http://works.lackneets.tw:35729/livereload.js"></script>
```

Write some LESS stylesheets, save as `styles/layout.less` for example. Then include css file as same name `leyout.css`. 

```html
<link rel="stylesheet" type="text/css" href="http://YOURHOST/less-dev/styles/layout.css">
```