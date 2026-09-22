class Student {
    name;
    role;

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    sayMyName() {
        console.log(`My Name is ${this.name}`);
    }
}

const phamKhanh = new Student("Pham Khanh", "Leader");
console.log(phamKhanh);
console.log(phamKhanh.name, phamKhanh.role);
phamKhanh.sayMyName();