console.log('Hello from Nerdbord!');

const box = document.querySelector('.box');

if (box) {
	const colors = ['#8ff916', '#16f1f9', '#de16f9', '#f97316'];
	let colorIndex = 0;

	const changeColor = () => {
		box.style.borderColor = colors[colorIndex];

		if (colorIndex >= colors.length - 1) {
			colorIndex = 0;
		} else {
			colorIndex++;
		}
	};

	setInterval(changeColor, 3000);
}
