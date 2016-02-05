var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Node5 SCENE
var scenes;
(function (scenes) {
    var Node5 = (function (_super) {
        __extends(Node5, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Node5() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Node5.prototype.start = function () {
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
            this._leftButton = new objects.Button("LeftButton", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 60);
            this.addChild(this._leftButton);
            // NEXT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            // add the NEXT button to the PLAY scene
            this._rightButton = new objects.Button("RightButton", config.Screen.CENTER_X + 250, config.Screen.CENTER_Y + 60);
            this.addChild(this._rightButton);
            // NEXT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);
            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button("BackButton", 100, config.Screen.HEIGHT - 50);
            this.addChild(this._backButton);
            // // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Node5.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT Button click event handler
        Node5.prototype._leftButtonClick = function (event) {
            scene = config.Scene.SMASHED;
            changeScene();
        };
        // RIGHT Button click event handler
        Node5.prototype._rightButtonClick = function (event) {
            scene = config.Scene.EXIT;
            changeScene();
        };
        // BACK Button click event handler
        Node5.prototype._backButtonClick = function (event) {
            scene = config.Scene.NODE2;
            changeScene();
        };
        return Node5;
    })(objects.Scene);
    scenes.Node5 = Node5;
})(scenes || (scenes = {}));
//# sourceMappingURL=node5.js.map