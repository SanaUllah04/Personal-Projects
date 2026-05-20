<form method="POST" action="contact.php">
  <input name="name"    required>
  <textarea name="msg"  required></textarea>
  <button>Send</button>
</form>

<?php
// contact.php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $msg  = htmlspecialchars($_POST["msg"]);
  mail("admin@site.com", "New message from $name", $msg);
  echo "Thanks, $name — we'll reply soon!";
}
?>