var AbstractRadioButton = require("montage/ui/base/abstract-radio-button").AbstractRadioButton;

/**
 * @class RadioButton
 * @extends AbstractRadioButton
 */
exports.RadioButton = AbstractRadioButton.specialize(/** @lends RadioButton# */ {

    hasTemplate: {
        value: false
    }

});
