import React from "react";
import "../../styles/Introduce.scss";

const Introduce = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        lineHeight: "1.6",
        backgroundColor: "#f9f9f9",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#4CAF50" }}>Chào mừng bạn đến với QuizMaster!</h1>
        <p>
          Chuyến hành trình tuyệt vời để rèn luyện và nâng cao kiến thức thông
          qua các bài quiz thú vị.
        </p>
      </header>

      <section style={{ marginBottom: "20px" }}>
        <h2>Giới thiệu về QuizMaster</h2>
        <p>
          QuizMaster là nền tảng giúp bạn nâng cao kiến thức và chuẩn bị tốt
          nhất cho kỳ thi sắp tới. Với các bài quiz được thiết kế tỉ mỉ, bạn có
          thể ôn luyện dễ dàng các môn học từ Toán, Khoa học, Lịch sử cho đến
          các chủ đề khác.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Tính năng nổi bật</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>Đa dạng chủ đề quiz cho mọi trình độ và nhu cầu học tập.</li>
          <li>
            Phản hồi nhanh chóng sau mỗi câu hỏi giúp bạn học từ chính sai sót
            của mình.
          </li>
          <li>Quản lý tiến độ học tập, xác định các lĩnh vực cần cải thiện.</li>
          <li>
            Giao diện người dùng thân thiện, dễ dàng tương tác và truy cập.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Cách bắt đầu</h2>
        <ol style={{ listStyleType: "decimal", paddingLeft: "20px" }}>
          <li>Chọn một chủ đề từ danh sách các quiz có sẵn.</li>
          <li>Trả lời các câu hỏi trắc nghiệm theo tốc độ của bạn.</li>
          <li>Kiểm tra kết quả và học hỏi từ các lời giải thích chi tiết.</li>
        </ol>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Lý do bạn nên chọn QuizMaster</h2>
        <p>
          Được thiết kế đặc biệt để phục vụ nhu cầu học tập của bạn, QuizMaster
          mang đến một công cụ học tập hiệu quả. Từ việc kiểm tra nhanh kiến
          thức đến ôn luyện trước kỳ thi, chúng tôi có mọi thứ bạn cần.
        </p>
      </section>
    </div>
  );
};

export default Introduce;
