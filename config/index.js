/**
 * Created by xiaolin on 16/12/15.
 */
import fs     from 'fs'
import config from './_basic'

const debug = require('debug')('app:config')

debug('create configuration.')
debug(`apply enviroment overrides for NODE_ENV "${config.env}"`)

//check env config exit
const ovFileName = `/env/_${config.env}`
let   hasFile,override
try {
    fs.lstatSync(__dirname + ovFileName + `.js`)
    hasFile = true
}
catch (e){}

//replace the  the server link from config if exit
if(hasFile) {
    override = require(`.` + ovFileName)(config)
}
else
    debug(`No configuration overrides found for NODE_ENV "${config.env}"`)

export default Object.assign({},config,override)