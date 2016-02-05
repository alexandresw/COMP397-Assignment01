// OutcomeExit SCENE
module scenes {
    export class OutcomeNoexit extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _overMessage: createjs.Text;
        private _backButton: objects.Button;
        private _previousScene: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(previousScene:number) {
            super();
            this._previousScene = previousScene;
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            var bitmap = new createjs.Bitmap("../../Assets/images/outcomeNoexit.jpg");
            this.addChild(bitmap);
            
            var shape = new createjs.Shape();
            shape.graphics.beginFill("#333").drawRect(0, 0, config.Screen.WIDTH, 100);
            shape.alpha = 0.8;
            this.addChild(shape);

            // add the PLAY label to the scene
            this._overMessage = new createjs.Text("Go Back, no way to go further!", "25px Consolas", "#FFF");
            this._overMessage.regX = this._overMessage.getMeasuredWidth() * 0.5;
            this._overMessage.regY = this._overMessage.getMeasuredHeight() * 0.5;
            this._overMessage.x = config.Screen.CENTER_X;
            this._overMessage.y = 30;
            this.addChild(this._overMessage);
            

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
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the previous Scene
            scene = this._previousScene;
            changeScene();
        }
    }
}