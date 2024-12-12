import express from 'express';
import routes from './core/routes';


const app = express();

app.use('/api/v1', routes);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});