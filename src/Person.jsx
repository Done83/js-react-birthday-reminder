const Person = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id}>
            <img
              src={image}
              alt="person_image"
              style={{
                width: "140px",
                height: "120px",
                borderRadius: 100,
                margin: "10px",
              }}
            />
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        );
      })}
    </>
  );
};
export default Person;
