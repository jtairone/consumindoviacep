<!DOCTYPE html>
<html lang="pt_br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">
    <title>Busca Por Dados CNPJ</title>
</head>
<body>
	<div class="col-lg-6">
	<label>Informe o CNPJ a baixo</label>
	<input type="text" id="cnpj"  onblur="pesquisacnpj(this.value)" class="form-control" placeholder="CNPJ">
	</div>
    <div class="col-lg-3">
    <label>EMPRESA: </label>
    <input type="text" id="nome" class="form-control">
	</div>
    <div class="col-lg-3">
    <label>CÓDIGO E ATIVIADDE: </label>
    <input type="text" id="atividade" class="form-control">
	</div>
   	<div class="col-lg-3">
    <label>Situacao: </label>
    <input type="text" id="situacao" class="form-control">
	</div>
   	<div class="col-lg-3">
    <label>Endereço: </label>
    <input type="text" id="logradouro" class="form-control">
	</div>
    <div class="col-lg-3">
    <label>Numero: </label>
    <input type="text" id="numero" class="form-control">
	</div>
    <div class="col-lg-3">
    <label>UF: </label>
    <input type="text" id="uf" class="form-control">
	</div>
    <div class="col-lg-3">
    <label>Tipo: </label>
    <input type="text" id="tipo" class="form-control">
	</div>
<script src="js/apicnpj.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>

</body>
</html>