# **DIGITICKET-backend**

---

<div align="center">

[![Node Version](https://img.shields.io/badge/nodejs-14,_16-green.svg?logo=node.js&style=flat)](https://nodejs.org)
[![MongoDB Version](https://img.shields.io/badge/mongodb-4.0,_4.2,_4.4-success.svg?logo=mongodb&style=flat)](https://www.mongodb.com)

[![Node Version](https://img.shields.io/badge/npm-8.10-red.svg?logo=npm&style=flat/)](https://www.npmjs.com/)

[![Licencia](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)

</div>

---

## Descripción
**Backend de la aplicación móvil "DIGITICKET"**

## Modelos

<details><summary><b>Student</b></summary>
<p>

- university_code
- password
- last_name
- first_name
- institutional_mail
- photo
- activated_account
- logged_in
- personal_mail
- personal_phone
- preference_campus

</p>
</details>

<details><summary><b>Food</b></summary>
<p>

- name
- category
- service_type
- nutritional_info

</p>
</details>

<details><summary><b>Turn</b></summary>
<p>

- service_type
- turn_number
- schedule
- rations_available
- entree_rations
- second_rations
- dessert_rations
- drink_rations

</p>
</details>

<details><summary><b>Ticket</b></summary>
<p>

- student_id
- turn_id
- ticket_number
- foods
- campus
- level

</p>
</details>

## Endpoints

### Student
- [x] **GET** `/api/students` retornar lista de estudiantes.
- [x] **GET** `/api/students/{id}` retornar estudiante según su id.
- [x] **GET** `/api/students/validateActivation/{university_code}` validar activación de cuenta.
- [x] **POST** `/api/students` registrar estudiante.
- [x] **POST** `/api/students/login` autenticación de estudiante.
- [x] **PUT** `/api/students/{id}` modificar estudiante según su id
- [x] **DELETE** `/api/students/{id}` eliminar estudiante según su id

### Food
- [x] **GET** `/api/foods` retornar lista de comidas.
- [x] **GET** `/api/foods/{id}` retornar comida según su id.
- [x] **POST** `/api/foods` registrar comida.
- [x] **PUT** `/api/foods/{id}` modificar comida según su id
- [x] **DELETE** `/api/foods/{id}` eliminar comida según su id

### Turn
- [x] **GET** `/api/turns` retornar lista de turnos.
- [x] **GET** `/api/turns/{id}` retornar turno según su id.
- [x] **POST** `/api/turns` registrar turno.
- [x] **PUT** `/api/turns/{id}` modificar turno según su id
- [x] **PUT** `/api/turns/reduceRations/{id}` reducir raciones de turno según su id
- [x] **DELETE** `/api/turns/{id}` eliminar turno según su id

### Ticket
- [x] **GET** `/api/tickets` retornar lista de tickets.
- [x] **GET** `/api/tickets/{id}` retornar ticket según su id.
- [x] **POST** `/api/tickets` registrar ticket.
- [x] **PUT** `/api/tickets/{id}` modificar ticket según su id
- [x] **DELETE** `/api/tickets/{id}` eliminar ticket según su id


## Ejecución

### Local

```sh
# Iniciar servidor de MongoDB
$ mongod

# Instalar dependencias
$ npm i

# Ejecutar aplicación
$ npm start
```

## Enviar peticiones a la API

### Cliente API REST

Importamos el archivo [Backend-IHC.postman_collection.json](https://github.com/anthonyquispev/DIGITICKET-backend/blob/master/Backend-IHC.postman_collection.json) desde algún cliente de API REST, que en este caso será la herramienta Postman.

<p align="center">
  <img src="https://github.com/anthonyquispev/DIGITICKET-backend/blob/master/screenshots/Postman_Import.PNG">
</p>

<p align="center">
  <img src="https://github.com/anthonyquispev/DIGITICKET-backend/blob/master/screenshots/Postman_POST.PNG">
</p>

<p align="center">
  <img src="https://github.com/anthonyquispev/DIGITICKET-backend/blob/master/screenshots/Postman_GET.PNG">
</p>

### BASH
También podemos realizar peticiones a la API desde una consola Bash.

```bash
curl -X POST http://localhost:4000/api/students -H 'Content-Type:application/json' -d "{\"university_code\":\"18200503\", \"password\":\"123456\", \
"last_name\": \"Vilca\", \"first_name\": \"Jorge\", \"institutional_mail\": \"jorge.vilca@unmsm.edu.pe\"}"
```

<p align="center">
  <img src="https://github.com/anthonyquispev/DIGITICKET-backend/blob/master/screenshots/bash_POST.PNG">
</p>

```bash
curl http://localhost:4000/api/foods
```

<p align="center">
  <img src="https://github.com/anthonyquispev/DIGITICKET-backend/blob/master/screenshots/bash_GET.PNG">
</p>

## Estructura

<pre>
📦DIGITICKET-backend
 ┣ 📂screenshots
 ┃ ┣ 📜Bash_GET.PNG
 ┃ ┣ 📜Bash_POST.PNG
 ┃ ┣ 📜Postman_GET.PNG
 ┃ ┣ 📜Postman_Import.PNG
 ┃ ┗ 📜Postman_POST.PNG
 ┣ 📂src
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜foods.controller.js
 ┃ ┃ ┣ 📜students.controller.js
 ┃ ┃ ┣ 📜tickets.controller.js
 ┃ ┃ ┗ 📜turns.controller.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜Food.js
 ┃ ┃ ┣ 📜Student.js
 ┃ ┃ ┣ 📜Ticket.js
 ┃ ┃ ┗ 📜Turn.js
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜foods.js
 ┃ ┃ ┣ 📜students.js
 ┃ ┃ ┣ 📜tickets.js
 ┃ ┃ ┗ 📜turns.js
 ┃ ┣ 📜app.js
 ┃ ┣ 📜database.js
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜Backend-IHC.postman_collection.json
 ┣ 📜Data.txt
 ┣ 📜LICENSE
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
</pre>

## Profesor
* Benavente Orellana, Edwin Hugo

## Integrantes
* Chocce Alanya, Miguel Gerson
* Porras Muñoz, Bruno Franchesco
* Quispe Vega, Anthony Yair
* Saldaña García, Cristhian Erick
* Ticona Barrantes, Fabio Isaac
