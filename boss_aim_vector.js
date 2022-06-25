




function get_boss_aim_Vector(){    
    
	let bossX_vector = x1 - (boss_x+500);
    let bossY_vector = y1  - (boss_y+80);
    let bb_direction = createVector(bossX_vector,bossY_vector);
 bb_direction.normalize();
    return bb_direction;
}

function boss_vector(){
    let bossX_vector2 = x1 - (boss_x+500);
    let bossY_vector2 = y1-100  - (boss_y+80);
    let bb_direction2 = createVector(bossX_vector2,bossY_vector2);
    bb_direction2.normalize();
    return bb_direction2;
}


function boss_vector2(){
    let bossX_vector3 = x1 - (boss_x+500);
    let bossY_vector3 = y1+100  - (boss_y+80);
    let bb_direction3 = createVector(bossX_vector3,bossY_vector3);
    bb_direction3.normalize();
    return bb_direction3;
}


function boss_vector3(){
    let bossX_vector4 = skill_x - (boss_x+500);
    let bossY_vector4 = skill_y  - (boss_y+80);
    let bb_direction4 = createVector(bossX_vector4,bossY_vector4);
    bb_direction4.normalize();
    return bb_direction4;
}
