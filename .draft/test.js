class Iterator {
    constructor (steps = 1) {
        this.cursor = 0;
        this.steps = steps;
    }

    reset () {
        this.cursor = 0;
    }

    *start () {
        while (this.cursor < this.steps) {
            yield "hello!";
            this.cursor++;
        }
    }
}