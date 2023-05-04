import app from './app.js';
import connection from './database/connection.js';

connection()
  .then(() => {
    app.listen(app.get('PORT'), () => {
      console.log(`server is running on http://localhost:${app.get('PORT')}`);
    });    
  }).catch(() => {
    console.log("can't connect to database.");
  })
