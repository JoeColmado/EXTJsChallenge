Ext.define('ChallengeApp.view.main.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.form',
    init: function () {
      console.log('init');
    },

    config: {
        refs: {
            Form: 'mainForm'
        },
        control: {
            Form: {
                submitForm : 'submitForm'
            }
        }
    },
    submitForm:function(values) {
        console.log('====================================');
        console.log('Olee');
        console.log('====================================');
    }
});
