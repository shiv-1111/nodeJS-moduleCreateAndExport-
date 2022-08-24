const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

const multiply = (a,b) => {
    return a*b;
}

const name = "Shivashish";

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = multiply;


// export using object destructuring

module.exports = {add,name,sub,multiply}