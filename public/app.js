// const socket = io();

function render() {
    $.get("/api/get-todolist").then(res => {
        $("ul").empty();
        res.forEach(elem => {
            $("ul").append(`<li data-id=${elem.id}><i class="far ${elem.complete ? "fa-dot-circle" : "fa-circle"}"></i>${elem.text}</li>`);
        })
        $("li").on("click", event => {
            event.preventDefault();
            if ($(event.target).attr("class") === "far fa-circle") {
                const id = $(event.target).parent().attr("data-id");
                $.ajax({ url: `/api/check-todolist/${id}`, method: "PUT" }).then(function(data){
                    console.log(data);
                });
            } else if ($(event.target).attr("class") === "far fa-dot-circle") {
                $.ajax({ url: `/api/uncheck-todolist/:id`, method: "PUT" }).then(function(data){
                    console.log(data);
                })
            }
        })
    })
}

$("form").on("submit", function (event) {
    event.preventDefault();
    const input = $("input").val().trim();
    $("input").val("");
    $.post("/api/add-todolist", { text: input }).then((res) => {
        render();
    })
})


render();

