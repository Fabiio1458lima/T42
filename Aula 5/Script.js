const LISTA_CARROS = []

function limparCampos() {

    document.getElementById('placa').value = ''
    document.getElementById('modelo').value = ''
    document.getElementById('marca').value = ''
    document.getElementById('cor').value = ''

}


function adicionarCarro() {

    let placaInput = document.getElementById('placa').value
    let modeloInput = document.getElementById('modelo').value
    let marcaInput = document.getElementById('marca').value
    let corInput = document.getElementById('cor').value



    if (!placaInput) {
        alert(' Placa é Obrigatoria !!!!')
        return
    }

    const carro = {

        placa: placaInput,
        modelo: modeloInput,
        marca: marcaInput,
        cor: corInput,
        horaEntrada: new Date()

    }

    LISTA_CARROS.push(carro)

    limparCampos()
    montarLista()


}

function montarLista() {
    if (LISTA_CARROS.length > 0) {
        const elementoLista = document.getElementById('listaCarros')
        elementoLista.innerHTML = ''
        
        for (let index = 0; index < LISTA_CARROS.length; index++) {
            const carro = LISTA_CARROS[index];
            const item = `<div>Placa: ${carro.placa} - Cor: ${carro.cor} - Marca: ${carro.marca} - Modelo: ${carro.modelo} </div>`
            elementoLista.innerHTML += item
        }
    }
}

function cobrarCarros () {


const placaInput = document.getElementById('placaCobrar').value 

if (!placaCobrar) {
    alert ('Digite uma placa valida')
    return    
    }

 
for (let index = 0; index < LISTA_CARROS.length; index++) {
    const carro = LISTA_CARROS[index];

    if ( carro.placa == cobrarPlaca) {
            
    }

    let inicio = new Date(element.horaEntrada);
    let fim = new Date();
    let diferenca = new Date( fim - inicio );

}



}



