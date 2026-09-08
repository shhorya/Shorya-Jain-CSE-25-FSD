const container=document.getElementById("root");
console.log(container);
const root=ReactDOM.createRoot(container);
const h2 = React.createElement('h2', { style: { color: 'red' } }, 'Welcome to React App Development');
const h1 = React.createElement('h1', { style: { color: 'blue' } }, 'ABES Engineering College');
const img = React.createElement('img', { src: 'path/to/image.jpg', style:{height: '200px', width: '300px'},});
const div = React.createElement('div', { style: { border: '2px solid red' } }, h1, h2, img);
const h21=<h2>Hello World</h2>;

root.render(h21);