// const socket = io();

function render() {
    $.get("/api/get-todolist").then(res => {
        $("ul").empty();
        res.forEach(elem => {
            $("ul").append(`<li data-id=${elem.id}><i class="far ${elem.complete ? "fa-dot-circle" : "fa-circle"}"></i>${elem.text}</li>`);
            check();
            uncheck();
        })
    })
}
function check() {
    $("li").on("click", event => {
        event.preventDefault();
        const id = $(event.target).parent().attr("data-id");
        if ($(event.target).attr("class") === "far fa-circle") {
            $.ajax({ url: `/api/check-todolist/${id}`, method: "PUT" }).then(render)
        }
    })
}
function uncheck() {
    $("li").on("click", event => {
        event.preventDefault();
        const id = $(event.target).parent().attr("data-id");
        if ($(event.target).attr("class") === "far fa-dot-circle") {
            $.ajax({ url: `/api/uncheck-todolist/${id}`, method: "PUT" }).then(render)
        }
    })
}
function addItem() {
    $("form").on("submit", event => {
        event.preventDefault();
        const input = $("input").val().trim();
        $("input").val("");
        $.post("/api/add-todolist", { text: input }).then((res) => {
            render();
        })
    })
}

addItem();
render();



