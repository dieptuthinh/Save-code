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

// Event setup using the `.on()` method with data------------
$( "input" ).on(
    "change",
    { foo: "bar" }, // Associate data with event binding
    function( eventObject ) {
        console.log("An input value has changed! ", eventObject.data.foo);
    }
);

// Preventing a link from being followed-------
$( "a" ).click(function( eventObject ) {
    var elem = $( this );
    if ( elem.attr( "href" ).match( /evil/ ) ) {
        eventObject.preventDefault();
        elem.addClass( "evil" );
    }
});

// Multiple events, same handler-----------
$( "input" ).on(
    "click change", // Bind handlers for multiple events
    function() {
        console.log( "An input was clicked or changed!" );
    }
);

$( "div" ).on( "mouseenter mouseleave", function() {
    console.log( "mouse hovered over or left a div" );
});

// Binding multiple events with different handlers---------------
$( "p" ).on({
    "click": function() { console.log( "clicked!" ); },
    "mouseover": function() { console.log( "hovered!" ); }
});

$( "div" ).on({
    mouseenter: function() {
        console.log( "hovered over a div" );
    },
    mouseleave: function() {
        console.log( "mouse left a div" );
    },
    click: function() {
        console.log( "clicked on a div" );
    }
});

// Tearing down a particular click handler, using a reference to the function-------------
var foo = function() { console.log( "foo" ); };
var bar = function() { console.log( "bar" ); };
 
$( "p" ).on( "click", foo ).on( "click", bar );
$( "p" ).off( "click", bar ); // foo is still bound to the click event

// Switching handlers using the `.one()` method----------------
$( "p" ).one( "click", firstClick );
 
function firstClick() {
    console.log( "You just clicked this for the first time!" );
 
    // Now set up the new handler for subsequent clicks;
    // omit this step if no further click responses are needed
    $( this ).click( function() { console.log( "You have clicked this before!" ); } );
}

//Passing data to the event handler----------------
$( "p" ).on( "click", {
    foo: "bar"
}, function( event ) {
    console.log( "event data: " + event.data.foo + " (should be 'bar')" );
});
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

// Attach a directly bound event handler
$( "#list a" ).on( "click", function( event ) {
    event.preventDefault();
    console.log( $( this ).text() );
});

// Add a new element on to our existing list
$( "#list" ).append( "<li><a href='http://newdomain.com'>Item #5</a></li>" );

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

//custom events trigger ----------
/* 
<div class="room" id="kitchen">
    <div class="lightbulb on">Kitchen light</div>
    <div class="switch">Kitchen switch 1</div>
    <div class="switch">Kitchen switch 2</div>
    <div class="clapper">Kitchen clapper switch</div>
</div>
*/

$( ".lightbulb" ).on( "light:toggle", function( event ) {
    var light = $( this );
    if ( light.is( ".on" ) ) {
        light.removeClass( "on" ).addClass( "off" );
    } else {
        light.removeClass( "off" ).addClass( "on" );
    }
});
 
$( ".switch, .clapper" ).click(function() {
    var room = $( this ).closest( ".room" );
    room.find( ".lightbulb" ).trigger( "light:toggle" );
});

/*
<div class="room" id="kitchen">
    <div class="lightbulb on">Kitchen light</div>
    <div class="switch">Kitchen switch 1</div>
    <div class="switch">Kitchen switch 2</div>
    <div class="clapper">Kitchen clapper switch</div>
</div>
<div class="room" id="bedroom">
    <div class="lightbulb on">Bedroom light</div>
    <div class="switch">Bedroom switch 1</div>
    <div class="switch">Bedroom switch 2</div>
    <div class="clapper">Bedroom clapper switch</div>
</div>
<div id="master_switch">Master switch</div>
*/

$( ".lightbulb" ).on( "light:toggle", function( event ) {
    var light = $( this );
    if ( light.is( ".on" ) ) {
        light.trigger( "light:off" );
    } else {
        light.trigger( "light:on" );
    }
}).on( "light:on", function( event ) {
    $( this ).removeClass( "off" ).addClass( "on" );
}).on( "light:off", function( event ) {
    $( this ).removeClass( "on" ).addClass( "off" );
});
 
$( ".switch, .clapper" ).click(function() {
    var room = $( this ).closest( ".room" );
    room.find( ".lightbulb" ).trigger( "light:toggle" );
});
 
$( "#master_switch" ).click(function() {
    var lightbulbs = $( ".lightbulb" );
 
    // Check if any lightbulbs are on
    if ( lightbulbs.is( ".on" ) ) {
        lightbulbs.trigger( "light:off" );
    } else {
        lightbulbs.trigger( "light:on" );
    }
});

https://learn.jquery.com/ajax/ajax-and-forms/
