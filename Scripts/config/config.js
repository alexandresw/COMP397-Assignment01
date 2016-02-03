var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.NODE1 = 1;
        Scene.NODE2 = 2;
        Scene.NODE3 = 3;
        Scene.NODE4 = 4;
        Scene.NODE5 = 5;
        Scene.NODE6 = 6;
        Scene.NODE7 = 7;
        Scene.KILLED = 8;
        Scene.SMASHED = 9;
        Scene.NOEXIT = 10;
        Scene.EXIT = 11;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map