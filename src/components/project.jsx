export default function Project(props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <a href={props.website}>
        <img
          className="w-full rounded-lg shadow-md lg:transform hover:-translate-x-1 duration-700"
          src={props.image}
          alt="website"
        />
      </a>
      <div className="flex flex-wrap content-center text-gray-500">
        <a href={props.website}>
          <h3 className="text-center text-lg text-gray-700 hover:text-black font-semibold duration-700">
            {props.title} <i className="fas fa-external-link-alt text-xs"></i>
          </h3>
        </a>
        <p className="leading-8 my-4">{props.description}</p>
        <p className="text-sm italic">
          <span className="font-semibold text-gray-700">Technologies: </span>
          {props.technologies}
        </p>
      </div>
    </div>
  );
}
