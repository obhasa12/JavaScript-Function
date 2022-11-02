function Color(r,g,b){
    this.r = r
    this.g = g
    this.b = b
}
Color.prototype.hex = function(){
    const {r,g,b} = this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
Color.prototype.rgb = function(){
    const {r,g,b} = this
    return `rgb(${r},${g},${b})`
}
Color.prototype.rgba = function(a = 1){
    const {r,g,b} = this
    return `rgb(${r},${g},${b},${a})`
}
Color.prototype.bgc = function(){
    const {r,g,b} = this
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    return `Background has changed to ${this.hex()}`
}