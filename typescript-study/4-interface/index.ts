console.log("%cInterface", "color:white;font-weight:bold;font-size:4rem;-webkit-text-stroke: 1px black");


interface Person {
    tuoi : number;
    ten? : string; // ten nay co the truyen vao hoac khong
}
function xemtt(p : Person) : void {
    console.log(`Xin chao ${p.ten} ban ${p.tuoi} phai khong`);
}

xemtt({tuoi : 18, ten : 'ahihi'});

console.log("%cAbstract", "color:white;font-weight:bold;font-size:4rem;-webkit-text-stroke: 1px black");
interface TuongInterface {
    ten : string;
    mau : number;
    satthuong : number;
    mota : string;

    XemTuong() : void;
    donkinang() : any;
    bienve() : void;    
}

//class tuong ke thua lai Interface TuongInterface
class Tuong implements TuongInterface {
    ten : string;
    mau : number;
    satthuong : number;
    mota : string;

    XemTuong () : void {
        console.log('xem');
    }

    donkinang () : any {
        return 'don ky nang';
    }

    bienve () : void {
        console.log('bien ve');
    }
}