function mascara(v){
	if(v.length == 5){
		var valor = document.getElementById("cnpj").value;
		valor = valor.replace(valor,"-");
		document.getElementById("cnpj").value = v+valor;
	}
}