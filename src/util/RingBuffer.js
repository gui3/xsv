
function RingBuffer (size) {
    this._array = new Array(size)
    this._writeHead = 0;
    this._readHead = 0;
    this.length = 0;
}
RingBuffer.prototype.toString = function () {
    const arrayFromReadHead = this._array.slice(this._readHead)
        .concat(this._array.slice(0, this._readHead))
        
    return "[RingBuffer "
        + (arrayFromReadHead.slice(0, this.length)).join(",")
        + " ("
        + (arrayFromReadHead.slice(this.length)).join(",")
        + ") ]"
}
RingBuffer.prototype.write = function (val) {
    if (b.length >= this._array.length) {
        throw new Error("RingBuffer: end of buffer, read before writing again")
    }
    this._array[this._writeHead] = val
    this._writeHead = (this._writeHead + 1) % this._array.length
    this.length++
}
RingBuffer.prototype.read = function () {
    if (b.length === 0) {
        throw new Error("RingBuffer: reading before writing")
    }
    const val = this._array[this._readHead]
    this._readHead = (this._readHead + 1) % this._array.length
    this.length--
    return val
}

// test -----------------------------
/*
let b = new RingBuffer(5)
let text = "hello ring buffer !! this is a test text \n"
    + "to see how good you're in shape of"
let cur = 0
while (cur < text.length) {
    const lettersToRead = Math.floor(Math.random() * 5)
    for (let i = 0; i < lettersToRead; i++) {
        b.write(text[cur])
        cur++
    }
    console.log(b.toString())
    for (let i = 0; i < lettersToRead; i++) {
        b.read()
    }
}
*/