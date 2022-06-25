

function player_hp_bar(){


    rectMode(CORNER)
    
    noStroke()
    fill("#000000")
    rect((hp_bar_x+40+200)/7,hp_bar_y+60,100+400+500,20)


push()    
let player_hp_effect_cons = constrain(hp_bar_effect_x,0,500*2)   
noStroke() 
    fill("#FF0000")
    rect((hp_bar_x+40+200)/7,hp_bar_y+60,player_hp_effect_cons,20)
pop()

let player_hp_system = constrain(player_hp,0,500*2)

    fill('#FFE5B4')
    noStroke()
    rect((hp_bar_x+40+200)/7,hp_bar_y+60,player_hp_system,20)// hp
   
    rect(50-7,10+100+30-20,500+500,5)
    ellipseMode(CENTER)
    ellipse(50+40+200+260+3+500, 10+100+30-20, 10,10)


push()
    noFill()
    strokeWeight(4)
    stroke('#FFE5B4')
    ellipse(50-23, 10+100+30-20, 15,15)
 

    ellipse(50-8, 10+50, 7,7)
    ellipse(50+40+200+250+500, 10+50, 7,7)
pop() 

fill("#000000")
    rect((hp_bar_x+40+200)/7,hp_bar_y+60+30,100+400+500,10)

let player_skill_system = constrain(player_skill_gauge,0,500*2)
fill('#FFE5B4')
    noStroke()
    rect((hp_bar_x+40+200)/7,hp_bar_y+60+30,player_skill_system,10)




  }
  
  
function player_die(){


if(menu ==5){
  if(player_hp <=0){

    noFill()
    strokeWeight(10)
    stroke('#FFE5B4')
    circle(x1,y1,player_death_effect_x,player_death_effect_y)
    
  player_death_effect_x +=40
  player_death_effect_y +=40
  }
}   


  }
  

function player_appearance(){
  if(menu ==5,6){
  if(player_hp>0){
    noStroke()
    fill('white')
    rectMode(CENTER)
    rect(x1,y1,r/2,r)

//   push()
// noFill()//player hit box
// strokeWeight(10)
// stroke("red")   
// rect(x1,y1-10,80,120)
//   pop()
}    
  }






}



function player_move(){

  if(player_hp>0 && menu == 5,6){
    if( x1 < 45){   
        
      x1 = x1+10 
      shooter_x1 = shooter_x1+10
      wx1 = wx1+10
    }
    else if( x1 > 3100){
      x1 = x1-10;
      wx1 = wx1-10
      shooter_x1 = shooter_x1-10
    }
    if( y1 > 1300){
      y1 = y1-10
      wy1 = wy1 -10
      shooter_y1 = shooter_y1-10
    }

    if( y1 < 250){
      y1 = y1+40
      wy1 = wy1 +40
      shooter_y1 = shooter_y1+40
    }


    if(keyIsDown (keyCode = 65)){
      x1 -=player_move_speed;
      wx1 -=player_move_speed;
      shooter_x1 -= player_move_speed;
    }
    if(keyIsDown(keyCode = 68)){        
      x1 +=player_move_speed;
      wx1 +=player_move_speed;  
      shooter_x1 +=player_move_speed;
    
    
    }
  }

  
    if(x1>3000 && menu ==6){

     

      



      menu = 5
       x1 = 50
       shooter_x1 = -1
    }

 
    

  }



  
    
  