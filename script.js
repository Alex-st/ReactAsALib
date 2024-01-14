var _this = this;

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var x = 10;
var list = ['value1', 'value2', 'value3'];
var cars = ['bmw', 'audi', 'mercedes'];

var objects = [{
    id: 1,
    name: 'admin',
    role: 'IT'
}, {
    id: 2,
    name: 'CEO',
    role: 'IT'
}];

// complex object
obj = {
    id: 1,
    name: 'Alex',
    age: 45,
    child: {
        type: 'son'
    }

    // destructuring
    // {objName, age, boy:child.type} = obj;

};var showText = true;

// 1. Creating new component (With Capital letter) as a function
var List = function List(props) {
    console.log(props);

    return props.arr.length ? React.createElement(
        'ul',
        null,
        props.arr.map(function (item, index) {
            return React.createElement(
                'li',
                { key: index },
                item
            );
        })
    ) : null;
};

// if arr argument is absent use empty array
var ListAdvanced = function ListAdvanced(_ref) {
    var _ref$arr = _ref.arr,
        arr = _ref$arr === undefined ? [] : _ref$arr,
        _ref$tag = _ref.tag,
        tag = _ref$tag === undefined ? "ol" : _ref$tag;

    var CustomTag = '' + tag; //<ul>, <ol>
    return arr.length ? React.createElement(
        CustomTag,
        null,
        arr.map(function (item, index) {
            return React.createElement(ListItem, { key: index, item: item });
        })
    ) : null;
};

// List that could be dynamically updated by react, need to use state for rendering after update
var DynamicallyUpdatedList = function DynamicallyUpdatedList(_ref2) {
    var _ref2$arr = _ref2.arr,
        arr = _ref2$arr === undefined ? [] : _ref2$arr,
        _ref2$tag = _ref2.tag,
        tag = _ref2$tag === undefined ? "ol" : _ref2$tag;

    var CustomTag = '' + tag; //<ul>, <ol>

    _this.state = {
        arr: arr
    };

    stateArr = _this.state.arr;

    return arr.length ? React.createElement(
        CustomTag,
        null,
        stateArr.map(function (item, index) {
            return React.createElement(ListItem, { key: index, item: item });
        })
    ) : null;
};

//list with destructuring
var ListItem = function ListItem(_ref3) {
    var index = _ref3.index,
        item = _ref3.item;

    return React.createElement(
        'li',
        { key: index },
        item
    );
};

var Button = function Button(_ref4) {
    var text = _ref4.text;

    return React.createElement(
        'button',
        null,
        text
    );
};

//Add new element to list after delay
setTimeout(function () {
    console.log('After 1000ms');
    list.push('value4');
    console.log(list);
}, 1000);

var helloWorldConst = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        'h1',
        { className: 'heading' },
        'Hello world'
    ),
    React.createElement(
        'h2',
        null,
        'h2 const ',
        x
    ),
    React.createElement(List, { arr: cars }),
    React.createElement(ListAdvanced, { arr: list, tag: "ol" }),
    React.createElement(DynamicallyUpdatedList, { arr: list, tag: "ul" }),
    React.createElement(
        'table',
        null,
        React.createElement(
            'tbody',
            null,
            React.createElement(
                'tr',
                null,
                list.map(function (item, index) {
                    return React.createElement(
                        'td',
                        { key: index },
                        item
                    );
                })
            )
        )
    ),
    React.createElement(
        'table',
        { className: 'users' },
        React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement(
                    'th',
                    null,
                    'Name'
                ),
                React.createElement(
                    'th',
                    null,
                    'Role'
                )
            )
        ),
        React.createElement(
            'tbody',
            null,
            objects.map(function (item, index) {
                return React.createElement(
                    'tr',
                    { key: item.id },
                    Object.keys(item).filter(function (el) {
                        return el !== 'id';
                    }).map(function (el, i) {
                        return React.createElement(
                            'td',
                            { key: i },
                            item[el]
                        );
                    })
                );
            })
        )
    ),
    showText ? React.createElement(
        'h3',
        null,
        'Conditional text '
    ) : null,
    React.createElement(Button, { text: 'Delete' })
);

root.render(helloWorldConst);

//development here, after
// npm init // to initialize package.json
// npm install babel-cli@6 babel-preset-react-app@3
// npx babel --watch src --out-dir . --presets react-app/prod // to track changes in script.js
// script.js in root folder will be generated