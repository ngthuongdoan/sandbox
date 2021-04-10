var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("%cClass", "color:white;font-weight:bold;font-size:4rem;-webkit-text-stroke: 1px black");
var Person = /** @class */ (function () {
    function Person(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    Person.prototype.show = function () {
        console.log(this);
    };
    return Person;
}());
var thuong = new Person('irelia', 'Y chi cua luoi kiem', 30);
thuong.show();
console.log("%cInheritance", "color:white;font-weight:bold;font-size:4rem;-webkit-text-stroke: 1px black");
var Tuong = /** @class */ (function () {
    function Tuong(ten, mota, kinang) {
        this.ten = ten;
        this.mota = mota;
        this.kinang = kinang;
    }
    Tuong.prototype.ShowInfo = function () {
        var kn = '';
        for (var i = 0; i < this.kinang.length; i++) {
            kn += this.kinang[i] + " | ";
        }
        return "\n            T\u00EAn T\u01B0\u1EDBng : " + this.ten + "\n            M\u00F4 T\u1EA3 : " + this.mota + "\n            Ki N\u0103ng : " + kn + "\n        ";
    };
    return Tuong;
}());
var ashe = new Tuong('Ashe', 'Cung Băng', ['Chú tâm tiễn', 'Tán Xạ tiễn', 'Ưng tiễn', 'Đại băng tiễn']);
console.log(ashe.ShowInfo());
// Class SatThu ke thua tu class tuong
var SatThu = /** @class */ (function (_super) {
    __extends(SatThu, _super);
    function SatThu(ten, mota, kinang, donsatthu) {
        var _this = _super.call(this, ten, mota, kinang) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    SatThu.prototype.ShowInfo = function () {
        var kn = '';
        for (var i = 0; i < this.kinang.length; i++) {
            kn += this.kinang[i] + " | ";
        }
        return "\n            T\u00EAn T\u01B0\u1EDBng : " + this.ten + "\n            M\u00F4 T\u1EA3 : " + this.mota + "\n            K\u0129 N\u0103ng : " + kn + "\n            \u0110\u00F2n S\u00E1t Th\u1EE7 : " + this.donsatthu + "\n        ";
    };
    return SatThu;
}(Tuong));
var talon = new SatThu('Talon', 'Cung Băng', ['Chú tâm tiễn', 'Tán Xạ tiễn', 'Ưng tiễn', 'Đại băng tiễn'], 'Sát Thủ Bóng Đêm');
console.log(talon.ShowInfo());
