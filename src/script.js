const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
const helloWorldConst = <div>
    <h1>Hello world</h1>
    <h2>h2 text</h2></div>;
root.render(helloWorldConst);

//development here, after
// npm init // to initialize package.json
// npm install babel-cli@6 babel-preset-react-app@3
// npx babel --watch src --out-dir . --presets react-app/prod // to track changes in script.js
// script.js in root folder will be generated