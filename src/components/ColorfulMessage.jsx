export const ColorfulMessage = (props) => {
  const { color, message } = props; //分割代入
  const contentStyle = {
    color, //変数名とプロパティ名が同じ場合は、color: colorを左のように省略できる
    fontSize: "18px",
  };
  return <p style={contentStyle}>{message}</p>;
  //return <p style={contentStyle}>{props.children}</p>;
  //↑App.jsxの中で<ColorfulMessage color="pink">おげんきです</<ColorfulMessage >の表記だった場合
};
