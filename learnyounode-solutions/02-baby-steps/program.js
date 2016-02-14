//console.log(process.argv);
doit();


function doit() {

    var argv = process.argv,
        argIndex,
        sum = 0;

    for (argIndex = 2; argIndex < argv.length; ++argIndex) {
        //console.log(argv[argIndex]);
        sum += Number(argv[argIndex]);
    }

    console.log(sum);
}
