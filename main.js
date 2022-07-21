
    function preload(){
    }
    
    function setup() {
        canvas = createCanvas(500,400);
        canvas.position(70,200);
        video = createCapture(VIDEO);
        video.hide();
    }
    
    function draw() {
        image(video,100,75,300,250);
    
        rect(35,20,430,50);
        fill(247, 135, 15); 
        stroke (247, 135, 15); 
          
        rect(10,10,60,70);
         fill(247, 15, 15);
          stroke(247, 15, 15);
          
          rect(430,10,60,70);
         fill(4, 144, 191);
          stroke(4, 144, 191);
          
            rect(435,80,50,300);
         fill(41, 191, 4);
          stroke(41, 191, 4);
          
             rect(430,320,60,70);
         fill(250, 238, 5);
          stroke(250, 238, 5);
          
         rect(60,330,370,50);
         fill(84, 2, 156);
          stroke(84, 2, 156);
          
          rect(10,320,60,70);
         fill(245, 10, 221);
          stroke(245, 10, 221);
          
          rect(15,80,50,240);
         fill(16, 19, 38);
          stroke(16, 19, 38);
          
    }
    function take_snapshot(){
        save("frame.png");
    }