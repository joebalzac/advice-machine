fetch('https://api.adviceslip.com/advice')
	.then((response) => response.json())
	.then((data) => {
		const adviceId = document.querySelector('.advice-id');
		const advice = document.querySelector('.advice-title');
		const diceBtn = document.querySelector('.dice');

		window.onload = adviceRoll();

		function adviceRoll() {
			advice.innerHTML = `"${data.slip.advice}"`;
			adviceId.innerHTML = `Advice #${data.slip.id}`;
		}

		diceBtn.addEventListener('click', adviceRoll, refreshPage);
	});

function refreshPage() {
	window.location.reload();
}
