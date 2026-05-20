function Child(props) {
  return `Hello ${props.name}`;
}

function App() {
  return Child({ name: "Sana" });
}

console.log(App());