import './CoreConcept.css'

export default function CoreConcept( {image, title, description}){ // we are destruring the props pas in this CoreConcept by using the {} then inside we specify the proper parameter.
  return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
  );
}