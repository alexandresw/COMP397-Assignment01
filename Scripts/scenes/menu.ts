// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _gameLabel:createjs.Text;
        private _startButton:objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            var bitmap = new createjs.Bitmap("../../Assets/images/cover.jpg");
            this.addChild(bitmap);
            
            var shape = new createjs.Shape();
            shape.graphics.beginFill("#333").drawRect(0, 0, config.Screen.WIDTH, 100);
            shape.alpha = 0.8;
            this.addChild(shape);
            
            // add the MENU label to the scene
            this._gameLabel = new createjs.Text("You are looked in a huge maze. You need to find the exit before " + 
                "you be killed by monsters or be smashed by the dangerous walls. \nHurry up!", "20px Consolas", "#FFF");
            this._gameLabel.x = 20;
            this._gameLabel.y = 20;
            this._gameLabel.lineWidth = config.Screen.WIDTH - 40;
            this.addChild(this._gameLabel);

            // add the START button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X - 15, 
                config.Screen.CENTER_Y + 100);
            this.addChild(this._startButton);
            
            // START Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startButtonClick(event:createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.NODE1;
            changeScene();
        }
    }
}