let robot_eye_x = 3100/2+50
let robot_eye_y = 800

let robot_c_x = 3100/2+50


let pan_x = 3100/2-200
let pan_y = 200

let raa = 0

let train_x = -100
let train_y = 500



function background_training_ground(){

//push() 
     for(let rpx = 200; rpx < windowWidth; rpx +=500){
    stroke(0);
    fill("#3A3B3C")   
rect(rpx,375+500,50,500) //pillar1
rect(rpx+151,365+508,50,500)//pillar
    
    fill("#43302E")
    rect(50+100,500+600,4000+2000,155)//ground
   
    fill('#3A3B3C')
    rect(50+100,570+620,4000+2000,200)//ground
 

    rect(width/2,600+51,3100,25)

  
    rect(width/2,800+100,3100,150)

    
    rect(width/2,100,3100,330)


    fill("#3B2F2F")   
    rect(width/2,400,3100,25)

     
    rect(width/2,400+100,3100,25)
    
   
    
if(menu == 6){

    let eye_Dist = dist(x1,y1,3100/2,1000)
    print(eye_Dist)

    stroke(0)

push()
  
    translate(width/2,1000)
    rotate(15)
    fill("#493D26")
    rect(0,0,350,600,10)

pop()

push()   
    fill("#513B1C")
    translate(width/2,1000)
    rotate(15)
    rect(0,0,300-50,650,10)
pop()

push()
    fill(0)
    translate(width/2,1000)
    rotate(15)
    rect(0,0,5,500)

    fill("#3A3B3C")
    rect(width/2+50,800,150,20)
pop()

push()
  
    translate(width/2+50,800)
    

    fill("#3A3B3C")
    rect(0,0,200,20)
pop()

let robot_eye_x_c = constrain(robot_eye_x,3100/2-50,3100/2+50*2)
fill("#2C3539")// eye
ellipse(robot_eye_x_c,robot_eye_y,70,70)

push()
if(eye_Dist<1300){
fill("#F70D1A")
drawingContext.shadowBlur = 32
drawingContext.shadowColor = color("#F70D1A")
}else{
fill("#E67451")
}
ellipse(robot_eye_x_c,robot_eye_y,50,50)

pop()

let eye_move_x = 1


if(eye_Dist<800){
if(x1< robot_c_x){
       robot_eye_x-= eye_move_x  
}
}
if(x1> robot_c_x){
       robot_eye_x+= eye_move_x
       print("right")
}


push()
   noStroke()
   strokeWeight(5)
   fill("#493D26")  
strokeWeight(2)
stroke(0)
  rect(train_x,train_y-50,250,250)
    rect(train_x+300-50,train_y-50,250/2,250)
   rect(train_x+600-50*2,train_y-50,200*2,50)
   ellipse(train_x+500,train_y-50,200,200)
     rect(train_x+300*2+100+50,train_y-50,250/2,250)
      rect(train_x+300*3+100,train_y-50,250,250)

      fill("#513B1C")
      rect(train_x+300*3+100,train_y-50,250/1.5,250/1.5)
      rect(train_x+300*2+100+50,train_y-50,250/3,250/1.5)
      ellipse(train_x+500,train_y-50,200/1.5,200/1.5)
      rect(train_x,train_y-50,250/1.5,250/1.5)
    rect(train_x+300-50,train_y-50,250/3,250/1.5)


    fill("#2C3539")// eye
    ellipse(train_x+500,train_y-50,70,70)
    
    if(eye_Dist<1300){
    fill("#F70D1A")
    drawingContext.shadowBlur = 32
    drawingContext.shadowColor = color("#F70D1A")
    }else{
    fill("#E67451")
    }
    ellipse(train_x+500,train_y-50,50,50)
      
    if(eye_Dist<800){
    if(x1< robot_c_x){
           train_x-= eye_move_x  
    }
    }
    if(x1> robot_c_x){
           train_x+= eye_move_x
           print("right")
    }
    train_x +=1
pop()


fill("#483C32")
    rect(100,400,2000,50)
    rect(1000,400,70,70,5)
    rect(1000-200,400,70,70,5)
    rect(100+50,400,70,70,5)
    rect(100+200+50,400,70,70,5)
rect(100+1000+500,400/2,2000+230*3,50)
    rect(1000+1000,400/2,70,70,5)
    rect(1000-200+1000,400/2,70,70,5)
    rect(100+50+1000,400/2,70,70,5)
    rect(100+200+50+1000,400/2,70,70,5)
rect(1000+50*2+1000+300*2-100*3,400+100,50,1200)
rect(1000+50*2+1000+300*2,400+100,50,1200/2)
    rect(1000+50*2+1000+300*2,400/2,70,80,5)
    rect(1000+50*2+1000+300*2-100*3,400/2,80,70,5)
    rect(1000+50*2+1000+300*2-100*3,400*1.5,80,70*2,5)
    rect(1000+50*2+1000+300*2-100*3,400*2+200,80,70*2,5)
    rect(1000+50*2+1000+300*2,400*2-100,70,70,5)
    
    push()
translate(100+200+50+500+300+100,400+100/2)
rotate(15)
    rect(0,0,70*4,50)
    pop()

    push()
translate(100+200+50+500+300+100*4+50,400+100/2+50)
rotate(5)
    rect(0,0,70*6,50)
    pop()

push()
translate(100+200+50+500+300+100*4+50*6+50,400+100/2+50*6+50)
rotate(70)
rect(0,0,70*10,50)
pop()

    rect(1000,400/2,70,70,5)
    rect(1000-200,400/2,70,70,5)
    rect(500+50+10,400/2+100+40,50,200*7+10,5)
    rect(500+50+10,400/2,80,70,10)
    rect(500+50+10,400,80,70,10)
    rect(500+50+10,400*2,80,70,10)
    
    


}    


}    
    
    noStroke()
    fill("#43302E")
    rect(50+100,500+600,4000+2000,155/2)//ground



    fill('#3A3B3C')
    rect(50+100,570+620,4000+2000,200)//ground
   



    
    



    
    }