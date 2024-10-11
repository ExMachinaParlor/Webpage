/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
$(document).ready(function() {
    $('.terminal2').terminal2(App, {
        greetings: 'Welcome to ExMachinaParlor Terminal!',
        prompt: 'root@exmachinaparlor:~# ',
        onBlur: function() {
            return false; // prevent losing focus
        }
    });
});

document.getElementById("secretButton").addEventListener("click", function() {
    // Prompt for a password
    const password = prompt("Please enter the secret password:");
    
    // Define the correct password (you can change this)
    const correctPassword = "cyberpunk2024"; 

    // Check if the password matches
    if (password === correctPassword) {
        alert("Access granted! Redirecting to the terminal page.");
        // Redirect to terminal.html
        window.location.href = "terminal.html";
    } else {
        alert("Access denied. Incorrect password.");
    }
});


$window.on('load', () => {
    window.setTimeout(() => {
        $body.removeClass('is-preload');
    }, 100);
});


// JavaScript for password protection on the secret button
document.getElementById("secretButton").addEventListener("click", function() {
    // Prompt for a password
    const password = prompt("Please enter the secret password:");
    
    // Define the correct password (you can change this)
    const correctPassword = "cyberpunk2024"; 

    // Check if the password matches
    if (password === correctPassword) {
        alert("Access granted! Redirecting to the terminal page.");
        // Redirect to terminal.html
        window.location.href = "terminal.html";
    } else {
        alert("Access denied. Incorrect password.");
    }
});

document.getElementById("secretButton").addEventListener("click", function() {
    // Prompt for a password
    const password = prompt("Please enter the secret password:");
    
    // Define the correct password
    const correctPassword = "cyberpunk2024"; 

    // Check if the password matches
    if (password === correctPassword) {
        alert("Access granted! Redirecting to the terminal page.");
        // Redirect to terminal.html
        window.location.href = "terminal.html";
    } else {
        alert("Access denied. Incorrect password.");
    }
});

// Code for the terminal emulator
const e = "[[b;#66ffff;]root]@exmachinaparlor.org";
const App = {
    echo: function(text) {
        this.echo(text);
    },
    help: function() {
        showHelp(this);
    },
    ls: function() {
        this.echo('[[b;#66ffff;]autoexec.cfg]');
        this.echo('[[b;#66ffff;]CLASSIFIED.tar.gz]');
    },
    whoami: function() {
        this.echo("root");
    },
    blog: function() {
        this.echo("Loading the blog... Wait a sec ...");
        setTimeout(function() { document.location.href = 'https://exmachinaparlor.org'; }, 1000);
    },
    donate: function() {
        this.echo("\nBitcoin (BTC) - 3Pgqkda3w8ZTzBGT5DeLDiWdkgNTNjNxvo\n");
    }
};

function showHelp(consoleObj) {
    consoleObj.echo("Available commands:");
    consoleObj.echo("\t[[b;#66ffff;]blog]    #Visit my blog");
    consoleObj.echo("\t[[b;#66ffff;]ls]      #List files");
    consoleObj.echo("\t[[b;#66ffff;]whoami]  #Who am I?");
}

$(document).ready(function() {
    const isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;
    const isTablet = window.matchMedia("only screen and (max-width: 768px)").matches;

    let termWidth = '600px';
    let termHeight = '400px';

    if (isMobile) {
        termWidth = '100%';
        termHeight = '300px';
    } else if (isTablet) {
        termWidth = '90%';
        termHeight = '400px';
    }

    function startTerminal() {
        const terminal = $('.exmachina-terminal').terminal(App, {
            width: termWidth,
            height: termHeight,
            greetings: "[[b;#66ffff;]Welcome to the ExMachinaParlor Terminal]",
            prompt: function(p) {
                var path = '~';
                p(e + ":" + path + "# ");
            },
            onBlur: function() {
                // prevent losing focus
                return false;
            },
            tabcompletion: true
        });

        setTimeout(() => {
            $('.exmachina-terminal').find('.cursor').focus();
        }, 100); 
    }

    startTerminal();
});




(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);
