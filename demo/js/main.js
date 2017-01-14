$(document).ready(function() {

	Protein
		.body()
			.tag(Alphabet.nav, function (nav) {
				nav
					.attr("class", "navbar")
					.attr("class", "navbar-inverse");
			})
				.open()
					.tag(Alphabet.div, function (div) {
						div
							.attr("class", "container");
					})
						.open()
							.tag(Alphabet.div, function (div) {
								div
									.attr("class", "navbar-header");
							})
								.open()
									.tag(Alphabet.button, function (button) {
										button
											.attr("type", "button")
											.attr("class", "navbar-toggle collapsed")
											.attr("data-toggle", "collapse")
											.attr("data-target", "#navbar")
											.attr("aria-expanded", "false")
											.attr("aria-controls", "navbar");
									})
										.open()
											.tag(Alphabet.span, function (span) {
												span
													.attr("class", "sr-only");
											})
											.tag(Alphabet.span, function (span) {
												span
													.attr("class", "icon-bar");
											})
											.tag(Alphabet.span, function (span) {
												span
													.attr("class", "icon-bar");
											})
											.tag(Alphabet.span, function (span) {
												span
													.attr("class", "icon-bar");
											})
										.close()
									.tag(Alphabet.a, function (a) {
										a
											.attr("class", "navbar-brand")
											.attr("href", "#");
									})
										.open()
											.text("Protein Demo")
										.close()
								.close()
							.tag(Alphabet.div, function (div) {
								div
									.attr("id", "navbar")
									.attr("class", "collapse navbar-collapse");
							})
								.open()
									.tag(Alphabet.ul, function (ul) {
										ul
											.attr("class", "nav navbar-nav navbar-left");
									})
										.open()
											.tag(Alphabet.li)
												.open()
													.tag(Alphabet.a, function (a) {
														a
															.attr("id", "home-screen-link")
															.attr("href", "#");
													})
														.open()
															.text("Home")
														.close()
												.close()
											.tag(Alphabet.li)
												.open()
													.tag(Alphabet.a, function (a) {
														a
															.attr("id", "settings-screen-link")
															.attr("href", "#settings")
															.click(function () {
																$("#settings-dialog").modal();
															});
													})
														.open()
															.text("Settings")
														.close()
												.close()
										.close()
									.tag(Alphabet.ul, function (ul) {
										ul
											.attr("class", "nav navbar-nav navbar-right");
									})
								.close()
						.close()
				.close()
			.tag(Alphabet.div, function (div) {
				div
					.attr("class", "container");
			})
				.open()
					.tag(Alphabet.h2)
						.open()
							.text("This is a demo page.")
						.close()
					.tag(Alphabet.p)
						.open()
							.text("It's built with ")
							.tag(Alphabet.a, function (a) {
								a
									.attr("href", "http://github.com/igormatyushkin014/Protein");
							})
								.open()
									.text("Protein.js")
								.close()
							.text(", the super powerful framework for building HTML structure in dynamic JavaScript code.")
						.close()
					.tag(Alphabet.p)
						.open()
							.text("The ")
							.tag(Alphabet.a, function (a) {
								a
									.attr("href", "http://github.com/igormatyushkin014/Protein");
							})
								.open()
									.text("Protein.js")
								.close()
							.text(" allows developer to manage HTML in new incredibly easy way like no other framework does.")
						.close()
					.tag(Alphabet.p)
						.open()
							.text("Try it once and you'll never get back to traditional methods of building HTML.")
						.close()
				.close()
			.tag(Alphabet.div, function (div) {
				div
					.attr("id", "settings-dialog")
					.attr("class", "modal fade")
					.attr("role", "dialog");
			})
				.open()
					.tag(Alphabet.div, function (div) {
						div
							.attr("class", "modal-dialog");
					})
						.open()
							.tag(Alphabet.div, function (div) {
								div
									.attr("class", "modal-content");
							})
								.open()
									.tag(Alphabet.div, function (div) {
										div
											.attr("class", "modal-header");
									})
										.open()
											.tag(Alphabet.button, function (button) {
												button
													.attr("class", "close")
													.attr("type", "button")
													.attr("data-dismiss", "modal");
											})
												.open()
													.html("&times;")
												.close()
											.tag(Alphabet.h4, function (h4) {
												h4
													.attr("class", "modal-title");
											})
												.open()
													.text("Settings")
												.close()
										.close()
									.tag(Alphabet.div, function (div) {
										div
											.attr("class", "modal-body");
									})
										.open()
											.text("This is an example of modal window built with ")
											.tag(Alphabet.a, function (a) {
												a
													.attr("href", "http://github.com/igormatyushkin014/Protein");
											})
											.text(" framework.")
								.open()
									.text("Protein.js")
								.close()
										.close()
									.tag(Alphabet.div, function (div) {
										div
											.attr("class", "modal-footer");
									})
										.open()
											.tag(Alphabet.button, function (button) {
												button
													.attr("id", "confirmation-button")
													.attr("class", "btn btn-success")
													.attr("type", "button")
													.attr("data-dismiss", "modal");
											})
												.open()
													.text("Close")
												.close()
										.close()
								.close()
						.close()
				.close();

});
