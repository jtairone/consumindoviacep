<!DOCTYPE html>
<html lang="pt_br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">
    <title>Busca Por CEP</title>
</head>
<body>
	<center><label>BUSCAR ENDEREÇO POR CEP</label></center>
	<div class="container">
	<label>Informe o CEP a baixo</label>
	<input type="text" id="cnpj" onkeypress="mascara(this.value)" onkeydown="enter(event)" class="form-control" placeholder="Digite Seu CEP">
	<br>
  	<div class="panel panel-primary" style="display: none" id="painel">
   	<div class="panel-heading"><span class="pull-right clickable" onclick="fechar()"><i class="glyphicon glyphicon-remove"></i></span>
   		<div class="panel-title" id="titulo">
   		
   		</div>
   	</div>
   	<div class="panel-body" id="conteudo">
   		
   	</div>
   </div>
  
  
  	</div>
   

<script src="js/apicep.js"></script>
<script src="js/mascaracep.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>

</body>
</html>