import React from "react";

export default function ListPagination() {
  return <div>ListPagination</div>;
}

// import theme from "@/styles/theme";
// import styled from "@emotion/styled";
// import { MouseEvent, useState } from "react";

// export interface IListPagination {
//   saveListMap: any;
// }

// export default function ListPagination(props: IListPagination) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(16);

//   const [pageNumberLimit] = useState(5);
//   const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
//   const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

//   const handleCilck = (e: MouseEvent<HTMLLIElement>) => {
//     setCurrentPage(Number((e.target as HTMLLIElement).id));
//   };

//   const pages = [];

//   for (
//     let i = 1;
//     i <= Math.ceil(props.saveListMap?.length / itemsPerPage);
//     i++
//   ) {
//     pages.push(i);
//   }

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = props.saveListMap?.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   const renderPageNumbers = pages.map((number: number) => {
//     if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
//       return (
//         <PaginationLi key={number} id={number} onClick={handleCilck}>
//           {number}
//         </PaginationLi>
//       );
//     }
//   });

//   // 한칸씩 이동 부분
//   const handleNextbtn = () => {
//     setCurrentPage(currentPage + 1);

//     if (currentPage + 1 > maxPageNumberLimit) {
//       setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//       setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
//     }
//   };

//   const handlePrevbtn = () => {
//     setCurrentPage(currentPage - 1);

//     if ((currentPage - 1) % pageNumberLimit === 0) {
//       setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//       setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
//     }
//   };

//   return (
//     <PaginationUl>
//       <PaginationButtonBox>
//         <PaginatoinArrow
//           onClick={handlePrevbtn}
//           disabled={currentPage === pages[0]}
//         >
//           Prev
//         </PaginatoinArrow>
//       </PaginationButtonBox>
//       {renderPageNumbers}
//       <PaginationButtonBox>
//         <PaginatoinArrow
//           onClick={handleNextbtn}
//           disabled={currentPage === pages[pages.length - 1]}
//         >
//           Next
//         </PaginatoinArrow>
//       </PaginationButtonBox>
//     </PaginationUl>
//   );
// }

// export const PaginationUl = styled.ul`
//   list-style: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 30px;
// `;

// export const PaginationLi = styled.li`
//   cursor: pointer;
//   margin-right: 10px;
//   :last-of-type {
//     margin-right: 0;
//   }
//   &:active {
//     color: #32c2b9;
//   }
// `;

// export const PaginationButtonBox = styled.div`
//   margin: 0 15px;
//   cursor: pointer;
// `;

// export const PaginatoinArrow = styled.button`
//   outline: none;
//   padding: 5px;
//   background-color: transparent;
//   border: 1px solid #32c2b9;
//   color: #32c2b9;
//   ${theme.fontSizes.small}
//   transition: all 0.3s ease-in-out;
//   &:hover {
//     background-color: #32c2b9;
//     color: #fff;
//   }
// `;
