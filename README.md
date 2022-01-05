# supCity

## Project Objectives

```zsh
git checkout -b workOnANewBranch
```

* Essential Goals:

  * On load, fetch the city from Supabase and render details (including all slogans) to the page.

  * On load, if a city does not exist for this user, create one.

  * On change of dropdown, update city in Supabase, then update UI to show the corresponding image.

  * On click of name change button, update city name in Supabase, then update UI to show the corresponding name.

  * On click of slogan button, update the city slogans in Supabase. This means you will fetch the old city's slogans, push the new slogan to these old slogans, and send the mutated array to your updateSlogans function.

* Stretch Goals:

  *

### HTML SETUP

*Should include*...

* header:

  * 1 header element to contain city name. Text content will be assigned dynamically.

* Slogan section:

  * Text element for each city slogan. Elements and text content will be created and assigned dynamically.

* Figure section:

  * 3 figure elements. Image element and src attribute will be created and assigned dynamically.

* Dropdown section:

  * 3 select elements. Image src will be determined by option selected by user.

* Form section:

  * 2 form elements, for user to input city name and city slogan.

```html
<header>
  <h1 id="city-name"><!-- City name --></h1>
</header>
```

```html
<section>

  <figure id="nature-figure">
    <!--
    <img src="" alt="">
    -->
    <figcaption id="architecture-figure">Nature</figcaption>
  </figure>
    <figure>
    <!--
    <img src="" alt="">
    -->
    <figcaption>Architecture</figcaption>
  </figure>
    <figure id="art-figure">
    <!--
    <img src="" alt="">
    -->
    <figcaption>Art</figcaption>
  </figure>

</section>
```

```html
<section>
  <select name="nature" id="nature-select">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <select name="architecture" id="architecture-select">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <select name="art" id="art-select">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</section>
```

```html
<section>
  <form id="name-form">
    <label for="name">Name</label>
    <input type="text" name="name" placeholder="city name" required>
    <button type="submit" form="name-form">Name</button>
  </form>
  <form id="slogan-form">
    <label for="slogan">Slogan</label>
    <input type="text" name="slogan" placeholder="city slogan" required>
    <button type="submit" form="slogan-form">Slogan</button>
  </form>
</section>
```

```html
<section id="slogan-section">
  <!-- 
    <span>City Slogan</span>
  -->
</section>
```

### JS SETUP

1. Grab essential DOM elements:

    * cityName

    * natureFigure

    * architectureFigure

    * artFigure

    * natureSelect

    * architectureSelect

    * artSelect

    * nameForm

    * sloganForm

    * sloganSection

2. addEventListener for:

    * natureSelect

    * architectureSelect

    * artSelect

    * nameForm

    * sloganForm

3. Write functions for:

    * displayCity(city) : Takes in a city and displays the images and slogans on the DOM.

    * fetchCity() : fetches city for currently logged in user from Supabase.

    * updateName(newName) : updates name of city for currently logged in user from Supabase.

    * updateNature(newNature) : updates Nature id of city for currently logged in user from Supabase.

    * updateArchitecture(newArchitecture) : updates Architecture id of city for currently logged in user from Supabase.

    * updateArt(newArt) : updates Art id of city for currently logged in user from Supabase.

    * updateSlogans(newSlogans) : updates slogans of character for currently logged in user from Supabase.

*note*: TDD for each pure function