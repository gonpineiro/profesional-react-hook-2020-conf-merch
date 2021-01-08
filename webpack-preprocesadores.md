Loaders de Webpack para Preprocesadores CSS

¿Quieres utilizar tu preprocesador favorito (como Sass, Less o Stylus) para crear los estilos en tus aplicaciones con React.js? En esta lectura aprenderás cómo implementarlos dentro de tu proyecto con Webpack.

Configuración de tu proyecto con Sass
<hr/>

Primero debemos de instalar las dependencias necesarias para darle soporte a Sass dentro de nuestro proyecto:

```console
    npm install --save-dev sass-loader node-sass
```

Una vez agregadas las dependencias necesarias, debemos agregar una nueva regla a la configuración de Webpack en la parte de rules:

```javascript
    {
        test: /\.scss$/,
        loader: [
            MiniCSSExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ]
    }
```
Ahora puedes agregar archivos Sass a cada componente y tendrás el mismo resultado que configurar directamente CSS en Platzi Conf Merch.

Configuración de tu proyecto con Less
<hr/>

Para darle soporte a Less dentro del proyecto debemos repetir los pasos anteriores, pero con la configuración apropiada para utilizar Less.

```console
    npm install --save-dev less less-loader
```

Agregar la configuración de Less a Webpack

```javascript
    {
        test: /\.less$/,
        loader: [
            MiniCSSExtractPlugin.loader,
            'css-loader',
            'less-loader'
        ]
    }
```

Configuración de tu proyecto con Stylus
<hr/>

```console
    npm install --save-dev stylus stylus-loader
```

Ahora agregamos la configuración de Stylus a Webpack:

```javascript
    {
	    test: /\.styl$/,
	    loader: [
		    MiniCSSExtractPlugin.loader,
		    'css-loader',
		    'stylus-loader'
	    ]
    }
```
