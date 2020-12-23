const express = require('express');
const cors = require('cors');
const app = express();
const env = process.env.NODE_ENV;

app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(cors());

if(env === 'production'){
    app.use('/', express.static(`${dirname}/client/build`));
};

// Routes
app.use('/api/', require('./routes/lastmovements'));
app.use('/api/', require('./routes/income'));
app.use('/api/', require('./routes/expenses'));

app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});
