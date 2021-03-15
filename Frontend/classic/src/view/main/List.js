/**
 * This view is an example list of people.
 */
Ext.define('ChallengeApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    layout: 'fit',
    width: 500,
    height: 400,
    title: 'Mitarbeiter',

    store: {
        type: 'employee'
    },

    scrollable: true,

    columns: [
        { text: 'Name', dataIndex: 'FIRST_NAME' },
        { text: 'Erstellungsdatum', dataIndex: 'HIRE_DATE', renderer: Ext.util.Format.dateRenderer('d.m.Y')},
        { text: 'EMAIL', dataIndex: 'EMAIL' },
        { text: 'Job', dataIndex: 'JOB_TITLE' },
    ],


    scrollable: true,

    id: 'homeGrid',
    selModel: {
        injectCheckbox: 'first',
        checkOnly: true,
        mode: 'SIMPLE',
        type: 'checkboxmodel',
    },
    buttons: [
        {
            text: 'Select All',
            handler: function () {
                Ext.getCmp('homeGrid').getSelectionModel().selectAll();
            }
        },
        {
            text: 'Delete All',
            handler: function () {
                Ext.getCmp('homeGrid').getSelectionModel().deselectAll();
            }
        },
        {
            text: 'Get Selection',
            handler: function () {
                var selected = Ext.getCmp('homeGrid').getSelectionModel().getSelection();
                console.log(selected);
            }
        }
    ]

});
