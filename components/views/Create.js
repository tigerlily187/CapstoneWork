export default () => `<div class="container">
<h1>Sign Up</h1>
<p>Please fill in this form to create an account.</p>
<hr>
<label>
    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px">I Want to Sell
    </label>
<label>
    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px">I Want To Buy
    </label><br>
<label for="FName"><b>First Name</b></label>
<input type="text" placeholder="Enter First Name" name="First Name" required><br>
<label for="LName"><b>Last Name</b></label>
<input type="text" placeholder="Enter Last Name" name="Last name" required><br>
<label for="email"><b>Email</b></label>
<input type="text" placeholder="Enter Email" name="email" required><br>
<label for="psw"><b>Password</b></label>
<input type="password" placeholder="Enter Password" name="psw" required><br>
<label for="psw-repeat"><b>Repeat Password</b></label>
<input type="password" placeholder="Repeat Password" name="psw-repeat" required><br>
<label>
<input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
</label>
<p>By creating an account you agree to terms on the <a href ="/Breakdown" data-navigo>Breakdown Page.</a></p>
<div class="clearfix">
  <button type="button" class="cancelbtn"><a href ="homepage.html">Cancel</a></button>
  <button type="submit" class="signupbtn">Sign Up</button>
</div>
</div>
</form>`;
