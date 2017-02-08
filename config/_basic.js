/**
 * Created by xiaolin on 16/12/15.
 */
import path from 'path'
import { argv } from 'yargs'

const debug = require('debug')('app:config:_basic')
const config = {

    env: process.env.NODE_ENV || 'development',

    // ----------------------------------
    // Project Structure
    // ----------------------------------
    path_base : path.resolve(__dirname, '../'),
    dir_client: 'src',
    dir_module: 'node_module',
    dir_dist  : 'dist',

    // ----------------------------------
    // Server Configuration
    // ----------------------------------
    server_host: (process.env.NODE_ENV == 'development') ? '127.0.0.1':'mqbii.qbcdn.com',
    server_port: (process.env.NODE_ENV == 'development') ? process.env.PORT || 8888 :'',

    // ----------------------------------
    // Compiler Configuration
    // ----------------------------------
    compiler_css_modules     : true,
    compiler_devtool         : 'source-map',
    compiler_public_path     : '',
    compiler_hash_type       : 'hash',
    compiler_stats           : {
        chunks : false,
        chunkModules : false,
        colors : true
    },

    // ----------------------------------
    // Compiler Configuration
    // ----------------------------------
    compiler_vendor : [
        'react',
        'react-redux',
        'react-router',
        'redux',
        'redux-actions',
        'redux-simple-router',
        'dva',
        'fastclick',
        'recharts'
    ]
}

/************************************************
 -------------------------------------------------

 All Internal Configuration Below
 Edit at Your Own Risk

 -------------------------------------------------
 ************************************************/

// ------------------------------------
// Globals Environment
// ------------------------------------
config.globals = {
    '__DEV__'               : config.env === 'development',
    '__PROD__'              : config.env === 'production',
    '__TEST__'              : config.env === 'test',
    '__DEBUG__'             : config.env === 'development' && !argv.no_debug,
    '__DEBUG_NEW_WINDOW__'  : !!argv.nw,
    '__BASENAME__'          : JSON.stringify(process.env.BASENAME || '')
}

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
const pkg = require('../package.json')

config.compiler_vendor =
config.compiler_vendor.filter(dep => {
    if (pkg.dependencies[dep]) return true

    debug(
        `Package "${dep}" was not found as an npm dependency from package.json; `
    )
})

// ------------------------------------
// Utilities
// ------------------------------------
config.utils_paths =
(() => {
    const resolve = path.resolve

    const base = (...args) =>
        resolve.apply(resolve, [config.path_base, ...args])

    return {
        base   : base,
        client : base.bind(null, config.dir_client),
        dist   : base.bind(null, config.dir_dist)
    }
})()

export default config