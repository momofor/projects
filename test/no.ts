let I = 0;
/**
 * array parser
 * @remarks
 * this is our arrays util
 * @param arr The array
 * @returns prints every item in the array
 **/
const nice = <arrT>(arr: arrT[]) => {
	arr.forEach((item) => {
		console.log(item);
	});
};
const testu = ["a", "b", "c", "d"];
nice(testu);
