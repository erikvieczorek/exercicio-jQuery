$(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();

    var novaTarefa = $("#nova-tarefa").val();

    if (novaTarefa !== "") {
        var novoItem = $("<li></li>").text(novaTarefa);
        $("#lista-tarefas").append(novoItem);
        $("#nova-tarefa").val("")};
      });

    $("#lista-tarefas").on("click", "li", function() {
    $(this).toggleClass("concluida");
    });

    $("#reset").click(function() {
    $("#lista-tarefas").empty();
  });
});


