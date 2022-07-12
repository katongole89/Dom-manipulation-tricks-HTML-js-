console.log('it works')

let selectOption2 = [
	{
		name: "volvo",
		value: "volvo",
	},
	{
		name: "saab",
		value: "saab",
	},
	{
		name: "mercedes",
		value: "mercedes",
	},
	{
		name: "audi",
		value: "audi",
	},
];

const selectOneOnChange = () =>{
    console.log('started')
    let x = document.querySelector("#mySelect").value;
	const theOptions = selectOption2.filter((option)=>{
        return option.value !== x
    })
    console.log(selectOption2)

    var newSelect = document.createElement("SELECT");
	newSelect.setAttribute("id", "mySelect2");
    console.log(newSelect)
    //remove
    const list = document.querySelector('#selectDiv2')

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    //add
	document.querySelector('#selectDiv2').appendChild(newSelect);
    // document.querySelector('#selectDiv2').innerHTML = newSelect
    theOptions.forEach((option)=>{
        console.log('looping')
        var z = document.createElement("option");
		z.setAttribute("value", option.value );
		var t = document.createTextNode(option.name);
		z.appendChild(t);
		document.getElementById("mySelect2").appendChild(z);
    })
}