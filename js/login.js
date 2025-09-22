const API_BASE = "https://15.165.5.106"; // Nginx 퍼블릭 IP

document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    try {
        const res = await fetch(`${API_BASE}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
        });

        const data = await res.json();
        document.getElementById("login-result").textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        document.getElementById("login-result").textContent = `⚠️ 오류: ${err.message}`;
    }
});
