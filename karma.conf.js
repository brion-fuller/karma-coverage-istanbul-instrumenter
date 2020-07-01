const path = require("path");

module.exports = function (config) {
    config.set({
        // This plugin configuration is required to run the instrumenter's test
        // suite. If you copy this example, you should remove the plugins entry
        // and just install karma-coverage-istanbul-instrumenter. It will be
        // picked up automatically by karma.
        plugins: ["karma-*"],

        frameworks: ["jasmine"],

        files: [
            { pattern: "./build/**/*.js", type: "module" },
            { pattern: "./test/*.spec.js", type: "module" },
        ],

        preprocessors: {
            "./build/**/!(*.spec).js": ["karma-coverage-istanbul-instrumenter"],
        },

        reporters: ["progress", "coverage-istanbul"],

        coverageIstanbulInstrumenter: {
            esModules: true,
        },

        coverageIstanbulReporter: {
            reports: ["html-spa", "cobertura"],
            dir: path.join(__dirname, "coverage"),
        },

        browsers: ["Chrome"],

        singleRun: false,
    });
};
