var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// OutcomeExit SCENE
var scenes;
(function (scenes) {
    var OutcomeSmashed = (function (_super) {
        __extends(OutcomeSmashed, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function OutcomeSmashed() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        OutcomeSmashed.prototype.start = function () {
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
            this._playAgainButton = new objects.Button("PlayAgainButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100);
            this.addChild(this._playAgainButton);
            // BACK Button event listener
            this._playAgainButton.on("click", this._playAgainButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        OutcomeSmashed.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        OutcomeSmashed.prototype._playAgainButtonClick = function (event) {
            // Switch to the Menu Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return OutcomeSmashed;
    })(objects.Scene);
    scenes.OutcomeSmashed = OutcomeSmashed;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcome-smashed.js.map