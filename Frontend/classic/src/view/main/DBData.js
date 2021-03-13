Ext.define('ChallengeApp.view.main.DBData', {
    extend: 'Ext.grid.Panel',
    xtype: 'DBList',

    requires: [
        'ChallengeApp.store.Personnel'
    ],

    title: 'Data display',

    stripeRows: true,
    collapsible: true,
    store: {
        type: 'personnel'
    },

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
    },

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
    id: 'dataGrid',
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
                Ext.getCmp('dataGrid').getSelectionModel().selectAll();
            }
        },
        {
            text: 'Delete All',
            handler: function () {
                Ext.getCmp('dataGrid').getSelectionModel().deselectAll();
            }
        },
        {
            text: 'Get Selection',
            handler: function () {
                var selected = Ext.getCmp('dataGrid').getSelectionModel().getSelection();
                console.log(selected);
            }
        }
    ]
});
