/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ChallengeApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    model: 'ChallengeApp.model.Personnel',


    onItemSelected: function () {
        // console.log(this.getItemData(record));
        // this.model;
        console.log('====================================');
        console.log('here');
        console.log('====================================');
        // this.modifyUserWindow();
        // Ext.Msg.confirm('Delete', 'Are you sure?', 'onConfirm', this);
    }



});
