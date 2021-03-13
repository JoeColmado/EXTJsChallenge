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
        itemId: 'submitButton',
        // controller: {
        //     type: 'form',
        // },

        handler: function () {
            var formValues = this.up('form').getForm().getValues();
            this.fireEvent('submitForm', this, formValues);
        }
    }]
})