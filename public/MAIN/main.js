'use strict';
/*  Copyright 2018-2019, Charles Harrison Shubert.
*   License: MIT
*
*   main.js loads an application from the main.json config file
*     which defines the application's functionality (data signals and transforms). 
*
*     main.js has two parts:
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
*       2. main.js's anonymous function arguments are root and factory
*
*    Positive Proof tests on functionality are run on the main object and its transforms
*      prior its attachment to root. 
* 
*    Negative Proof tests on data validity are run by a signal object on all signal data.
*/

// noinspection ThisExpressionReferencesGlobalObjectJS
(function(root,factory) {
    factory.call(root,factory);
}(this, function(root, factory) {
    let mainConfigURL = './MAIN/main.json';

    fetch(mainConfigURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let signals = [];
            myJson.signals.forEach(sUrl => {
                signals.push(fetch(sUrl));
            });
            Promise.all(signals)
                .then(function(signals) {
                    let transforms = [];
                    myJson.transforms.forEach(tUrl => {
                        transforms.push(fetch(tUrl))
                    });
                    Promise.all(transforms)
                        .then(function (transforms) {
                            let foo = {myJson, signals, transforms};
                            // todo:
                            //      get text of signals and transforms
                            //      create App functions from text
                            //      proof each app function

                        });
                    //    todo:
                    //      return app
                    //      .error throw new Error(...)

                })

        });
}));