Ext.define('ChallengeApp.view.Home', {
    extend: 'Ext.panel.Panel',
    xtype: 'Home',

    title: 'Home',
    bind: {
        html: `
        <h1>Dear Virtimo Team</h1>
        <p>You can find the result of the Coding Challenge
        in the Tab Users</p>
    }

})