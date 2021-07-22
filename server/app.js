const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express()
app.use(express.json({extended:true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/user-info', require('./routes/user.routes'))
app.use('/api/byu-ticket', require('./routes/ticket-selling.routes'))

const PORT = config.get('port') || 5000;

async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}`))
    } catch (e) {
        console.log(`Server error`, e.message)
        process.exit(1)
    }
}

start()

