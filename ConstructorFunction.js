function Counter(){
    let count = 0;

    this.increment = function (){
        count++;
        console.log("counter is incremented to: " + count);
    }

    this.decrease = function (){
        count--;
        console.log("counter is decremented to: " + count);
    }
}

const obj1 = new Counter();

obj1.increment();
obj1.increment();
obj1.increment();
obj1.increment();