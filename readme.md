#### Inicio del proyecto

```console
    npm init -y
```


```console
    git init
```

* Dependencias

```console
    npm install react react-dom
```

* archivo public/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Platzi Conf Merch</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

* archivo src/index.js

```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './components/App';

    ReactDOM.render(<App />, document.getElementById('app'));
```

* archivo src/components/App.jsx

```jsx
    import React from 'react'

    const App = () => {
    return (
        <div>
        <h1>hola mundo</h1>
        </div>
    )
    }

    export default App;
```

#### Configuracion Webpack

* webpack

```console
    npm install webpack webpack-cli webpack-dev-server --save-dev
```

* plugin html

```console
    npm install html-webpack-plugin html-loader --save-dev
```

* babel

```console
    npm install babel-loader  @babel/preset-env @babel/preset-react @babel/core --save-dev
```

#### Webpack CSS

* Plugin CSS

```console
    npm install css-loader mini-css-extract-plugin --save-dev
```

#### ESLint y Prettier

* Instalación eslint

```
    npm install -g eslint
```

* Plugins de eslint

```
    npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
```

* Luego creas un archivo con el siguiente nombre .eslintrc y pegas lo siguiente:

```json
    {
    "extends": [
        "airbnb",
        "prettier"
    ],
    "plugins": [
        "prettier"
    ],
    "rules": {
        "react/jsx-filename-extension": [
        1,
        {
            "extensions": [
            ".js",
            ".jsx"
            ]
        }
        ],
        "react/prop-types": 0,
        "no-underscore-dangle": 0,
        "import/imports-first": [
        "error",
        "absolute-first"
        ],
        "import/newline-after-import": "error"
    },
    "globals": {
        "window": true,
        "document": true,
        "localStorage": true,
        "FormData": true,
        "FileReader": true,
        "Blob": true,
        "navigator": true
    },
    "parser": "babel-eslint"
    }
```

* Instalación eslint

```console
    npm install prettier eslint-plugin-prettier eslint-config-prettier --save-dev
```

* Luego creas un archivo con el siguiente nombre .prettierrc y pegas lo siguiente:

```json
    {
        "trailingComma": "es5",
        "semi": true,
        "singleQuote": true
    }
```

* Geramos el script en package.json

```
    "format": "prettier --write \"{*.js,src/**/*.{js,jsx}}\"",
```

```
    "lint": "eslint src/ --fix"
```

#### React Paypal button

```
    npm install react-paypal-button --save
```

#### DOTENV WebPack

```
    npm install --save-dev dotenv-webpack
```

```javascript
    // webpack.config.js
    const Dotenv = require('dotenv-webpack');
    
    module.exports = {
    ...
    plugins: [
        new Dotenv()
    ]

    };

```

#### Google Maps API

```console
    npm install @react-google-maps/api --save
```