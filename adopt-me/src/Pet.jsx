const Pet = ({name, animal, breed, images, location, id}) => {
    let hero = 'https://pets-images.dev-apis.com/pets/none.jpg'; //api de frontendmasters
    if images.length) {
        hero = images[0];
    }
    return (
        <a href={`/details/${id}`} className="pet">
    );
}
export default Pet;