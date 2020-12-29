const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();
const port = process.env.PORT || 3000;

app().listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at http://localhost:${port}`);
});
