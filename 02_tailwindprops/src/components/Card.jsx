function Card(props) {
    return (
      <div className="max-w-xs p-4 rounded-xl shadow-lg bg-gray-900 text-white transition-transform hover:scale-105 duration-300">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-72 object-cover rounded-lg"
        />
        <div className="mt-4">
          <h3 className="text-lg font-bold">{props.name}</h3>
          <p className="text-sm text-gray-300 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    )
  }
  