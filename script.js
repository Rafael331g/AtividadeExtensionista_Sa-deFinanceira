function calcular(){

let renda=Number(document.getElementById("renda").value);

let despesas=
Number(document.getElementById("moradia").value||0)+
Number(document.getElementById("alimentacao").value||0)+
Number(document.getElementById("transporte").value||0)+
Number(document.getElementById("contas").value||0)+
Number(document.getElementById("lazer").value||0)+
Number(document.getElementById("outros").value||0);


let saldo=renda-despesas;


document.getElementById("total").innerHTML=
despesas.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});


document.getElementById("saldo").innerHTML=
saldo.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});


let status=document.getElementById("status");
let mensagem=document.getElementById("mensagem");


if(renda<=0){

status.innerHTML="Informe sua renda";

mensagem.innerHTML="Digite um valor válido para realizar a análise.";

return;

}


let percentual=(despesas/renda)*100;


if(percentual<=70){

status.innerHTML="Boa organização financeira";
status.style.color="green";

mensagem.innerHTML="Seus gastos estão dentro de um limite saudável. Continue acompanhando seu orçamento.";

}

else if(percentual<=90){

status.innerHTML="Atenção aos gastos";
status.style.color="orange";

mensagem.innerHTML="Seus gastos estão próximos da sua renda. Avalie despesas que podem ser reduzidas.";

}

else{

status.innerHTML="Gastos acima da renda";
status.style.color="red";

mensagem.innerHTML="Recomenda-se revisar seus gastos para evitar problemas financeiros.";

}

}