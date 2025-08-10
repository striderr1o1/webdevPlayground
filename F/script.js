let user = {
    set name(v){
        this._name = v;
    },
    get name(){
        return this._name;
    }
}
user.name = "Mustafa";
console.log(user.name);