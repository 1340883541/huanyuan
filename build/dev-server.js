require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
// app.get("/api/list",function(req,res){
//   console.log(req.body)
//    res.json({
//             items: [
//               {
//                 portrait:'../../static/imgs/img/head111.jpg',
//                 author:'有意阁',
//                 grade:'../../static/imgs/img/grade-V1.png',
//                 add:"+",
//                 attention:"关注",
//                 products:[
//                   {
//                     item:'../../static/imgs/img/swr1.jpg',
//                     name:'【精选】西亚桶珠老蜡手串',
//                     price:'￥0',
//                     look:'36',
//                     count: 0
//                   },
//                   {
//                     item:'../../static/imgs/img/swr3.jpg',
//                     name:'【精选】独家设计款奇楠香囊',
//                     price:'￥0',
//                     look:"85",
//                     count: 0
//                   },
//                   {
//                     item:'../../static/imgs/img/swr2.jpg',
//                     name:'【精选】小叶紫檀老型佛珠',
//                     price:'￥0',
//                     look:'30',
//                     count: 0  
//                   }
//                 ]
//               },
//               {
//                 portrait:'../../static/imgs/img/head111.jpg',
//                 author:'有意阁',
//                 grade:'../../static/imgs/img/grade-V1.png',
//                 add:"+",
//                 attention:"关注",
//                 products:[
//                   {
//                     item:'../../static/imgs/img/swr1.jpg',
//                     name:'【精选】西亚桶珠老蜡手串',
//                     price:'￥0',
//                     look:'36',
//                     count: 0
//                   },
//                   {
//                     item:'../../static/imgs/img/swr3.jpg',
//                     name:'【精选】独家设计款奇楠香囊',
//                     price:'￥0',
//                     look:"85",
//                     count: 0
//                   },
//                   {
//                     item:'../../static/imgs/img/swr2.jpg',
//                     name:'【精选】小叶紫檀老型佛珠',
//                     price:'￥0',
//                     look:'30',
//                     count: 0  
//                   }
//                 ]
//               }
//             ]
//      })
 //})


app.get("api/Auction",function(req,res){
  console.log(req.body)
  res.json({
        items:[
                {
                  picture:'../../static/imgs/img/auc.jpg',
                  name:'【精选】西亚桶珠老蜡手串',
                  price:'￥0',
                  bid:'出价'
                },{
                  picture:'../../static/imgs/img/auc.jpg',
                  name:'【精选】西亚桶珠老蜡手串',
                  price:'￥0',
                  bid:'出价'
                },{
                  picture:'../../static/imgs/img/auc.jpg',
                  name:'【精选】西亚桶珠老蜡手串',
                  price:'￥0',
                  bid:'出价'
                },{
                  picture:'../../static/imgs/img/auc.jpg',
                  name:'【精选】西亚桶珠老蜡手串',
                  price:'￥0',
                  bid:'出价'
                },{
                  picture:'../../static/imgs/img/auc.jpg',
                  name:'【精选】西亚桶珠老蜡手串',
                  price:'￥0',
                  bid:'出价'
                },{
                  picture:'../../static/imgs/img/auc.jpg',
                  name:'【精选】西亚桶珠老蜡手串',
                  price:'￥0',
                  bid:'出价'
                }
            ]
    })

})

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})



var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
