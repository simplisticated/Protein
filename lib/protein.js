function Protein(topElement, previousHtmlBuilder) {

	this._topElement = topElement;

	this._previousHtmlBuilder = previousHtmlBuilder;

	this._lastInsertedElement = null;

}

Protein.prototype.getTopElement = function() {
	return this._topElement;
};

Protein.prototype.getTopJQueryElement = function() {
	return this._topElement;
};

Protein.prototype.getPreviousHtmlBuilder = function() {
	return this._previousHtmlBuilder;
};

Protein.prototype.open = function() {
	if (this._lastInsertedElement) {
		return new Protein(this._lastInsertedElement, this);
	} else {
		return this;
	}
};

Protein.prototype.close = function() {
	if (this._previousHtmlBuilder) {
		return this._previousHtmlBuilder;
	} else {
		return this;
	}
};

Protein.prototype.attr = function(name, value) {
	this._topElement.attr(name, value);
};

Protein.prototype.id = function(newId) {
	this._topElement.attr(
		"id",
		newId
	);
};

Protein.prototype.class = function(className) {
	this._topElement.addClass(
		className
	);
};

Protein.prototype.tag = function(tagName, configuration) {
	var elementToInsert = $(document.createElement(tagName));
	this._topElement.append(elementToInsert);
	this._lastInsertedElement = elementToInsert;
	configuration(elementToInsert);
	return this;
};

Protein.prototype.nav = function(configuration) {
	return this.tag(
		"nav",
		configuration
	);
};

Protein.prototype.div = function(configuration) {
	return this.tag(
		"div",
		configuration
	);
};

Protein.prototype.header = function() {
	var topElement = $("header");
	return new Protein(topElement, null).open();
};

Protein.prototype.body = function() {
	var topElement = $("body");
	return new Protein(topElement, null).open();
};
