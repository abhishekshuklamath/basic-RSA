

function EEA(n,d){
    var s0=1;
    var s1=0;
    var t0=0;
    var t1=1;
    while(n%d){
        var q=Math.floor(n/d);
        var a=n;
        var b=s1;
        var c=t1;
        n=d;
        d=a%d;
        s1=s0-q*s1;
        s0=b;
        t1=t0-q*t1;
        t0=c;
    }
    return [d,s1,t1];
}

