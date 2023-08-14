import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { buyCake  } from "../redux/actions";

export default function CakeContainer() {
    const numOfcakes = useSelector((state) => state.numOfcakes);
    const dispatch = useDispatch();
    console.log("numOfcakes", numOfcakes);
    return (
        <div>
            number of cakes: {numOfcakes}
            <br/>
            <button onClick={() => dispatch(buyCake())}> buy cake</button>
        </div>
    )
}