const random = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
};

const print = (grid) => {
	for (let row of grid) {
		console.log(row.join(" "));
	}
};

const generate = (words, n) => {
	const orientations = ["left-right", "up-down", "diagonal-up", "diagonal-down"];
	const grid = Array(n)
		.fill(null)
		.map(() => Array(n).fill("_"));

	for (const word of words) {
		const wordLength = word.length;
		let placed = false;
		while (!placed) {
			let stepX, stepY, positionX, positionY, endingX, endingY, failed;
			switch (orientations[random(0, 4)]) {
				case "left-right":
					stepX = 1;
					stepY = 0;
					break;
				case "up-down":
					stepX = 0;
					stepY = 1;
					break;
				case "diagonal-up":
					stepX = 1;
					stepY = 1;
					break;
				case "diagonal-down":
					stepX = 1;
					stepY = -1;
					break;
				default:
					break;
			}
			positionX = random(0, n);
			positionY = random(0, n);
			endingX = positionX + wordLength * stepX;
			endingY = positionY + wordLength * stepY;
			if (endingX < 0 || endingX >= n) continue;
			if (endingY < 0 || endingY >= n) continue;

			failed = false;
			for (let i = 0; i < wordLength; i++) {
				const newPositionX = positionX + i * stepX;
				const newPositionY = positionY + i * stepY;

				if (grid[newPositionX][newPositionY] != "_") {
					if (grid[newPositionX][newPositionY] == word.charAt(i)) {
						continue;
					} else {
						failed = true;
						break;
					}
				}
			}

			if (failed) {
				continue;
			} else {
				for (let i = 0; i < wordLength; i++) {
					const newPositionX = positionX + i * stepX;
					const newPositionY = positionY + i * stepY;
					grid[newPositionX][newPositionY] = word.charAt(i);
				}
				placed = true;
			}
		}
	}
	for (let x = 0; x < n; x++) {
		for (let y = 0; y < n; y++) {
			if (grid[x][y] == "_") grid[x][y] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
		}
	}
	return grid;
};

const words = ["HOLA", "AMIGO", "PROGRAMADOR", "BIENVENIDO", "PRUEBA", "PALABRA", "ALEATORIA"];
print(generate(words, 20));
