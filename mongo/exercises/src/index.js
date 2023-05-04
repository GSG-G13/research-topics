import app from './app.js';

app.listen(app.get('PORT'), () => {
  console.log(`server is running on http://localhost:${app.get('PORT')}`);
});    
