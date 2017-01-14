# At a Glance

`Protein` is an easy but super powerful JavaScript framework that allows you to generate HTML structure using JavaScript. With `Protein` you don't need to write HTML code inside of `body` tag at all. But you are still able to combine HTML and `Protein` partially when needed.

This framework is incredibly helpful when you need to generate some HTML in JavaScript. It's built on the top of [jQuery](http://jquery.com) and is a very flexible thing. Just try it and you'll never get back to traditional approach.

Why this framework was made? Because I can.

# How To Get Started

Just copy [protein.js](./lib/protein.js) file to your project and don't forget to follow dependencies.

# Dependencies

* jQuery 3.1.1 or later.

# Usage

## Initialisation of Protein object

Everything begins with `Protein` instance.

`Protein` instance associated with `html` tag:
```javascript
Protein.html()
```

`Protein` instance associated with `head` tag:
```javascript
Protein.head()
```

`Protein` instance associated with `body` tag:
```javascript
Protein.body()
```

`Protein` instance associated with jQuery element:
```javascript
new Protein($("body table"))
```

By default, empty constructor returns `Protein` instance associated with `body` tag:
```javascript
new Protein() // is equivalent to Protein.body()
```

## Insert tags

Each `Protein` object is a reference to some HTML tag. You can use `Protein` to change internal structure of the tag, associated with your `Protein` instance.

To insert tag inside of the associated tag, use this:

```javascript
proteinInstance.tag("div");
proteinInstance.tag("span");
proteinInstance.tag("any-other-tag-name");
```

Also, you can use `Alphabet` class:
```javascript
proteinInstance.tag(Alphabet.div);
proteinInstance.tag(Alphabet.span);
proteinInstance.tag(Alphabet.ul);
proteinInstance.tag(Alphabet.li);
```

`Alphabet` is a collection of all existing HTML tags. It's recommended to use tags from `Alphabet` instead of writing tag's name as a string.

If you need to configure inserted tag (add id, class, any other attributes), you can use special configuration block:

```
proteinInstance.tag(Alphabet.div, function (div) {
    div.attr("class", "container");
});
```

`tag` method returns the same `Protein` instance, so it supports call chains:

```
proteinInstance.tag(Alphabet.div, function (div) {
    div.attr("class", "container");
})
.tag(Alphabet.img, function (img) {
    img.attr("src", "http://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png"
})
.tag(Alphabet.table);
```

All tags in the last example will be inserted on the same level of the tag associated with current `Protein` instance. So, if we use `Protein` object associated with body:

```javascript
Protein
    .body
        .tag(Alphabet.div, function (div) {
            div.attr("class", "container");
        })
        .tag(Alphabet.img, function (img) {
            img.attr("src", "http://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png"
        }
        .tag(Alphabet.table);
```

result HTML structure will look like this:

```html
<body>
    <div class="container">
    </div>
    <img src="http://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png" />
    <table>
    </table>
</body>
```

Then you could ask: how to insert tag inside of `div.container`? The answer is here:

```javascript
Protein
    .body
        .tag(Alphabet.div, function (div) {
            div.attr("class", "container");
        })
            .open()
                .tag(Alphabet.h2)
            .close()
        .tag(Alphabet.img, function (img) {
            img.attr("src", "http://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png"
        }
        .tag(Alphabet.table);
```

Before inserting sub-tag in the structure, you should open previously created tag. When you finished insertions, close that tag. More detailed example:

```javascript
Protein
    .body
        .tag(Alphabet.div, function (div) {
            div.attr("class", "container");
        })
            .open()
                .tag(Alphabet.img, function (img) {
                    img.attr("src", "http://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png"
                }
                .tag(Alphabet.h2)
                    .open()
                        .text("This is a title!")
                    .close()
                .tag(Alphabet.p)
                    .open()
                        .text("And here is subtitle.")
                    .close()
            .close()
```

HTML result:

```html
<body>
    <div class="container">
        <img src="http://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png" />
        <h2>This is a title!</h2>
        <p>And here is subtitle.</p>
    </div>
</body>
```

As you can see, it's also possible to insert text using `text` method. If you need to insert some string with HTML code, use `html` method instead:

```javascript
Protein
    .body
        .tag(Alphabet.div, function (div) {
            div.attr("class", "container");
        })
            .open()
                .html("<p></p>")
            .close();
```

## Blocks

Sometimes you need to implement some complicated logic with tags (cycles, conditions, etc). In this case, `block` method can be helpful:

```javascript
new Protein($("body table tbody"))
    .block(function (protein) {
        for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
            protein
                .tag(Alphabet.tr)
                    .open()
                        .block(function (protein){
                            for (var columnIndex = 0; columnIndex < 3; columnIndex++) {
                                protein
                                    .tag(Alphabet.td)
                                        .open()
                                            .text((rowIndex + 1) * 10 + columnIndex + 1);
                                        .close();
                            }
                        })
                    .close();
        }
    });
```

HTML result:

```html
<body>
    <table>
        <tbody>
            <tr>
                <td>11</td>
                <td>12</td>
                <td>13</td>
            </tr>
            <tr>
                <td>21</td>
                <td>22</td>
                <td>23</td>
            </tr>
            <tr>
                <td>31</td>
                <td>32</td>
                <td>33</td>
            </tr>
        </tbody>
    </table>
</body>
```

`block` method returns current `Protein` instance, so it's possible to use call chains here too.

# License

`Protein` is available under the MIT license. See the [LICENSE](./LICENSE) file for more info.
