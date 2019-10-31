const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
    console.log('We are live on port 4444');
});


app.get('/', (req, res) => {
    res.send('Welcome to my api');
})

app.post('/api/v1', (req,res) => {


})

module.exports = (req, res) => {
    var data = req.body;

    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        pool: true,
        auth: {
            user: 'veselintechpods@gmail.com',
            pass: 'v3t3ch367'
        }
    });

    var mailOptions = {
        from: data.email,
        to: 'vesko983@gmail.com',
        subject: 'Tartan Tech Talks',
        html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
    };

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    smtpTransport.sendMail(mailOptions,
        (error, response) => {
            if(error) {
                res.send(error)
            }else {
                res.send('Success')
            }
            smtpTransport.close();
        });
}
