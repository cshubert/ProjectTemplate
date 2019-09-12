# MyProject5220
Template for MyProject5220

This template defines how project developers create, and configure their projects.

Developers using this template create a GitHub Repository (https://github.com) to hold their project and clone this template into it as a starting point.

The template contains a LICENSE file chosen by the Developer, a README.md file, and four directories (Loader, Components, Signals, UX).

Loader has project scope and contains component.js that loads project Components from the Component directory and Signals from the Signals directory. Loader also is an example Component.

The UX (browser user experience) has project scope and contains an index.html that attaches Loader to a browser's global scope (i.e. window).

A Component is an executable and reusable body of code that communicates with other project Components through the use of Signals instead of using direct function calls. A Component
obtains input information by receiving a Signal or Signals and shares output information by sending a Signal or Signals. Signals and other project Components used by a Component can have either project scope or Component scope

A Signal can either have project scope or global scope depending on  its configuration settings.

Configuration settings are defined for each Component in its config.json. The configuration scope settings for components and signals can either be global within a project or local within a Component

Projects using this project template are composed using Components, Signals, UX and use JavaScript, HTML5, CSS. A Project should be tested to run in both a browser and Node.js. Other tools including WebGL2, WebAssembly, etc can be used in a Project as needed.

