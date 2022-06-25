

class rect_bar{
    constructor(rbx,rby,rbw,rbh){
     this.rect_x1 = rbx;
     this.rect_y1 = rby;
     this.rect_width1 = rbw;
     this.rect_height1 = rbh;


     
 

 }

 display(rbx, rby, rbw, rbh){
  
  noStroke()
     fill("#CECECE")
     rect(rbx, rby, rbw, rbh);

 }

 collision(rbx, rby, rbw, rbh){

 
    if(x1 > rbx - rbw/2 && x1 < rbx + rbw/2 && y1 > rby - rbh-40 && y1 < rby + rbh+40 )
    {
       
        down_force = 0 
        y1-=20 
        shooter_y1 -=20
        wy1 -=20

       
    }
    else
    {
     down_force = 20
    }
    
 }

}


function obstacle_rect(){

 if(menu ==5){



obstacle.display(width/2,800+130,2000,50);
if(width/2-1000 < x1 < width/2+1000){
  obstacle.collision(width/2,800+130,2000,50);
}

obstacle.display(width/2-500,850-200,500,50);
if(width/2-1000 < x1 < width/2+1000){
  obstacle.collision(width/2-500,850-200,500,50);
}

obstacle.display(width/2+500,850-200,500,50);
if(width/2-1000/2 < x1 < width/2+1000/2){
  obstacle.collision(width/2+500,850-200,500,50);
}

obstacle.display(width/2,500,200,50);
if(width/2-1000 < x1 < width/2+1000){
  obstacle.collision(width/2,500,200,50);
}

obstacle.display(width/2,-50,2000,50);
if(width/2-1000 < x1 < width/2+1000){
  obstacle.collision(width/2,-50,2000,50);
}


// obstacle.display(900,850,200,50);
// if(900 < x1 < 1100){
//   obstacle.collision(900,850,200,50);
// }









 } 


 

}


