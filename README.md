<h2>FAQ</h2>
	  <h3>Q: What is this demo trying to prove?</h3>
	  <p>This demo shows a React component that builds a table of contents of a page. The component is compatible with any React-based site containing html headers and some space to the right. More specifically, Zoomin can drop it anywhere in the React code of the Axway doc portal (introduced in November 2022).</p>
	  <p>You can view the source code of the minitoc React component <a href="https://codesandbox.io/s/live-retractable-toc-for-documentation-g4zv99?file=/src/components/Minitoc.js">on this codesandbox</a>. 
	  </p>
	  <h3>Q: How about the problem of wide tables and images?</h3>
        <p><b>Scroll downwards</b> in the demo, you will see that the ToC seamlessly disappears when a wide table or image appears.</p>
		<h3>Q: I see the ToC twice, WTF?</h3>
        <p>If you see the ToC appear <b>twice</b> here, it is because here you are viewing it in development mode. Once the component is built, it only appears once. </p>
		<p>If you are inside Axway, see  <a href="http://10.128.58.228/minitoc/"> this demo </a> for a production-type display, without the double-ToC effect.
		  See 
        <a href="https://stackoverflow.com/questions/72238175/why-useeffect-running-twice-and-how-to-handle-it-well-in-react">  this StackOverflow answer </a> 
        for an explanation of the phenomenon.</p>
		<h3>Q: Which headers does the ToC show, when visible?</h3>
        <p>The current logic is to show all h1 and h2, plus all headers up to h5 currently visible in the scrolled window, plus any headers in between. 
		For example, if a single h4 is visible, you will see [all h1] + [all h2] + the [h3] parent of the visible h4, plus the [h4] itself. </p>
		<p>Feel free to express any views you might have about this.</p>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
