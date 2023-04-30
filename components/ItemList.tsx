import types from "../utils/types";

function ItemList({ items }:types) {
  return (
    <>
      {items.map(({ name, url }:types) => (
        <div
          key={name}
          className="p-3 md:px-10 px-6 w-[33.3%] md:w-1/4 flex flex-wrap items-center justify-center "
        >
          <div className="flex justify-center items-center rounded-full w-20 h-20 md:w-30 md:h-30 bg-gray-100 mb-3   ">
            <img
              src={url}
              alt="Circle"
              width={16}
              height={16}
              className="w-16 h-16  p-2  "
            />
          </div>
          <div className="flex justify-center items-center  w-full">
            <h1 className="text-base capitalize font-medium ">{name}</h1>
          </div>
        </div>
      ))}
    </>
  );
}
export default ItemList;
