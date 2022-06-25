

function starting_menu(){
if(menu ==0){
  createCanvas(3100, 1300)
    background(0)  
}
    

push()
    textSize(200)
    textAlign(CENTER)
    textFont(title_font)
    text("NeiR:Ataraxia",width/2,height/2-100)
pop()

// print("menu:"+menu)
if(menu == 0){
      textSize(30)
    textAlign(CENTER)
   
    text("This game is Neir:Automata Fan Game and Final Project of <introduction of game developing> class ,Depertment of Digipen Game Engineering",width/2,1200)


    textSize(50)
    textAlign(CENTER)
   
    text("Press The Button",width/2,1000-100)
}
  

// push()// click box
//     rectMode(CENTER)
//     noFill()
//     strokeWeight(5)
//     stroke("red")
//     rect(width/2,1000-100-15-3,500,50-17)
// pop()
   
if(width/2-250<mouseX && mouseX<width/2+250 && 1000-100-15-25+17<mouseY && mouseY<1000-100-15+25-17 && menu ==0){
  
    rect(width/2,1000-100+30,650,7) //effect
    ellipse(width/2+650/2+20,1000-100+30,20)
    ellipse(width/2-650/2-20,1000-100+30,20)

    if(mouseIsPressed){
        menu = 1
    }

}


  
}

function next_menu(){
    createCanvas(3100, 1300)
    background(0)  

push()
    textSize(200)
    textAlign(CENTER)
    textFont(title_font)
    text("NeiR:Ataraxia",width/2,height/2-100)
pop()



    if(menu == 1){
        textSize(50)
        textAlign(CENTER)
        textFont(menu_font)
        text("New Game",width/2,1000-250-60)
        print(menu)
    // push()    
    // noFill()
    // stroke(255)
    // rect(width/2,1000-250-15-60,300,50)
    // pop()
    if(width/2-150<mouseX && mouseX<width/2+150 && 1000-250-15 -25-60<mouseY && mouseY<1000-250-15+25-60 && menu ==1){
        rect(width/2,1000-100+30-240+90-60,650,7) //effect
        ellipse(width/2+650/2+20,1000-100+30-240+90-60,20)
        ellipse(width/2-650/2-20,1000-100+30-240+90-60,20)
        if(mouseIsPressed){
             menu = 6
             print("start")
             print(menu)
    
        }    
    }else{
        
    }
    
        text("Control",width/2,1000-130-60)
    // push()    
    // noFill()
    // stroke(255)
    // rect(width/2,1000-250-15+120,300-100,50)
    // pop()
    
    if(width/2-150<mouseX && mouseX<width/2+150 && 1000-250-15-25+120-60<mouseY && mouseY<1000-250-15+25+120-60 && menu ==1){
        rect(width/2,1000-100+30-240+90+120-60,650,7) //effect
        ellipse(width/2+650/2+20,1000-100+30-240+90+120-60,20)
        ellipse(width/2-650/2-20,1000-100+30-240+90+120-60,20)
        if(mouseIsPressed){
            menu = 3
            print("Settings")
            print(menu)
       }   
    }
    
        text("License",width/2,1000-10-60)
    // push()    
    // noFill()
    // stroke(255)
    // rect(width/2,1000-250-15+120*2,300-100,50)
    // pop()
    if(width/2-150<mouseX && mouseX<width/2+150 && 1000-250-15-25+120*2-60+5<mouseY && mouseY<1000-250-15+25+120*2-60-5 && menu ==1){
        rect(width/2,1000-100+30-240+90+120*2-60,650,7) //effect
        ellipse(width/2+650/2+20,1000-100+30-240+90+120*2-60,20)
        ellipse(width/2-650/2-20,1000-100+30-240+90+120*2-60,20)
        if(mouseIsPressed){
            menu = 4
            print("license")
            print(menu)
       }   
    }
        
        text("Exit Game",width/2,1000+110-60)  
    // push()    
    // noFill()
    // stroke(255)
    // rect(width/2,1000-250-15+120*3,300-30,60)
    // pop()
    if(width/2-150<mouseX && mouseX<width/2+150 && 1000-250-15-25+120*3-60<mouseY && mouseY<1000-250-15+25+120*3-60 && menu ==1){
        rect(width/2,1000-100+30-240+90+120*3-60,650,7) //effect
        ellipse(width/2+650/2+20,1000-100+30-240+90+120*3-60,20)
        ellipse(width/2-650/2-20,1000-100+30-240+90+120*3-60,20)
        if(mouseIsPressed){
            menu = 0
            print("exit game")
            print(menu)
       }   
    }
    
    }
}


function license_menu(){
    createCanvas(3100, 1300)
    background("#c8bfaa") 

 

    
    textFont(menu_font)
    noStroke()
    textSize(130)
    textAlign(CORNER)
    fill("#b0a894")
    text("LICENSE",100+15,200+15+20)
    fill("#655f53")
    text("LICENSE",100,200+20)




    fill("#655f53")


    rectMode(CORNER)
    rect(100,400,30,500+100)
    rect(100+40,400,7,500+100)

    fill("#aea692")
    rect(100*2,400,2650,500+100)

    image(QR_CODE,300,430)

    image(square_enix,1000,650)
    image( platinum_games,1000,750)
    //image( font_works,1000+200,750)



    


    rectMode(CENTER)
    fill("#aea692")
    rect(width/2-20*3,1200-100/2,2700+50+10,100)

    fill("#655f53")
    rect(100,400*3-100/2,30,100)
    rect(100+40,400*3-100/2,10,100)

    rect(2500-500-50,400*3-100/2,40,40)
    rect(2500+10-500,400*3-100/2,40,40)

    fill("#aea692")
    textAlign(CENTER)
    textSize(45)
    text("w",2500-500-50,400*3+10+3-100/2)
    text("s",2500-500+10,400*3+10+3-100/2)
    fill("#655f53")
push()
    textFont(menu_font2)
    textSize(50)
    text("Select",2500-500+110,400*3+10+3+2*2-100/2)
pop()


rect(2500+60*6-500-50,400*3-100/2,120,40)
fill("#aea692")
    textAlign(CENTER)
    textSize(40)
text("Enter",2500+60*6-500-50,400*3+10+3-100/2+2)
fill("#655f53")
text("Confirm",2500+60*6-500-50+140,400*3+10+3-100/2)


fill("#655f53")
rect(2600+20,400*3-100/2,40*2,40)
text("Back",2500+60*6-500-50+140+150+20+50*2,400*3+10+3-100/2)
fill("#aea692")
text("Esc",2500+60*6-500-50+140+150+20,400*3+10+3-100/2)

textAlign(CORNER)
fill("#655f53")
text("Department of Digipen Game Engineering ",1000,500)
text(" STUDENT CODE:5764368 | Kim Taeho",1000,560)
text("[Copyright]",1000,640)





if(menu == 4){
    
    if(keyIsDown(keyCode = 27)){
        menu = 1
print("esc")
    }

  

}
  





    



 //noCursor()  

    //  noStroke()
    // fill(back_filter2)
    // rect(0,0,6200,3000)

}














function control_menu(){
    createCanvas(3100, 1300)
    background("#c8bfaa") 

 

    
    textFont(menu_font)
    noStroke()
    textSize(130)
    textAlign(CORNER)
    fill("#b0a894")
    text("CONTROL",100+15,200+15+20)
    fill("#655f53")
    text("CONTROL",100,200+20)




    fill("#655f53")


    rectMode(CORNER)
    rect(100,400,30,500+100)
    rect(100+40,400,7,500+100)

    fill("#aea692")
    rect(100*2,400,2650,500+100)

 

    fill("#655f53")
    text("[A] = LEFT MOVE",100+150,200+350)
    text("[D] = RIGHT MOVE",100+150,200+350+140+50)
    text("[SPACE] = JUMP",100+150+1400,200+350)
    text("[MOUSE LEFT] = ATTACK",100+150,200+350+140*2+100)


    


    rectMode(CENTER)
    fill("#aea692")
    rect(width/2-20*3,1200-100/2,2700+50+10,100)

    fill("#655f53")
    rect(100,400*3-100/2,30,100)
    rect(100+40,400*3-100/2,10,100)

    rect(2500-500-50,400*3-100/2,40,40)
    rect(2500+10-500,400*3-100/2,40,40)

    fill("#aea692")
    textAlign(CENTER)
    textSize(45)
    text("w",2500-500-50,400*3+10+3-100/2)
    text("s",2500-500+10,400*3+10+3-100/2)
    fill("#655f53")
push()
    textFont(menu_font2)
    textSize(50)
    text("Select",2500-500+110,400*3+10+3+2*2-100/2)
pop()


rect(2500+60*6-500-50,400*3-100/2,120,40)
fill("#aea692")
    textAlign(CENTER)
    textSize(40)
text("Enter",2500+60*6-500-50,400*3+10+3-100/2+2)
fill("#655f53")
text("Confirm",2500+60*6-500-50+140,400*3+10+3-100/2)


fill("#655f53")
rect(2600+20,400*3-100/2,40*2,40)
text("Back",2500+60*6-500-50+140+150+20+50*2,400*3+10+3-100/2)
fill("#aea692")
text("Esc",2500+60*6-500-50+140+150+20,400*3+10+3-100/2)







if(menu == 3){
    
    if(keyIsDown(keyCode = 27)){
        menu = 1
print("esc")
    }

  

}
  





    



 //noCursor()  

    //  noStroke()
    // fill(back_filter2)
    // rect(0,0,6200,3000)

}




