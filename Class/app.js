class Color{
    constructor(r, g, b){
        this.r = r
        this.g = g
        this.b = b
    }
    basic(){
        const {r,g,b} = this
        return `${r},${g},${b}`
    }
    rgb(){
       return `rgb(${this.basic()})` 
    }
    rgba(a = 1){
        return`rgba(${this.basic()},${a})`
    }
    hex(){
        const{r,g,b} = this
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
    cbg(){
        document.body.style.background = this.rgba()
    }
}