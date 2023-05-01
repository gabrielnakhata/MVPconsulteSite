$.getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/estados',function(e){$.each(e,function(e,t){$('<option class="form-control form-control-lg" required>').val(t.sigla).text(t.nome).appendTo('#estado')})}),$('#estado').change(function(){var e=$(this).val(),t='https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+e+'/municipios';$.getJSON(t,function(e){$('#cidade').empty(),$.each(e,function(e,t){$('<option class="form-control form-control-lg" required>').val(t.nome).text(t.nome).appendTo('#cidade')})})});
// const IBGElocale = (() => {

// $.getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/estados', function(estados) {
//   // Preenche o menu dropdown de estados com os dados retornados pela API
//   $.each(estados, function(i, estado) {
//     $('<option>').val(estado.sigla).text(estado.nome).appendTo('#estado');
//   });
// });

// $('#estado').change(function() {
//   var estado = $(this).val();
//   var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + estado + '/municipios';
//   $.getJSON(url, function(cidades) {
//     // Remove todas as opções existentes do menu dropdown de cidades
//     $('#cidade').empty();
//     // Preenche o menu dropdown de cidades com os dados retornados pela API
//     $.each(cidades, function(i, cidade) {
//       $('<option>').val(cidade.nome).text(cidade.nome).appendTo('#cidade');
//     });
//   });
// });

// })();
