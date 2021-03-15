/**
 * This view is an example list of people.
 */
Ext.define('ChallengeApp.view.main.tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'treeView',
    width: 500,
    height: 400,
    title: 'Organigramm',
    rootVisible: true,
    // scrollable: true,
    store: {
        type: 'tree',
    },
    columns: [
        {
            xtype: 'treecolumn',
            text: 'Name',
            dataIndex: 'firstName',
            flex: 3,

        },
        {
            xtype: 'treecolumn',
            text: 'Job',
            dataIndex: 'position',
            flex: 3,

        }

    ]






});
