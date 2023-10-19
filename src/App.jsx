import { useState } from "react";
import "./styles.css";
import { ColorfulMessage } from "./components/ColorfulMessage";
import { useEffect } from "react";

const App = () => {
  console.log("aaa");
  const [num, setNum] = useState(0); //[変数, 更新関数名], useState(0)←初期値の設定
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]); //numが変化した時だけ、この中を通る。配列の中身を空にすると、読み込み最初の1回だけ処理することになる。

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="お元気です" />
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on / off</button>
      <p>{num}</p>
      <p>{faceShowFlag && "😃"}</p>
    </>
  );
};

export default App;

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
