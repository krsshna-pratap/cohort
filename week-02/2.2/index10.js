class Promise{
    constructor(fn){
        this.fn = fn;
        this.fn(() => {
            this.resolve();
        })
    }
    then(callback){
        this.resolve = callback;
    }
}