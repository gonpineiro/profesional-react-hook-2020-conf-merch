#### Git Hooks con Husky

Husky es una herramienta que nos permite ejecutar Git Hooks de forma más amigable y sencilla con los cuales vamos a garantizar que se corren las pruebas pertinentes en nuestro código y de esta forma no enviar un bug o inconsistencias al repositorio del proyecto.

* Instalar Husky
<hr/>

```console
    npm install husky --save-dev
```

* Agregar Husky a nuestro proyecto:
<hr/>

Para integrar Husky a nuestro proyecto y garantizar que cada commit cumple con el estándar deseado debemos de agregar la integración dentro de nuestro archivo package.json.

```json
    "husky": {
        "hooks": {
        "pre-commit": "npm run lint",
        "...": "..."
        }
    }
```

Una vez agregada la configuración podemos estar seguros de que antes de agregar cada commit se ejecutarán estos hooks, los cuales validarán las pruebas necesarias que agreguemos a nuestro proyecto tenga un resultado positivo.

Si existe un error o las pruebas que incorporamos el proyecto no funcionan, en la consola podremos ver el resultado mostrando el error por el cual no se puede enviar el commit a nuestro repositorio.
