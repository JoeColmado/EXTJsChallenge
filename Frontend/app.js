/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ChallengeApp.Application',

    name: 'ChallengeApp',

    requires: [
        // This will automatically load all classes in the ChallengeApp namespace
        // so that application classes do not need to require each other.
        'ChallengeApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ChallengeApp.view.main.Main'
});
