var Shoptiques = (function () {

        var fullName = "Ben Cherry",
            greetingMessage  = "Hey there!";

        function setName( strName ) {
            fullName = strName;
        }

	function sayGreeting() {
            return greetingMessage + " " + fullName;
        }
        function setGreeting(strGreeting){
            greetingMessage=strGreeting;
        }

	return {
            setName: setName,
            sayGreeting: sayGreeting,
            setGreeting: setGreeting
        };

})();

Shoptiques.sayGreeting(); // -> Hey there! Ben Cherry
Shoptiques.setName( "Paul Kinlan" );
Shoptiques.sayGreeting(); // -> Hey there! Paul Kinlan

// Please modify the Shoptiques module above to ensure
// that the following code will work as expected:

Shoptiques.setGreeting( "Welcome to Shoptiques!" );
Shoptiques.setName( "Paul Kinlan" );
Shoptiques.sayGreeting(); // -> Welcome to Shoptiques! Paul Kinlan