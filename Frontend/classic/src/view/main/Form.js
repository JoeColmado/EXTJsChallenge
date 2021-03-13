Ext.define('ChallengeApp.view.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'mainForm',
    controller: 'form',

    title: 'Form',
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'FirstName',
            name: 'firstName',
        },
        {
            fieldLabel: 'LastName',
            name: 'lastName',
        },
        {
            fieldLabel: 'Date',
            xtype: 'datefield',
            name : 'date'
        },
    ],
    buttons:[ {
        text: 'Submit Form',
        handler: function () {
            // console.log(this.up('form').getForm().getValues());
            var formValues = this.up('form').getForm().getValues();
            // Ext.Ajax.request()

            ChallengeApp.app.getController('form').config.control.submitForm('DS');
            this.fireEvent('submitForm', formValues);
        }
    }]
})