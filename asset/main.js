var listaTarea= [
      {
        "title": "delectus aut autem"
      },
      {
        "title": "quis ut nam facilis et officia qui"
      },
      {
        "title": "fugiat veniam minus"
      },
      {
        "title": "et porro tempora"
      },
      {
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum"
      },
      {
        "title": "qui ullam ratione quibusdam voluptatem quia omnis"
      },
      {
        "title": "illo expedita consequatur quia in"
      },
      {
        "title": "quo adipisci enim quam ut ab"
      },
      {
        "title": "molestiae perspiciatis ipsa"
      },
      {
        "title": "illo est ratione doloremque quia maiores aut"
      }
];

function toDoList (title){ 
    this.title = title;
};

var columna =[''];

var body = document.body;
var h1 = document.createElement('h1');
h1.innerHTML = "LISTA DE TAREAS";

var table1 = document.createElement('table');
table1.border = "1";

for(var i = 0; i<listaTarea.length; i++){
    var trx = document.createElement('tr');
    for(var j = 0; j<columna.length; j++){
        var tdx = document.createElement('td');
        tdx.innerHTML = listaTarea[i].title;
        trx.appendChild(tdx);
    }
    table1.appendChild(trx);
}

body.appendChild(h1);
body.appendChild(table1);
