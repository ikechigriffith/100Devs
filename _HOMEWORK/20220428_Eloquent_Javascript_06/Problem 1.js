class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus (vector2){
        let addX = this.x + vector.x;
        let addY = this.y + vector.y;
        return new Vector(addX, addY);
    }
    minus (vector2){
        let subX = this.x - vector.x;
        let subY = this.y - vector.y;
        return new Vector(subX, subY);
    }
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}