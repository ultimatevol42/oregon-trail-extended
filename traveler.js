class Traveler {
    constructor (name, HP){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt(){
       
        return this.food += 2
    }
    eat(){
        if(this.food <= 0){
            this.food = 0
            this.isHealthy = false
            
        } else { 
            this.food--
            this.isHealthy = true
             
        }
        return this.name + " had eaten."    
    }
    
}
class Doctor extends Traveler{
    constructor (name, food, isHealthy){
        super(name, food, isHealthy)
    }
    heal(traveler){
        return traveler.isHealthy = true
    }
}
class Hunter extends Traveler{
    constructor(name, isHealthy, food = 2){
        super(name, isHealthy)
        this.food = food
    }
    hunt(){
        return this.food += 5
    }
    eat(){
        if(this.food < 2){
            this.food = 0
            this.isHealthy = false
        } else {
        this.food -= 2
        }
        return this.food
    }
    giveFood(traveler, numOfFoodUnits){
        if(this.food - numOfFoodUnits > 0){
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        } else {
            return "Not enough food to transfer."
        }
    }
}