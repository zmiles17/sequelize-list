module.exports = function (io) {
    io.on("connection", function (socket) {
        socket.on("new-message", function (data) {
            io.emit("emit-message", data);
        })

        socket.on("checked-list", function (data) {
            io.emit("emit-checked", data)
        })

        socket.on("delete-list", function(data){
            io.emit("emit-deleted", data)
        })
    })
}