import { createContext, useContext, useState} from "react";

export const PizzasContext = createContext();

export default function PizzasProvider ({children}) {
    const [pizzas, setPizzas] = useState([]);

    const addPizzas = (info) => {
        setPizzas ([...pizzas, info]);
    };
    const removePizzas = (id) => {
        setPizzas(pizzas.filter((image) => image.id != id));
    };

    return (

        <PizzasContext.Provider value={{ pizzas, addPizzas, removePizzas}}>
            {children}
        </PizzasContext.Provider>
    );

};  

export const usePizzasContext = () => useContext(PizzasContext);
