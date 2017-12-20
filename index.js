import express from 'express';
import bodyParser from 'body-parser';

let logger=getLogger();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let app = express();

app.use(express.static('WebContent'));
app.set('port', (process.env.PORT || 5000));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// Process application/json
app.use(bodyParser.json());

// Spin up the server
app.listen(app.get('port'), function() {
  logger.info('running on port', app.get('port'))
})


