$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows: false,
    });
})    
    
    $('#telefone').mask('(00) 00000-0000');
    
    $('#cpf').mask('000.000.000-00');
    
    $('#cep').mask('00000-000');
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email válido',
            telefone: 'Por favor, insira o seu telefone',
            endereco: 'Por favor, insira o endereço',
            cep: 'Por favor, insira o CEP',
            cpf: 'Por favor, insira o CPF'
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.submit();
        },
        invalidHandler: function (evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos vazios, por favor preencha para continuar a compra!`);
            }
        }
    })