const app = require('./app');

const port = process.env.PORT || 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at http://localhost:${port}`);
});
