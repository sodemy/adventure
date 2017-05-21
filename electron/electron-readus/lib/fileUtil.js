'use strict';

var glob = require('glob');
var path = require('path');
var fs = require('fs');

var fileUtil = {
    fetchReadmeList: function(baseDir, cb) {
        glob('node_modules/**/README.md', {cwd: baseDir}, function (err, matches) {
            if (err) {
                cb(err, null);
                return;
            }
            cb(null, matches.map(function(filename){
                var split = path.dirname(filename).split(path.sep), modName = [];
                for (var i = split.length - 1; i>=0; i--) {
                    if (split[i] === 'node_modules') break;
                    modName.push(split[i]);
                }
                return {
                    filepath: path.join(baseDir, filename),
                    moduleName: modName.join('/')
                };
            }));
        });
    },

    getAsText: function(filename) {
        return fs.readFileSync(filename, 'utf-8');
    }
};

module.exports = fileUtil;