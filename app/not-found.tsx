import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="container">
        <p className="notfound-code">404 NOT FOUND</p>
        <h1 className="notfound-title">요청하신 페이지를 찾을 수 없습니다.</h1>
        <p>주소가 바뀌었거나 삭제된 페이지입니다. 아래 버튼으로 첫 화면에서 다시 찾아 주십시오.</p>
        <Link href="/" className="btn btn-primary">
          홈으로 가기
        </Link>
      </div>
    </div>
  );
}
