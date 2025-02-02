// ------------------------------------------------------------------------------------------

// Feature("Liking and Unliking a Restaurant");

// Before(({ I }) => {
// 	// Membuka halaman utama
// 	I.amOnPage("/");
// });

// Scenario(
// 	"Liking and Unliking a Restaurant Through Favorite Page",
// 	async ({ I }) => {
// 		// Step 1: Masuk ke halaman detail restaurant dari halaman utama
// 		I.seeElement(".restaurant-card a"); // Pastikan elemen restoran tersedia
// 		const firstRestaurant = locate(".restaurant-card a").first(); // Ambil elemen restoran pertama
// 		I.click(firstRestaurant);
// 		I.wait(3); // Tunggu agar halaman detail termuat dengan baik

// 		// Step 2: Klik tombol like untuk menyukai restoran
// 		I.seeElement("#likeButton"); // Pastikan tombol like terlihat
// 		I.click("#likeButton"); // Klik tombol like
// 		I.wait(3); // Tunggu agar status like ter-update

// 		// Step 3: Masuk ke halaman Favorite untuk memastikan restoran yang di-like tampil
// 		I.amOnPage("/#/favorite");
// 		I.wait(3); // Tunggu agar halaman favorite termuat dengan baik
// 		I.seeElement(".restaurant-card"); // Pastikan setidaknya ada satu restoran yang di-like
// 		const likedRestaurantName = await I.grabTextFrom(
// 			".restaurant-card .restaurant-name"
// 		); // Ambil nama restoran yang di-like

// 		// Step 4: Masuk ke halaman detail restoran dari halaman Favorite
// 		I.click(locate(".restaurant-card a").withText(likedRestaurantName));
// 		I.wait(3); // Tunggu agar halaman detail restoran termuat kembali

// 		// Step 5: Batal suka restoran
// 		I.seeElement("#likeButton"); // Pastikan tombol like terlihat
// 		I.click("#likeButton"); // Klik tombol like untuk batal suka
// 		I.wait(3); // Tunggu agar status un-like ter-update

// 		// Step 6: Kembali ke halaman Favorite untuk memastikan restoran yang di-unlike hilang
// 		I.amOnPage("/#/favorite");
// 		I.wait(3); // Tunggu agar halaman favorite termuat ulang
// 		I.dontSeeElement(".restaurant-card"); // Pastikan elemen restoran tidak lagi muncul di daftar favorite
// 	}
// );

// -----------------------------------------------------------------------------------------------------------------------

Feature("Liking Restaurant");

// Before(({ I }) => {
// 	// Membuka halaman utama
// 	I.amOnPage("/");
// });

Scenario("Navigasi ke Halaman Detail Restoran dari Halaman Utama", ({ I }) => {
	I.amOnPage("/");
	I.wait(8);
	I.seeElement(".restaurant-card a");
	I.click(locate(".restaurant-card a").first());
	I.wait(8);
	I.seeElement(".restaurant-detail");
	I.seeElement("#likeButton");
});

Scenario(
	"Menyukai Restoran dari Halaman Detail dan memastikan ada di halaman favorite",
	({ I }) => {
		I.amOnPage("/#/detail/rqdv5juczeskfw1e867");
		I.wait(8);
		// I.click(locate(".restaurant-card a").first());
		// I.wait(3);
		// I.seeElement("#likeButton");
		I.click("#likeButton");
		I.wait(8);
		I.seeElement("#likeButton .fa-heart");
		I.dontSeeElement("#likeButton .fa-heart-o");
		I.amOnPage("/#/favorites");
		I.wait(8);
		I.seeElement(".restaurant-card");
	}
);

// Scenario(
// 	"Memastikan Restoran yang Disukai Muncul di Halaman Favorite",
// 	async ({ I }) => {
// 		I.amOnPage("/#/favorites");
// 		I.wait(3);
// 		I.seeElement(".restaurant-card");
// 		// const likedRestaurantName = await I.grabTextFrom(
// 		// 	".restaurant-card .restaurant-name"
// 		// );

// 		I.wait(5); // Tunggu agar halaman favorite termuat dengan baik
// 		I.seeElement(".restaurant-card"); // Pastikan setidaknya ada satu restoran yang di-like
// 		const likedRestaurantName = await I.grabTextFrom(
// 			".restaurant-card .restaurant-name"
// 		);
// 		I.see(likedRestaurantName);
// 	}
// );

// Scenario("Navigasi ke Halaman Detail dari Halaman Favorite", async ({ I }) => {
// 	I.amOnPage("/#/favorites");
// 	I.wait(3);
// 	I.seeElement(".restaurant-card a");
// 	I.click(locate(".restaurant-card a").first());
// 	I.wait(3);
// 	I.seeElement(".restaurant-detail");
// });

Scenario("Membatalkan Suka Restoran dari Halaman Detail", ({ I }) => {
	I.amOnPage("/#/detail/rqdv5juczeskfw1e867");
	I.wait(8);

	I.seeElement("#likeButton"); // Pastikan tombol like terlihat
	I.click("#likeButton"); // Klik tombol like untuk batal suka
	I.wait(8); // Tunggu agar status un-like ter-update
	// I.click(locate(".restaurant-card a").first());
	// I.wait(3);
	// I.seeElement("#likeButton");
	// I.click("#likeButton");
	// I.wait(3);
	I.seeElement("#likeButton .fa-heart");
	I.dontSeeElement("#likeButton .fa-heart-o");
	I.click("#likeButton"); // Klik tombol like untuk batal suka
	I.wait(8); // Tunggu agar status un-like ter-update
	I.seeElement("#likeButton .fa-heart-o");
	I.dontSeeElement("#likeButton .fa-heart");
});

Scenario(
	"Memastikan Restoran yang Tidak Disukai Tidak Muncul di Halaman Favorite",
	({ I }) => {
		I.amOnPage("/#/favorites");
		I.wait(8); // Tunggu agar halaman favorite termuat ulang
		I.dontSeeElement(".restaurant-card"); // Pastikan elemen restoran tidak lagi muncul di daftar favorite
	}
);
