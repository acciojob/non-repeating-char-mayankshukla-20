function firstNonRepeatedChar(str) {
 // Write your code here
	let i=0;
	if(!str) return null;
	if(str.length === 1) return str[0];
	while(i<str.length){
		if(str[i] === str[i+1]){
			i += 2;
		}
		else{ 
			return str[i];
		}
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
