'use strict';
/*  Copyright 2018-2019, Charles Harrison Shubert.
*   License: ISC
*
*   App/ignition.js has two parts:
*
*       1. An Immediately Invoked Function Expression (IIFE - pronounced iffy) that
*          that has two arguments:
*            root
*              when ignition.js is called from:
*                - a browser, root is "window"
*                - Node, root is "global"
*                - somewhere else, root is a parent namespace
*
*            factory
*              calls the ignition.js anonymous function and attaches its return to root
*
*       2. ignition.js anonymous function arguments are root and factory and returns Ignition function
*
*   App/ignition.js anonymous function executes to:
*
*       create an App function
*       fetch App config from ignition.json
*       fetch App signals from URLs in config.signals
*       fetch App components from URLs in config.components
*       create an App function to access config info, signals, and components
*       proof App function
*       return App function
*
*/

// noinspection ThisExpressionReferencesGlobalObjectJS
(function(root,factory) {
    factory.call(root,factory);
}(this, function(root, factory) {
    // Ignition path is relative to the project directory",
    let fetchConfigURL = './ignition.json';

    fetch(fetchConfigURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let signalUrls = myJson.signals;
            let signals = [];
            signalUrls.forEach(sUrl => {
                //todo: expand fetch(url) to create a Function with the results
                signals.push(fetch(sUrl))
            });
            Promise.all(signals)
                .then(function(signals) {
                    let componentUrls = myJson.components;
                    let components = [];
                    componentUrls.forEach(cUrl => {
                        //todo: expand fetch(url) to create a Function with the results
                        components.push(fetch(cUrl))
                    });
                    Promise.all(components)
                        .then(function (components) {
                            let foo = {myJson, signals, components};
                            // todo:
                            //      create App function
                            //      proof App

                        });
                    //    todo:
                    //      return app
                    //      .error throw new Error(...)

                })

        });
}));