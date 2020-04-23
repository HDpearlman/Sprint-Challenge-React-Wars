# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS stops a page from refreshing entirely whenever something needs to be changed and instead can only reRender parts of the page based on new information comming in. This uses somethign called the virtual dom and a diffing algorithm which basically plays find the differences and refreshes those areas of the page without having to rerender everything on the page. this can also allow parts of a page to render regardless of other parts (for example if they are waiting on data.)

1. Describe component state.

component state is datas starting position that may be changed later it can be as simple as a bolean or complex function but basically its when data is in one form or another and this can usually be changed to another state which in reference to react will usually rerender that component

1. Describe props.

props are data that you can pass from a parent component to a child component and then use that data in the form of an object inside the child component

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
