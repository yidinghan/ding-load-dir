const _ = require('lodash');
const fs = require('fs');
const path = require('path');


const load = (filePath, name, args) => {
    const func = () => (name ? require(filePath + name) : require(filePath));

    return args && func.apply(func, args) || func();
};

/**
 * an simply way the load files in dir
 * @param {Object} patcher - the obj need to load files module to
 * @param {String} dirPath - it will join with default `__dirname` if dirName is relative path
 * @param {String} dirname - root of dirPath
 * @param {Mixed} args - args would pass to those files module
 **/
const loadDir = (options) => {
    const opts = _.defaults(options || {}, {
        patcher: {},
        dirPath: './',
        dirname: __dirname,
        args: [],
        includeDir: false
    });
    const dirOrig = opts.dirPath;
    const dirPath = dirOrig.startsWith(opts.dirname) ? dirOrig : path.join(opts.dirname, dirOrig);

    fs.readdirSync(dirPath).forEach((filename) => {
        if (!/\.js$/.test(filename) && !opts.includeDir) { return; }

        const name = path.basename(filename, '.js');
        const _load = load.bind(null, `${dirPath}/`, name, opts.args);

        Object.defineProperty(opts.patcher, name, { get: _load });
    });

    return opts.patcher;
};

module.exports = loadDir;
