// JavaScript for password protection on the secret button
document.getElementById("secretButton").addEventListener("click", function() {
    const password = prompt("Please enter the secret password:");
    const correctPassword = "!Ey3_Th1nK!Th3r3_f0r3!Ey3_AM#"; // Updated password

    if (password === correctPassword) {
        alert("Access granted! Redirecting to the terminal page.");
        window.location.href = "terminal.html"; // Redirect to terminal page
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
        this.echo("Available commands: [[b;#66ffff;]blog, ls, whoami]");
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

// Initialize terminal emulator on page load
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

// On load remove 'is-preload' class after short delay
$(window).on('load', function() {
    setTimeout(function() {
        $('body').removeClass('is-preload');
    }, 100);
});
