//grabbing the root:

function customRender(element, container){
    /*
    //there are only two props what if there were more. So let's write a better code
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    domElement.setAttribute('href', element.props.href)
    domElement.setAttribute('target', element.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
        if(prop === 'children' ) continue //incase ther was a children in props
        domElement.setAttribute(prop, element.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit google.com'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)