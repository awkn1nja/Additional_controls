/*:
 * @plugindesc Adds WASD Functionality, E for Confirm, and Tab for Cancel/Menu
 * @author AWKNINJA
 *
 * @param upKey
 * @desc Mapping for up key (Default W)
 * @default 87
 *
 * @param leftKey
 * @desc Mapping for up key (Default A)
 * @default 65
 *
 * @param downKey
 * @desc Mapping for up key (Default S)
 * @default 83
 *
 * @param rightKey
 * @desc Mapping for up key (Default D)
 * @default 68
 *
 * @param confirmKey
 * @desc Mapping for up key (Default E)
 * @default 69
 *
 * @param cancelKey
 * @desc Mapping for up key (Default Tab)
 * @default 9
 *
 * @param disableOld
 * @desc Disables the Default arrow key and z/x controls (on/off)
 * @default on
 *
 * @help 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
READ ME!
+==============================================================+
Adds WASD Functionality, E for Confirm, and Tab for Cancel/Menu. 

Uses Numbered Key Codes example - 87 = W key
+--------------------------------------------------------------+
disableOld Removes Functionality of the Arrow, Z and X keys

other Default keys have Retained Functionality 
+--------------------------------------------------------------+

KEY CODES (for Windows not guaranteed for other platforms)
+==============================================================+
8 - Backspace
9 - Tab
12 - 5 in the numeric keypad when Num Lock is off
13 - Enter
16 - Shift
17 - Ctrl
18 - Alt
19 - Pause/Break
20 - Caps Lock
27 - Esc
32 - Space
33 - Page Up
34 - Page Down
35 - End
36 - Home
37 - Left arrow
38 - Up arrow
39 - Right arrow
40 - Down arrow
44 - Print Screen
45 - Insert
46 - Delete
48 - 0
49 - 1
50 - 2
51 - 3
52 - 4
53 - 5
54 - 6
55 - 7
56 - 8
57 - 9
65 - A
66 - B
67 - C
68 - D
69 - E
70 - F
71 - G
72 - H
73 - I
74 - J
75 - K
76 - L
77 - M
78 - N
79 - O
80 - P
81 - Q
82 - R
83 - S
84 - T
85 - U
86 - V
87 - W
88 - X
89 - Y
90 - Z
91 - left Win
92 - right Win
93 - Popup
96 - 0 in the numeric keypad
97 - 1 in the numeric keypad
98 - 2 in the numeric keypad
99 - 3 in the numeric keypad
100 - 4 in the numeric keypad
101 - 5 in the numeric keypad
102 - 6 in the numeric keypad
103 - 7 in the numeric keypad
104 - 8 in the numeric keypad
105 - 9 in the numeric keypad
106 - * in the numeric keypad
107 - + in the numeric keypad
109 - - in the numeric keypad
110 - . in the numeric keypad
111 - / in the numeric keypad
112 - F1
113 - F2
114 - F3
115 - F4
116 - F5
117 - F6
118 - F7
119 - F8
120 - F9
121 - F10
122 - F11
123 - F12
144 - Num Lock
145 - Scroll Lock
160 - left Shift
161 - right Shift
162 - left Ctrl
163 - right Ctrl
+--------------------------------------------------------------+
Help Page Updated to be more Helpful and aesthetically pleasing

for V2
+--------------------------------------------------------------+
Thank you for using this plugin it's my first plugin and I'm

Not Super experienced with Javascript but it was fun!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

(function() {
    function toNumber(str, def) {
        return isNaN(str) ? def : +(str || def);
    }

    var parameters = PluginManager.parameters('Additional_ControlsV2');
    var upKey = toNumber(parameters['upKey'], 87);
    var downKey = toNumber(parameters['downKey'], 83);
    var leftKey = toNumber(parameters['leftKey'], 65);
    var rightKey = toNumber(parameters['rightKey'], 68);
    var confirmKey = toNumber(parameters['confirmKey'], 69);
    var cancelKey = toNumber(parameters['cancelKey'], 9);
    var disableOld = parameters['disableOld'].toLowerCase() === 'on';

    // Extend existing keyMapper with new controls
    Input.keyMapper[upKey] = 'up';    // W (Up)
    Input.keyMapper[downKey] = 'down';  // S (Down)
    Input.keyMapper[leftKey] = 'left';  // A (Left)
    Input.keyMapper[rightKey] = 'right'; // D (Right)

    // Set the confirm key to E
    Input.keyMapper[confirmKey] = 'ok'; // E for confirm

    // Set the cancel key to Tab
    Input.keyMapper[cancelKey] = 'escape'; // Tab for cancel

    // Disable the built in Arrow keys and X/Z controls
    if (disableOld) {
	delete Input.keyMapper[37]; //left
	delete Input.keyMapper[38]; //up
	delete Input.keyMapper[39]; //right
	delete Input.keyMapper[40]; //down
	delete Input.keyMapper[88]; //X
	delete Input.keyMapper[90]; //Z
	console.log("Disabled");
	}
})();
