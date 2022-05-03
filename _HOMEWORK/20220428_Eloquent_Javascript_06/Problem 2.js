//Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

//Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
class Group {
    constructor(){
        this.group = [];
    }
    add(value){
        !this.has(value) ? this.group.push(value) : console.log("This value is already in the group");
    }
    delete(value){
        this.has(value) ? this.group.splice(this.group.indexOf(value), 1) : console.log("This value is not in the group");
    }
    has(value){
        return this.group.includes(value);
    }
    static from(obj){
        //create the new group object
        let newGroup = new Group();
        //loop through the items in the object
        for (let item of obj){
            newGroup.add(item)
        }
        return newGroup;
    }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

