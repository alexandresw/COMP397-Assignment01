var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Node2 SCENE
var scenes;
(function (scenes) {
    var Node2 = (function (_super) {
        __extends(Node2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Node2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Node2.prototype.start = function () {
            var bitmap = new createjs.Bitmap("../../Assets/images/node2.jpg");
            this.addChild(bitmap);
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
            this._backButton = new objects.Button("BackButton", 100, 50);
            this.addChild(this._backButton);
            // // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Node2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT Button click event handler
        Node2.prototype._leftButtonClick = function (event) {
            scene = config.Scene.NODE4;
            changeScene();
        };
        // RIGHT Button click event handler
        Node2.prototype._rightButtonClick = function (event) {
            scene = config.Scene.NODE5;
            changeScene();
        };
        // BACK Button click event handler
        Node2.prototype._backButtonClick = function (event) {
            scene = config.Scene.NODE1;
            changeScene();
        };
        return Node2;
    })(objects.Scene);
    scenes.Node2 = Node2;
})(scenes || (scenes = {}));
//# sourceMappingURL=node2.js.map