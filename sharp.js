const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const target = path.resolve(__dirname, "src/public/images");
const destination = path.resolve(__dirname, "dist/images");

if (!fs.existsSync(destination)) {
	fs.mkdirSync(destination);
}

const supportedFormats = [".jpg", ".jpeg", ".png", ".webp", ".tiff", ".gif"];

fs.readdirSync(target).forEach((image) => {
	const ext = path.extname(image).toLowerCase();

	// Hanya proses gambar dengan format yang didukung
	if (supportedFormats.includes(ext)) {
		// Ubah ukuran gambar dengan lebar 800px, dengan suffix -large.jpg
		sharp(`${target}/${image}`)
			.resize(800)
			.toFile(
				path.resolve(
					__dirname,
					`${destination}/${image.split(".").slice(0, -1).join(".")}-large.jpg`
				)
			);

		// Ubah ukuran gambar dengan lebar 480px, dengan suffix -small.jpg
		sharp(`${target}/${image}`)
			.resize(480)
			.toFile(
				path.resolve(
					__dirname,
					`${destination}/${image.split(".").slice(0, -1).join(".")}-small.jpg`
				)
			);
	} else {
		console.log(`Skipping unsupported image format: ${image}`);
	}
});
