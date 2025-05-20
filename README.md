
# 📘 JSONPlaceholder Viewer

Aplicación web desarrollada en HTML, JavaScript y TailwindCSS que permite visualizar y consultar publicaciones desde la API [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## 👥 Integrantes del equipo

- **Juan David Muñoz**  
- **Juan David Barrera**

## 🚀 Descripción del proyecto

Esta aplicación permite:

- Ver todos los posts disponibles desde JSONPlaceholder.
- Consultar un post específico por su ID.
- Visualizar la información de forma limpia y moderna con TailwindCSS.

## 🐳 Instrucciones para desplegar la imagen desde DockerHub

> **Nota:** Asegúrate de tener Docker instalado y funcionando correctamente en tu sistema.

### 1. Descargar la imagen desde DockerHub

```bash
docker pull soydavs/parcial:v1

````


### 2. Ejecutar la imagen en un contenedor

```bash
docker run -d -p 8080:80 soydavs/parcial:v1

```

Esto levantará la aplicación en `http://localhost:8080`.

## ⚙️ Detalles técnicos

* **Frontend:** HTML + JavaScript + TailwindCSS
* **Backend:** No requiere backend propio (consume API pública)
* **Contenedor:** Imagen ligera basada en `nginx:alpine`

## 📦 Archivos incluidos

* `index.html`: Página principal de la app.
* `script.js`: Lógica de consultas a JSONPlaceholder.
* `Dockerfile`: Define cómo construir la imagen.
* `README.md`: Documento descriptivo del proyecto.

## ✅ Comandos útiles de Docker

| Acción              | Comando                    |
| ------------------- | -------------------------- |
| Listar contenedores | `docker ps -a`             |
| Detener contenedor  | `docker stop <ID>`         |
| Eliminar contenedor | `docker rm <ID>`           |
| Eliminar imagen     | `docker rmi <ID o nombre>` |

