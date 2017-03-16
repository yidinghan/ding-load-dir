# ding-load-dir

[![npm](https://img.shields.io/npm/v/ding-load-dir.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/dm/ding-load-dir.svg?style=flat-square)]()
[![David](https://img.shields.io/david/yidinghan/ding-load-dir.svg?style=flat-square)]()
[![David](https://img.shields.io/david/dev/yidinghan/ding-load-dir.svg?style=flat-square)]()

loading files' module from dir into an object

<a name="loadDir"></a>

## loadDir(options)
an simply way the load files in dir

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | config |
| [options.patcher] | <code>Object</code> | <code>{}</code> | the obj need to load files module to |
| [options.path] | <code>String</code> | <code>&#x27;./&#x27;</code> | it will join with dirName is relative path |
| [options.dirname] | <code>String</code> | <code>process.env.PWD or __dirname</code> | root of dirPath |
| [options.args] | <code>Mixed</code> | <code>[]</code> | args would pass to those files module |

