/**
 * Description: Look for the presence of link rel="prev" and link rel="next".
 *
 * Copyright (c) Microsoft Corporation; All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * THIS CODE IS PROVIDED AS IS BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER
 * EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS
 * OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 * See the Apache Version 2.0 License for specific language governing permissions
 * and limitations under the License.
 */

"use strict";

var Deferred = require('promised-io').Deferred;
var check = function (website) {
    var deferred = new Deferred();

    process.nextTick(function(){
        var next = website.$('link[rel="next"]'),
            prev = website.$('link[rel="prev"]'),
            test = {
                testName:"pagination",
                passed:false,
                data: {}
            };

        if (next.length > 0 || prev.length > 0) {
            test.passed = true;
        }

        deferred.resolve(test);
    });

    return deferred.promise;
};

module.exports.check = check;