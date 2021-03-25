let express = require('express')
let app = express()
let cors = require('cors')
let multer = require('multer')
let upload = multer({ dest: './uploads' });

app.use(express.static('public'))
app.use(cors({ optionsSuccessStatus: 200 }))

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const { originalname: name, mimetype: type, size } = req.file
  res.send({
    name,
    type,
    size
  })
})

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

  // listener

let listener = app.listen(process.env.PORT, () => console.log("connected"))
