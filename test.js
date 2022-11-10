import wsg from "./index.js";

const print = (grid) => {
	for (let row of grid) {
		console.log(row.map((item) => (item ? item : "_")).join(" "));
	}
	console.log();
};

const words = ["HOLA", "AMIGO", "PROGRAMADOR", "BIENVENIDO", "PRUEBA", "PALABRA", "ALEATORIA"];
const { grid, solution } = wsg(words, 25);

print(solution);
print(grid);
