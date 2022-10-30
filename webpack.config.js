module.exports = {
    // change to .tsx if necessary
    entry: './src/index.tsx',
    output: {
      filename: './bundle.js'
    },
    resolve: {
      // changed from extensions: [".js", ".jsx"]
      extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
      fallback: { // https://github.com/sebbo2002/ical-generator/issues/64
        fs: false
      }
    },
    module: {
      rules: [
        // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
        { test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ },
  
        // addition - add source-map support
        { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" },

        // { test: /\.js$/, exclude: /node_modules/, loaders: 'babel', query: { presets: ['react', 'es2015', 'stage-1'] } },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
            }]
        }
      ]
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM",
    },
    // addition - add source-map support
    devtool: "source-map",
  }