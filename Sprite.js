function Sprites(option) {
    this._init(option);
}

Sprites.prototype = {
    _init: function (option) {
        this.x = option.x === 0 ? 0 : (option.x || 10);
        this.y = option.y === 0 ? 0 : (option.y || 10);
        this.w = option.w || 40;
        this.h = option.h || 65;
        this.originW = option.originW || 40;
        this.originH = option.originH || 65;
        this.fps = option.fps || 10;
        this._dirIndex = 0;
        this._imgSrc = option.imgSrc || '';
    },
    render: function (ctx) {
        var img = new Image();
        img.src = this._imgSrc;
        var self = this;
        img.onload = function () {
            var frameIndex = 0;
            setInterval(function () {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                ctx.drawImage(
                    img,
                    frameIndex * self.originW,
                    self._dirIndex * self.originH,
                    self.originW,
                    self.originH,
                    self.x,
                    self.y,
                    self.w,
                    self.h
                );
                frameIndex++;
                frameIndex %= 4;
            }, 1000 / self.fps)
        };
    },
    changeDir: function (dir) {
        this._dirIndex = dir;
    }
}
