import React, {Fragment} from "react";
import "./styles.css";

export default function LoginCadastro(){

	return(
	<Fragment>
		<div class="container" id="container">
			<div class="left">
				<form action="#">
					<h1>Sign in</h1>
					<span>or use your account</span>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<a href="#">Forgot your password?</a>
					<button>Sign In</button>
				</form>
			</div>

			<div class="right">
				<form action="#">
					<h1>Create Account</h1>
					<span>or use your email for registration</span>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button>Sign Up</button>
				</form>
			</div>
		</div>
	</Fragment>
	);
}