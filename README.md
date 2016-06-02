# grunt-atomdoc-md
Grunt plugin for `atomdoc-md` -- creates markdown from your project's atomdoc.

# Installation
Install with npm.

```shell
npm install --save-dev grunt-atomdoc-md
```

# Usage

## Defaults
```coffeescript
#in your Gruntfile

 tasks :
    atomdoc_md :
      default:          # defaults below
        module: '.'     # which module?
        doc: 'doc'      # doc/output dir
        name: 'api.md'  # generated file name
        level: 'info'   # logging level
```

## Generate README.md
```coffeescript
  atomdoc_md :
    readme:             # defaults below
      module: '.'       # which module?
      doc: '.'          # doc/output dir
      name: 'README.md' # generated file name
```

`atomdoc-md` looks for two files to auto import into the generated file:
* `intro.md` is added to be front of the output
* `appendix.md` is added after all of the generated content

Both files must be in the `doc` directory.

