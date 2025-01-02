import Dog from "./Hen.jsx";
export default function Cat(props) {
  return (
    <>
      <h1>Grade III : {props.name}</h1>
      <Dog name={props.name}></Dog>
    </>
  );
}