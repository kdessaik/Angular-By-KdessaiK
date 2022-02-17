function LetDiferetoVar1() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final i is :' + i);
}
LetDiferetoVar1();
function varDiferetoLet1() {
    for (var i1 = 0; i1 < 5; i1++) {
        console.log(i1);
    }
    console.log('final i: this can not be excute cause i is define with Let');
}
varDiferetoLet1();
