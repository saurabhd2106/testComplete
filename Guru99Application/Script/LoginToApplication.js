function LoginToApplication(username, password)
{
  //Opens the specified URL in a running instance of the specified browser.
 // Browsers.Item(btChrome).Navigate("http://demo.guru99.com/v4/", 10);
  //Enters text in the text box.
 // Aliases.browser.pageGuru99BankHomePage.formFrmlogin.usernameTextField.SetText("mngr258859");
  //Enters text in the text box.
  //Aliases.browser.pageGuru99BankHomePage.formFrmlogin.passwordTextField.SetText("ehYvUby");
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
 // Aliases.browser.pageGuru99BankHomePage.formFrmlogin.submitButton.Click();
  
  Browsers.Item(btChrome).Navigate("http://demo.guru99.com/v4", 10);
  
  Aliases.usernameTextField.SetText(username);
  
  Aliases.passwordTextField.SetText(password);
  Aliases.submitButton.Click();
}