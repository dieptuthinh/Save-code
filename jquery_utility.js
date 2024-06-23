// Returns "lots of extra whitespace" ----------
$.trim( "    lots of extra whitespace    " );

// Iterates over arrays and objects: ----------
$.each([ "foo", "bar", "baz" ], function( idx, val ) {
    console.log( "element " + idx + " is " + val );
});
 
$.each({ foo: "bar", baz: "bim" }, function( k, v ) {
    console.log( k + " : " + v );
});

/*
<ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
</ul>
*/
$( "li" ).each( function( index, element ){
    console.log( $( this ).text() );
});
// Logs the following:
// Link 1
// Link 2
// Link 3

// all input field add more % ----------
$( "input" ).each( function( i, el ) { // cách 1
    var elem = $( el );
    elem.val( elem.val() + "%" );
});

$( "input" ).val(function( index, value ) { // cachs 2
    return value + "%";
});

// Returns a value's index in an array, or -1 if the value is not in the array: | Tìm phần tử và xử lý ----------
var myArray = [ 1, 2, 3, 5 ];
 
if ( $.inArray( 4, myArray ) !== -1 ) {
    console.log( "found it!" );
}

// map go with get ------
/*
<li id="a"></li>
<li id="b"></li>
<li id="c"></li>
*/

var arr = [{
    id: "a",
    tagName: "li"
}, {
    id: "b",
    tagName: "li"
}, {
    id: "c",
    tagName: "li"
}];
 
// Returns [ "a", "b", "c" ]
$( "li" ).map( function( index, element ) {
    return element.id;
}).get();
 
// Also returns [ "a", "b", "c" ]
// Note that the value comes first with $.map
$.map( arr, function( value, index ) {
    return value.id;
});

// test whether an element has a particular class? -------------
.hasClass()

if ( $( "#myDiv" ).is( ".pretty.awesome" ) ) {
    $( "#myDiv" ).show();
}

if ( $( "#myDiv" ).is( ":hidden" ) ) {
    $( "#myDiv" ).show();
}

var isVisible = $( "#myDiv" ).is( ":visible" );
var isHidden = $( "#myDiv" ).is( ":hidden" );

// test whether an element exists? -----------
if ( $( "#myDiv" ).length ) {
    $( "#myDiv" ).show();
}
// or
$( "#myDiv" ).show();

//disable/enable a form element? -------------
// Disable #x
$( "#x" ).prop( "disabled", true );
// Enable #x
$( "#x" ).prop( "disabled", false );
// Check #x
$( "#x" ).prop( "checked", true );
// Uncheck #x
$( "#x" ).prop( "checked", false );

//replace text from the 3rd element of a list of 10 items? --------
var thirdLink = $( this ).find( "li a" ).eq( 2 );
var linkText = thirdLink.text().replace( "foo", "bar" );
thirdLink.text( linkText );
/* ------------------
<html>
<body>
<div id="container">
    <ul id="list">
        <li><a href="http://domain1.com">Item #1</a></li>
        <li><a href="/local/path/1">Item #2</a></li>
        <li><a href="/local/path/2">Item #3</a></li>
        <li><a href="http://domain4.com">Item #4</a></li>
    </ul>
    <div class="grandparent">
    <div class="parent">
        <div class="child">
            <span class="subchild"></span>
        </div>
    </div>
    <div class="surrogateParent1"></div>
    <div class="surrogateParent2"></div>
</div>
</div>

</body>
</html>
*/

// Selecting an element's direct parent:
// returns [ div.child ]
$( "span.subchild" ).parent();
 
// Selecting all the parents of an element that match a given selector:
// returns [ div.parent ]
$( "span.subchild" ).parents( "div.parent" );
 
// returns [ div.child, div.parent, div.grandparent ]
$( "span.subchild" ).parents();
 
// Selecting all the parents of an element up to, but *not including* the selector:
 
// returns [ div.child, div.parent ]
$( "span.subchild" ).parentsUntil( "div.grandparent" );
 
// Selecting the closest parent, note that only one parent will be selected
// and that the initial element itself is included in the search:
 
// returns [ div.child ]
$( "span.subchild" ).closest( "div" );
 
// returns [ div.child ] as the selector is also included in the search:
$( "div.child" ).closest( "div" );

// Selecting an element's direct children:
// returns [ div.parent, div.surrogateParent1, div.surrogateParent2 ]
$( "div.grandparent" ).children( "div" );
 
// Finding all elements within a selection that match the selector:
 
// returns [ div.child, div.parent, div.surrogateParent1, div.surrogateParent2 ]
$( "div.grandparent" ).find( "div" );

// Selecting a next sibling of the selectors:
// returns [ div.surrogateParent1 ]
$( "div.parent" ).next();
 
// Selecting a prev sibling of the selectors:
 
// returns [] as No sibling exists before div.parent
$( "div.parent" ).prev();
 
// Selecting all the next siblings of the selector:
 
// returns [ div.surrogateParent1, div.surrogateParent2 ]
$( "div.parent" ).nextAll();
 
// returns [ div.surrogateParent1 ]
$( "div.parent" ).nextAll().first();
 
// returns [ div.surrogateParent2 ]
$( "div.parent" ).nextAll().last();
 
// Selecting all the previous siblings of the selector:
// returns [ div.surrogateParent1, div.parent ]
$( "div.surrogateParent2" ).prevAll();
 
// returns [ div.surrogateParent1 ]
$( "div.surrogateParent2" ).prevAll().first();
 
// returns [ div.parent ]
$( "div.surrogateParent2" ).prevAll().last();

