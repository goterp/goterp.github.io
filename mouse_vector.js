


function getMouseVector(){

if(player_hp>0 ){
let mouseXalt1 = mouseX - shooter_x1;
	let mouseYalt1 = mouseY - shooter_y1;
	let mouseDir1 = createVector(mouseXalt1, mouseYalt1);
	mouseDir1.normalize();
	return mouseDir1;	
}

}

