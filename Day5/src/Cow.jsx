import Cat from './Cat.jsx';
export default function Cow(props) {
    return (
        <>
        <h1>Grade II : {props.name}</h1>
        <Cat name={props.name}></Cat>        </>
    )
    
    }