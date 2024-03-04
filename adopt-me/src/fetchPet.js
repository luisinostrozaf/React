const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];
    const apiRES = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    if (!apiRES.ok) {
        throw new Error('details/${id} failed');
    }

    return apiRES.json();
};

export default fetchPet;