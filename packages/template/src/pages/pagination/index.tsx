import Pagination from "bs-design/components/pagination/index";

import "bs-design/components/pagination/style/index";

function showTotal(total: number) {
  return `Total ${total} items`;
}

const PaginationDemo = (): JSX.Element => (
  <>
    <div style={{ backgroundColor: "#fff", height: "400px", padding: "20px" }}>
      <Pagination total={50} showTotal={showTotal} showSizeChanger showQuickJumper />
    </div>
  </>
);

export default PaginationDemo;
