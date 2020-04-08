export default () => `<form action="/action_page.php" method="post">
        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required><br>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required><br>
            <button type="submit">Login</button><br>
            <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
            </label><br>
        </div>
        <div class="container">
            <button type="button" class="cancelbtn"><a href="homepage.html">Cancel</button></a>
            <span class="psw"><a href="#">Forgot password?</a></span>
        </form>`;
