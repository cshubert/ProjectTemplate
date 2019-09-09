'use strict';
/*  Copyright 2018-2019, Charles Harrison Shubert.
*   License: MIT
*
*   Namespace.js creates a namespace defined in ./Scripts/Namespace/config.json
*
*     Namespace.js has two parts:
*
*       1. An Immediately Invoked Function Expression (IIFE - pronounced iffy) that
*          that has two arguments:
*            root
*              when Namespace.js is called from:
*                a browser, root is "window"
*                Node, root is "global"
*                somewhere else, root is a parent namespace
*
*            factory
*              calls the Namespace.js anonymous function to fetch config.json and
*                to populate the namespace.
*
*       2. Namespace.js anonymous function arguments are root and factory
*
*   Namespace.js:
*    loads config.json messages
*    loads config.json dependencies.
*    proof the namespace
*    attaches the namespace to the root
*      using projectName which default to "myproject" in this template
*      and should be changed to correspond to the project name for a
*      template implementation
*
*   Returns: none
*   Errors: are thrown when loads or running proofs fails
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

    let fetchConfigURL = '../Scripts/Namespace/config.json';

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

            console.log("myJson.namespace: " + myJson.namespace);
            console.log("myJson.dependencies: " + myJson.dependencies);
            let names = Object.getOwnPropertyNames(myJson.dependencies);
            console.log("names: " + names);
            // console.log("myJson.dependencies3: " + myJson.dependencies[2]);
            return myJson.dependencies;
        })
        .catch()
    })
);