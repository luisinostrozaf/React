import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetch from "./fetchPet";

const Details = () => {
    const { id } = useParams();
    const results = useQuery(['details', id], fetch);
    return (
            <h1>{id}</h1>
    )
};

export default Details;