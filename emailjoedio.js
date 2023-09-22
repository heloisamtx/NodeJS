var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lolomachadoteixeira@gmail.com',
    pass: 'hqfx hrga bmge aonu'
  }
});

var mailOptions = {
  from: 'lolomachadoteixeira@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'AAAA Email using Node.js',
  text: 'Bom dia! Heloisa Machado - 2B senha:hqfx hrga bmge aonu'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});