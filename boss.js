
let boss_mount_x0 = 600+2000
let boss_mount_x1 = 500+2000
let boss_mount_x2 = 700+2000


let skill_x = 2000
let skill_y = 700

let aaa = 0

function boss(){
if(boss_health>0 && menu ==5){
push()

stroke(0)
strokeWeight(5)
fill("#483C32")
rect(boss_mount_x0,450,300,300)

fill("#E5E4E2")
ellipse(boss_mount_x0-200,450+100,100,100)
ellipse(boss_mount_x0+200,450+100,100,100)
ellipse(boss_mount_x0+200,450-100,100,100)
ellipse(boss_mount_x0-200,450-100,100,100)













push()
strokeWeight(5)
fill("#838996")

if(changing_time>=230){
   fill("#F70D1A")
drawingContext.shadowBlur = 100
drawingContext.shadowColor = color("#F70D1A") 
}
ellipse(boss_mount_x0,450+20,200+50-20,200+50-20)

fill("#838996")
ellipse(boss_mount_x0,450+20,230/2,230/2)
pop()

stroke(0)
strokeWeight(5)
fill("#483C32")
rect(boss_mount_x0-150,450,100,150)
rect(boss_mount_x0+150,450,100,150)
rect(boss_mount_x0,450-150,500,50)
rect(boss_mount_x0,450+150,500,50)





stroke(0)
strokeWeight(40)
line(boss_mount_x1,400+50+80,boss_x+500-100,boss_y+100)
line(boss_mount_x2,400+50+80,boss_x+500+150,boss_y+100)
line(boss_mount_x0,350,boss_x+500-100-20,boss_y-100)

stroke("#483C32")
strokeWeight(30)
line(boss_mount_x1,400+50+80,boss_x+500-100,boss_y+100)
line(boss_mount_x2,400+50+80,boss_x+500+150,boss_y+100)

line(boss_mount_x0,350,boss_x+500-100-20,boss_y-100)

















stroke(0)
strokeWeight(10)
ellipse(boss_x+500,boss_y,500,500)





push()
strokeWeight(5)
fill("#838996")

if(changing_time>=230){
   fill("#F70D1A")
drawingContext.shadowBlur = 100
drawingContext.shadowColor = color("#F70D1A") 
}
ellipse(boss_x+500,boss_y,500-60,500-60)
pop()

push()





fill("#483C32")
ellipse(boss_x+500,boss_y,20,20)
translate(boss_x+500,boss_y)
strokeWeight(10)
stroke(0)
rect(0,0,400,250*2+100)

pop()


push()

let eye_move_c = constrain(boss_eye_x,boss_x+430,boss_x+500+70)

fill("#483C32")
strokeWeight(10)
stroke(0)
rect(boss_x+500,boss_y,200,250*2+100+100)

noStroke()
rect(boss_x+500,boss_y,400-10,250*2+100)

fill(0)
rect(boss_x+500,boss_y,10,500)

rect(boss_x+350,boss_y,10,300)

rect(boss_x+500+150,boss_y,10,300)

fill("#483C32")
rect(boss_x+500,boss_y+100,100,130)

noFill()
stroke(0)
strokeWeight(10)
rect(boss_x+500,boss_y+100,100,130)




pop()

push()

stroke(0)
fill("#3B3131")
rect(boss_x+500,boss_y-200,130*2,25)// eye
ellipse(eye_move_c,boss_y-200,100,100)//eye
fill("#838996")

if(changing_time>=230){
   fill("#F70D1A")
drawingContext.shadowBlur = 100
drawingContext.shadowColor = color("#F70D1A") 
}




ellipse(eye_move_c,boss_y-200,80,80)//eye
ellipse(boss_x+500,boss_y-200+100,50,50)


pop()
// ellipse(boss_x+500-150,boss_y-150,20,20)
// noFill()
// strokeWeight(10)//boss hit box
// stroke("red")
// rect(boss_x+500,boss_y,160*2,160*2)  

 

let boss_player_detect = dist(boss_x+500,boss_y,x1,y1)





if(boss_player_detect<600 || boss_player_detect>900 && changing_time>=800 ){

    if(boss_skill_count<500 ){
        push()
    noFill()
 stroke("#FFE5B4")
 strokeWeight(20)
 drawingContext.shadowBlur = 100
 drawingContext.shadowColor = color("#FFE5B4")
 circle(boss_x+500,boss_y+100,boss_skill_circle_r)
 boss_skill_circle_r +=100
 
 
    }

  
    

 pop() 
 }
  if(boss_skill_count>=700){
        boss_skill_count = 0
        boss_skill_circle_r = 0
        fire_block_time = 0
        
    }







 if(boss_x+500-boss_skill_circle_r < x1 && x1 < boss_x+500+boss_skill_circle_r){
   boss_skill_count +=1
   player_move_speed = 40
 }

  if(fire_block_time>=250){
    fire_block = 0
    player_move_speed = 20
  }






  
if(boss_player_detect<1000 && changing_time>=500){

   
    noFill()
    stroke('#FFE5B4')
    strokeWeight(3)
ellipse(boss_x+500,boss_y+100,250,250)
ellipse(boss_x+500,boss_y+100,100,100)

fill('#FFE5B4')

push()
translate(boss_x+500,boss_y+100)
rotate(be_a)
rect(100,0,15,15)
be_a+=2
pop()


push()
translate(boss_x+500,boss_y+100)
rotate(be_a)
rect(-100,0,15,15)
be_a+=2
pop()

push()
translate(boss_x+500,boss_y+100)
rotate(be_a)
rect(0,100,15,15)
be_a+=2
pop()

push()
translate(boss_x+500,boss_y+100)
rotate(be_a)
rect(0,-100,15,15)
be_a+=2
pop()


}




if( boss_player_detect<1200 && changing_time>=500){

if(x1<boss_x && boss_eye_x>boss_x+430){
    boss_eye_x-=5
}
if(x1>boss_x  && boss_eye_x<boss_x+500+70){
    boss_eye_x+=5
}


}






}    




}

function boss_health_system(){

let boss_hp_effect = constrain(boss_hp_effect_x,0,2000)    
let boss_hp = constrain(boss_health,0,2000)

 

    if(menu ==5 && changing_time>=500){
            rectMode(CORNER)
    noStroke()
push()
    fill("#000000")
    rect(600-100,1150+20,2000,30)
pop()

fill("#FF0000")    
rect(600-100,1150+20,boss_hp_effect,30)

    fill('#FFE5B4')
    rect(600-100,1150+20,boss_hp,30)

    rect(600-100,1150+40+10+10,2000,10)
    ellipse(600-90,1150-30+20,20,20)
    ellipse(600-108+2000,1150-30+20,20,20)  
    }





    
    let bhb_w_c = constrain(bhb_w,0,2000)
    let bhb_y_c = constrain(bhb_y,0,40)
    let bhe_y_c = constrain(bhe_y,0,40)


    if(menu ==5 && changing_time>=230 && changing_time<500){
       
rectMode(CENTER)
noStroke()
fill('#FFE5B4')
rect(width/2-45-5,1140+30+15,bhb_w_c,30)
rect(width/2-45-5,1150+30+bhb_y_c-5,bhb_w_c,10)


 
bhb_w+=50

}

if(menu ==5 && changing_time>=300 && changing_time<500){
    ellipse(600-90,1140+bhe_y_c,20,20)
    ellipse(600-108+2000-2,1140+bhe_y_c,20,20)  
    bhb_y+=5/2
    bhe_y-=1.3
}






     
   }

   function boss_die(){
push()    
    if(boss_health<=0){
  noFill()
    noStroke()
    strokeWeight(10)
    stroke('#FFE5B4')
    ellipse(boss_x+500,boss_y,boss_death_effect_x,boss_death_effect_y)
    
    boss_death_effect_x +=50
    boss_death_effect_y +=50
    
pop()
    }
  
}

