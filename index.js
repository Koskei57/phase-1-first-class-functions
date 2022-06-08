//const chai = "chai";
//const spies = "chai-spies";
//chai.use(spies);

function receivesAFunction(callback) {
    //const spy = chai.spy();
    callback("chai");
};

function returnsANamedFunction() {
    return (returnsANamedFunction);
}

function returnsAnAnonymousFunction() {
    return (returnsAnAnonymousFunction) => console.log("")
}