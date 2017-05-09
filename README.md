# CKEditor Simple Buttons Plugin

This plugin is for adding buttons in CKEditor 4+.

The intention was to add basic custom buttons into CKEditor when using [lemonde/angular-ckeditor](https://github.com/lemonde/angular-ckeditor).

## How to install the plugin

1. Copy the "simplebuttons" folder into CKEditor/plugins folder.
2. Enable the plugin:
    * In the CKEditor configuration file (config.js): 
        ``` javascript
        config.extraPlugins = 'simplebuttons';`
        ```
    * In the CKEditor.replace:
        ``` javascript
       CKEDITOR.replace('mytextarea', { extraPlugins = 'simplebuttons' });
       ```

## How to add buttons

1. Add the button configurations into CKEditor instance config:
``` javascript
CKEditor.replace('mytextarea', {
    extraPlugins: 'simplebuttons',
    simpleButtons: [{
        label: 'Hello World',
        click: function (editor) {
            console.log('say hello world');
        },
        toolbar: 'others',
        icon: 'preview',
        className: 'mycssclass',
        title: 'Hello world tooltip',
        name: 'myhwbutton'
    }]
});
```

## License

See LICENSE.md for more information.