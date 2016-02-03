module config {

    // Scene Constants
    export class Scene {
        public static MENU: number  = 0;
        public static NODE1: number = 1;
        public static NODE2: number = 2;
        public static NODE3: number = 3;
        public static NODE4: number = 4;
        public static NODE5: number = 5;
        public static NODE6: number = 6;
        public static NODE7: number = 7;
        public static KILLED: number = 8;
        public static SMASHED: number = 9;
        public static NOEXIT: number = 10;
        public static EXIT: number   = 11;
        
    }
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}
