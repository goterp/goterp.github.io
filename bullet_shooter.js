

function bullet_shooter(){
    
    if(player_hp<0){
      shooter_x1 = -1000
    }
 
if( mouseX > x1+50){
   
  strokeWeight(2);
  stroke(0);
  fill("white");
  rectMode(CENTER);
  rect(shooter_x1, shooter_y1,25,40);
     
  rect(shooter_x1,shooter_y1+25,10,10);  
  rect(shooter_x1-25, shooter_y1+35,40,6);
  fill("black")
  rect(shooter_x1-35, shooter_y1+40,5,40); 
  
  fill("#E56717")
  rect(shooter_x1-35, shooter_y1+50,20,10)

push()
  fill("white")
  translate(shooter_x1-20, shooter_y1+70)
  rotate(-55)
  rect(0,0,13,40)

pop()

  fill("white")
  ellipseMode(CENTER);
  ellipse(shooter_x1, shooter_y1+38,15,15);
   

}
else if(mouseX <x1-50){
   
    strokeWeight(2);
    stroke(0);
    fill("white");
    rectMode(CENTER);
    rect(shooter_x1+100, shooter_y1,25,40);

   
    rect(shooter_x1+100,shooter_y1+25,10,10);  

   
  
    
   rect(shooter_x1-25+150, shooter_y1+35,40,6);
   fill("black")
  rect(shooter_x1-35+170, shooter_y1+40,5,40); 
  
  fill("#E56717")
  rect(shooter_x1-35+170, shooter_y1+50,20,10)

  push()
  fill("white")
  translate(shooter_x1-20+140, shooter_y1+70)
  rotate(55)
  rect(0,0,13,40)

  pop()

  fill("white")
 ellipseMode(CENTER);
 ellipse(shooter_x1+100, shooter_y1+38,15,15); 
}
    
else {

    
  
    strokeWeight(2)
    stroke(0);
    fill("white");
    rectMode(CENTER);
    rect(shooter_x1+50,shooter_y1-15-20,25+3,40);
    rect(shooter_x1+50,shooter_y1+10-20,10,10);
    rect(shooter_x1+50,shooter_y1+20-20,30,7);

    

  fill("black")
 rect(shooter_x1+50+23, shooter_y1+25-20,5,40);
 rect(shooter_x1+50-23, shooter_y1+25-20,5,40);


fill("#E56717")
  rect(shooter_x1+50+23, shooter_y1+50-35,10,8)
  rect(shooter_x1+50-23, shooter_y1+50-35,10,8)

 fill("white")
 rect(shooter_x1+50+23, shooter_y1+20-20,10,10);
 rect(shooter_x1+50-23, shooter_y1+20-20,10,10);

 rect(shooter_x1+50+23, shooter_y1+45-20+5,13,15);
 rect(shooter_x1+50-23, shooter_y1+45-20+5,13,15);

}


if(boss_x+500-boss_skill_circle_r < shooter_x1 && shooter_x1 < boss_x+500+boss_skill_circle_r && fire_block_time <250 && player_hp>0){
  fire_block_time +=1
  fire_block = 1



  push()
  noFill()
stroke("#FFE5B4")
strokeWeight(5)
drawingContext.shadowBlur = 100
drawingContext.shadowColor = color("#FFE5B4")
rect(x1,y1-40,150,150+50)
line(x1-50-25,y1+50+25*2-40,x1+50+25,y1-50-25*2-40)
line(x1+75,y1+50+25*2-40,x1-50-25,y1-50-25*2-40)

pop()






 }





}