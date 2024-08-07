let carName=
    {
        name:"Scorpio",
            model:"S11",
            year:2020, 
            getCarInfo:function(){
                return(`${this.name} ${this.model} ${this.year}`);
            }
    }
console.log(carName.getCarInfo());