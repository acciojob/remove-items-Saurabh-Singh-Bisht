//your JS code here. If required.
const opt = document.querySelector("#colorSelect");
const btn = document.querySelector("input");
btn.addEventListener("click", () => {
	const selectVal = opt.value;
	let option = opt.children;
	for(let i=0;i<option.length;i++){
		if(option[i].value === selectVal){
			option[i].remove();
			return;
		}
	}
})