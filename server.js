function CrateUser(id, name, image) {
    this.id = id;
    this.username = name;
    this.img = image;
}

function CrateId(users = []) {
    let palabras = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM123456789";
    let test = true;
    let userId;
    while (test == true) {
        let id = "";
        for (let index = 0; index < 15; index++) {
            id += palabras.charAt(Math.floor(Math.random() * palabras.length));
        }
        let test_ = 0;
        users.forEach(e => {
            if (e.id == id) test_++;
        })
        if (test_ == 0) {
            test = false;
            userId = id;
        }
    }
    return userId;
}
const http = require("http");
const path = require("path");
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const pdp = path.join(__dirname, "./public");
app.use(express.static(pdp));
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);
server.listen(port, () => {
    console.log(`server is up on port ${port}!`);
})

/////  save image

/////  save data


let users = [];
io.on("connection", (client) => {
    console.log("new web connect");

    client.on("userSigin", (username,image_upload) => {
        let id = CrateId(users);
        let imageName;

        let multer = require('multer');
        let { on } = require('events');
        let storage = multer.diskStorage({
            destination: (req, file, cd) => {
                cd(null, './public/images');
            },
            filename: (req, file, cd) => {
                let pasvand = file.originalname.split(".")[1];
                cd(null, id + "." + pasvand);
                imageName = id + "." + pasvand;
            }
        })
        
        app.post("./image_upload", upload.single('image'), (req, res) => {
            res.send('image uploaded');
            let newUser = new CrateUser(id, username, imageName);
            client.emit("userSigin", newUser);
            users.push(newUser);
            console.log(newUser)
        })

    })

    client.on("disconnect", () => {
        console.log("new web disconnect");
    })
})
