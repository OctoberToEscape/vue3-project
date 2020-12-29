const path = require("path");
module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/assets/styles/main";`,
            },
        },
        // 是否使⽤用css分离插件
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
    },
    configureWebpack: () => {
        // https://api.lishizg.online/v2
        // https://v2.diancang.site/v2
        if (process.env.NODE_ENV === "development") {
            return {
                devServer: {
                    proxy: {
                        "/api": {
                            target:
                                "https://v2.diancang.site/website-guidereading/v1",
                            changeOrigin: true,
                            secure: false,
                            pathRewrite: {
                                "^/api": "",
                            },
                        },
                        "/gcApi": {
                            target: "https://v2.diancang.site/v2",
                            changeOrigin: true,
                            secure: false,
                            pathRewrite: {
                                "^/gcApi": "",
                            },
                        },
                    },
                    watchOptions: {
                        poll: true,
                        ignored: /(node_modules|dist|build|vendor|Docker|tests|backup|\.lock|\.git)/,
                    },
                    disableHostCheck: true,
                    historyApiFallback: true,
                },
                devtool: "source-map",
            };
        } else if (process.env.NODE_ENV === "production") {
            return {
                performance: {
                    hints: "warning",
                    maxEntrypointSize: 50000000,
                    maxAssetSize: 30000000,
                    assetFilter: (assetFilename) => {
                        return assetFilename.endsWith(".js");
                    },
                },
            };
        }
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule("svg");
        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear();
        // 添加别名
        config.resolve.alias.set("@", path.resolve("src"));
        config.module
            .rule("svg")
            .test(/\.svg$/)
            .include.add(path.resolve("src/icons"))
            .end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            // 使用时id形式与symbolId保持一致
            // options可以不要，默认的id是svg文件名=name
            // use xlink:href="#icon-user", 这个#icon-user就是id
            .options({
                symbolId: "icon-[name]",
            });
    },
};
