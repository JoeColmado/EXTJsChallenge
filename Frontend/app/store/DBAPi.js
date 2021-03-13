Ext.define('ChallengeApp.store.DBApi', {
    extend: 'Ext.data.Store',
    alias: 'store.dbApi',
    model: 'ChallengeApp.model.Personnel',
    proxy: {
        type: 'ajax',
        url: 'https://jsonplaceholder.typicode.com/users',
    },
    autoLoad: true,
})