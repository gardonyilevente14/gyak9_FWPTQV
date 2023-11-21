window.onload = function () {
    //mi tortenik ha betolt az oldal
    consol.log(szam);
}

var drawPascal = function (sorSzam) {
    //Itt tortenik a pascal haromszog DOM elemeinek létrehpzása es elhelyezese
    for (var sor = 0; sor < 10; sor++) {
        //új div létrehozása az új sornak
        var szuloElem = document.getelementByID('szulo');
        //új div osztálylistájához add hozzá a "sor"-t
        szuloElem.classList.add('sor')
        //új div-et add hozzá a "pascal" gyermekeihez
        szuloElem.appendChild(ujElem);
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            var ujElem = document.createElement('div');
            //új elem div osztálylistájához add hozzá az "elem"-et
            ujElem.classList.add('újelem');
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            //legyen az innerHTML a megfelelő szám
            //új elem div-et vedd fel a sor elemei közé
        }
    }
}
// uj DOM
var ujElem = document.createElement('div');
ujElem.classList.add('újosztály');
ujElem.id = 'újID';
ujElem.innerText = '0'
ujelem.innerHTML = '<div>Hello!</div>';
var szuloElem = document.getelementByID('szulo');
szuloElem.appendChild(ujElem);
