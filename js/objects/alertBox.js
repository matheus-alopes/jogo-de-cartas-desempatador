const alertBox = {
    htmlElement: document.querySelector("body main .game-section .floating-alert-box"),

    message: document.querySelector("body main .game-section .floating-alert-box p"),

    button: document.querySelector("body main .game-section .floating-alert-box button"),

    setWinnerAlert(jogador) {
        this.message.innerHTML = `Jogador ${jogador} venceu!`;

        setTimeout(
			() => {
				this.htmlElement.style.opacity = "1";
			}, 800
		);

        this.button.addEventListener("click", 
            () => {
                window.location.reload();
            }
        )
    },

    setTieAlert() {
        this.message.innerHTML = "Não é possível, empatou novamente!";
        this.message.style.fontSize = "3rem";

        setTimeout(
			() => {
				this.htmlElement.style.opacity = "1";
                
			}, 800
		);

        this.button.addEventListener("click", 
            () => {
                window.location.reload();
            }
        )
    }
}

export {alertBox};