var data = [{
    _id: 1,
    lastName: "Zansen",
    firstName: "Bary"
}, {
    _id: 2,
    lastName: "Naika",
    firstName: "Setph"
}, {
    _id: 3,
    lastName: "Marry",
    firstName: "Jane"
}, {
    _id: 4,
    lastName: "Jeo",
    firstName: "Pierre"
}, {
    _id: 4,
    lastName: "Fangen",
    firstName: "Ave"
}, {
    _id: 5,
    lastName: "Cara",
    firstName: "Sam"
}, {
    _id: 6,
    lastName: "Anders",
    firstName: "Fidy"
}, {
    _id: 7,
    lastName: "Zandry",
    firstName: "Gasy"
}, ]


function sorting_ascendingly_on(arr, prop){
	
	let res =  arr.sort(function (a,b ){

		let property = prop;
		return  a[property] === b[property] ? 0 : a[property] > b[property] ? 1 : -1
	})
	return res
}


function sorting_descendingly_on(arr, prop){
	
	let res =  arr.sort(function (a,b ){

		let property = prop;
		return  a[property] === b[property] ? 0 : a[property] > b[property] ? -1 : 1
	})
	return res
}
function creationTable(data) {
    let table = document.getElementById("table");
    let elemTr = document.createElement("TR");
    let elemTdi = document.createElement("TD");
    let elemTdf = document.createElement("TD");
    let elemTdl = document.createElement("TD");
    for (let i = 0; i < data.length; i++) {
    let texti = document.createTextNode(i);
    let textf = document.createTextNode(data[i].firstName);
    let textl = document.createTextNode(data[i].lastName);
    elemTdi.appendChild(texti);
    elemTdf.appendChild(textf);
    elemTdl.appendChild(textl);
    elemTr.appendChild(elemTdi);
    elemTr.appendChild(elemTdf);
    elemTr.appendChild(elemTdl);
    table.appendChild(elemTr);
    }
    
}

