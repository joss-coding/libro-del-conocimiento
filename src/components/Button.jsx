export const Button = ({text, onclick}) =>{
  return(
    <button
      onclick = {onclick}
      style={{padding: "10px", backgrount: "blue"}}
    >
      {text}
    </button>
  );
};