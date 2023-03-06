import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

import {
  Card,
  UserData,
  UserName,
  UserPicture,
  UserInfoContainer,
  PostTime,
  PostDescription,
  PostImage,
  PostInteractionContainer,
  LikeCount,
  ViewCommentButton,
  ViewCommentText,
} from "../styles/feed.styles";

const PostCard = ({ item }) => {
  console.log(item);
  return (
    <Card>
      <UserData>
        <UserPicture
          source={{
            uri: item.userImg,
          }}
        />
        <UserInfoContainer>
          <UserName>{item.userName}</UserName>
          <PostTime>{moment(item.postTime.toDate()).fromNow(false)}</PostTime>
        </UserInfoContainer>
      </UserData>
      <PostImage source={{ uri: item.postImg }} />
      <PostInteractionContainer>
        <TouchableOpacity>
          {!item.liked ? (
            <Ionicons name="heart-outline" size={25} />
          ) : (
            <Ionicons name="heart-sharp" size={25} color={"red"} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Ionicons name="chatbubble-outline" size={23} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 318, paddingLeft: 2, paddingRight: 0 }}
        >
          <Ionicons name="bookmark-outline" size={21} />
        </TouchableOpacity>
      </PostInteractionContainer>
      <LikeCount>
        {item.likes + " "}
        {item.likes <= 1 ? "like" : "likes"}
      </LikeCount>
      <PostDescription>
        <Text style={{ fontWeight: "bold" }}>{item.userName} </Text>
        {item.post}
      </PostDescription>
      <ViewCommentButton>
        <ViewCommentText>
          {"View all " + item.comments + " comments"}
        </ViewCommentText>
      </ViewCommentButton>
    </Card>
  );
};

export default PostCard;
