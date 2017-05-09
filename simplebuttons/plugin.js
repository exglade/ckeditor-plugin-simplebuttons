CKEDITOR.plugins.add('simplebuttons', {
    init: function (editor) {
        var defaultConfig, buttonList, i;

        buttonList = editor.config.simpleButtons || [];
        defaultConfig = {
            // The text for the button and tooltip.
            //label: 'SimpleButton',

            // The toolbar group name for placing the button
            //toolbar: 'others',

            // The button icon
            //icon: 'bold',

            // The offset value in icon image file to locate the icon.
            //iconOffset: '',

            // Display a caret down.
            //hasArrow: false,

            // The tooltip. Default to label.
            //title: 'My tooltip',

            // The CSS classes to be added to the button.
            //className: 'my-css',

            // The command to execute on click.
            //command: 'myCommand',

            // The function to call on click. If provided, command will be ignored.
            //click: function (editor) { }

            // The button name. (Optional, not part of CKEDITOR button config)
            //name: 'SimpleButton1'
        };

        for (i = 0; i < buttonList.length; i++) {
            var config = CKEDITOR.tools.extend(defaultConfig, buttonList[i], true);
            editor.ui.addButton(config.name || 'SimpleButton' + (i + 1), config);
        }
    }
});