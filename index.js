const MAX_RETRIES = 5;
const ORIENTATIONS = [
	"left-right",
	"right-left",
	"up-down",
	"down-up",
	"diagonal-down-left-right",
	"diagonal-down-right-left",
	"diagonal-up-left-right",
	"diagonal-up-right-left",
];

export default function makeGrid(words, n) {
	const grid = Array(n)
		.fill(null)
		.map(() => Array(n).fill(null));

	// Unique words, fits boundaries, and uses uppercase
	words = [...new Set(words)].filter((word) => word.length <= n).map((word) => word.toUpperCase());

	for (const word of words) {
		const wordLength = word.length;
		let placed = false,
			retriesCounter = 0;
		while (!placed && retriesCounter < MAX_RETRIES) {
			let stepX, stepY, positionX, positionY, endingX, endingY, failed;
			switch (ORIENTATIONS[random(0, 8)]) {
				case "left-right":
					stepX = 0;
					stepY = 1;
					break;
				case "right-left":
					stepX = 0;
					stepY = -1;
					break;
				case "up-down":
					stepX = 1;
					stepY = 0;
					break;
				case "down-up":
					stepX = -1;
					stepY = 0;
					break;
				case "diagonal-down-left-right":
					stepX = 1;
					stepY = 1;
					break;
				case "diagonal-down-right-left":
					stepX = -1;
					stepY = -1;
					break;
				case "diagonal-up-left-right":
					stepX = -1;
					stepY = 1;
					break;
				case "diagonal-up-right-left":
					stepX = 1;
					stepY = -1;
					break;
				default:
					break;
			}

			// Check if the word fits between boundaries.
			positionX = random(0, n);
			positionY = random(0, n);
			endingX = positionX + wordLength * stepX;
			endingY = positionY + wordLength * stepY;
			if (endingX < 0 || endingX > n || endingY < 0 || endingY > n) continue;

			// Check if the word has obstacles; if we cross another word, it must be with the same character.
			failed = false;
			for (let i = 0; i < wordLength; i++) {
				const newPositionX = positionX + i * stepX;
				const newPositionY = positionY + i * stepY;

				if (grid[newPositionX][newPositionY] !== null) {
					if (grid[newPositionX][newPositionY] === word.charAt(i)) {
						continue;
					} else {
						failed = true;
						break;
					}
				}
			}

			// If we fail, we try to place the word with new coordinates; if we succeed, we fill the matrix.
			if (failed) {
				retriesCounter++;
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

	const solution = JSON.parse(JSON.stringify(grid));

	// Fill the rest of the spaces in the matrix with random characters.
	for (let x = 0; x < n; x++) {
		for (let y = 0; y < n; y++) {
			if (grid[x][y] === null) {
				grid[x][y] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
			}
		}
	}

	return { grid, solution };
}

function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}
