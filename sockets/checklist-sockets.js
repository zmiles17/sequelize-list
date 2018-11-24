module.exports = function (io) {
    io.on("connection", function (socket) {
        socket.on("new-todo", function (data) {
            io.emit("emit-todo", data);
        })

        socket.on("check-list", function (data) {
            io.emit("emit-check", data)
        })

        socket.on("delete-list", function(data){
            io.emit("emit-delete", data)
        })
    })
}