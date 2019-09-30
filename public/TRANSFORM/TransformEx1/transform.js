'use strict';
/*  Copyright 2018-2019, Charles Harrison Shubert.
*   License: MIT
*
*   transform.js loads transform.json config file.
*
*     transform.js has two parts:
*
*       1. An Immediately Invoked Function Expression (IIFE) has two arguments:
*            root
*              When called from:
*                  browser, root is "window"
*                  Node, root is "global"
*                  another transform, root is the caller's transform object
*
*            factory
*              calls the anonymous function to fetch transform.json
*              to populate this transform object.
*
*       2. transform.js's anonymous function arguments are root and factory
*
*     Positive Proof tests on functionality are run on the transform object prior its attachment to
*     the root. Negative Proof tests on data validity are run by Signals connecting Transforms
*
*/

// noinspection ThisExpressionReferencesGlobalObjectJS
(function(root,factory) {
        factory.call(root,factory);
    }(this, function() {

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

        const transformConfigURL = './TRANSFORM/TransformEx1/transform.json';

        fetch(transformConfigURL)
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
                console.log("myJson.signals: " + myJson.signals);
                console.log("myJson.transforms: " + myJson.transforms);
            });

    })

);