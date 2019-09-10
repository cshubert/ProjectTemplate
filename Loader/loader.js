'use strict';
/*  Copyright 2018-2019, Charles Harrison Shubert.
*   License: ISC
*
*   loader.js
*       creates empty config.json.name object
*       loads config.json.signals
*       loads config.json.components.
*       proof config.json.name object
*       attaches cpmfig.json.name object to the root
*
*   @return none
*   Errors: are thrown when loader.js fails to load config.json.signals or config.json.dependencies
*     loader.js has two parts:
*
*       1. An Immediately Invoked Function Expression (IIFE - pronounced iffy) that
*          that has two arguments:
*            root
*              when loader.js is called from:
*                a browser, root is "window"
*                Node, root is "global"
*                somewhere else, root is a parent namespace
*
*            factory
*              calls the Loader.js anonymous function to fetch config.json and
*                to populate the namespace.
*
*       2. Loader.js anonymous function arguments are root and factory
*
*/

// noinspection ThisExpressionReferencesGlobalObjectJS
(function(root,factory,projectName = "myproject") {
    if (root[projectName] === undefined) {
        root[projectName] = {};
    }
    factory.call(root,factory);
}(this, function(root, factory, projectName) {

    const ingestMessages = (function(messages) {
    });

    let fetchConfigURL = '../Loader/config.json';

    fetch(fetchConfigURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            //  todo:
            //      for signal in signals
            //          load signal object {"name": "", "version": "", "location": "", "signalspace": "root | namespace", "iife": ""}
            //          if (signal object not in signalspace) {
            //              add signal object to signalspace
            //          else if ((signal object in signalspace) && (doesn't match loaded signal object))
            //              throw error signal version mismatch
            //  todo:
            //      for dependency in dependencies
            //          load dependency object {"name": "", "version": "", "location": "", "dependencyspace": "root | namespace", "iife": "}
            //          if (dependency object not in dependencyspace)
            //                add dependency object to dependencyspacedependencyspace
            //          else if ((depencency object in namespace) && doesn't match loaded dependency object))
            //              throw error dependency version mismatch

            console.log("myJson.name: " + myJson.name);
            console.log("myJson.version: " + myJson.version);
            console.log("myJson.author: " + myJson.author);
            console.log("myJson.license: " + myJson.license);
            console.log("myJson.components: " + myJson.components);
            console.log("myJson.signals: " + myJson.signals);
            return myJson.components;
        })
        .catch()
    })
);