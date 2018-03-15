var critical = require("critical");

critical.generate({
    base:       "src",
    dest:       "critical.css",
    dimensions: [1920, 1080],
    minify:     true,
    src:        "https://www.weblinxinc.com/",
});
