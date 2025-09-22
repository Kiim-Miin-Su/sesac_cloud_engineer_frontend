const API_BASE = "https://15.165.5.106"; // Nginx 퍼블릭 IP

document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const signupData = {
        user_id: document.getElementById("user_id").value,
        user_name: document.getElementById("user_name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    try {
        const res = await fetch(`${API_BASE}/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signupData),
        });

        const data = await res.json();
        document.getElementById("signup-result").textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        document.getElementById("signup-result").textContent = `⚠️ 오류: ${err.message}`;
    }
});
