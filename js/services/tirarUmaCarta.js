async function gerarBaralho() {
	const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

	const baralho = await fetch(url);

	const baralhoJson = await baralho.json();

	return baralhoJson;
}

async function tirarUmaCarta(idDoBaralho) {
	const carta = await fetch(`https://www.deckofcardsapi.com/api/deck/${idDoBaralho}/draw/?count=1`);
	
	const cartaJson = await carta.json();

	return cartaJson;
}

async function tirarUmaCartaDoBaralho() {
	const baralho = await gerarBaralho();

	const idDoBaralho = baralho.deck_id;

	return await tirarUmaCarta(idDoBaralho);
}

export {tirarUmaCartaDoBaralho};