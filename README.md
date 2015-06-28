Documentation on languages: [english](README.md), [русский](README-RU.md).

# jQuery.scrollSize

Simple jQuery microplugin that gets size of inner content of scrollable elements.

## Usage

First of all download and include [jQuery](http://jquery.com/download/) and [jQuery.scrollSize](https://github.com/FinesseRus/jQuery.scrollSize/archive/master.zip) plugin to HTML:

	<script src="jquery-1.11.3.min.js"></script>
	<script src="jquery-scrollsize-1.0.min.js"></script>

It is better to paste text of the plugin JS-file to your project main JS-file.

### .scrollHeight()

Gets scrollable content height.

Example:

	<div id="box" style="height: 10px; overflow: auto;">
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
	Sapiente officia doloremque, eos quae dicta qui nobis tempore 
	omnis a numquam ipsum id velit aliquid cum corporis rerum 
	veritatis itaque quibusdam. Lorem ipsum dolor sit amet, consectetur 
	adipisicing elit. Maxime mollitia facilis iusto voluptas. 
	Repudiandae ab accusantium doloribus, facilis! 
	Reprehenderit, quia.</div>

	<script>
		alert('Total content height: ' + $('#box').scrollHeight());
	</script>

### .scrollWidth()

As [`.scrollHeight()`](#scrollheight) but gets width. 