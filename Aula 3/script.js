/* 
  igual ==
  menor <
  maior >
  menor igual <=
  maior igual =<
  diferente !=
  negação ! 
*/

var contadorDeid = 1;
var listaDeTarefas = []



for (let index = 0; index < array.length; index++) { 
    const element = array[index];
    
}






function construirElemento(id, valor) {
    var item = `<div id="${id}" class="item">

        <div onclick="marcarTarefa(${id})" class="item-icone">

            <i id="icone_${id}" class="mdi mdi-circle-outline"></i>

        </div>
       
        <div onclick="marcarTarefa(${id})" class="item-nome">
            ${valor}
        </div>

        <div class="item-botao">
         <button onclick="deletar(${id})" class="delete">
            <i class="mdi mdi-delete"></i> 
            Deletar</button>
        </div>
    </div>`;

    return item
}



// marcar tarefa como concluida
// entrar com  tarefa com enter


function deletar(id) {

    let elementoParaDeletar = document.getElementById(id)
    elementoParaDeletar.remove()

}


function addTarefa() {
    var campo = document.getElementById("inputTarefa")
    // 1 -  ADICIONAR TAREFA

    // LER O CAMPO
    var nomeTarefa = campo.value

    // SE O CAMPO FOR VAZIO SOLTAR UM ALERTA
    if (nomeTarefa == "") {

        alert("0 Campo Obrigatório")
    }
    else {

        //  INSERIR VALOR NA LISTA
        var elementoCriado = construirElemento(contadorDeid, nomeTarefa)
        let  tarefa = {
            id: contadorDeid
            texto: nomeTarefa
            
        }
        document.getElementById("areaLista").innerHTML += elementoCriado
        contadorDeid++
        campo.value = ""
    }



}

function marcarTarefa (id) { 
    
        if(id == ""|| id == null || id == undefined ){
        
            alert ("Nao pode usar sem um ID")
        
        }
        
            let elemento = document.getElementById(id)
            let classeDeEstilo = elemento.getAttribute("class")
            let icone = document.getElementById (`icone_${id}`)
        
            
            if (classeDeEstilo == "item"){
                
                elemento.classList.add('clicado')
                icone.classList.remove('mdi-circle-outline')
                icone.classList.add('mdi-check-circle')

            } else {

                elemento.classList.remove('clicado')
                icone.classList.remove('mdi-check-circle')
                icone.classList.add('mdi-circle-outline')    
            }
        
        
        }
        
    
