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
 * @help Adds WASD Functionality, E for Confirm, and Tab for Cancel/Menu. 
Uses Numbered Key Codes example - 87 = W key
 */

(function() {
    function toNumber(str, def) {
        return isNaN(str) ? def : +(str || def);
    }

    var parameters = PluginManager.parameters('Additional_Controls');
    var upKey = toNumber(parameters['upKey'], 87);
    var downKey = toNumber(parameters['downKey'], 83);
    var leftKey = toNumber(parameters['leftKey'], 65);
    var rightKey = toNumber(parameters['rightKey'], 68);
    var confirmKey = toNumber(parameters['confirmKey'], 69);
    var cancelKey = toNumber(parameters['cancelKey'], 9);

    // Extend existing keyMapper with new controls
    Input.keyMapper[upKey] = 'up';    // W (Up)
    Input.keyMapper[downKey] = 'down';  // S (Down)
    Input.keyMapper[leftKey] = 'left';  // A (Left)
    Input.keyMapper[rightKey] = 'right'; // D (Right)

    // Set the confirm key to E
    Input.keyMapper[confirmKey] = 'ok'; // E for confirm

    // Set the cancel key to Tab
    Input.keyMapper[cancelKey] = 'escape'; // Tab for cancel
})();
