# Vue.js versus React: A Comparison of Key Features and Benefits, Drawbacks, and Essential Use Cases  

## Common features of React and Vue.js
Vue.js and React are both javascript libraries primarily used in front-end development and each uses a virtual Document Object Model(DOM). 
Each of these libraries provides reactive and composable view components. These components accept input data in the form props and are able re-render markup on state changes with little to indication of a full page reload experience for the user. Each of these libraries focuses primarily on their own core library, with concerns such as rotuing and state management handled by companion libraries.  

## Key benefits and features of React
React is a javascript library that is used as a base in the development of single-page and mobile applications. React is only concerned with rendering data to the DOM, therefore creating React applications requires the use of additional libraries for state management and routing. This open reliance on outside libraries is a design feature and lends itself to the idea that React is more of a library than a framework. Developing in React introduces users to the introduction and usage of JSX to describe what the UI should look like. JSX is a syntax extension of JavaScript that the developers of React recommend is used to produce React "elements" (not to be confused with components). These elements are the building blocks of React components and are declared like this:   

```const element = <h1>Hello, world</h1>;```

Much like Vue.js, React makes extensive use of small, reusable pieces of code called components that return a React element to be rendered in the browser. The simplest version of this is a simple Javscript function that returns a React element: 

``` function Welcome(props) {```
```return <h1>Hello, {props.name}</h1>;```
```} ```

The key to understanding React components is to imagine them as JavaScript functions that accept inputs called props and return React elements that describe what should appear on the screen.  
Often times, these on-screen elements need to communicate with the browser or their parent web component. This is achieved through a system of event handling that calls for JSX that pass a fucntion as the event handler rather than a string like you may have seen on typical HTML onclick handlers. React's event handling system looks like this:

``` <button onClick={activateLasers}>```
```Activate Lasers```
```</button> ```

Initial released on May 29, 2013.  
Developed by Facebook 

## Drawbacks of React
Some drawbacks of React include... 
Optimization: In React, when a component's state changes, it triggers the re-render of the entire component sub-tree, starting at that component as root. 
React has a javascript-centric approach versus a template-centric approach like Vue, resulting in a library the demands more upfront knowledge of essential javascript from its developers. 

## Ideal use cases
Ideal use cases of React include mobile application with react native, web development with react and redux, and virtual reality websites and 360 experiences using React VR. 

## Key benefits and features of Vue.js
Incrementally adoptable architecture that focuses on declarative rendering and component composition.  
Initial released in February 2014. 

Vue is described as a progressive framework, meaning it can be incorporated into existing projects incrementally as needed. This is beneficial for developers because they are able to sprinkle in the
effeciencies and dynamic front-end features of vue without starting over from scratch. //TODO this is from class, expand on this with more evidence

Vue is driven entirely by the open source community, whereas Angular and React have a significant share of Google and Facebook employees contributing to the repositories. //TODO more research here  
Low barrier to entry due to it being a template-centric library 

## Drawbacks of Vue.js
One drawback of Vue.js is that it operates withing the context of a small community of developers due to its relatively new prescence and light corporate backing (also maybe a benefit?)

## Ideal use cases of Vue.js
Ideal use cases of Vue.js include, but are not limited to; Single-Page applications, responsive web application, or small web components that can be introduced into larger monolithic applications

## Conclusion, when to use each library in terms of use cases and examples
In conclusion...Each of these powerful frameworks has a unique set of benefits and drawbacks. Based on the unique demands of the project and preferences of the developers on the team a compelling case can be made
for using each library.

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

