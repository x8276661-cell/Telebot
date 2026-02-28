<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<title>بوت حقيبة المستخدم</title>
<style>
body { font-family: Arial; margin: 20px; }
textarea { width: 100%; height: 100px; }
button { margin-top: 10px; padding: 10px 20px; }
#log { border: 1px solid #ccc; padding: 10px; height: 200px; overflow-y: scroll; margin-top: 10px; }
</style>
</head>
<body>

<h2>بوت حقيبة المستخدم (واجهة ويب)</h2>

<label>أدخل معرف المستخدم أو القناة:</label>
<input type="text" id="chatId" placeholder="مثال: 123456789"><br>

<label>أدخل الرسالة:</label>
<textarea id="message"></textarea><br>

<button onclick="sendMessage()">إرسال الرسالة</button>

<div id="log"></div>

<script>
// 🔑 ضع توكن البوت هنا
const token = "8118999111:AAGRKUMxreudNBbq_QDt1UszwG27cqhuSTY";

function log(text) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += text + "<br>";
    logDiv.scrollTop = logDiv.scrollHeight;
}

function sendMessage() {
    const chatId = document.getElementById("chatId").value;
    const text = document.getElementById("message").value;

    if (!chatId || !text) {
        alert("أدخل كل القيم!");
        return;
    }

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: text })
    })
    .then(res => res.json())
    .then(data => {
        if (data.ok) log(`✅ تم إرسال الرسالة: "${text}"`);
        else log(`❌ خطأ: ${JSON.stringify(data)}`);
    })
    .catch(err => log("❌ حدث خطأ: " + err));
}
</script>

</body>
</html>
