function palindromo(cad){
    cad=cad.toLowerCase();
    cad=cad.replace(/ /g,"");
    for(i=0,f=cad.length;i<=f;i++,f--){
        if(cad.slice(i,i+1)!=cad.slice(f-1,f)){
            return 'No';
        }
    }
    return 'Sí';
}

function palabras(cad){
    p=0;
    while(cad.search(/ /s)>0){
        cad=cad.replace(/\s+/,"");
        p++;
    }
    return p+1;
}

function letras(cad){
    cad=cad.replace(/ /g,"");
    return cad.length;
}

function vocales(cad){
    v=0;
    cad=cad.toLowerCase();
    for(i=0;i<cad.length;i++){
        if(cad.charAt(i).search("a|e|i|o|u")==0){
            v++;
        }
    }
    return v;
}

function consonantes(cad){
    c=0;
    cad=cad.replace(/ /g,"");
    cad=cad.toLowerCase();
    for(i=0;i<cad.length;i++){
        if(cad.charAt(i).search("a|e|i|o|u")<0){
           c++;
        }
    }
    return c;
}

module.exports.p=palindromo;
module.exports.l=palabras;
module.exports.t=letras;
module.exports.v=vocales;
module.exports.c=consonantes;