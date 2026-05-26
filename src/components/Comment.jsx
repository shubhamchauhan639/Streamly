const CommentCard = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex gap-3 bg-gray-100 p-3 rounded-lg my-2">

      <img
        className="w-10 h-10"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="user"
      />

      <div>
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>

    </div>
  );
};
export default CommentCard;