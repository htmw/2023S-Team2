import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 16px;
  background-color: #fff;
`;

export const Card = styled.View`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const UserData = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 6px;
  padding-bottom: 10px;
`;

export const UserPicture = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 18px;
`;

export const UserInfoContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const UserName = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;

export const PostTime = styled.Text`
  font-size: 10px;
  color: #666;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 400px;
`;

export const PostInteractionContainer = styled.View`
  flex-direction: row;
  padding-top: 6px;
`;

export const LikeCount = styled.Text`
  font-size: 13px;
  font-weight: bold;
  padding-top: 6px;
`;

export const PostDescription = styled.Text`
  font-size: 13px;
  padding-top: 6px;
  padding-right: 12px;
`;

export const ViewCommentButton = styled.TouchableOpacity`
  padding-top: 6px;
`;

export const ViewCommentText = styled.Text`
  font-size: 13px;
  color: "#666";
`;
