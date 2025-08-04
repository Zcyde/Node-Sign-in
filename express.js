import express from 'express';

const __dirname = import.meta.dirname;

const app = express();
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/home.html')
});

app.get('/userPage', (req, res) => {
    res.sendFile(__dirname + '/pages/user.html');
})

app.get('/getUser', (req, res) => {
    var response = {
        firstName: req.query.firstName,
        lastName: req.query.lastName,
    }

    console.log("Respone is: ", response);
    res.end(`Recieved Data: " ${JSON.stringify(response)}`);
})

app.get('/user', (req, res) => {
    const userId = req.query.id;
    const userName = req.query.name;
    if (userID && userName) {
        res.send(`<html><body><h1>User ${userName}'s ID is ${userID}</h1></body></html>`);
    } else res.status(400).send('User ID and name is required');
})

const server = app.listen(5000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log ("Server running at http://%s:%s", host, port);
    console.log("Server running at http://" + host + ":" + port);
    console.log(`Server running at http://${host}:${port}`);
})

// Student
app.get('/getStudent', (req, res) => {
    var response = {
        studentID: req.query.studentID,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        section: req.query.section,
    }
    
    console.log("Response is: ", response);
    res.end(`Received Data: ${JSON.stringify(response)}`);
    
})

// Admin
app.get('/getAdmin', (req, res) => {
    var response = {
        adminID: req.query.adminID,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        department: req.query.department,
    }

    console.log("Response is: ", response);
    res.end(`Received Data: ${JSON.stringify(response)}`);
    
})

// Page Routes
// Student
app.get('/studentPage', (req, res) => {
    res.sendFile(__dirname + '/pages/student.html');
})

// Admin
app.get('/adminPage', (req, res) => {
    res.sendFile(__dirname + '/pages/admin.html');
})
