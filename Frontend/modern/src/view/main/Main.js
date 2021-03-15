/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('ChallengeApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'ChallengeApp.view.main.MainController',
        'ChallengeApp.view.main.MainModel',
        'ChallengeApp.view.main.List',
        'ChallengeApp.view.Home'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'Home',
            }]

        }, {
            title: 'Users',
            iconCls: 'x-fa fa-user',
            items: [{
                xtype: 'mainlist',
            }]

        }, {
            title: 'Form',
            iconCls: 'x-fa fa-users',

            items: [{
                xtype: 'mainForm'
            }]
        }, {
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});