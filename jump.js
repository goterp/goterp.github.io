
function player_jump(){
    jump_force = 80
    
if(menu ==5,6){
          if(keyIsDown(keyCode = 32)){
    if(jump_count<=4){

       y1 -= jump_force;
        wy1 -= jump_force;
        shooter_y1 -=jump_force;
        jump_count+=1
        print("jump")  
    }
      } 
    else{
  jump_count = 0
  jump_force = 0    
      }  
  }
 
}

function gravity(){

    y1 += down_force;
    wy1 += down_force;
    shooter_y1 += down_force;

    if(y1 > 1000 ){
        
        y1 -= ground_collision
        wy1 -= ground_collision
        shooter_y1 -=ground_collision
    }


}