var _a = require("graphql"), graphql = _a.graphql, buildSchema = _a.buildSchema;
var schema = buildSchema("\n    type Query {\n        hello: String\n    }\n");
var root = {
    hello: function () {
        return "hello world";
    }
};
graphql(schema, "{hello }", root).then(function (response) {
    console.log(response);
});
