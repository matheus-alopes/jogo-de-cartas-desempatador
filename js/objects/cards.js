let card1 = {
	value: 0,
	suit: "",
	imageUrl:"",
	botao: document.getElementById("button1"),

	setCardInfos(generatedCard) {
		this.value = generatedCard.cards[0].value;
		this.suit = generatedCard.cards[0].suit;
		this.imageUrl = generatedCard.cards[0].image;
	},
};

let card2 = {
	value: 0,
	suit: "",
	imageUrl:"",
	botao: document.getElementById("button2"),

	setCardInfos(generatedCard) {
		this.value = generatedCard.cards[0].value;
		this.suit = generatedCard.cards[0].suit;
		this.imageUrl = generatedCard.cards[0].image;
	}
};

export {card1, card2};