# PRUEBA TÉCNICA SYSNET

Sistema CRUD de clientes desarrollado con:

- Angular
- Node.js
- Express
- MongoDB
- Mongoose

---

# FUNCIONALIDADES

✅ Crear clientes  
✅ Consultar clientes  
✅ Actualizar clientes  
✅ Eliminar clientes  
✅ Validaciones de formulario  
✅ Validación de correo  
✅ Validación de teléfono  
✅ Validación de edad según tipo de documento  
✅ Alertas con SweetAlert2

---

# TECNOLOGÍAS UTILIZADAS

## Frontend

- Angular
- TypeScript
- HTML
- CSS
- Reactive Forms
- SweetAlert2

## Backend

- Node.js
- Express
- MongoDB
- Mongoose

---

# INSTALACIÓN DEL PROYECTO

## 1. Clonar el repositorio

```bash
git clone https://github.com/EsteMoca-git/Prueba-Tecnica.git 



BACKEND
2. Entrar a la carpeta backend
cd backend
3. Instalar dependencias
npm install
4. Crear archivo .env

Crear un archivo llamado:

.env

Agregar:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/pruebaSysnet
5. Ejecutar servidor backend
npm run dev

Servidor:

http://localhost:3000
FRONTEND
6. Entrar a la carpeta frontend
cd frontend
7. Instalar dependencias
npm install
8. Ejecutar Angular
ng serve

Frontend:

http://localhost:4200
BASE DE DATOS

El proyecto utiliza MongoDB local.

Verificar que MongoDB esté ejecutándose antes de iniciar el backend.

VALIDACIONES IMPLEMENTADAS
Teléfono solo acepta números
Nombres y apellidos solo aceptan letras
Validación de email
Fecha no puede ser mayor a la actual
Validación de edad según tipo de identificación
Tipo Documento	Edad Permitida
RC	Menor de 7 años
TI	Entre 7 y 17 años
CC	Mayor o igual a 18 años
ESTRUCTURA DEL PROYECTO
Backend
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
Frontend
frontend/
├── src/
│   ├── app/
│   ├── services/
│   ├── interfaces/
│   └── pages/
AUTOR Esteban Moya

Desarrollado por Esteban Alfredo Moya Castro
