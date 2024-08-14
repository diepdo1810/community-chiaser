import { communityState } from "@/atoms/communitiesAtom";
import useCallCreatePost from "@/hooks/useCallCreatePost";
import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import CreateCommunityModal from "../Modal/CreateCommunity/CreateCommunityModal";
import { isAdmin } from "../utils/authUtils";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

/**
 * Component for displaying card for creating a new community or post.
 * @returns {React.FC} Card for creating a new community or post.
 */
const PersonalHome: React.FC = () => {
  const [open, setOpen] = useState(false); // modal initially closed
  const mySnippets = useRecoilValue(communityState).mySnippets;

  const { onClick } = useCallCreatePost();


  const { showMore } = {
    showMore: () => {
      const description = document.getElementById("description");
      if (description) {
        description.style.webkitLineClamp = "unset";
      }
      const showMoreBtn = document.getElementById("showMoreBtn");
      const showLessBtn = document.getElementById("showLessBtn");
      if (showMoreBtn) {
          showMoreBtn.style.display = "none";
      }
      if (showLessBtn) {
          showLessBtn.style.display = "block";
      }
    },
  }

  const { showLess } = {
    showLess: () => {
      const description = document.getElementById("description");
      if (description) {
        description.style.webkitLineClamp = "4";
      }
      const showMoreBtn = document.getElementById("showMoreBtn");
      const showLessBtn = document.getElementById("showLessBtn");
      if (showMoreBtn) {
          showMoreBtn.style.display = "block";
      }
      if (showLessBtn) {
          showLessBtn.style.display = "none";
      }
    },
  };

  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <Flex
        direction="column"
        bg="white"
        borderRadius={10}
        cursor="pointer"
        border="1px solid"
        borderColor="gray.300"
        position="sticky"
        shadow="md"
      >
        <Flex
          align="flex-end"
          color="white"
          p="6px 10px"
          bg="blue.500"
          height="34px"
          borderRadius="10px 10px 0px 0px"
          fontWeight={600}
          bgImage="url(/images/banners/small.jpg)"
          backgroundSize="cover"
        ></Flex>
        <Flex direction="column" p="12px">
          <Flex align="center" mb={2}>
            <Image
              src="/images/logo.svg"
              height="50px"
              alt="Website logo"
              mr={2}
            />
            <Text fontWeight={600}>📱 Giới thiệu về ứng dụng Cook</Text>
          </Flex>
          <Stack spacing={3}>
            <Text fontSize="9pt" 
              display="-webkit-box"
              style={{ 
                maxWidth: "400px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical"
              }}
              id={"description"}
            >
                Ứng dụng Cook là một giải pháp nấu ăn thông minh, 
                mang đến cho bạn một kho tàng công thức nấu ăn đa dạng và hấp dẫn. 
                Điểm đặc biệt của Cook chính là khả năng kết hợp các nguyên liệu sẵn có trong tủ lạnh của bạn như trứng, hành tây, thịt bò,… 
                để tạo ra những món ăn ngon lành và đầy đủ dinh dưỡng.
                Bạn chỉ cần chọn các nguyên liệu, ứng dụng sẽ gợi ý công thức và cung cấp video hướng dẫn chi tiết.
            </Text>

          <Stack direction='row' spacing={4}>
            <Button leftIcon={<MdKeyboardArrowRight />} colorScheme='blue' variant='solid' onClick={showMore} id={"showMoreBtn"}>
              Xem thêm
            </Button>
            <Button leftIcon={<MdKeyboardArrowLeft />} display="none" colorScheme='blue' variant='solid' id={"showLessBtn"} onClick={showLess}>
              Ẩn bớt
            </Button>
          </Stack>
          
            <Button height="30px" onClick={onClick}>
              Tạo bài đăng
            </Button>
            {isAdmin() && (
              <Button
                variant="outline"
                height="30px"
                onClick={() => setOpen(true)}
              >
                Tạo cộng đồng
              </Button>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
export default PersonalHome;
