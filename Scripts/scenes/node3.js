var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Node3 SCENE
var scenes;
(function (scenes) {
    var Node3 = (function (_super) {
        __extends(Node3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Node3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Node3.prototype.start = function () {
            var bitmap = new createjs.Bitmap("../../Assets/images/node3.jpg");
            this.addChild(bitmap);
            var shape = new createjs.Shape();
            shape.graphics.beginFill("#333").drawRect(0, 0, config.Screen.WIDTH, 100);
            shape.alpha = 0.8;
            this.addChild(shape);
            this._gameLabel = new createjs.Text("You are doing great. \nKeep moving!!!", "20px Consolas", "#FFF");
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
        Node3.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT Button click event handler
        Node3.prototype._leftButtonClick = function (event) {
            scene = config.Scene.NODE6;
            changeScene();
        };
        // RIGHT Button click event handler
        Node3.prototype._rightButtonClick = function (event) {
            scene = config.Scene.NODE7;
            changeScene();
        };
        // BACK Button click event handler
        Node3.prototype._backButtonClick = function (event) {
            scene = config.Scene.NODE1;
            changeScene();
        };
        return Node3;
    })(objects.Scene);
    scenes.Node3 = Node3;
})(scenes || (scenes = {}));
//# sourceMappingURL=node3.js.map