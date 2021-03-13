/**
 * This view is an example list of people.
 */
Ext.define('ChallengeApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',


    title: 'Data display',

    store: {
        type: 'dbApi'
    },
    // controller: 'base',
    columns: [
        { text: 'Name', dataIndex: 'name', flex: .5, filter:{ type: 'string'} },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'User', dataIndex: 'username', flex: 1 },
        { text: 'ZipCode', dataIndex: 'zipcode', flex: 1 }
    ],


    plugins:'gridfilters',
    scrollable: true,
    // listeners: {
    //     select: 'onItemSelected'
    // }
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
