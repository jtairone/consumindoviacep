function fechar(){
	document.getElementById("painel").style.display = "none";
	document.getElementById("cnpj").value = "";
}

//caso a pessoa aperte enter pega o valor preenchido no campo e manda para a função de pesquisar passando o valor preenchido
function enter(e){
	//se apertar enter ou tab executa.
	if(e.keyCode == 13 || e.keyCode == 9){
		let v = document.getElementById("cnpj").value;
		pesquisacep(v);
	}
}
//vai para ca pelo evento onblur(dar um tab)
function pesquisacep(valor) {
		//Nova variável "cep" somente com dígitos.
		var cep = valor.replace(/\D/g, '');
		//Verifica se campo cep possui valor informado.
        if (cep != "") {
			//Expressão regular para validar o CEP. vê se são numeros e no maximo 8
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Cria um elemento javascript.
                var script = document.createElement('script');
                //Sincroniza com o callback. 
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_retorno';
                
                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
             //   limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        
    }
	function meu_retorno(conteudo) {
        if (!("erro" in conteudo)) {
            var painel = document.getElementById('painel');
			painel.style.display = '';
			document.getElementById("titulo").innerHTML = "CEP: "+conteudo.cep;
			document.getElementById("conteudo").innerHTML = conteudo.logradouro+"<br>"+"Bairro: "+conteudo.bairro+"<br>"+"Cidade: "+conteudo.localidade+"<br>"+"UF: "+conteudo.uf;
			
        } //end if.
        else {
            //CEP não Encontrado.
            alert("CEP não encontrado.");
			
        }
    }