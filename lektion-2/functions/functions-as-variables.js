const logger = function(value){
    console.log(value);
}

const warner = function(value){
    console.warn(value);
}

const writeName = function(name, logFunction){
    logFunction(name);
}

writeName("John", logger);
writeName("Jane", warner);