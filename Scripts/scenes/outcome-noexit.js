var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// OutcomeExit SCENE
var scenes;
(function (scenes) {
    var OutcomeNoexit = (function (_super) {
        __extends(OutcomeNoexit, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function OutcomeNoexit(previousScene) {
            _super.call(this);
            this._previousScene = previousScene;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        OutcomeNoexit.prototype.start = function () {
            var bitmap = new createjs.Bitmap("../../Assets/images/outcomeNoexit.jpg");
            this.addChild(bitmap);
            // add the PLAY label to the scene
            this._overMessage = new createjs.Text("Go Back, no way to go further!", "25px Consolas", "#CCCCCC");
            this._overMessage.regX = this._overMessage.getMeasuredWidth() * 0.5;
            this._overMessage.regY = this._overMessage.getMeasuredHeight() * 0.5;
            this._overMessage.x = config.Screen.CENTER_X;
            this._overMessage.y = config.Screen.CENTER_Y;
            this.addChild(this._overMessage);
            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button("BackButton", 100, 50);
            this.addChild(this._backButton);
            // // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        OutcomeNoexit.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        OutcomeNoexit.prototype._backButtonClick = function (event) {
            // Switch to the previous Scene
            scene = this._previousScene;
            changeScene();
        };
        return OutcomeNoexit;
    })(objects.Scene);
    scenes.OutcomeNoexit = OutcomeNoexit;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcome-noexit.js.map