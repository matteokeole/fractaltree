const I = 12; // Number of iterations
const H = .7; // Height multiplier
let A = Math.PI / 4; // Base angle

Object.assign(angle, {
	max: Math.PI * 2,
	value: A,
});

const ctx = C.getContext("2d");
C.width = C.height = 600;

const draw = () => {
	ctx.resetTransform();
	ctx.clearRect(0, 0, C.width, C.height);
	ctx.translate(C.width / 2, C.height);

	drawBranch(I, 200);
}

const drawBranch = (i, h) => {
	h *= H;
	i--;

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, -h);
	ctx.stroke();

	ctx.translate(0, -h);

	ctx.save();

	ctx.rotate(A);
	i && drawBranch(i, h);

	ctx.restore();
	ctx.save();

	ctx.rotate(-A);
	i && drawBranch(i, h);

	ctx.restore();
};

angle.addEventListener("input", e => {
	A = e.target.value;

	draw();
});

// Initial rendering
draw();