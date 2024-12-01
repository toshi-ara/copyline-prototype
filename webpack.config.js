const path = require("path");

module.exports = {
    mode: "production",
    entry: path.join(__dirname, "src", "ts", "main.ts"),
    output: {
        path: path.join(__dirname, "docs/dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
        ]
    },
    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [
            ".ts"
        ]
    }
};

