import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 6px 12px 6px;
`;

export const ReviewImage = styled.img`
  width: 232px;
  height: 232px;
  border-radius: 3px;
  margin-bottom: 20px;
`;

export const UserProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const UserProfileimage = styled.img`
  width: 40px;
  height: 40px;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.42px;
  line-height: 22px;
  padding-left: 10px;
  color: #333;
`;

export const ReviewContents = styled.div`
  width: 232px;
  font-size: 14px;
  letter-spacing: -0.42px;
  line-height: 22px;
  color: #333;
  margin-bottom: 22px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
