var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Node4 SCENE
var scenes;
(function (scenes) {
    var Node4 = (function (_super) {
        __extends(Node4, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Node4() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Node4.prototype.start = function () {
            var bitmap = new createjs.Bitmap("../../Assets/images/node4.jpg");
            this.addChild(bitmap);
            var shape = new createjs.Shape();
            shape.graphics.beginFill("#333").drawRect(0, 0, config.Screen.WIDTH, 100);
            shape.alpha = 0.8;
            this.addChild(shape);
            this._gameLabel = new createjs.Text("The monster is following you. Be careful. \nRun away!!!!", "20px Consolas", "#FFF");
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
        Node4.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT Button click event handler
        Node4.prototype._leftButtonClick = function (event) {
            scene = config.Scene.NOEXIT;
            changeScene();
        };
        // RIGHT Button click event handler
        Node4.prototype._rightButtonClick = function (event) {
            scene = config.Scene.KILLED;
            changeScene();
        };
        // BACK Button click event handler
        Node4.prototype._backButtonClick = function (event) {
            scene = config.Scene.NODE2;
            changeScene();
        };
        return Node4;
    })(objects.Scene);
    scenes.Node4 = Node4;
})(scenes || (scenes = {}));
//# sourceMappingURL=node4.js.map