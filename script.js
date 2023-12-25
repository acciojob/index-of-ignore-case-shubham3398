function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let e = s2.length;

	while(e <= s1.length){
		let s = e - s2.length;

		let word = s1.substring(s, e);
		if(word.toLowerCase() === s2.toLowerCase()){
			return s;
		}

		e++;
	}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2)); 
