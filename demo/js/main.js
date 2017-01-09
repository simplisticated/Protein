$(document).ready(function() {

	new Protein()
		.body()
			.nav(function (nav) {
				nav.addClass("navbar").addClass("navbar-inverse");
			})
				.open()
					.div(function (div) {
						div.addClass("container");
					})
						.open()
							.div(function (div) {
								div.addClass("navbar-header");
							})
						.close()
				.close()
			.div(function (div) {
			})

});
