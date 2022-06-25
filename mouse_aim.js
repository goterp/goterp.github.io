

function mouse_aim(){
    
push();
    noStroke()
    rectMode(CENTER);
    rect(mouseX-50-30,mouseY,20, 70);
    rect(mouseX+50+30,mouseY,20, 70);
    
    ellipseMode(CENTER);
    ellipse(mouseX+28+30,mouseY-50,13,13)
    ellipse(mouseX+25+30,mouseY+50,13,13)

    ellipse(mouseX-28-30,mouseY-50,13,13)
    ellipse(mouseX-25-30,mouseY+50,13,13)
pop();
}

