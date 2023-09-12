import express from 'express';
import routes from './src/Routes/cities';

const app = express();



const Port = process.env.PORT || 8080; // port 5000 on heroku, 8080 port was open

app.listen(Port, () => console.log('Server started, listening on port ' + Port));

// if (true) {
//     if (process.env.NODE_ENV === 'production' || true) {
//         // Serve any static files
//         app.use(express.static(path.join(__dirname, 'ReactApp/public')));

//         // Handle React routing, return all requests to React app
//         app.get('*', function(req, res) {
//             res.sendFile(path.join(__dirname, 'ReactApp/public', 'index.html'));
//         });
//     }
// }

//test build