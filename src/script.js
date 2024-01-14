const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const x = 10
const list = ['value1', 'value2', 'value3'];
const cars = ['bmw', 'audi', 'mercedes'];

const objects = [
    {
        id: 1,
        name: 'admin',
        role: 'IT'
    },
    {
        id: 2,
        name: 'CEO',
        role: 'IT'
    },
]

// complex object
obj = {
    id: 1,
    name: 'Alex',
    age: 45,
    child: {
        type: 'son'
    }
}

// destructuring
// {objName, age, boy:child.type} = obj;

const showText = true;

// 1. Creating new component (With Capital letter) as a function
const List = (props) => {
    console.log(props)

    return props.arr.length
        ? <ul>
            {props.arr.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        : null
}

// if arr argument is absent use empty array
const ListAdvanced = ({arr=[], tag="ol"}) => {
    const CustomTag = `${tag}`; //<ul>, <ol>
    return arr.length
        ? <CustomTag>
            {arr.map((item, index) => <ListItem key ={index} item={item}/>)}
        </CustomTag>
        : null
}

// List that could be dynamically updated by react, need to use state for rendering after update
const DynamicallyUpdatedList = ({arr=[], tag="ol"}) => {
    const CustomTag = `${tag}`; //<ul>, <ol>

    this.state = {
        arr
    }

    stateArr = this.state.arr

    return arr.length
        ? <CustomTag>
            {stateArr.map((item, index) => <ListItem key ={index} item={item}/>)}
        </CustomTag>
        : null
}

//list with destructuring
const ListItem = ({index, item}) => {
    return <li key={index}>{item}</li>;
}

const Button = ({text}) => {
    return <button>{text}</button>
}

//Add new element to list after delay
setTimeout(() => {
    console.log(`After 1000ms`);
    list.push('value4');
    console.log(list)
}, 1000)

const helloWorldConst = <React.Fragment>
    <h1 className="heading">Hello world</h1>
    <h2>h2 const {x}</h2>

    <List arr = {cars}/>
    <ListAdvanced arr ={list} tag={"ol"}/>
    <DynamicallyUpdatedList arr ={list} tag={"ul"}/>


    {/* 2. Generating table with map */}
    <table>
        <tbody>
        <tr>
            {list.map((item, index) => <td key = {index}>{item}</td>)}
        </tr>
        </tbody>
    </table>

    {/* 3. Generating table of objects with map */}
    <table className="users">
        <thead>
        <tr><th>Name</th><th>Role</th></tr>
        </thead>
        <tbody>
        {objects.map((item, index) =>
            <tr key = {item.id}>
                {Object.keys(item)
                    .filter(el => el !== 'id')
                    .map((el, i) => <td key = {i}>{item[el]}</td>)}
            </tr>)}
        </tbody>
    </table>

    {/* 4. Conditional rendering */}
    {showText ? <h3>Conditional text </h3> : null}

    <Button text="Delete"/>

</React.Fragment>;

root.render(helloWorldConst);

//development here, after
// npm init // to initialize package.json
// npm install babel-cli@6 babel-preset-react-app@3
// npx babel --watch src --out-dir . --presets react-app/prod // to track changes in script.js
// script.js in root folder will be generated