### Paso a paso para conectar tu aplicación con la API de PayPal

Para utilizar la API de PayPal para integrar pagos es necesario darse de alta en PayPal Developer. En este sitio podrás encontrar todos los recursos necesarios para empezar a integrar pagos en tus páginas web y en nuestro proyecto Conf Merch.

Una vez que te has registrado es necesario seguir los siguientes pasos para crear tu token de desarrollo y poderlo integrar en este proyecto.

<b> Crear “Sandbox Access Token”: </b>
<hr/>
Dentro de tu cuenta como desarrollador debes dirigirte al apartado “My Apps & Credentials” y en la parte inferior encontrarás el apartado “Express Checkout via Braintree SDK - Sandbox Accounts” donde crearemos nuestro token para la aplicación.

<img src="https://static.platzi.com/media/user_upload/paypal-1-8289e536-5853-4ef1-b54e-33ed5827edd3.jpg">

Elegimos el tipo de cuenta que vamos a utilizar (Personal/Business).

<img src="https://static.platzi.com/media/user_upload/paypal-2-f18c3d2d-2685-4921-9357-7b050b06fbf0.jpg">

Ahora que tenemos nuestro token generado debemos de revisar a detalle la expiración, así como el manejo de divisas que vamos a utilizar.

Si no encuentras tu divisa, selecciona “United States Dollar” que sería la divisa por defecto.

Si queremos revisar, actualizar el token o hacer algún cambio podemos regresar a la sección “My Apps & Credentials” para ver los detalles de tu cuenta.

<img src="https://static.platzi.com/media/user_upload/paypal-3-480614f2-9778-43d1-a716-fc40fdbd5b7a.jpg">

IMPORTANTE: para efectos de pruebas es necesario tener tu token válido en modo “Sandbox”. Si quieres habilitar tu token para tu proyecto en producción solo debes de seguir los mismos pasos pero eligiendo la opción de “Live” y creando una nueva App.

<b>Crear una app en PayPal para recibir pagos: </b>
<hr/>
Para habilitar PayPal como un método de pago válido y recibir transacciones en tu proyecto en producción debemos crear una aplicación a la cual estará ligado nuestro token.

<img src="https://static.platzi.com/media/user_upload/paypal-4-f2fa159e-bc68-4671-9995-a3174612a6b6.jpg">

Una vez creado este token ligado a tu cuenta principal podrás elegir las características a las cuales podemos acceder, seleccionamos todas y le damos “save”.

Es necesario especificar una URL de retorno cuando la transacción ha sido exitosa, es parte de los requerimientos para este proyecto. Ahora que tienes todos los requisitos tienes tu API token listo para producción.

Ver mis traslaciones:
<hr/>
En el apartado de “Sandbox” podrás ver las cuentas creadas, notificaciones, los llamados a la API, el simulador entre otras herramientas que te ayudarán a darle seguimiento a tus pruebas de integración con PayPal.

Para revisar tus llamados y eventos en tu API de producción solo debes de dirigirte al apartado “Live” donde encontrarás la información que estás solicitando para ver qué está pasando con cada evento ocurrido.

Recomendación
<hr/>
No olvides pasarte por la documentación para que puedas entender cada particularidad que te ofrece PayPal. Solo estamos utilizando uno de los recursos que nos provee, pero te invito a explorar a detalle la documentación y encontrar nuevas herramientas que se puedan incluir en este proyecto.

Cuéntame en la sección de comentarios si tienes ideas y qué mejoras podrían suponer en Conf Merch.