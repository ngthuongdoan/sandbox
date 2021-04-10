console.log("%cClass","color:white;font-weight:bold;font-size:4rem;-webkit-text-stroke: 1px black")

class Person {
    //Phạm vi truy cập trong class: Private, protected, public. Mặc định khi không khai báo thì là public

    name: string;
    address: string;
    age: number;

    constructor (name: string, address: string, age: number) {
        this.name = name;
        this.address = address;
        this.age = age;
    }

    show() {
        console.log(this);
    }
}
let thuong = new Person('irelia', 'Y chi cua luoi kiem', 30);
thuong.show()


console.log("%cInheritance","color:white;font-weight:bold;font-size:4rem;-webkit-text-stroke: 1px black")

class Tuong {
    ten : string;
    mota : string;
    kinang : string[];

    constructor(ten : string, mota : string, kinang : string[]) {
        this.ten = ten;
        this.mota = mota;
        this.kinang = kinang;
    }

    ShowInfo () {
        let kn = '';
        for (var i = 0; i < this.kinang.length; i++) {
            kn += this.kinang[i] + " | ";
        }
        return `
            Tên Tướng : ${this.ten}
            Mô Tả : ${this.mota}
            Ki Năng : ${kn}
        `;
    }
}

let ashe = new Tuong('Ashe', 'Cung Băng', ['Chú tâm tiễn', 'Tán Xạ tiễn', 'Ưng tiễn', 'Đại băng tiễn']);

console.log(ashe.ShowInfo());

// Class SatThu ke thua tu class tuong
class SatThu extends Tuong {
    donsatthu : string;

    constructor(ten : string, mota : string, kinang : string[], donsatthu : string) {
        super(ten, mota,  kinang);
        this.donsatthu = donsatthu;
    }

    ShowInfo () {
        let kn = '';
        for (var i = 0; i < this.kinang.length; i++) {
            kn += this.kinang[i] + " | ";
        }
        return `
            Tên Tướng : ${this.ten}
            Mô Tả : ${this.mota}
            Kĩ Năng : ${kn}
            Đòn Sát Thủ : ${this.donsatthu}
        `;
    }
}

let talon = new SatThu('Talon', 'Cung Băng', ['Chú tâm tiễn', 'Tán Xạ tiễn', 'Ưng tiễn', 'Đại băng tiễn'], 'Sát Thủ Bóng Đêm');
console.log(talon.ShowInfo());