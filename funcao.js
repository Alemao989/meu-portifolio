function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()/*A função de limpeza automática limpa e seca automaticamente*/
{
    document.getElementById('resultado').innerHTML = "";
}
function back()/*Você pode usar chamadas Voltar sucessivas para retornar até a tela que apareceu quando o usuário iniciou o aplicativo. */
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML= eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}