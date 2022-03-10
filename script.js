// Array con contadores de visitas.
let visitsImg = [0, 0, 0, 0, 0];

// Función para incrementar el número de visitas de la imagen indicada, actualizando en 'index.html'.
function updateVisit(num) {
  visitsImg[num - 1]++;
  document.getElementById("visits-img-" + num).innerHTML = visitsImg[num - 1];
}

// Función para manejar el incremento de visitas.
function visit(title, img, num) {
  // Imágenes pares.
  if ((num % 2) === 0) {
    updateVisit(num);
  } else {
    // Imágenes impares.
    var myWindow = window.open("", "myWindow", "width=800,height=400");
    myWindow.document.write(
      "<html><head><title>" +
        title +
        '</title><link rel="stylesheet" type="text/css" href="assets/style-popup.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></head><body>'
    );
    myWindow.document.write(
      "<section><p><h1>" + title + "</h1></p>",
      '<img id="imgpopup" src="assets/img/' + img + '">',
      '<div class="row"><button id="ok" class="btn btn-success" onClick="action()">OK</button>',
      '<button type="button" class="btn btn-danger" onClick="self.close()">Close</button></div></section>'
    );
    // Para comunicar el popup con la ventana principal.
    myWindow.action = function () {
      updateVisit(num);
    };
    myWindow.document.write("</body></html>");
  }
}

// Función para realizar llamada AJAX para Cargar Texto.
document.querySelector("#loadText").addEventListener("click", printJson);
function printJson() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "home.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      let resp = document.querySelector("#response");
      resp.innerHTML = `${data.texto}`;
    }
  };
}
