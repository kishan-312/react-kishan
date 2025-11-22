class parent {

    constructor(name,age) {

        this.name = name ;
        this.age = age ;

    }

    greet() {

        console.log(`hello my name is ${this.name}`);
        

    }

}

const kishan = new parent("kishan",23)
kishan.greet()

// encapuslation

class BankAccount {

    #balance ;

    constructor(accountNo,balance) {

        this.accountNo = accountNo ;
        this.#balance = balance

    }

    getBalance() {

        return this.#balance

    }

    deposit(amount) {

        this.#balance += amount ;

    }


}

const acc = new BankAccount("123",100)
console.log(acc.getBalance());
acc.deposit(100);
console.log(acc.getBalance());

// inheritance
class animal {

    constructor(name) {

        this.name = name ;

    }

    speak() {

        console.log(`${this.name} makes sound `);
        

    }

}

class dog extends animal {

    speak() {

        console.log(``);
        

    }

}








