function mensagem(texto) {

    return texto;

}

function soma(v) {
    
    var rs = 0;

    for (var i = 0; i < v.length; i++) {
        rs += v[i];
    }

    return rs;
}

function maiorValor(v) {
    var m = v[0];

    for (var i = 0; i < v.length; i++) {
        if( v[i] > m) {
            m = v[i];
        }
    }

    return m;
}

export { mensagem };
export { soma };
export { maiorValor };

