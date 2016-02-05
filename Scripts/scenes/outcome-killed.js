var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// OVER SCENE
var scenes;
(function (scenes) {
    var OutcomeKilled = (function (_super) {
        __extends(OutcomeKilled, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function OutcomeKilled() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        OutcomeKilled.prototype.start = function () {
            var bitmap = new createjs.Bitmap("../../Assets/images/outcomeKilled.jpg");
            this.addChild(bitmap);
            var shape = new createjs.Shape();
            shape.graphics.beginFill("#333").drawRect(0, 0, config.Screen.WIDTH, 100);
            shape.alpha = 0.8;
            this.addChild(shape);
            // add the PLAY label to the scene
            this._overLabel = new createjs.Text("Game Over", "40px Consolas", "#FFF");
            this._overLabel.regX = this._overLabel.getMeasuredWidth() * 0.5;
            this._overLabel.regY = this._overLabel.getMeasuredHeight() * 0.5;
            this._overLabel.x = config.Screen.CENTER_X;
            this._overLabel.y = 20;
            this.addChild(this._overLabel);
            // add the PLAY label to the scene
            this._overMessage = new createjs.Text("You were killed by the monster!", "25px Consolas", "#FFF");
            this._overMessage.regX = this._overMessage.getMeasuredWidth() * 0.5;
            this._overMessage.regY = this._overMessage.getMeasuredHeight() * 0.5;
            this._overMessage.x = config.Screen.CENTER_X;
            this._overMessage.y = 70;
            this.addChild(this._overMessage);
            // add the BACK button to the OVER scene
            this._playAgainButton = new objects.Button("PlayAgainButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100);
            this.addChild(this._playAgainButton);
            // BACK Button event listener
            this._playAgainButton.on("click", this._playAgainButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        OutcomeKilled.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        OutcomeKilled.prototype._playAgainButtonClick = function (event) {
            // Switch to the Menu1 Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return OutcomeKilled;
    })(objects.Scene);
    scenes.OutcomeKilled = OutcomeKilled;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcome-killed.js.map