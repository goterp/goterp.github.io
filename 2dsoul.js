
let shooter_px = 10
let shooter_py = 0
let jump_force = 70;
let down_force = 20;
let ground_collision = 20;
let boss_death_effect_x=0
let boss_death_effect_y=0
let player_death_effect_x=0
let player_death_effect_y=0
let boss_hp_effect_x = 2000
let x1 = 50;
let y1 = 450+530;
let r =  100;
let player_hp = 500*2
let hp_bar_effect_x = 500*2
let hp_bar_x = 50, hp_bar_y = 10
let wx1 = 60
let wy1 = 450+530
let phb_x =1000 ,phb_y=450
let alpha = 200
let angle = 0
let tx = 500,ty = 500
let boss_health = 2000
let shooter_x1 = -1
let shooter_y1 = 870
let obstacle;
let check_damage = 0
let player_skill_gauge = 0
let bb_bulletsFired = [];
let pb_bulletsFired = [];
let black_filter_color = 100
let black_filter_color2 = 30
let boss_x = 1000+500
let boss_y = 800-100
var menu = 0///////////
let a = 0
let tpx = 0
let tpy = 0

let be_a = 0

let boss_eye_x = 1500

let menu_cursor = 0
let cursor_position = 0


let changing_time = 0
let changing_time_ending = 0

let bhb_w = 0
let bhb_y = 0
let bhe_y = 40
let attack_num = 0
let jump_count = 0

let skill_count = 0 

let boss_skill_circle_r = 0
let boss_skill_count = 0

let player_move_speed = 20

let fire_block_time = 0
let fire_block= 0

let machine_sound;




function preload(){
  title_font = loadFont('asset/Bangle-Normal.ttf');
  menu_font = loadFont('asset/FOTRodin Pro M.otf')
  menu_font2 = loadFont('asset/FOTRodin Pro L.otf')
  QR_CODE = loadImage('asset/png.png')
  square_enix = loadImage('asset/760px-Square_Enix_logo.svg.png')
  platinum_games = loadImage('asset/platium.png')
  // machine_sound = loadSound('asset/mechine_sound.mp3')
  
}

function setup() {
  createCanvas(3100, 1300)
  obstacle = new rect_bar();
  print(y1,wy1)
  squareColor = color('#565051');
  squareColor.setAlpha(100)
  
  black_back = color('#0C090A')
  black_back.setAlpha(120)

  
  back_filter = color('#000000')
  back_filter.setAlpha(black_filter_color)

  back_filter2 = color('#000000')
  back_filter2.setAlpha(black_filter_color2)

  



 

}


// function loading_Sound(){

//   if(menu == 5,6){
    
//     machine_sound.play()
//     setVolume(0.01)
//   }

// }



function draw(){

//   print("changing_time:"+changing_time)
//   print("jump_count:"+jump_count)

// print("skill_gauge:"+player_skill_gauge)

// print("skill_count:"+skill_count)
// print("boss_skill_count:"+boss_skill_count)
// print("fire_block_time:"+fire_block_time)
// print("ending:"+changing_time_ending)
//  print("menu:"+menu)
//  print("attack_num:"+attack_num)
print("player_hp:"+player_hp)

 background("#797979")




background_training_ground()
obstacle_rect()
player_jump()
gravity()
boss()

enemy_bullet_spawn()
player_appearance()
player_skill()

player_move()
player_hp_bar()
boss_health_system()
bullet_shooter()
player_bullet_spawn()
boss_movement()
player_die()
boss_die()  
 warning() 
dark();
mouse_aim()
getMouseVector()

//loading_Sound()

//weapon()


if(menu == 0){
starting_menu()
}else if(menu ==1){
  next_menu()

}

if(menu==3){
 control_menu()
}




  //noCursor();

if(menu ==4){
  license_menu()
}




ending_menu()  

}



























































































  
