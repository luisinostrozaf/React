const Pet = ({name, animal, breed, images, location, id}) => {
    let hero = 'https://pets-images.dev-apis.com/pets/none.jpg';
    if images.length) {
        hero = images[0];
    }
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
            <h2>{props.breed}</h2>
        </div>
    );
}
export default Pet;