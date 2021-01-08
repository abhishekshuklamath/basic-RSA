
var dict ={'a':2,
    'b':3,
    'c':4,
    'd':5,
    'e':6,
    'f':7,
    'g':8,
    'h':9,
    'i':10,
    'j':11,
    'k':12,
    'l':13,
    'm':14,
    'n':15,
    'o':16,
    'p':17,
    'q':18,
    'r':19,
    's':20,
    't':21,
    'u':22,
    'v':23,
    'w':24,
    'x':25,
    'y':26,
    'z':27,
    ' ':28,
    '.':29,
    '!':30,
    '?':31,
};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function ModExp(x,h,n){
    var expandH=h.toString(2);
    var r=x;
    for(var i=1;i<expandH.length;i++){
        r=Math.pow(r,2) %n;
        if(expandH[i]==1){
            r=(r*x) %n;
        }
    }
    return r;
}

function EncryptMessage(e,n,x){
    var ascii_to_pub=new Array(x.length);
    var e=parseInt(e);
    var n=parseInt(n);
    for(var i=0;i<x.length;i++){
        ascii_to_pub[i]=ModExp(dict[x[i]],e,n);
        //console.log("here",dict[x[i]],e,n,ModExp(dict[x[i]],e,n));
    }
    //console.log("script output",e,n,ascii_to_pub);
    return ascii_to_pub;
}


function DecryptMessage(d,n,x){
    var d=parseInt(d);
    var n=parseInt(n);
    var y=x.split(',');
    var z="";
    var prv_to_ascii=new Array(y.length);
    var ascii_to_y=new Array(y.length);
    for(var i=0;i<y.length;i++){
        y[i]=parseInt(y[i]);
        prv_to_ascii[i]=ModExp(y[i],d,n);
        ascii_to_y[i]=getKeyByValue(dict,prv_to_ascii[i]);
        z += ascii_to_y[i];
    }
    console.log(ascii_to_y);
    return z;
}

console.log(EncryptMessage(11,91,'abcde'));
//console.log(ModExp(17,43,91));
//console.log(DecryptMessage(53,91,"81,41,13,13,74"));