define(["dojo/_base/declare", "dojo/domReady!"], function (declare) {

    const App = declare(null, {
        startup() {
            alert("hello world");
        }
    });

    return new App();

});

