/**
 * Created by xiaolin on 16/12/16.
 */
require('babel-register')
require('es6-promise').polyfill()

const config = require('../config')
const debug = require('debug')('app:bin:compile')
const fs = require('fs-extra')
const paths = config.utils_paths
const path  = require('path')

debug('Create webpack compiler.')
const compiler = require('webpack')(require('../config/_basic_webpack'))

var removeFile = function(_cat){

    return new Promise(function(resolve,reject){
            fs.remove(_cat, function (err) {
                if(err)reject(err)
                else resolve()
            })
    })
}



compiler.run(function (err, stats) {
    const jsonStats = stats.toJson()

    debug('Webpack compile completed.')

    var cat = '/Users/sean/work/qbii/trunk/qbii-app/src/main/webapp'
    var sourcePath = path.join(__dirname,'../dist')
    var fileName = '/public'
    var except = ['cdn']

    

return ;
    fs.stat(cat + fileName, function(err, stat) {
        if(err == null) {
            if(stat.isDirectory()) {
                
                debug('copy file begin......');

                fs.readdir(cat + fileName,function(_path,_cat){
                    _cat.forEach(function(item,index,_sources){

                        if(index == _sources.length - except.length && item == 'cdn'){
                            fs.copy(sourcePath,cat+fileName, function(err) {
                                if (err) return console.error(err)
                                debug("success!")
                            });
                        }
                        else{
                            item != 'cdn' && removeFile(cat + fileName + '/' + item).then(()=>{
                                if(index == _sources.length - except.length){
                                    fs.copy(sourcePath,cat+fileName, function(err) {
                                        if (err) return console.error(err)
                                        debug("success!")
                                    });
                                }
                            })
                        }
                        
                    })
                })

            } else if(stat.isFile()) {
                console.log('文件存在');
            } else {
                console.log('路径存在，但既不是文件，也不是文件夹');
                //输出路径对象信息
                console.log(stat);
            }
        } else if(err.code == 'ENOENT') {
                    debug('copy file begin......')
                    fs.mkdir(cat+fileName,function(err){
                        fs.copy(sourcePath,cat+fileName, function(err) {
                            if (err) return console.error(err)
                            debug("success!")
                        });
                    })
        } else {
            console.log('错误：' + err);
        }
    });

    
})
