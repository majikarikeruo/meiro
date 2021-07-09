export default class Canvas {




    _constructor(areaId, width, height){
        this.areaId = areaId
        this.width = width
        this.height = height
        this.setGameArea();
    }

    setGameArea(){
        const canvas = document.querySelector(this.areaId);
        canvas.width = 640; //canvasの横幅（よこはば）
        canvas.height = 640; //canvasの縦幅（たてはば）
        
    }   



}