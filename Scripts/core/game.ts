/// <reference path = "_reference.ts" />

// global variables
var canvas:HTMLElement;
var stage:createjs.Stage;
var stats:Stats;

var currentScene:objects.Scene;
var scene:number;

// Game Scenes
var menu:scenes.Menu;
var node1:scenes.Node1;
var node2:scenes.Node2;
var node3:scenes.Node3;
var node4:scenes.Node4;
var node5:scenes.Node5;
var node6:scenes.Node6;
var node7:scenes.Node7;
var killed:scenes.OutcomeKilled;
var smashed:scenes.OutcomeSmashed;
var exit:scenes.OutcomeExit;
var noexit:scenes.OutcomeNoexit;

function init():void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event:createjs.Event):void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.NODE1:
            // show the Node1 scene
            stage.removeAllChildren();
            node1 = new scenes.Node1();
            currentScene = node1;
            console.log("Starting Node1 Scene");
            break;
        case config.Scene.NODE2:
            // show the Node2 scene
            stage.removeAllChildren();
            node2 = new scenes.Node2();
            currentScene = node2;
            console.log("Starting Node2 Scene");
            break;
        case config.Scene.NODE3:
            // show the Node3 scene
            stage.removeAllChildren();
            node3 = new scenes.Node3();
            currentScene = node3;
            console.log("Starting Node3 Scene");
            break;
        case config.Scene.NODE4:
            // show the Node4 scene
            stage.removeAllChildren();
            node4 = new scenes.Node4();
            currentScene = node4;
            console.log("Starting Node4 Scene");
            break;
        case config.Scene.NODE5:
            // show the Node5 scene
            stage.removeAllChildren();
            node5 = new scenes.Node5();
            currentScene = node5;
            console.log("Starting Node5 Scene");
            break;
        case config.Scene.NODE6:
            // show the Node6 scene
            stage.removeAllChildren();
            node6 = new scenes.Node6();
            currentScene = node6;
            console.log("Starting Node6 Scene");
            break;
        case config.Scene.NODE7:
            // show the Node7 scene
            stage.removeAllChildren();
            node7 = new scenes.Node7();
            currentScene = node7;
            console.log("Starting Node7 Scene");
            break;
        case config.Scene.KILLED:
            // show the Killed scene
            stage.removeAllChildren();
            killed = new scenes.OutcomeKilled();
            currentScene = killed;
            console.log("Starting Killed Scene");
            break;
        case config.Scene.SMASHED:
            // show the Killed scene
            stage.removeAllChildren();
            smashed = new scenes.OutcomeSmashed();
            currentScene = smashed;
            console.log("Starting Smashed Scene");
            break;
        case config.Scene.EXIT:
            // show the EXIT scene
            stage.removeAllChildren();
            exit = new scenes.OutcomeExit();
            currentScene = exit;
            console.log("Starting Exit Scene");
            break;
        case config.Scene.NOEXIT:
            // show the Noexit scene
            stage.removeAllChildren();
            noexit = new scenes.OutcomeNoexit(currentScene===node4?config.Scene.NODE4:
                                                currentScene===node6?config.Scene.NODE6:
                                                config.Scene.NODE7);
            currentScene = noexit;
            console.log("Starting Noexit Scene");
            break;
    }

    console.log(currentScene.numChildren);
}