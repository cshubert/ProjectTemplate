'use strict';
/* Copyright 2018-2019, Charles Harrison Shubert.
*  License: MIT
*
*  signal.js loads signal.json config file.
*
*    signal.js has two parts:
*
*      1. An Immediately Invoked Function Expression (IIFE) has two arguments:
*        root
*          When called from:
*            browser, root is "window"
*            Node, root is "global"
*            another signal, root is the caller's signal object
*
*         factory
*           calls the anonymous function to fetch signal.json
*           to populate this signal object.
*
*      2. signal.js's anonymous function arguments are root and factory
*
*    Positive Proof tests on functionality are run on the transform object prior its attachment to
*      root.
*
*    Negative Proof tests on data validity are run by a signal object on all signal data.
*/

// noinspection ThisExpressionReferencesGlobalObjectJS
(function(root,factory) {
        factory.call(root,factory);
}(this, function() {

    const signalConfigURL = './SIGNAL/SignalEx2/signal.json';

    let signalConfig = undefined;
    fetch(signalConfigURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            signalConfig = myJson;
        });

    })

);

// todo:
//   (root[signalConfig.name] === undefined)
//     ? root[signalConfig.name] = signalConfig
//     : ((root[signalConfig.name] === signalConfig)
//       ? do nothing
//       : throw "Existing signal is not the same as the desired signal
