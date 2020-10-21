


// app.post('/auth', (req, res) => {
//     console.log(req);
//     logIn(3);
//     res.send('Puto el que lee!')
// });

exports.logIn = (req, res) => {
    console.log(req.body);
    res.send("Nos re vimos")
}




