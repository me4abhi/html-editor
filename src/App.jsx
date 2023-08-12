import CodeExample from "./components/CodeExample";

function App() {
  const codes = {
    htmlCode: `<h1 onclick="test()">Hello People</h1>`,
    cssCode: `h1 {background-color: red;}`,
    jsCode: `function test() {alert("hello")}`,
  };

  return (
    <>
      <CodeExample
        html={codes.htmlCode}
        css={codes.cssCode}
        js={codes.jsCode}
      />
    </>
  );
}

export default App;
