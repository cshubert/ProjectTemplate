'use strict';
/*  Copyright 2018-2019, Charles Harrison Shubert.
*   License: ISC
*
*   component.js
*       creates empty component.json.name object
*       loads component.json.signals
*       loads component.json.components.
*       proof component.json.name object
*       attaches cpmfig.json.name object to the root
*
*   @return none
*   Errors: are thrown when component.js fails to load component.json.signals or component.json.dependencies
*     component.js has two parts:
*
*       1. An Immediately Invoked Function Expression (IIFE - pronounced iffy) that
*          that has two arguments:
*            root
*              when component.js is called from:
*                a browser, root is "window"
*                Node, root is "global"
*                somewhere else, root is a parent namespace
*
*            factory
*              calls the Ignition.js anonymous function to fetch component.json and
*                to populate the namespace.
*
*       2. Ignition.js anonymous function arguments are root and factory
*
*/

// noinspection ThisExpressionReferencesGlobalObjectJS
(function(root,factory) {
    factory.call(root,factory);
}(this, function(root, factory) {

    // todo:
    //      Description of loading any Component from component.json files:
    //          Given:
    //              root: window, global, or current Component (i.e. it must be an Object)
    //              factory: a function that attaches a new Component to the root
    //          fetch ./component.json
    //          .then(function(config)
    //              if root[config.name] exists
    //                  if root[config.name["config"] === config (are different objects but all keys and values must match exactly)
    //                     continue
    //                  else
    //                     throw new Error ("Error: mismatch\n 'root[config.name]["config"]: ' + root[config.name]["config"].toString() + "/nconfig: " + config.toString() + "/n")
    //              else
    //                  fetch config["signals"]
    //                  .then(function(signals){
    //                  });
    //                  .then
    //                      fetch config["dependencies"]
    //                      .then (function(dependencies){
    //                      });
    //
    //
    //
    let fetchConfigURL = '../Ignition/component.json';

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

            let keys = Object.keys(myJson);
            console.log("myJson.name: " + myJson.name);
            console.log("myJson.version: " + myJson.version);
            console.log("myJson.author: " + myJson.author);
            console.log("myJson.license: " + myJson.license);
            console.log("myJson.components: " + myJson.components);
            console.log("myJson.signals: " + myJson.signals);
        })
        .catch()
    })
);