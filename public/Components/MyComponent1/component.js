'use strict';
/*  Copyright 2018-2019, Charles Harrison Shubert.
*   License: MIT
*
*   ignition.js loads namespaces using ./ignition.json config file.
*
*     ignition.js has two parts:
*
*       1. An Immediately Invoked Function Expression (IIFE - pronounced iffy) that
*          that has two arguments:
*            root
*              Object where NamespaceLoader will attach the namespace.
*                When called
*                  from a browser, root is "window"
*                  from Node, root is "global"
*                  from another namespace, root is the caller's namespace
*
*            factory
*              calls NamespaceLoader's anonymous function to fetch ignition.json
*              and to populate the namespace.
*
*       2. ignition.js's anonymous function arguments are root and factory
*
*
*   ignition.js uses ignition.json to identify the namespace and urls to load.
*
*     A namespace function returns a namespace object containing its
*     public scope properties.
*
*     Proof tests are run on the namespace object prior its attachment to
*     the attachment to the root.
*
*/

// noinspection ThisExpressionReferencesGlobalObjectJS
(function(root,factory) {
        factory.call(root,factory);
    }(this, function() {

        const ingestNamespace = (function(dependencies, json) {
            let namespace = {};
            console.log("ingestNamespace: " + dependencies, json);
            return namespace;
        });

        const proof = (function(namespace) {
            console.log("proof: " + namespace);
            let success = false;
            if(namespace !== undefined) {
                // do namespace tests
            }
            return success;
        });

        // todo:
        //    determine if I need to validate URL
        //    An alternative may be to just take a config location string
        //    and give it to fetch as an argument.
        //    If fetch fails log it and throw and error. This would allow
        //    the developer to correct a load time error instead of waiting
        //    until it becomes an execution error.
        // const isValidURL = (function (str) {
        //         let a  = document.createElement('a');
        //         a.href = str;
        //         let isValid = a.host && a.host != this.location.host;
        //         document.remove
        //         return isValid;
        //     });

        const fetchConfigURL = './Components/MyComponent1/ignition.json';

        fetch(fetchConfigURL)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                // todo:
                //  load the config file
                //  load the dependencies:
                //      If dependency is already loaded
                //          if proof fails attach dependency to namespace
                //              else use existing dependency
                //          else
                //             attach dependency to namspace
                //  attach the dependency to the namespace

                console.log("myJson.name: " + myJson.name);
                console.log("myJson.dependencies: " + myJson.dependencies);
                let names = Object.getOwnPropertyNames(myJson.dependencies);
                console.log("names: " + names);
                // console.log("myJson.dependencies3: " + myJson.dependencies[2]);
                return myJson.dependencies;
            });

    })

);