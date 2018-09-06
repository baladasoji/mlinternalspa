function detectMaersk(username)
{
    if (username.includes("maersk"))
    {
	alert("You are Maersk and will be redirected to Azure");
	window.location.href = "https://login.microsoftonline.com/maersk.onmicrosoft.com/oauth2/authorize?client_id=91e0c85c-f07a-4206-b514-0cef846596c7&response_type=id_token&redirect_uri=https%3A%2F%2Fmlinternalspa.azurewebsites.net%2Fstore.html&response_mode=fragment&scope=openid&state=12345&nonce=678910";
    }
    else
	alert("You are not Maersk");

}
