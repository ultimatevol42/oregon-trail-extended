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