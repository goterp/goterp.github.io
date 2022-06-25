


function boss_movement(){
let boss_player_detect = int(dist(boss_x+500,boss_y,x1,y1))
print(boss_player_detect)

if(changing_time>=500){

if(menu ==5 && boss_health>0 ){



  if(boss_x+500>boss_mount_x0){
    boss_mount_x0+=5*2
    boss_mount_x1+=5*2
    boss_mount_x2+=5*2
   


    }
    if(boss_x+500<boss_mount_x0){
    
        boss_mount_x0-=5*2
        boss_mount_x1-=5*2
        boss_mount_x2-=5*2
        }
    
    



    if(boss_y+100>y1){    
    //boss_x = int(random(300,2400))
    boss_y -=10 
    
}else if(boss_y+100<y1 && boss_y<700){
    boss_y +=10
    
}
if(boss_player_detect>1000){
  if(x1<boss_x){
    boss_x -=15
    boss_eye_x -=15
   

  }  

  if(x1>boss_x){
    boss_x +=15
    boss_eye_x +=15
    
 
  }  
    
    
}

if(boss_player_detect<500 ){
  if(x1<boss_x+500){
      boss_x+=15
  boss_mount_x0+=15
  boss_mount_x1+=15
  boss_mount_x2+=15
 

  }else if(x1>boss_x+500){
    boss_x-=15
    boss_mount_x0-=15
    boss_mount_x1-=15
    boss_mount_x2-=15
    
  }

 

}


if(check_damage == 1){
    boss_x +=20
    
}
else{
    check_damage = 0
    // print("check_damage:"+check_damage)
}
}


}







}