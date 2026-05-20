function Parent() {
  function receive(msg) {
    console.log("Parent received:", msg);
  }

  Child({ send: receive });
}

function Child(props) {
  // simulate child sending message to parent
  props.send("Hello Parent");
}

Parent();