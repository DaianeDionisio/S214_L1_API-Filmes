require('./src/infra/database');
const app = require('./src/infra/rest_server');

app.listen(4000, () => {
    console.log('REST server running on port 4000...');
});