![alt text](logo-navie-slim.png "Color.es by MisterZik")	
## slim-NAVIE	
---	

Slim-Navie is a tiny bit CSS library fueled with SCSS on the back.	

![alt text](Showcase.png "Background colors & Font Colors based on Popular Palettes for 2017. (CSS Only)")	

### Installation	
* Download [ZIP](https://github.com/misterzik/slim-navie/archive/master.zip) or Clone Project	

    `git clone https://github.com/misterzik/slim-navie.git`	

* Npm	

    `npm install @misterzik/slim-navie`	


### Usage	
Slim-Navie comes with a built-in demo, Please refer to folder `/public`. Install the package,json by using npm and doing `npm install` this will isntall dependencies for local host demo.	

Note: If you would like to skip the demo, all you have to do is include the css and js on your project directory:	

1. Include the `css` files located in the `dist` folder on your root folder.	

2. Include this new files on your `index.html` or `.html` file were you would like to implement slim-navie.	
```	
<link rel="stylesheet" href="slim-navie.min.css">	
```	
and the javascript file:	
```	
<script src="js/navie.min.js"></script>	
<script>	
  $(this).navie();	
</script>	
```	
3. With navie we wrap around the `nav` element so to start the plugin all you need is to start the `nav` tag.	


Example )	

```	
<nav>	
      <div class="brand">	
        <a href="#!">Logo</a>	
      </div>	
      <div class="nav-mobile">	
        <a id="nav-toggle" href="#!"><span></span></a>	
      </div>	
      <ul class="nav-list">	
        <li>	
          <a href="#!">Home</a>	
        </li>	
        <li>	
          <a href="#!">About</a>	
        </li>	
        <li>	
          <a href="#!">Services</a>	
        </li>	
        <li>	
          <a href="#!">Pricing</a>	
        </li>	
        <li>	
          <a href="#!">Contact</a>	
          <ul class="nav-dropdown">	
            <li>	
              <a href="#!">Support</a>	
            </li>	
            <li>	
              <a href="#!">Sales</a>	
            </li>	
          </ul>	
        </li>	
      </ul>	
    </nav>	
```	


 Would you like a lighter menu ? .. sure you can do that, we built slim-navie with two options, To use this, Please go ahead and add the class `light` to the `nav` element.	

 Example )	

```	
<nav clas="light">	
      <div class="brand">	
        <a href="#!">Logo</a>	
      </div>	
      <div class="nav-mobile">	
        <a id="nav-toggle" href="#!"><span></span></a>	
      </div>	
      <ul class="nav-list">	
        <li>	
          <a href="#!">Home</a>	
        </li>	
        <li>	
          <a href="#!">About</a>	
        </li>	
        <li>	
          <a href="#!">Services</a>	
        </li>	
        <li>	
          <a href="#!">Pricing</a>	
        </li>	
        <li>	
          <a href="#!">Contact</a>	
          <ul class="nav-dropdown">	
            <li>	
              <a href="#!">Support</a>	
            </li>	
            <li>	
              <a href="#!">Sales</a>	
            </li>	
          </ul>	
        </li>	
      </ul>	
    </nav>	
```	
