# Mis Custom Hooks

Este proyecto contiene una colección de custom hooks reutilizables para tus aplicaciones React. A continuación se muestra cómo utilizar algunos de los hooks incluidos.

## Tabla de Contenidos

- [useCounter](#usecounter)
- [useFetch](#usefetch)
- [useForm](#useform)

---

## useCounter

Un hook para manejar contadores fácilmente.

```js
import { useCounter } from './hooks/useCounter';

const { counter, increment, decrement, reset } = useCounter(10);
```

- `counter`: valor actual.
- `increment()`: incrementa el contador.
- `decrement()`: decrementa el contador.
- `reset()`: reinicia el contador.

---

## useFetch

Permite realizar peticiones HTTP de forma sencilla.

```js
import { useFetch } from './hooks/useFetch';

const { data, loading, error } = useFetch('https://api.example.com/data');
```

- `data`: respuesta de la petición.
- `loading`: estado de carga.
- `error`: error si ocurre.

---

## useForm

Facilita el manejo de formularios.

```js
import { useForm } from './hooks/useForm';

const { name, email, onInputChange, onResetForm } = useForm({ name: '', email: '' });
```

```js
// Ejemplo de uso en un formulario
const { name, email, onInputChange, onResetForm } = useForm({ name: '', email: '' });

return (
    <form>
        <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            placeholder="Nombre"
        />
        <input
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
            placeholder="Correo electrónico"
        />
        <button type="button" onClick={onResetForm}>
            Limpiar
        </button>
    </form>
);
```

- `formState`: estado actual del formulario. Se puede desestructurar para acceder a los valores.
- `onInputChange`: actualiza el estado al cambiar un input.
- `onResetForm`: reinicia el formulario.

---

## Contribuciones

¡Si tienes ideas para nuevos hooks, no dudes en contribuir!
