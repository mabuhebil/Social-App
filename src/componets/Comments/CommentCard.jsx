import { CardBody, CardHeader, Image } from "@heroui/react";
import AppCardHeader from "../Shared/AppCardHeader/AppCardHeader";


export default function CommentCard({ post }) {
  const topComment = post.topComment;
  return (
    <>
      <AppCardHeader topComment ={topComment}/>
      <CardBody className="space-y-4">
        <p>{topComment.content}</p>
      </CardBody>
    </>
  );
}
