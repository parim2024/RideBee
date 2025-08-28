const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//for basic authentication , i need packages like bcrypt , jsonwebtoken
/*
💡 Simple analogy:
JWT token = Movie ticket 🎟
Ticket lena = Login karna
Ticket check karna = Middleware authentication
Ticket valid → Movie dekh sakte ho (data access)
Ticket invalid → Gate pe rok diya (401 Unauthorized) */