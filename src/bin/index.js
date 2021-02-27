const app = require('../config/express')();

console.log(`http://localhost:${app.get('port')}`);

app.listen(app.get('port'), () => `Server running at http://localhost:${app.get('port')}`);
