const nodemailer = require('nodemailer');
const {Router} = require('express');
const multer = require('multer');
const router = Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
  user: "drop.atlixco@gmail.com",
  pass: "lsjrhjectkvhuayf",
},
});

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/send-email', upload.array('archivos'), (req, res) => {
  const { nombre, email, tramite, destinatario} = req.body;
  const attachments = [];

  // Manejar archivos adjuntos si se incluyen
  if (req.files && req.files.length > 0) {
    req.files.forEach(file => {
      attachments.push({
        filename: file.filename,
        path: file.path,
      });
    });
  }

  const mailOptions = {
    from: 'Mensaje enviado por <drop.atlixco@gmail.com>',
    to: destinatario,
    subject: 'Requisitos para el tramite: '+tramite,
    text: `Nombre del solicitante: ${nombre}\nMetodo de contacto: ${email}`,
    attachments,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Correo electrónico enviado correctamente' });
    }
  });
});

module.exports = router;
