var electron = require("electron");

electron.app.on("ready", function () {
    "use strict";
    var mainWindow = new electron.BrowserWindow({width: 600, height: 800});
    mainWindow.loadURL("File://" + __dirname + "/index.html");
});
