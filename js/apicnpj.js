function pesquisacnpj(valor) {
	//Nova variável "cep" somente com dígitos.
	//var cnpj = valor.replace(/\D/g, '');
	var cnpj = valor.replace(/[^0-9]/g, '');
//	alert(cnpj);
	//Verifica se campo cep possui valor informado.
	if (cnpj.length === 14) {
		//Preenche os campos com "..." enquanto consulta webservice.
		document.getElementById('nome').value = ("...");
		document.getElementById('atividade').value = ("...");
		document.getElementById('situacao').value = ("...");
		document.getElementById('logradouro').value = ("...");
		document.getElementById('numero').value = ("...");
		document.getElementById('uf').value = ("...");
		document.getElementById('tipo').value = ("...");
		//Cria um elemento javascript.
		var script = document.createElement('script');
		//Sincroniza com o callback. 
		script.src = "https://www.receitaws.com.br/v1/cnpj/" + cnpj + "/?callback=retorno";

		//Insere script no documento e carrega o conteúdo.
		document.body.appendChild(script);
	} else {
		//cep sem valor, limpa formulário.
		limpa_formulário_cnpj();
	}
}

function retorno(conteudo) {
	if (conteudo.status == 'OK') {
		//Atualiza os campos com os valores.
		document.getElementById('nome').value = (conteudo.nome);
	//	document.getElementById('atividade').value = (conteudo.atividate_principal[0].code+" - "+conteudo.atividate_principal[0].text);
		document.getElementById('situacao').value = (conteudo.situacao);
		document.getElementById('logradouro').value = (conteudo.logradouro);
		document.getElementById('numero').value = (conteudo.numero);
		document.getElementById('uf').value = (conteudo.uf);
		document.getElementById('tipo').value = (conteudo.tipo);
		
		
	} //end if.
	else {
		//CEP não Encontrado.
		limpa_formulário_cnpj();
		alert("CEP não encontrado.");
		//swal("CNPJ não encontrado.");
	}
}
function limpa_formulário_cnpj() {
	//Limpa valores do formulário de cep.
	document.getElementById('nome').value = ("");
		document.getElementById('atividade').value = ("");
		document.getElementById('situacao').value = ("");
		document.getElementById('logradouro').value = ("");
		document.getElementById('numero').value = ("");
		document.getElementById('uf').value = ("");
		document.getElementById('tipo').value = ("");
}