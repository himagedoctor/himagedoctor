Meteor.subscribe "sections"
Meteor.subscribe "appointments"

Blog.config
	blogIndexTemplate: 'blogs' # '/blog' route
	blogShowTemplate: 'blog'   # '/blog/:slug' route

###
accounts ui bootstrap3
###
accountsUIBootstrap3.setLanguage "zh"
accountsUIBootstrap3.map "zh",
  resetPasswordDialog:
    title: "修改密码"
    newPassword: "新密码"
    cancel: "取消"
    submit: "修改"

  enrollAccountDialog:
    title: "Choose a password"
    newPassword: "New password"
    cancel: "Close"
    submit: "Set password"

  justVerifiedEmailDialog:
    verified: "Email address verified"
    dismiss: "Dismiss"

  loginButtonsMessagesDialog:
    dismiss: "Dismiss"

  loginButtonsLoggedInDropdownActions:
    password: "修改密码"
    signOut: "退出"

  loginButtonsLoggedOutDropdown:
    signIn: "登录"
    up: "注册"

  loginButtonsLoggedOutPasswordServiceSeparator:
    or: "or"

  loginButtonsLoggedOutPasswordService:
    create: "注册"
    signIn: "登录"
    forgot: "忘记密码?"
    createAcc: "注册加入"

  forgotPasswordForm:
    email: "Email"
    reset: "修改密码"
    sent: "请查看你的邮箱"

  loginButtonsBackToLoginLink:
    back: "取消"

  loginButtonsChangePassword:
    submit: "修改密码"
    cancel: "取消"

  loginButtonsLoggedOutSingleLoginButton:
    signInWith: "Sign in with"
    configure: "Configure"

  loginButtonsLoggedInSingleLogoutButton:
    signOut: "Sign out"

  loginButtonsLoggedOut:
    noLoginServices: "No login services configured"

  loginFields:
    usernameOrEmail: "Username or Email"
    username: "Username"
    email: "Email"
    password: "Password"

  signupFields:
    username: "Username"
    email: "Email"
    emailOpt: "Email (optional)"
    password: "Password"
    passwordAgain: "Password (again)"

  changePasswordFields:
    currentPassword: "原密码"
    newPassword: "新密码"
    newPasswordAgain: "New Password (again)"

  errorMessages:
    usernameTooShort: "Username must be at least 3 characters long"
    invalidEmail: "Invalid email"
    passwordTooShort: "Password must be at least 6 characters long"
    passwordsDontMatch: "Passwords don't match"
