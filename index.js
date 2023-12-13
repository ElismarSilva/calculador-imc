var select = 0;
function selectHomem(){
    select = 1;
   var h = document.getElementById("homem");
   h.style.backgroundColor = "#ED8B88";

}

function selectMulher(){
    select = 2;
    var h = document.getElementById("mulher");
    h.style.backgroundColor = "#ED8B88";
 

}
function botaoCal(){
   

var nome = document.getElementById("name").value;
var altura = (document.getElementById("altura").value) / 100;
var peso = document.getElementById("peso").value;
var res = parseFloat(peso / altura**2);

if (res < 18.5){
   var cor =  document.getElementById("resultado");
   cor.style.backgroundColor = "yellow";

}else{
     var cor =  document.getElementById("resultado");
     cor.style.backgroundColor = "";

  }if (res >= 18.5 && res <= 24.9){
    var cor =  document.getElementById("resultado1");
    cor.style.backgroundColor = "green";

  }else{
        var cor =  document.getElementById("resultado1");
        cor.style.backgroundColor = "";
   
  } if (res >= 24.9 && res <= 30){
    var cor =  document.getElementById("resultado2");
    cor.style.backgroundColor = "yellow";

  }else{
        var cor =  document.getElementById("resultado2");
        cor.style.backgroundColor = "";
   
   } if (res >30){
    var cor =  document.getElementById("resultado3");
    cor.style.backgroundColor = "yellow";

   }else{
        var cor =  document.getElementById("resultado3");
        cor.style.backgroundColor = "";
   
  
 }

if(select == 1){
document.getElementById("texto").innerText = ` Sr.  ${nome} o seu IMC é: ${res.toFixed(2) } Kg/m²`;
}
else if (select == 2){
    document.getElementById("texto").innerText = `Sra.  ${nome} o seu IMC é:  ${res.toFixed(2)}  Kg/m²`;
}
}
function botaoClean(){
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("name").value = "";
    document.getElementById("texto").innerText = res = "";
    var h = document.getElementById("homem");
    h.style.backgroundColor = "";
    var h = document.getElementById("mulher");
    h.style.backgroundColor = "";

    
   var cor =  document.getElementById("resultado");
   cor.style.backgroundColor = "";
  
   var cor =  document.getElementById("resultado1");
   cor.style.backgroundColor = "";
  
   var cor =  document.getElementById("resultado2");
   cor.style.backgroundColor = "";
   
   var cor =  document.getElementById("resultado3");
   cor.style.backgroundColor = "";
  
}


