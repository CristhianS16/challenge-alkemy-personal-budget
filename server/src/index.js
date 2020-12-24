if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
};

const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/', require('./routes/lastmovements'));
app.use('/api/', require('./routes/income'));
app.use('/api/', require('./routes/expenses'));

app.listen(app.get('port'), () => {
    console.log(process.env.NODE_ENV + ' mode');
    console.log('Server on port ' + app.get('port'));
});
