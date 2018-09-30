module.exports = function check(str, bracketsConfig) {
	if(str.length % 2 !== 0) return false;
 
	const condition = {};
	const allsign = {};
	const stack =[];
	const bracketsConfigsize = bracketsConfig.length;

	for (let i = 0; i < bracketsConfigsize; i++){
	    if(bracketsConfig[i][0] === bracketsConfig[i][1]){
    		condition[bracketsConfig[i][0]] = 0;
    	}else{
    		condition[bracketsConfig[i][0]] = 0;
    		condition[bracketsConfig[i][1]] = 1; 
   		}
    	allsign[bracketsConfig[i][0]] = bracketsConfig[i][1];
    	allsign[bracketsConfig[i][1]] = bracketsConfig[i][0];
 	}
 
 	const strsize = str.length;
	for (let i = 0; i<strsize; i++){
 		let el = str[i];
 		if(condition[el] === 0 ){
  			stack.push(el);
			if(el === allsign[el]) condition[el] = 1;
  		}else{
   			if(stack.length === 0 || stack[stack.length-1] !== allsign[el]){
    		return false;
   			}else{
    			stack.pop();
    			if(el === allsign[el]) condition[el] = 0;
  			}
  		}
 	}
	return stack.length === 0;
}