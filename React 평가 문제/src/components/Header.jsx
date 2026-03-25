import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
            <nav>
                {/* 1. a 태그를 Link 컴포넌트로 변경 */}
                {/* 2. Home을 클릭하면 "/" 으로 이동 (to 속성 사용) */}
                <Link to="/" style={{ marginRight: "20px", textDecoration: "none", color: "black" }}>
                    Home
                </Link>

                <Link to="/users" style={{ textDecoration: "none", color: "black" }}>
                    Users
                </Link>
            </nav>
        </header>
    );
}

export default Header;