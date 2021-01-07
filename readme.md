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

