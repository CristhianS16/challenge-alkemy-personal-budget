const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);
app.use(express.json());

// Routes
app.use('/api/', require('./routes/income'));
app.use('/api/', require('./routes/expenses'));

app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});
