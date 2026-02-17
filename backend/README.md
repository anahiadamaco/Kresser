# Backend - Kresser SpA

Backend basado en Node.js + Express para gestionar formularios de contacto y solicitudes de presupuesto, enviando datos directamente por email.

## Instalación

Las dependencias ya están instaladas. Si necesitas reinstalar:

```bash
npm install
```

## Configuración

### 1. Variables de Entorno

Abre el archivo `.env` y configura los siguientes datos:

```
PORT=5000
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=tu_email@tudominio.zoho.com
SMTP_PASSWORD=tu_contraseña_zoho
SMTP_FROM=noreply@tudominio.zoho.com
ADMIN_EMAIL=admin@tudominio.zoho.com
```

### 2. Configurar Zoho Mail

Para usar Zoho Mail:

1. Accede a tu cuenta de Zoho Mail
2. Ve a **Configuración > Seguridad**
3. Habilita **"Acceso a aplicaciones menos seguras"** (si es necesario)
4. Usa tu email de Zoho y contraseña en el `.env`
5. El SMTP_HOST es: `smtp.zoho.com` (puerto 587)

## Uso

### Iniciar el servidor en desarrollo

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5000`

### Rutas disponibles

#### 1. **GET /api/health** - Verificar estado del servidor
```bash
curl http://localhost:5000/api/health
```

#### 2. **POST /api/contacto** - Recibir formulario de contacto
```bash
curl -X POST http://localhost:5000/api/contacto \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "telefono": "+56912345678",
    "mensaje": "Quiero saber más sobre los servicios"
  }'
```

#### 3. **POST /api/presupuesto** - Recibir solicitud de presupuesto
```bash
curl -X POST http://localhost:5000/api/presupuesto \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "María González",
    "email": "maria@example.com",
    "empresa": "Mi Empresa SpA",
    "descripcion": "Necesitamos una estructura de acero para un edificio de 5 pisos",
    "presupuesto": "15-50M"
  }'
```

## Funcionamiento

1. El frontend envía los formularios de **Contacto** o **Presupuesto** al backend
2. El backend recibe los datos y valida que estén completos
3. Envía dos emails:
   - **Al cliente**: Confirmación de que recibió su mensaje
   - **Al administrador**: Notificación con los detalles completos

## Próximos pasos

1. Conectar el frontend para enviar datos al backend (actualizar URLs en Contacto.jsx y Presupuesto.jsx)
2. Configurar credenciales de SMTP válidas
3. Desplegar en un servidor (Heroku, Railway, etc.)
