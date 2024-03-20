const nodemailer = require('nodemailer');
const {Router} = require('express');


const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
    user: "drop.atlixco@gmail.com",
    pass: "Cl@v3820.",
  },
});

const router = Router();

router.post('/send-email', (req, res) => {
  const { nombre, email, archivos } = req.body;

  const mailOptions = {
    from: 'dro.atlixco@gmail.com',
    to: 'perez.lon820@gmail.com',
    subject: 'Formulario de contacto',
    text: `Nombre: ${nombre}\nEmail: ${email}`,
    
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
