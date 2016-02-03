var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Node1 SCENE
var scenes;
(function (scenes) {
    var Node1 = (function (_super) {
        __extends(Node1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Node1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Node1.prototype.start = function () {
            var bitmap = new createjs.Bitmap("../../Assets/images/node1.jpg");
            this.addChild(bitmap);
            // add the NEXT button to the PLAY scene
            this._leftButton = new objects.Button("LeftButton", config.Screen.CENTER_X - 40, config.Screen.CENTER_Y + 40);
            this.addChild(this._leftButton);
            // NEXT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            // add the NEXT button to the PLAY scene
            this._rightButton = new objects.Button("RightButton", config.Screen.CENTER_X + 130, config.Screen.CENTER_Y + 40);
            this.addChild(this._rightButton);
            // NEXT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Node1.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT Button click event handler
        Node1.prototype._leftButtonClick = function (event) {
            scene = config.Scene.NODE2;
            changeScene();
        };
        // RIGHT Button click event handler
        Node1.prototype._rightButtonClick = function (event) {
            scene = config.Scene.NODE3;
            changeScene();
        };
        return Node1;
    })(objects.Scene);
    scenes.Node1 = Node1;
})(scenes || (scenes = {}));
//# sourceMappingURL=node1.js.map