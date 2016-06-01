// Resources, by Sam Deane — Source code available at [GitHub](https://github.com/BohemianCoding/plugins.examples.resources)
//
// This is a simple example, which illustrates how to bundle resource files
// along with your plugin, and access them from your code.

//
// ## Layout
//
// The first thing to do when making a plugin is to setup the folder structure, which should
// look something like this:
//
// ```
//    MyPlugin.sketchplugin/
//      Contents/
//        Sketch/
//          manifest.json
//          script.js
//        Resources/
//          a-resource.png
//          other-resource.txt
// ```
//
// For a plugin with bundled resources, you want to add a `Resources` folder as well
// as the normal `Sketch` folder, and you want to drop into it any resources that your
// script needs to access. These can be files of any type (but obviously keep in mind
// that they contribute to the overall size of the Plugin, so your users won't thank
// you if you put too much stuff in there).
//
// ## Manifest
//
// The plugin needs a `manifest.json` file. This tells Sketch which menu items your plugin supplies,
// as well as giving some general information about the plugin such as its name, author, and so on.
//
// A single plugin can supply multiple menu items, and each one can execute different code,
// or they can all share code. In our case though, we just have one command.
//
//  ```json
// {
//     "name" : "Resources",
//     "identifier" : "com.sketchapp.examples.resources",
//     "version" : "1.0",
//     "description" : "An example of a plugin which contains bundled resources (an image, in this case).",
//     "authorEmail" : "sam@sketchapp.com",
//     "author" : "Sam Deane",
//     "commands" : [
//     {
//       "script" : "resources.js",
//       "handler" : "onRun",
//       "shortcut" : "",
//       "name" : "Bundled Resources Example",
//       "identifier" : "resources"
//     }
//   ]
// }
// ```

// ## Code
// ### Defining The Run Handler
//
// In the manifest, we told Sketch that every time the "Bundled Resources Example" menu is selected,
// we want to execute a javascript handler called `onRun` in the `resources.js` file.
//
// So now we need to put some code into the `resources.js` file to implement that command.

function onRun(context) {

  // We are passed a context variable when we're run.
  // This is a dictionary containing a reference to the document,
  // the current selection, the plugin, curren URL and more.

  // One of the things that the context contains is an api function, which
  // when called gives you back a series javascript objects that you can
  // use to interact with Sketch.
  //
  // There are ways of interacting directly with the Sketch classes instead,
  // but by going through the API, you gain an extra level of protection
  // against changes to Sketch, so it's the recommended way to work if you can.
  //
  // So first, let's fetch the API into a variable we'll call `sketch`:
  var sketch = context.api()
  print(sketch)
};

// And that's it. Job done.
//
// Obviously this is only the tip of the iceberg. Check out some of the other examples to see what else can be done.
//
// If you have questions, comments or any feedback, ping us at <developers@sketchapp.com>!
