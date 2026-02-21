import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@heroui/react";
import { BsThreeDots } from "react-icons/bs";
import { FaCommentAlt, FaShare, FaThumbsUp } from "react-icons/fa";
import CommentCard from "../Comments/CommentCard";
import AppCardHeader from "../Shared/AppCardHeader/AppCardHeader";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  const postHasImage = !!post.image;
  const firstComment = post.commentsCount;
  return (
    <Card fullWidth={true}>
      <AppCardHeader topComment={false} post={post} />
      <Divider />
      <CardBody>
        <p>{post.body}</p>
        {postHasImage && (
          <Image
            alt={post.body}
            height={400}
            radius="sm"
            src={post.image}
            width={"100%"}
            className="object-cover"
          />
        )}
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between">
        <button className="flex flex-col items-center">
          <FaThumbsUp />
          Like
        </button>
        <button className="flex flex-col items-center">
          <FaCommentAlt />
          Comment
        </button>
        <button className="flex flex-col items-center">
          <FaShare />
          Share
        </button>
      </CardFooter>

      {firstComment && <CommentCard post={post} />}

      <Link to={`/post-details/${post.id}`} className="text-blue-700 p-4">
        View All Comments
      </Link>
    </Card>
  );
}
