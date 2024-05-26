import { Link } from "react-router-dom";
import { DUMMY } from "../data";

export default function Intro(){
    return (
        <>
            <ul>
            {
                DUMMY.map((item)=>(
                    <li key={item.id}>
                        <Link to={`${item.id}`}>{item.name}</Link>
                    </li>
                ))
            }
            </ul>
        </>
    )
}