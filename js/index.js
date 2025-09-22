const API_BASE = "https://15.165.5.106"; // Nginx 퍼블릭 IP

document.getElementById("check-btn").addEventListener("click", async () => {
    try {
        const res = await fetch(`${API_BASE}/auth/signup`, { method: "OPTIONS" });
        if (res.ok) {
            document.getElementById("result").textContent = "✅ 서버 응답 정상";
        } else {
            document.getElementById("result").textContent = "❌ 서버 응답 실패";
        }
    } catch (err) {
        document.getElementById("result").textContent = `⚠️ 오류: ${err.message}`;
    }
});
