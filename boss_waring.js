
let warning_bos_h = 250
//let warning_bos_h_c = constrain(warning_bos_h,30,250)

let warning_box_y = 160 
let warning_box_w = 3100 
let warning_box_y_c = constrain(warning_box_y,0,160) 

function warning(){
    if(menu ==5){
        changing_time+=1
  
        if(changing_time<230 && changing_time>20){
            noStroke()
            fill('#FFE5B4')
            rect(width/2,height/2-warning_box_y,warning_box_w,8)  
          rect(width/2,height/2,3100,warning_bos_h)
          rect(width/2,height/2+warning_box_y,warning_box_w,8)  


if(changing_time<=200 && changing_time>20){
     fill(255)
          textAlign(CENTER)
          textSize(120)
          text("- W A R I N G -",width/2,height/2+20)

          rectMode(CENTER)
          rect(width/2,height/2+70,2000,10)

          ellipse(width/2+1030,height/2+70,20,20)
          ellipse(width/2-1030,height/2+70,20,20)
}

         
let w_box_move_h = 8
let w_box_move_y = 6


  if(200<=changing_time){
            warning_bos_h-= w_box_move_h
            warning_box_y-= w_box_move_y

 
            
        }


        }

        
      
        
      }
}