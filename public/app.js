// const socket = io();

function render() {
    $.get("/api/get-todolist").then(res => {
        $("ul").empty();
        res
            .forEach(elem => {
                $("ul").append(`<li data-id=${elem.id}><i class="far ${elem.complete ? "fa-dot-circle" : "fa-circle"}"></i>${elem.text}</li>`);
            })
        $("li").on("click", event => {
            event.preventDefault();
            const id = $(event.target)[0].dataset.id;
            $.ajax({ url: `/api/update-todolist`, method: "PUT", data: {id: id} })
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

