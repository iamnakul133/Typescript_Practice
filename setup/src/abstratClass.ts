abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){

    }
    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 3
    }
}

// you can create a object of abstract class
//const nrg = new TakePhoto("test","test")

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string ,
        public filter: string,
        public burst : number){
            super(cameraMode,filter)
        }

        getSepia(): void {
            console.log("Sepia")
        }

}

const nd = new Instagram("test", "test", 3)
nd.getReelTime()