const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function setup(){
    canvas = createCanvas(windowWidth/2, windowHeight/1.5)
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity ();
    let options = {
        mouse : canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    //creating the bobs
    
    
	bobObject1=new Pendulum(100,280,20,20);
	bobObject2=new Pendulum(160,280,20,20);
	bobObject3=new Pendulum(220,280,20,20);
	bobObject4=new Pendulum(280,280,20,20);
    bobObject5=new Pendulum(340,280,20,20);
    
    //creting the ropes
    rope1=new Sling(bobObject1.body,{x:100,y:50});
	rope2=new Sling(bobObject2.body,{x:160,y:50});
	rope3=new Sling(bobObject3.body,{x:220,y:50});
	rope4=new Sling(bobObject4.body,{x:280,y:50});
	rope5=new Sling(bobObject5.body,{x:340,y:50});

    Engine.run(engine);
}

function draw(){
    background("black");
    Engine.update(engine);

    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}

/*function mouseDragged(){
    Matter.Body.setPosition(bobObject1.body,{x : mouseX,y : mouseY});
}*/