class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }
    join (traveler) {
        if (this.passengers.length == this.capacity){return "This wagon is too full!"}
        else{this.passengers.push(traveler)}
    }
    shouldQuarantine(){
        if(this.passengers.find(x => x.isHealthy === false)){
            return true
        }
        return false
    }
    totalFood(){
        let total = 0
        this.passengers.forEach(x => total += x.food)
        return total
    }
}
