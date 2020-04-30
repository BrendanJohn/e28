# React and Vue.js: A Comparison of Key Features, Benefits, Drawbacks, and Essential Use Cases  
*By Brendan Murphy*

## Common features of React and Vue.js
React and Vue.js are powerful JavaScript frameworks that are primarily used in modern front-end application development and share many common features. They share similar design philosophies and are so closely related that they require companion frameworks and libraries for the some of the exact same tasks. Surprisingly, this was a design <em>choice</em> as it allowed the developers time to focus on their own core libraries. These two frameworks represent an incremental step forward in the evolution of JavaScript as they both incorporate a data-driven, declarative style that provides reactive and composable view components. A component is a user-defined HTML element with its own uniquely defined behavior and template that can be reused infinitely within an application. Components accept input data in the form of props and are reactive in the sense that they re-render data changes on screen with no page reload experience for the user. This component-driven design choice empowers developers to focus on the logic of the application in isolation over the mechanics of how DOM interactions take place. These powerful libraries have many compelling use cases and some drawbacks and are almost equal in their adoptability. As closely linked as these libraries are, Vue's template-centric design and ease with which it can be brought into existing applications give it the slightest edge over React.

## Key benefits and features of React
React is a JavaScript framework that is used as a base in the development of single-page applications and native mobile applications. React is only concerned with rendering data to the DOM, therefore creating React applications requires the use of additional frameworks for things like state management and routing. This open reliance on outside frameworks is a design feature and lends itself to the idea that React is more of a library than a framework. Developing in React introduces users to a hybrid XML/HTML syntax that describes what the UI should look like. Meet JSX, a syntax extension of JavaScript that the developers of React recommend to produce React "elements" (not to be confused with components). These elements are the building blocks of React components and are declared like this:   

```const element = <h1>Hello, world</h1>;```

Much like Vue.js, React makes extensive use of small, reusable pieces of code called components that return a React element to be rendered in the browser. The simplest version of this is a simple JavaScript function that returns a React element: 

``` function Welcome(props) {```
```return <h1>Hello, {props.name}</h1>;```
```} ```

The key to understanding React components is to imagine them as JavaScript functions that accept inputs called props and return React elements that describe what should appear on the screen.  
Often, these on-screen elements will need to communicate with the browser or their parent web component. This is achieved through a system of event handling that calls JSX to pass a function as the event handler rather than a string, which is typically seen in HTML on-click handlers. React's event handling system looks like this:

``` <button onClick={activateLasers}>```
```Activate Lasers```
```</button> ```

These lightweight components can be glued together with other React features like React native and React VR to power unique Single Page Applications that are both performant and reactive.

Initially release on May 29, 2013.  
Developed by Facebook.   

## Drawbacks of React
Some drawbacks of React include small optimization problems and also barriers to entry that may inhibit certain developers. In terms of optimization, when a React component's state changes, it triggers a re-render of the entire component sub-tree, starting at that component as a root. This is painful in components with large sub-trees that require the library to perform a diff, element by element, looking for changes that may not even be there. This is not prevalent in all applications, as some advanced developers may maintain components with smaller sub-trees. However,this is not always an easy task and requires some design thinking along the way of component development. This furthers the theory that React has an overall JavaScript-centric approach versus a template-centric approach like Vue, resulting in a framework the demands more upfront knowledge of essential JavaScript from its developers. This may prohibit a more widespread adoption of the framework.

## Ideal use cases
Ideal use cases of React include mobile application with React native, web development with React and Redux, and virtual reality websites and 360 experiences using React VR.  

## Key benefits and features of Vue.js  
Described as a progressive framework, Vue.js is a relatively small JavaScript library that can be incorporated into existing projects incrementally as needed. The small and lightweight nature of Vue is a design choice that is beneficial for developers because they are able to sprinkle in efficiencies and dynamic front-end features without rebuilding from scratch. Much like React, Vue also relies on additional libraries to perform tasks like state management and routing. Much like its React counterpart, this incrementally adoptable architecture leverages the powerful and modular concept of web components. Web components are a cornerstone of the Vue library and are uniquely designed in Vue to focus on declarative rendering and component composition. These components are simple to use and Vue.js is easily 'mounted' onto an HTML element in an existing web application by merely attaching it to an element and importing the Vue library.

In this case we mount a vue instance onto the element with the id of 'app'

``` new Vue({```
```template: '<div>Hello World</div>```
```el: '#app',```
```});```

From here, React and Vue diverge as Vue makes use of a declarative rendering technique that allows developers to render data to the DOM using a simple template syntax. This template-centric syntax is easy to pick up and makes learning Vue simple for developers of all skill sets:  

```<div id="app">```
     ```message``` 
```</div>```  

```<script type="text/javascript">```  
    ```var app = new Vue({```  
        ```el:'#app',```  
        ```data: {```  
            ```message: 'This is the Brendan's Blog!'```  
        ```}```  
    ```})```  
```</script>```  

Vue is driven entirely by the open source community, whereas Angular and React have a significant share of Google and Facebook employees contributing to their repositories. Vue also drives usage from a much larger pool of developers because of its low barrier to entry due to it being a template-centric framework, a key differentiator from its JavaScript-centric React counterpart. Thanks to this low barrier to entry, and beginner-friendly nature, the library of components available in the Vue.js ecosystem is uniquely large for such a small lightweight framework, and a testament to its ease of use and adoptability.  

Initially released in February 2014.  
Developed by Evan You.    

## Drawbacks of Vue.js  
Due to its relatively new presence and light corporate backing, one criticism of Vue.js is that it operates within the context of a small community of developers. However, there are those in development world who see this as a positive factor and is evident by the fact that it is not uncommon for creator Evan to chime in on debates and conversations regarding Vue design choices.

## Ideal use cases of Vue.js  
Because Vue.js is an incrementally adoptable, progressive framework, one powerful use case is the modernization of a legacy application. Ideally it could be retired gracefully, piece by piece as each element is replaced by a Vue counterpart. It is not hard to envision a scenario where a large monolithic Angular application is replaced by performant and efficiently designed web components in an exciting setting that allows newer developers to work alongside legacy developers, knowledge sharing along the way as each piece is retired in isolation. In my opinion this is the ideal use case of Vue.js, however it is also well-suited to power complex single-page applications when used in conjunction with companion libraries and modern tooling like webpack and Vuex.

## In conclusion, intelligently designed frameworks that can live alongside each other
Each of these powerful frameworks have a unique set of benefits and drawbacks. Based on the unique demands of a particular project and preferences of developers on the team, a compelling case can be made for using either framework. If a team of developer were trying to build a native application from the ground up, or perhaps a virtual reality experience unlike any other, React is the obvious choice. However, for the wider pool of developers with varying skill set, Vue's ease of use, beginner-friendly design, and incrementally adoptable nature make it the stronger framework.

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



