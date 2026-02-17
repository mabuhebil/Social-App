import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";
import { BsThreeDots } from "react-icons/bs";
import { FaCommentAlt, FaShare, FaThumbsUp } from "react-icons/fa";

export default function PostCard({ post }) {
  return (
    <Card fullWidth={true}>
      <CardHeader className="flex justify-between gap-3">
        <div className="flex items-center gap-1">
          <Image
            alt={post.user.name}
            height={80}
            radius="full"
            src={post.user.photo}
            width={80}
          />
          <div className="flex flex-col">
            <p className="text-lg font-bold capitalize">{post.user.name}</p>
            <p className="text-small text-default-500">{post.createdAt}</p>
          </div>
        </div>
        <button>
          <BsThreeDots />
        </button>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{post.body}</p>
        {post?.image && (
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
    </Card>
  );
}
