function addEm(ConstName, ConstValue) {
	//this.ConstName = ConstName;
	this[ConstName] = ConstValue;
}
function addElements(elemets) {
	for (var _i = 0, _a = Object.entries(elemets); _i < _a.length; _i++) {
		var _b = _a[_i],
			keyu = _b[0],
			value = _b[1];
		var I = 1;
		I += 1;
		addEm(keyu, value + I);
	}
}
var coolu = {
	me: "hello",
	you: "bye",
};
addElements(coolu);
console.log(me, you);
