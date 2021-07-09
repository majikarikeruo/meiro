export default class Image {




    _constructor(src,width,height,x,y){
        this.src = src
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.move = 0
        this.getImageObj()
    }

    getImageObj(){
        const img = new Image();
        img.src = 'assets/images/stamp18.png';
        img.width=this.width
        img.height=this.height
        img.x = this.x;
        img.y = this.y;
        img.move = this.move;
        return img
    }   



}