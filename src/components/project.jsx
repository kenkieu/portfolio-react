export default function Project(props) {
  const { website, image, title, description, technologies } = props;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <a href={website}>
        <img
          // className="w-full rounded-lg shadow-md lg:transform hover:-translate-y-2 duration-700"
          className="w-full rounded-lg hidden"
          src={image}
          alt="website"
        />
      </a>
      <div className="flex flex-wrap content-center text-gray-500">
        <a href={website}>
          <h3 className="text-center text-lg text-gray-700 hover:text-black font-semibold duration-700">
            {title} <i className="fas fa-external-link-alt text-xs"></i>
          </h3>
        </a>
        <p className="leading-8 my-4">{description}</p>
        <p className="text-sm italic">
          <span className="font-semibold text-gray-700">Technologies: </span>
          {technologies}
        </p>
      </div>
    </div>
  );
}
