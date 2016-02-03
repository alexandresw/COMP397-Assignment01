// Node4 SCENE
module scenes {
    export class Node4 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
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
            
            var bitmap = new createjs.Bitmap("../../Assets/images/node4.jpg");
            this.addChild(bitmap);


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
                "BackButton", 100, 50);
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
            scene = config.Scene.NOEXIT;
            changeScene();
        }
        
        // RIGHT Button click event handler
        private _rightButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.KILLED;
            changeScene();
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.NODE2;
            changeScene();
        }
    }
}