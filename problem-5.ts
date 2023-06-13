// problem 5
function unknownFunc(arg: unknown): void {
    if(typeof arg === "string"){
        console.log(arg);
    }
    else{
       throw new Error("this is an error");
    }
};

unknownFunc("hello")