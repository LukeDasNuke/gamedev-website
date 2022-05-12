module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/final-project-dist/" : "/",
    css: {
        loaderOptions: {
            sass: {
                implementation: require("sass"),
            },
        },
    },
};
