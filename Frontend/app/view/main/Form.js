Ext.define('ChallengeApp.view.main.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.form',
    init: function () {
        console.log('init');
        this.control({
            '#submitButton': {
              submitForm: 'submitForm'
          }
      })

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
    submitForm:function (v,values) {

        Ext.Ajax.request({
            url: 'localhost:8080',
            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                console.dir(obj);
            },

            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        })
    }
});
