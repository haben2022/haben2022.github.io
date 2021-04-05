function printNumbers( from, to ){

    setTimeout(function go() {
        console.log(from);
        if (from < to){
            setTimeout( go, 5000);
        }
        from++;
    }, 1000);
}

printNumbers( 5, 10 );

