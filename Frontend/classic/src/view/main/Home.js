Ext.define('ChallengeApp.view.Home', {
    extend: 'Ext.panel.Panel',
    xtype: 'Home',

    title: 'Home',
    bind: {
        html: `
        <li>Preparation for Coding Challenge</li>
        <p>Continious Integration Pipeline for ExtJS</p>
        <p>Firebase </p>
        `
    }

})