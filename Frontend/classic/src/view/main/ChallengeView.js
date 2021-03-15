Ext.define('ChallengeApp.view.ChallengeView', {
    extend: 'Ext.panel.Panel',
    xtype: 'ChallengeView',
    height: 800,
    layout: {
        type: 'hbox',
        align: 'stretch',
    },
    title: '',
    items: [{
        xtype: 'mainlist',
        flex: 3,
    },
    {
        xtype: 'treeView',
        flex: 3,
    },
    ]

})