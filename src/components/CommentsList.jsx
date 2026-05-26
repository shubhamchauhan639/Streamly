import CommentCard from "./Comment";
const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>

      <CommentCard data={comment} />

      <div className="pl-5 ml-5 border-l">
        <CommentsList comments={comment.replies} />
      </div>

    </div>
  ));
};
export default CommentsList