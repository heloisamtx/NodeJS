var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lolomachadoteixeira@gmail.com',
    pass: 'yourpamvpo ijix xqbc skib sword'
  }
});

var mailOptions = {
  from: 'lolomachadoteixeira@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'Heloisa Machado 2B'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 