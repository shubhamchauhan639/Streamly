const CommentsContainer = () => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold mb-4">
        Comments
      </h1>

      <CommentsList comments={commentsData} />
    </div>
  );
};