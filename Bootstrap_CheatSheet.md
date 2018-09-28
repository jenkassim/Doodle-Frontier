# Bootstrap Cheat Sheet

- To use bootstrap, either use local bootstrap files or use from CDN :

- From local source:
```
  <!-- Bootstrap -->
  <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
```

- From CDN source:
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
```

- Types of div:
    - `Class` Container fixed-width : will have padding up to max width
    - `Class` Container-fluid : will fill up space to max width
    - `Class` Container responsive

- Bootstrap uses a responsive grid system, which makes it easy to put elements into rows and specify each element's relative width. Most of Bootstrap's classes can be applied to a div element.</br>
    `<div class="container-fluid">`

- Uses rows & columns to control layout.
- Max columns is 12 in a single row. If no of columns > 12, the 13th item will appear below.

- For debugging, use a container well to see dimension
` <div class="well"></div>`

```
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back. ">
    </div>
  </div>
```

### Meta Tag Element
- `meta` element specific for Bootstrap to signify compatibility for various device screen sizes

### Bootstrap Grid
- Menu (top)
- Header (below menu)
- Contents
- Footer

### Bootstrap Elements
#### Navigation Element


### Bootstrap Font Awesome</br>
- Include Bootstrap lib : </br>
` <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>`

#### Icon
- Add the Font Awesome classes to the i element to turn it into an icon, for example:</br>
` <i class="fa fa-info-circle"></i> `

```
<div class="col-xs-4">
    <button class="btn btn-block btn-primary">
    <i class="fa fa-thumbs-up">Like</i>
    </button>
</div>
```
