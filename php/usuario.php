<? php
cabeçalho ( " Access-Control-Allow-Origin: * " );
cabeçalho ( " Tipo de conteúdo: aplicativo / json; charset = UTF-8 " );
if ( isset ( $ _GET [ " email " ]) ||  isset ( $ _GET [ " senha " ])) {
	if ( ! vazio ( $ _GET [ " email " ])   ||  ! empty ( $ _GET [ " senha " ])) {
        $ conexao  =  new  mysqli ( " localhost " , " raiz " , " " , " teste " );
        
		$ email =  mysqli_real_escape_string ( $ conexao , $ _GET [ " email " ]);
        $ senha =  mysqli_real_escape_string ( $ conexao , $ _GET [ " senha " ]);
        
		$ query = " SELECT  *  FROM usuario onde email = ' $ email '  e senha = ' $ senha '   " ;
        $ result  =  $ conexao -> query ( $ query );
        
    $ outp  =  " " ;
		if ( $ rs = $ result -> fetch_array ()) {
			if ( $ outp  ! =  " " ) { $ outp  . =  " , " ;}
			$ outp  . =  ' {"codigo": " '   .  $ rs [ " id " ] .  ' ", ' ;
            $ outp  . =  ' "email": " '    .  $ rs [ " email " ]         .  ' ", ' ;
            $ outp  . =  ' "nome": " '    .  $ rs [ " nome " ]         .  ' ", ' ;
            $ outp  . =  ' "nivel": " '    .  $ rs [ " nivel " ]         .  ' ", ' ;
            $ outp  . =  ' "status": " '    .  $ rs [ " status " ]         .  ' ", ' ;
            $ outp  . =  ' "senha": " ' .  $ rs [ " senha " ]      .  ' "} ' ;
            
            
            $ outp  = ' {"msg": {"logado": "sim", "texto": "logado com sucesso!"}, "dados": ' . $ outp . ' } ' ;
            
		} mais {
            
            $ outp  = ' {"msg": {"logado": "nao", "texto": "login ou senha invalidos!"}, "dados": { ' . $ outp . ' }} ' ;
           
            
        }
      
		// $ conn-> close ();
       
        echo  utf8_encode ( $ outp );
        
        
	}
}
? >