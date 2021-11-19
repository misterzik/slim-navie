![alt text](logo-navie-slim.png "Color.es by MisterZik")
## slim-NAVIE



   
![alt text](Showcase.png "Background colors & Font Colors based on Popular Palettes for 2017. (CSS Only)")


>Slim-Navie JS is a light navigation web component driven by a configuration, was built back in jQuery days, If you are interested in that version, Switch over to branch: Legacy-jQuery, it comes with a built-in demo for test. 
So long jQuery <3, The new version is mainly built in to use for react consumption, or ES6+.

## Installation
* ##### Download [ZIP](https://github.com/misterzik/slim-navie/archive/master.zip) or Clone Project

    ```
    git clone https://github.com/misterzik/slim-navie.git
    ```

* ##### NPM CLI

    ```
    npm install --save @misterzik/slim-navie
    ```


## Usage
Slim-Navi is simple to use; After installing the package on your dependencies folder make sure to include it on your React App;

```
import {SlimNavi} from '@misterzik/slim-navie/dist/index.cjs.js';
```
and for the styling use;
```
import '@misterzik/slim-navie/dist/index.cjs.css';
```

### Configuration
Slim-Navie uses a configuration to build the basic skeleton of the menu;

```
const NavConfig = {
	brand: 'Company CO',
	theme: 'light', // 'dark'
	_hasLogo: false,
	data: [
		{
			id: 0,
			title: 'Title',
			alt: 'Title Alt',
			href: '/home',
			target: '_self',
			_isHash: false,
			_isDropdown: false,
			dropdown: [{}],
			_hasRouter: false
		},
		{
			id: 1,
			title: 'Title',
			alt: 'Title Alt',
			href: '#',
			target: '_self',
			_isHash: false,
			_isDropdown: true,
			dropdown: [
				{
					title: 'Dropdown Title',
					alt: '',
					href: '/#dropdown',
					target: '_self',
					_isHash: false,
				},
				{
					title: 'Dropdown Title',
					alt: '',
					href: '/#dropdown-title',
					target: '_self',
					_isHash: false
				}
			],
			_hasRouter: false
		}
	]
}
```


## React Component

```
<SlimNav config={NavConfig}
	float={'right'}
	theme={'dark'}>
	    COMPANY CO
</SlimNav>
```
Slim-Navi comes with two pre-defined themes, you can choose from 'light' or 'dark' theme by switching
the theme option when using the handle. Float takes care of the position of the list of links.


## Required Plugins

| Plugin | Required |
| ------ | ------ |
| React | Component for React |
| React-Router | Optional |

## Development

Want to contribute? Great, make a pull we will review!


## License

MIT