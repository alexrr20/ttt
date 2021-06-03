import userController from "../controllers/userController.js";

export default class loginView {
	constructor() {
		this.userController = new userController();

		// login DOM
		this.loginEmail = document.getElementById("inpEmail");
		this.loginPassword = document.getElementById("inpPw");
		this.loginButton = document.getElementById("btnLogin");
		this.sessionCheck = document.getElementById("chkSession");
		this.bindLoginForm();
	}

	bindLoginForm() {
		this.loginButton.addEventListener("click", () => {
			try {
				this.userController.login(
					this.loginEmail.value,
					this.loginPassword.value,
					this.sessionCheck
				);
				this.displayMessage("User logged in with success!", "success");

				// Wait 1 second before reloading, so the user can see the login success message
				/*setTimeout(() => {
					this.updateButtons("login");
					location.reload();
				}, 1000);*/
			} catch (e) {
				this.displayMessage(e, "danger");
			}
		});
	}

	displayMessage(message) {
		alert(message);
	}
}
