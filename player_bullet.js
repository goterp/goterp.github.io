


class Circle{
    constructor(xSpd, ySpd){
      this.x = shooter_x1+50;
      this.y = shooter_y1;

      
      
      this.xSpd = xSpd*80;
		  this.ySpd = ySpd*80;


    
    }
  
    player_display(){
push()
      angleMode(DEGREES)
      
        translate(this.x+shooter_px, this.y+shooter_py)
      

      

      let a = atan2(mouseY - y1, mouseX - x1);
      rotate(a)  

      noStroke()
     fill("#FFE5B4");
     drawingContext.shadowBlur = 20
     drawingContext.shadowColor = color(255, 229, 180)
     ellipse(0, 0,50,20);
pop()    
  
      }
    player_move(){
       
        this.x += this.xSpd;
        this.y += this.ySpd;
        this.xSpd *= 0.994; //spd = spread direction
        this.ySpd *= 0.994;
          
    }
  
    player_outOfBounds(){
      return(this.x<0 || this.x>3000 || this.y<0 || this.y>1050);
    }

    pb_boss_damage_outOfBounds(){//boss hit damage detect
      if(changing_time>=400){

        return(this.x>boss_x+500-80*2+50 && this.x<boss_x+500+80*2-50 && this.y>boss_y-80*2-100 && this.y<boss_y+80*2+100);
      }
      
      
    }
  
  }




  

  function mousePressed(){
if(fire_block == 0){
    let mouseVector = getMouseVector(); 

  if(mouseIsPressed){
    
      if(player_hp>0&& menu ==5,6 && mouseButton == LEFT ){
   oneBullet = new Circle(mouseVector.x, mouseVector.y);
   pb_bulletsFired.push(oneBullet); 

          }
  
      }   

    }

}




function player_bullet_spawn(){

  let boss_player_detect = dist(boss_x+500,boss_y,x1,y1)

  for (var i = 0; i < pb_bulletsFired.length; i++){//player_bullet
    pb_bulletsFired[i].player_display(); 
    pb_bulletsFired[i].player_move();
  
    if (pb_bulletsFired[i].player_outOfBounds()){//player bullet delete
      pb_bulletsFired.splice(i,1);

        }
     else if(pb_bulletsFired[i].pb_boss_damage_outOfBounds() && menu ==5){//player bullet delete
        pb_bulletsFired.splice(i,1);
        //print("boss_hit")
        player_skill_gauge+=20*2
        boss_health-=15
        if(player_skill_gauge >1000){
          player_skill_gauge = 1000
        }

        
        if((boss_x+500)>x1){
              damage_check = 1
           //print("damage_check:"+damage_check)     
        }
    
      if(boss_player_detect<400){
        boss_health -=50
        boss_hp_effect_x -=48
      }else{
          
      boss_health -=15
      boss_hp_effect_x -=14
      }
    
      if(boss_health<0){
        boss_hp_effect_x = 0
      }
          }
    
     }
 
}

let recover = 0



function player_skill(){
  if(player_skill_gauge >= 500*2 && skill_count<300){

  recover = 1
        skill_count ++
        player_hp+= recover
       hp_bar_effect_x+= recover


          push()
print("skill")
    noFill()
    stroke("#FFE5B4")
    strokeWeight(20)
    drawingContext.shadowBlur = 100
    drawingContext.shadowColor = color("#FFE5B4")
    ellipse(x1,y1-100,300,300)


    

  pop()  
      
     




     

  }
  else if(skill_count>=300){
    player_skill_gauge =0
    skill_count =0
   recover = 0

  
  
}

if(player_hp>1000){
  recover = 0
  playerIhp = 1000
  hp_bar_effect_x = 1000
}

if(player_skill_gauge<1000){
recover = 0
}
}