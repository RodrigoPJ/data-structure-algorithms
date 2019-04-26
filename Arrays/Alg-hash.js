var randString = 'RodP is te King';
let a=4
let o=2
var hash = function(s) {
    /* Simple hash function. */
    var a = 1, c = 0, h, o;
    if (s) {
        a = 0;
        /*jshint plusplus:false bitwise:false*/
        for (h = s.length - 1; h >= 0; h--) {
            o = s.charCodeAt(h);
            a = (a<<6&268435455) + o + (o<<14);
            c = a & 266338304;
            a = c!==0?a^c>>21:a;
        }
    }
    return String(a);
};

console.log((o<<1&1));


let a1 = 'randomstring';

class myHash{
    constructor(s){
        if (typeof s === 'string'){
            this.value = s;
        }else{
            this.error = 'invalid value';
        }
        
    }
}

console.log('utyftk'.charCodeAt(4))

