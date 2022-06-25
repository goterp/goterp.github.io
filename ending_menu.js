function ending_menu(){
    if(player_hp<0 || boss_health <0){
        
        
changing_time_ending+=1
if(150<=changing_time_ending<200){
    

}
if(changing_time_ending>=200){
    menu =0
}
if(changing_time_ending>=250){
    shooter_px = 10
    shooter_py = 0
    jump_force = 70;
    down_force = 20;
    ground_collision = 20;
    boss_death_effect_x=0
    boss_death_effect_y=0
    player_death_effect_x=0
    player_death_effect_y=0
    boss_hp_effect_x = 2000
    x1 = 50;
    y1 = 450+530;
    r =  100;
    player_hp = 500*2
    hp_bar_effect_x = 500*2
    hp_bar_x = 50, hp_bar_y = 10
    wx1 = 60
    wy1 = 450+530
    phb_x =1000 ,phb_y=450
    alpha = 200
    angle = 0
    tx = 500,ty = 500
    boss_health = 2000
    shooter_x1 = -1
    shooter_y1 = 870
    obstacle;
    check_damage = 0
    player_skill_gauge = 0
    bb_bulletsFired = [];
    pb_bulletsFired = [];
    black_filter_color = 100
    black_filter_color2 = 30
    boss_x = 1000+500
    boss_y = 800-100
    menu = 0///////////
    a = 0
    tpx = 0
    tpy = 0    
be_a = 0    
boss_eye_x = 1500    
menu_cursor = 0
cursor_position = 0
changing_time = 0
changing_time_ending = 0    
bhb_w = 0
bhb_y = 0
bhe_y = 40
jump_count = 0    
skill_count = 0 
robot_eye_x = 3100/2+50
robot_eye_y = 800
robot_c_x = 3100/2+50
pan_x = 3100/2-200
pan_y = 200
raa = 0
train_x = -100
train_y = 500
boss_mount_x0 = 600+2000
boss_mount_x1 = 500+2000
boss_mount_x2 = 700+2000

warning_bos_h = 250

warning_box_y = 160 
warning_box_w = 3100 
//warning_box_y_c = constrain(warning_box_y,0,160) 


}

    }


}