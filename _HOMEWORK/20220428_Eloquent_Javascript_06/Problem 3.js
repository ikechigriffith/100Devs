/*
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)
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

class GroupIterator {
    constructor(obj) {
        this.index = 0;
        this.group = obj.group;
    }

    next() {
    if(this.index == this.group.length) {
        return {done: true};
        let value = this.group[this.index];
        this.index++
    }
        this.index == this.group.length ? {done:true} : {done:false, value:this.group[this.index]};
        
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
  };



for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c