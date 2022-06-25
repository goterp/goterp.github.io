
class boss_bullet{
    constructor(bb_xSpd,bb_ySpd){
        this.bbx1 = boss_x+500;
        this.bby1 = boss_y+100;
        this.bb_xSpd = bb_xSpd*80;
		    this.bb_ySpd = bb_ySpd*80;

     



    }
    bb_display(){
    
push()        
    fill("#F70D1A")
    drawingContext.shadowBlur = 32
    drawingContext.shadowColor = color("#F70D1A")

    noStroke()
    ellipse(this.bbx1, this.bby1, 30,30)

   
    


pop()    
        
    }

    bb_move(){
     
        this.bbx1 += this.bb_xSpd;
        this.bby1 += this.bb_ySpd;
        this.bb_xSpd*= 0.994; //spd = spread direction
        this.bb_ySpd*= 0.994;
    
     
    }

    boss_outOfBounds(){
        return(this.bbx1<0 || this.bbx1>3000 || this.bby1<0 || this.bby1>1050 );
      }
    

    bb_player_damage_outOfBounds(){//player hit damage detect
        return(this.bbx1>x1-40 && this.bbx1<x1+40 && this.bby1>y1-50-10 && this.bby1<y1-10+50);
      }


      player_skill_outOfBounds(){//player hit damage detect
        return(this.bbx1>x1-150 && this.bbx1<x1+150 && this.bby1>y1-50-150 && this.bby1<y1-10+150);
      }

      
}







function enemy_bullet_spawn(){
if(boss_health>0 && menu ==5){

push();
  
    let boss_player_detect = dist(boss_x+500,boss_y,x1,y1)



  
  if(boss_player_detect < 1000){

     let bb_bullet_fire = get_boss_aim_Vector();
      bb_attack = new boss_bullet(bb_bullet_fire.x,bb_bullet_fire.y);
      bb_bulletsFired.push(bb_attack);

        let bb_fire = boss_vector()
  bb_attack = new boss_bullet(bb_fire.x,bb_fire.y);
   bb_bulletsFired.push(bb_attack);

   let bb_fire2 = boss_vector2()
  bb_attack = new boss_bullet(bb_fire2.x,bb_fire2.y);
   bb_bulletsFired.push(bb_attack);


      
  if(changing_time>=500){
        for(let i=0; i<bb_bulletsFired.length; i++){
        bb_bulletsFired[i].bb_display();
        bb_bulletsFired[i].bb_move();

    if (bb_bulletsFired[i].boss_outOfBounds()){
      bb_bulletsFired.splice(i,1);
      }

      else if(bb_bulletsFired[i].bb_player_damage_outOfBounds()){
      
        if(player_skill_gauge<500*2){
            bb_bulletsFired.splice(i,1)
        print("player_hit")
        player_hp-=2 ////////////////
        hp_bar_effect_x -=1.8
        }



    
      
      }
      if(player_skill_gauge>=1000){

      if (bb_bulletsFired[i].player_skill_outOfBounds()){
        bb_bulletsFired.splice(i,1);

       
          bb_bulletsFired.splice(i,1)
      print("boss_bullet_block")
      player_hp-=0 ////////////////
      hp_bar_effect_x -=0
      }
        }
      
      
      

      }  
    
     
  }
  
  }  
  
pop();

}

    }



    