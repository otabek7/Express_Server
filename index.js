import express from "express"; /* imports express */
const app = express(); /* create an app using the express object */
const port = 3000;

app.listen(port, () => { /* use the listen method and specify 2 things. The port (location of server) and the callback function that will be triggered when our server is setup */
  console.log(`Server running on port ${port}.`); /* just log where the server is running */
}
);
