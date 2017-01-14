/********************************
 * Tag class.
 ********************************/

/*
 * Describes HTML tag.
 */
function Tag(name, isPair) {

	this._name = name;

	this._isPair = isPair;

}

Tag.prototype.getName = function() {
	return this._name;
};

Tag.prototype.isPair = function() {
	return this._isPair;
};

/********************************
 * Alphabet class.
 ********************************/

/*
 * Static collection of all existing HTML tags.
 */
function Alphabet() {

	Alphabet.doctype = new Tag(
		"!doctype"
	);

	Alphabet.a = new Tag(
		"a"
	);

	Alphabet.abbr = new Tag(
		"abbr"
	);

	Alphabet.address = new Tag(
		"address"
	);

	Alphabet.area = new Tag(
		"area"
	);

	Alphabet.article = new Tag(
		"article"
	);

	Alphabet.aside = new Tag(
		"aside"
	);

	Alphabet.audio = new Tag(
		"audio"
	);

	Alphabet.b = new Tag(
		"b"
	);

	Alphabet.base = new Tag(
		"base"
	);

	Alphabet.bdi = new Tag(
		"bdi"
	);

	Alphabet.bdo = new Tag(
		"bdo"
	);

	Alphabet.blockquote = new Tag(
		"blockquote"
	);

	Alphabet.body = new Tag(
		"body"
	);

	Alphabet.br = new Tag(
		"br"
	);

	Alphabet.button = new Tag(
		"button"
	);

	Alphabet.canvas = new Tag(
		"canvas"
	);

	Alphabet.caption = new Tag(
		"caption"
	);

	Alphabet.cite = new Tag(
		"cite"
	);

	Alphabet.code = new Tag(
		"code"
	);

	Alphabet.col = new Tag(
		"col"
	);

	Alphabet.colgroup = new Tag(
		"colgroup"
	);

	Alphabet.datalist = new Tag(
		"datalist"
	);

	Alphabet.dd = new Tag(
		"dd"
	);

	Alphabet.del = new Tag(
		"del"
	);

	Alphabet.details = new Tag(
		"details"
	);

	Alphabet.dfn = new Tag(
		"dfn"
	);

	Alphabet.div = new Tag(
		"div"
	);

	Alphabet.dl = new Tag(
		"dl"
	);

	Alphabet.dt = new Tag(
		"dt"
	);

	Alphabet.em = new Tag(
		"em"
	);

	Alphabet.embed = new Tag(
		"embed"
	);

	Alphabet.fieldset = new Tag(
		"fieldset"
	);

	Alphabet.figcaption = new Tag(
		"figcaption"
	);

	Alphabet.figure = new Tag(
		"figure"
	);

	Alphabet.footer = new Tag(
		"footer"
	);

	Alphabet.form = new Tag(
		"form"
	);

	Alphabet.h1 = new Tag(
		"h1"
	);

	Alphabet.h2 = new Tag(
		"h2"
	);

	Alphabet.h3 = new Tag(
		"h3"
	);

	Alphabet.h4 = new Tag(
		"h4"
	);

	Alphabet.h5 = new Tag(
		"h5"
	);

	Alphabet.h6 = new Tag(
		"h6"
	);

	Alphabet.head = new Tag(
		"head"
	);

	Alphabet.header = new Tag(
		"header"
	);

	Alphabet.hgroup = new Tag(
		"hgroup"
	);

	Alphabet.hr = new Tag(
		"hr"
	);

	Alphabet.html = new Tag(
		"html"
	);

	Alphabet.i = new Tag(
		"i"
	);

	Alphabet.iframe = new Tag(
		"iframe"
	);

	Alphabet.img = new Tag(
		"img"
	);

	Alphabet.input = new Tag(
		"input"
	);

	Alphabet.ins = new Tag(
		"ins"
	);

	Alphabet.kbd = new Tag(
		"kbd"
	);

	Alphabet.keygen = new Tag(
		"keygen"
	);

	Alphabet.label = new Tag(
		"label"
	);

	Alphabet.legend = new Tag(
		"legend"
	);

	Alphabet.li = new Tag(
		"li"
	);

	Alphabet.link = new Tag(
		"link"
	);

	Alphabet.main = new Tag(
		"main"
	);

	Alphabet.map = new Tag(
		"map"
	);

	Alphabet.mark = new Tag(
		"mark"
	);

	Alphabet.meta = new Tag(
		"meta"
	);

	Alphabet.meter = new Tag(
		"meter"
	);

	Alphabet.nav = new Tag(
		"nav"
	);

	Alphabet.noscript = new Tag(
		"noscript"
	);

	Alphabet.object = new Tag(
		"object"
	);

	Alphabet.ol = new Tag(
		"ol"
	);

	Alphabet.optgroup = new Tag(
		"optgroup"
	);

	Alphabet.option = new Tag(
		"option"
	);

	Alphabet.output = new Tag(
		"output"
	);

	Alphabet.p = new Tag(
		"p"
		);

	Alphabet.param = new Tag(
		"param"
	);

	Alphabet.pre = new Tag(
		"pre"
	);

	Alphabet.progress = new Tag(
		"progress"
	);

	Alphabet.q = new Tag(
		"q"
	);

	Alphabet.rp = new Tag(
		"rp"
	);

	Alphabet.rt = new Tag(
		"rt"
	);

	Alphabet.ruby = new Tag(
		"ruby"
	);

	Alphabet.s = new Tag(
		"s"
	);

	Alphabet.samp = new Tag(
		"samp"
	);

	Alphabet.script = new Tag(
		"script"
	);

	Alphabet.section = new Tag(
		"section"
	);

	Alphabet.select = new Tag(
		"select"
	);

	Alphabet.small = new Tag(
		"small"
	);

	Alphabet.source = new Tag(
		"source"
	);

	Alphabet.span = new Tag(
		"span"
	);

	Alphabet.strong = new Tag(
		"strong"
	);

	Alphabet.style = new Tag(
		"style"
	);

	Alphabet.sub = new Tag(
		"sub"
	);

	Alphabet.summary = new Tag(
		"summary"
	);

	Alphabet.sup = new Tag(
		"sup"
	);

	Alphabet.table = new Tag(
		"table"
	);

	Alphabet.tbody = new Tag(
		"tbody"
	);

	Alphabet.td = new Tag(
		"td"
	);

	Alphabet.textarea = new Tag(
		"textarea"
	);

	Alphabet.tfoot = new Tag(
		"tfoot"
	);

	Alphabet.th = new Tag(
		"th"
	);

	Alphabet.thead = new Tag(
		"thead"
	);

	Alphabet.time = new Tag(
		"time"
	);

	Alphabet.title = new Tag(
		"title"
	);

	Alphabet.tr = new Tag(
		"tr"
	);

	Alphabet.track = new Tag(
		"track"
	);

	Alphabet.u = new Tag(
		"u"
	);

	Alphabet.ul = new Tag(
		"ul"
	);

	Alphabet.var = new Tag(
		"var"
	);

	Alphabet.video = new Tag(
		"video"
	);

	Alphabet.wbr = new Tag(
		"wbr"
	);

};

/*
 * Initializes the first instance of Alphabet class.
 * This call is required for initialization of static variables in the class.
 */
new Alphabet();

/********************************
 * Protein class.
 ********************************/

/*
 * Simplifies generation of HTML structure.
 */
function Protein(topElement, higherLevelInstance) {

	if (topElement) {
		this._topElement = topElement;
	} else {
		this._topElement = $("body");
	}

	this._higherLevelInstance = higherLevelInstance;

	this._lastInsertedElement = null;

};

/*
 * Returns top element.
 */
Protein.prototype.getTopElement = function() {
	return this._topElement;
};

/*
 * Returns Protein instance of higher level.
 * If doesn't exist, returns null.
 */
Protein.prototype.getHigherLevelInstance = function() {
	return this._higherLevelInstance;
};

/*
 * Opens tag for internal manipulations.
 * Returns Protein instance associated with opened tag.
 */
Protein.prototype.open = function() {
	if (this._lastInsertedElement) {
		return new Protein(this._lastInsertedElement, this);
	} else {
		return this;
	}
};

/*
 * Closes current tag and returns Protein instance related to higher tag.
 * If it doesn't exist, returns current Protein instance.
 */
Protein.prototype.close = function() {
	if (this._higherLevelInstance) {
		return this._higherLevelInstance;
	} else {
		return this;
	}
};

/*
 * Allows to run any code in block.
 * You can use it to manipulate with Protein instance in complicated way,
 * such as cycles, logic conditions, etc.
 * Return current Protein instance.
 */
Protein.prototype.block = function(blockWithProtein) {
	blockWithProtein(this);
	return this;
};

/*
 * Appends new tag inside of current tag.
 * Returns current Protein instance.
 */
Protein.prototype.tag = function(tag, configuration) {
	var tagName = "";

	if (tag instanceof Tag) {
		tagName = tag.getName();
	} else if (typeof tag == "string") {
		tagName = tag;
	}

	if (tagName == "") {
		console.log("Protein.tag():\n\tTag name should not be empty.");
	}

	var elementToInsert = $(document.createElement(tagName));
	this._topElement.append(elementToInsert);
	this._lastInsertedElement = elementToInsert;
	
	if (configuration) {
		configuration(elementToInsert);
	}

	return this;
};

/*
 * Appends html code inside of current tag.
 * Returns current Protein instance.
 */
Protein.prototype.html = function(htmlToInsert) {
	this._topElement.html(htmlToInsert);
	return this;
};

/*
 * Appends text inside of current tag.
 * Returns current Protein instance.
 */
Protein.prototype.text = function(textToInsert) {
	this._topElement.append(textToInsert);
	return this;
};

/*
 * Static method.
 * Returns new Protein instance associated with html tag in current document.
 */
Protein.html = function() {
	var topElement = $("html");
	return new Protein(topElement, null).open();
};

/*
 * Static method.
 * Returns new Protein instance associated with head tag in current document.
 */
Protein.head = function() {
	var topElement = $("head");
	return new Protein(topElement, null).open();
};

/*
 * Static method.
 * Returns new Protein instance associated with body tag in current document.
 */
Protein.body = function() {
	var topElement = $("body");
	return new Protein(topElement, null).open();
};
