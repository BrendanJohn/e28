# React and Vue.js: A Comparison of Key Features and Benefits, Drawbacks, and Essential Use Cases  

## Common features of React and Vue.js
React and Vue.js are powerful JavaScript frameworks that are primarily used in modern front-end application development. These frameworks represent an incremental step forward in the evolution of JavaScript where they incororate a data-driven, declaritve style that provides reactive and composable view components. A component is a user-defined HTML element with its own uniquely defined behavior and template that can be used over and over again within an application. These components accept input data in the form of props and are able reactive in the sense that they re-render state changes with no indication of a full page reload experience for the user. This component-driven design choice empowers developers to focus on the logic of the application in isolation over the mechanics of how DOM interactions take place. Each of these frameworks focuses primarily on their own core library, with concerns such as routing and state management handled by companion frameworks and libraries.  

## Key benefits and features of React
React is a JavaScript library that is used as a base in the development of single-page and mobile applications. React is only concerned with rendering data to the DOM, therefore creating React applications requires the use of additional frameworks for state management and routing. This open reliance on outside frameworks is a design feature and lends itself to the idea that React is more of a library than a framework. Developing in React introduces users to the introduction and usage of JSX to describe what the UI should look like. JSX is a syntax extension of JavaScript that the developers of React recommend is used to produce React "elements" (not to be confused with components). These elements are the building blocks of React components and are declared like this:   

```const element = <h1>Hello, world</h1>;```

Much like Vue.js, React makes extensive use of small, reusable pieces of code called components that return a React element to be rendered in the browser. The simplest version of this is a simple Javscript function that returns a React element: 

``` function Welcome(props) {```
```return <h1>Hello, {props.name}</h1>;```
```} ```

The key to understanding React components is to imagine them as JavaScript functions that accept inputs called props and return React elements that describe what should appear on the screen.  
Often times, these on-screen elements need to communicate with the browser or their parent web component. This is achieved through a system of event handling that calls JSX to pass a fucntion as the event handler rather than a string like is typically seen in HTML onclick handlers. React's event handling system looks like this:

``` <button onClick={activateLasers}>```
```Activate Lasers```
```</button> ```

These components can be glued together to power unique Single Page Applications that are both performant and reactive.

Initially release on May 29, 2013.  
Developed by Facebook.   

## Drawbacks of React
Some drawbacks of React include small optimization problems and also barriers to entry that may inhibit certain developers. In terms of optimization, when a React component's state changes, it triggers the re-render of the entire component sub-tree, starting at that component as root. This is especially painful in components with large sub-trees that require the library to perform a diff, element by element, looking for changes that may not even be there. Although this is not prevelant in all applications, some developers maintain components with very small sub-trees. This is not always an easy task and requires some design thinking along the way of component development. This furthers the theory that React overall has a javascript-centric approach versus a template-centric approach like Vue, resulting in a library the demands more upfront knowledge of essential javascript from its developers. This may prohibit a more widespread adoption of the library.

## Ideal use cases
Ideal use cases of React include mobile application with React native, web development with React and Redux, and virtual reality websites and 360 experiences using React VR.  

## Key benefits and features of Vue.js  
Described as a progressive framework, Vue.js is a relatively small JavaScript library that can be incorporated into existing projects incrementally as needed. The small and lightweight nature of Vue is a design choice that is beneficial for developers because they are able to sprinkle in the effeciencies and dynamic front-end features without rebuilding from scratch. Vue.js is easily 'mounted' onto an HTML element in an existing web application by merely attaching in to an element and importing the Vue library. Much like its React counterpart, this incrementally adoptable architecture leverages the powerful and modular concept of web components. Web components are a cornerstone of the Vue library and are unique designed in Vue to focus on declarative rendering and component composition. Here lies one of the key differences between React and Vue, where React uses a functional design with regard to components, Vue implements a declarative design. This is in itself, also a unique design decision that embraces the go forward approach of ES lent6. In Vue, Components are created using the following syntax:  

Vue is driven entirely by the open source community, whereas Angular and React have a significant share of Google and Facebook employees contributing to their repositories. Vue also drives more usage among from a much larger pool of developers because of its low barrier to entry due to it being a template-centric library. Thanks to this low barrier to entry, and beginner friendly nature, the library of components availalble in the Vue ecosystem is uniqely large for such a small lightweight framework, and a testament to its ease of use and adoptability.  

Initially released in February 2014.  
Developed by Evan You.    

## Drawbacks of Vue.js  
One drawback of Vue.js is that it operates withing the context of a small community of developers due to its relatively new prescence and light corporate backing (also maybe a benefit?)  

## Ideal use cases of Vue.js  
Because Vue.js is a progressive framework and is incrementally adoptable, one great use case is the modernization of a legacy application that could be retired gracefully piece by piece as each piece is replaced by a Vue counterpart. Its easy to envision a scenario where a larger monolithic Angular applications is replaced by performant and efficiently designed web components in an exciting setting that allows newer developers to work alongside legacy developers and knowledge share along the way as each piece is retired in isolation. In my opinion this is the ideal use case of Vue.js, however it is also well suited to power complex single-page applications when used in conjuction with companion libraries and modern tooling like webpack.

## In conclusion, and best use cases for each library  
In conclusion, each of these powerful frameworks has a unique set of benefits and drawbacks. Based on the unique demands of the project and preferences of the developers on the team a compelling case can be made for using each library. Along the way I even discovered a fast and lightweight component library called LitElement that is created by Polymer Project and that in itself a very lightweight component library that works well in the context of Vue or React, and furthers the design pricinples of Vue's incremental adoptability in the form of Polymer Web Components.

## Resources  
https://vuejs.org/  
https://reactjs.org/  
https://vuejs.org/v2/guide/comparison.html  
https://techliance.com/blog/reactjs-vs-vuejs/  
https://en.wikipedia.org/wiki/Vue.js  
https://en.wikipedia.org/wiki/React_(web_framework)   
https://app.pluralsight.com/library/courses/react-big-picture/table-of-contents  
https://app.pluralsight.com/library/courses/react-fundamentals-update/table-of-contents  
https://app.pluralsight.com/library/courses/vuejs-fundamentals/table-of-contents  
https://www.monterail.com/blog/vue-vs-react-2019  
https://www.codeinwp.com/blog/angular-vs-vue-vs-react/  
https://medium.com/@ronak8036/pros-and-cons-of-the-vue-js-framework-8015dcbc05ef

