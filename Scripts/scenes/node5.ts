// Node5 SCENE
module scenes {
    export class Node5 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _gameLabel:createjs.Text;
        private _leftButton: objects.Button;
        private _rightButton: objects.Button;
        private _backButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            var bitmap = new createjs.Bitmap("../../Assets/images/node5.jpg");
            this.addChild(bitmap);
            
            var shape = new createjs.Shape();
            shape.graphics.beginFill("#333").drawRect(0, 0, config.Screen.WIDTH, 100);
            shape.alpha = 0.8;
            this.addChild(shape);
            
            this._gameLabel = new createjs.Text("Great, you've killed the monster. You might be near the exit. \nHurry up!!!!", "20px Consolas", "#FFF");
            this._gameLabel.x = 20;
            this._gameLabel.y = 20;
            this._gameLabel.lineWidth = config.Screen.WIDTH - 40;
            this.addChild(this._gameLabel);


            // add the NEXT button to the PLAY scene
            this._leftButton = new objects.Button(
                "LeftButton",
                config.Screen.CENTER_X - 200,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._leftButton);
           
            // NEXT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            
            // add the NEXT button to the PLAY scene
            this._rightButton = new objects.Button(
                "RightButton",
                config.Screen.CENTER_X + 250,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._rightButton);
           
            // NEXT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);

            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button(
                "BackButton", 100, config.Screen.HEIGHT - 50);
            this.addChild(this._backButton);
           
            // // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT Button click event handler
        private _leftButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.SMASHED;
            changeScene();
        }
        
        // RIGHT Button click event handler
        private _rightButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.EXIT;
            changeScene();
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.NODE2;
            changeScene();
        }
    }
}