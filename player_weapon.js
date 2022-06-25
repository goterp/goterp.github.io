

//let tpx_c = constrain(tpx,0,20)
function weapon(){
   
push()
rectMode(CORNER)
  translate(wx1+20+tpx,wy1+tpy+5)
  rotate(-15+180+a)
    fill("blue") //sheath
    rect(-10,0,120,10)
    
    if(keyIsDown(keyCode = 69)){
        a =178
        tpx =20+10 
        tpy =-15
    }
    else{
        a = 0
        tpx =0 
        tpy =0
    }
pop()

push()
translate(wx1-42,wy1+16)
    rotate(-15)
    fill("black") //sheath
    rect(0,0,120,15)
pop()



}