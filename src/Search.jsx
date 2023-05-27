import { products } from "@/api/dataDraw";

function Search() {
    return (
        <div className="search">
            <input type="text" placeholder="Search . . ." className="search"/>
            <ul className="list">
                <li className="listItem">
                    {products.map((product))}
                </li>
            </ul>
        </div>
    )
}