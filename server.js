const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")

const session = require("./auth/connectSession")
const routes = require("./routes")
const PORT = process.env.PORT || 8060

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
// app.use(helmet())
// app.use(helmet({
//   // frameguard: {         // configure
//   //   // action: 'allow-from'
//   //   // action: 'sameorigin'
//   //   // action: 'deny'
//   // },
//   contentSecurityPolicy: {    // enable and configure
//     directives: {
//       defaultSrc: ["self"],
//       // styleSrc: ['style.com'],
//     }
//   },
//   dnsPrefetchControl: false     // disable
// }))

session(app)
// For PUG
app.set('view engine', 'pug');
app.set('views', 'views');
app.set('assets', './assets');

// app.use(express.static(__dirname + '/public'))
app.use(express.static(process.cwd() + '/public'))
app.use(routes)
require("./db/dbConnect")

app.listen(PORT, () => console.log(`The server LISTENS on port ${PORT}... go there.`))

module.exports = app;