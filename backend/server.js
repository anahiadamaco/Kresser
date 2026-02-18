require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configurar transporte de email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true para 465, false para 587 (Zoho usa 587)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend activo' });
});

// Ruta para recibir contactos
app.post('/api/contacto', async (req, res) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;

    // Validar datos
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    // Email para el cliente
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Hemos recibido tu mensaje - Kresser SpA',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2D5F7F; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { padding: 20px; background-color: #f9f9f9; margin: 20px 0; border-radius: 5px; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>¡Hola ${nombre}!</h2>
            </div>
            
            <div class="content">
              <p>Recibimos tu mensaje y te agradecemos el contacto. Nuestro equipo está revisándolo en este momento.</p>
              
              <p><strong>Lo que nos enviaste:</strong></p>
              <div style="background-color: white; padding: 15px; border-left: 4px solid #3FA876; margin: 15px 0; border-radius: 3px;">
                ${mensaje.replace(/\n/g, '<br>')}
              </div>
              
              <p>Nos pondremos en contacto contigo pronto para ayudarte. Si tu consulta es urgente, no dudes en contactarnos a través de nuestro WhatsApp.</p>
              
              <p>¡Gracias por confiar en Kresser SpA!</p>
              <p><strong>Equipo Kresser</strong></p>
            </div>
            
            <div class="footer">
              <p>Este es un email automático. No necesitas responder.</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    // Email para el administrador
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `[CONTACTO] Mensaje de ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2D5F7F; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .section { background-color: #f9f9f9; padding: 15px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #3FA876; }
            .detail { margin: 8px 0; }
            .label { font-weight: bold; color: #2D5F7F; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Nuevo Contacto</h2>
            </div>
            
            <div class="section">
              <div class="detail"><span class="label">Nombre:</span> ${nombre}</div>
              <div class="detail"><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></div>
              ${telefono ? `<div class="detail"><span class="label">Teléfono:</span> <a href="tel:${telefono}">${telefono}</a></div>` : ''}
              <div class="detail"><span class="label">Recibido:</span> ${new Date().toLocaleString('es-CL')}</div>
            </div>
            
            <div class="section">
              <h3>Mensaje:</h3>
              <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 3px; margin: 0;">${mensaje}</p>
            </div>
            
            <div class="footer">
              <p>Responde al correo del cliente lo antes posible.</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    res.json({ success: true, message: 'Mensaje enviado exitosamente' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al procesar el formulario' });
  }
});

// Ruta para recibir presupuestos
app.post('/api/presupuesto', async (req, res) => {
  try {
    const { nombre, email, empresa, descripcion } = req.body;

    // Validar datos
    if (!nombre || !email || !descripcion) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    // Email para el cliente
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Recibimos tu solicitud de presupuesto - Kresser SpA',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2D5F7F; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .content { padding: 20px; background-color: #f9f9f9; margin: 20px 0; border-radius: 5px; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>¡Hola ${nombre}!</h2>
            </div>
            
            <div class="content">
              <p>Recibimos tu solicitud de presupuesto y nos emocionamos con tu proyecto. Nuestro equipo ya está trabajando en tu propuesta.</p>
              
              <p><strong>Tu proyecto:</strong></p>
              <div style="background-color: white; padding: 15px; border-left: 4px solid #3FA876; margin: 15px 0; border-radius: 3px;">
                ${descripcion.replace(/\n/g, '<br>')}
              </div>
              
              ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
              
              <p>Analizaremos los detalles y te enviaremos un presupuesto personalizado en los próximos días. Si necesitamos más información, nos pondremos en contacto.</p>
              
              <p>¡Gracias por la oportunidad de trabajar contigo!</p>
              <p><strong>Equipo Kresser</strong></p>
            </div>
            
            <div class="footer">
              <p>Este es un email automático. No necesitas responder.</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    // Email para el administrador
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `[PRESUPUESTO] Solicitud de ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2D5F7F; color: white; padding: 20px; text-align: center; border-radius: 5px; }
            .section { background-color: #f9f9f9; padding: 15px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #3FA876; }
            .detail { margin: 8px 0; }
            .label { font-weight: bold; color: #2D5F7F; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Nueva Solicitud de Presupuesto</h2>
            </div>
            
            <div class="section">
              <div class="detail"><span class="label">Nombre:</span> ${nombre}</div>
              <div class="detail"><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></div>
              ${empresa ? `<div class="detail"><span class="label">Empresa:</span> ${empresa}</div>` : ''}
              <div class="detail"><span class="label">Recibido:</span> ${new Date().toLocaleString('es-CL')}</div>
            </div>
            
            <div class="section">
              <h3>Descripción del Proyecto:</h3>
              <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 3px; margin: 0;">${descripcion}</p>
            </div>
            
            <div class="footer">
              <p>Contacta al cliente y envía el presupuesto en los próximos días.</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    res.json({ success: true, message: 'Presupuesto solicitado exitosamente' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud de presupuesto' });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});
