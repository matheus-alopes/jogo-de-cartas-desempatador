const sword1 = {
    image: document.querySelector("body main .game-section .player .player1-sword-icon"),

    rotateSword() {
        this.image.style.rotate = "45deg";
    }
}

const sword2 = {
    image: document.querySelector("body main .game-section .player .player2-sword-icon"),

    rotateSword() {
        this.image.style.rotate = "-45deg";
    }
}

export {sword1, sword2};