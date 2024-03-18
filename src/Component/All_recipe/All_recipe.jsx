import { useState } from "react";
import Recipe_last from "../Recipe_last/Recipe_last";
import { useEffect } from "react";
import './all-recipe.css'
import Items from "../Items/Items";
import Click_handler from "../Click_handler/Click_handler";

const All_recipe = () => {
    const [newrecipe, setnewRecipe] = useState([]);
    const [count, setCount] = useState([]);

    
    useEffect(() => {
        fetch("recipe.json")
        .then(res => res.json())
        .then(data => setnewRecipe(data))
    },[])

    const clickHandlerWatch = time => {
        const newWatchTime = [...count, time]
        setCount(newWatchTime)
    }

    return (
        <div className="container mx-auto mt-24">
            <Recipe_last></Recipe_last>
            <div className="flex gap-9 mt-10">
                <div className="w-8/12 display">  
                    {
                        newrecipe.map(recipe => {
                            return <Items key={recipe.id} clickHandlerWatch={clickHandlerWatch} recipe={recipe}></Items>
                        })
                    }
                </div>
                <div className="w-4/12">
                    <Click_handler count={count}></Click_handler>
                </div>
            </div>
        </div>
    );
};

export default All_recipe;

