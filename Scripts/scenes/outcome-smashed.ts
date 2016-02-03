// OutcomeExit SCENE
module scenes {
    export class OutcomeSmashed extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _overLabel: createjs.Text;
        private _overMessage: createjs.Text;
        private _playAgainButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            var bitmap = new createjs.Bitmap("../../Assets/images/outcomeSmashed.jpg");
            this.addChild(bitmap);

            // add the PLAY label to the scene
            this._overLabel = new createjs.Text("Game Over", "50px Consolas", "#CCCCCC");
            this._overLabel.regX = this._overLabel.getMeasuredWidth() * 0.5;
            this._overLabel.regY = this._overLabel.getMeasuredHeight() * 0.5;
            this._overLabel.x = config.Screen.CENTER_X;
            this._overLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._overLabel);
            
            // add the PLAY label to the scene
            this._overMessage = new createjs.Text("You were smashed by the closing walls!", "25px Consolas", "#CCCCCC");
            this._overMessage.regX = this._overMessage.getMeasuredWidth() * 0.5;
            this._overMessage.regY = this._overMessage.getMeasuredHeight() * 0.5;
            this._overMessage.x = config.Screen.CENTER_X;
            this._overMessage.y = config.Screen.CENTER_Y + 40;
            this.addChild(this._overMessage);

            // add the BACK button to the MENU scene
            this._playAgainButton = new objects.Button(
                "PlayAgainButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 100);
            this.addChild(this._playAgainButton);
           
            // BACK Button event listener
            this._playAgainButton.on("click", this._playAgainButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _playAgainButtonClick(event: createjs.MouseEvent) {
            // Switch to the Menu Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}