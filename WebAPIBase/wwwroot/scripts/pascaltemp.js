window.onload = function () {
    //mi tortenik ha betolt az oldal
    consol.log(szam);
}

var drawPascal = function (sorSzam) {
    //Itt tortenik a pascal haromszog DOM elemeinek létrehpzása es elhelyezese
    var ujSorDiv = document.getelementByID('pascal');

    for (var sor = 0; sor < 10; sor++) {
        var ujSorDiv = document.createElement('div')
        ujSorDiv.classList.add('sor')
        PascalDiv.appendChild(ujSorDiv);
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var ujElemDiv = document.createElement('div');
            ujElem.classList.add('elem');
            ujElemDiv.innerText =; //sor+
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
