const base64
var d64 = atob(base64);
//transforma em string a BASE 64
console.log(d64);
var excel = Array(d64.replaceAll(',',';'));
//SEPARA OS VALORES POR PONTO E VÍRGULA AO INVÉS DE VÍRGULA

var blob = new Blob(excel,{type:"text/csv"});
//NOVO BLOB

var csv = new File(excel, 'xico.csv',{type:"text/csv"});
console.log(csv,blob);
//NOVO ARQUIVO

//FUNÇÃO DE DOWNLOAD DO CSV
var download_link; 
download_link = document.createElement("a");

download_link.download = 'xico.csv';
//NOME DO CSV

download_link.href = window.URL.createObjectURL(blob);

download_link.style.display = "none";

document.body.appendChild(download_link);

download_link.click();
