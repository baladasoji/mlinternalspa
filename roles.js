var roles_url = "https://jwtdecoder.azurewebsites.net/";

function getToken()
{

  //document.getElementById('mydiv').innerHTML = sessionStorage.id_token;
  callRest();
}

function callUserApi(element, url, token)
{
    var apiXMLReq = new XMLHttpRequest();
    apiXMLReq.onreadystatechange = function() {
        if (this.readyState == 4)
        {
            document.getElementById(element).innerHTML = apiXMLReq.responseText;

        }
      };
    apiXMLReq.open("POST", roles_url + url , true );
    apiXMLReq.setRequestHeader("Authorization","Bearer "+token);
    apiXMLReq.send(null);

}


function callRolesApi(element, url, token)
{
    var apiXMLReq = new XMLHttpRequest();
    apiXMLReq.onreadystatechange = function() {
        if (this.readyState == 4)
        {
	    allroles = ["Booking", "Documentation", "MaerskInternal", "WBOLPrinter", "ImportCSA", "SAPBankPayments", "InternalPayments", "Invoices", "MilitaryBooking" , " WBOLApprover", "ContractRate" ] ;
            assignedroles = JSON.parse(apiXMLReq.responseText);
            if (assignedroles.length == 0)
            {
              row = 'You do not have access to the Internal portal. Please request access on <a href="https://maersk.service-now.com"> SNOW </a>';
            }
            else
            {

              var i = 1;
              var row='<div class="container"> <h2 class="display-5">Role Information</h2>' ;
              for ( var s in allroles)
              {
        		    if (assignedroles.includes(allroles[s]))
        		    {
                        	    row = row + '<div class="row"> <div class="col-6 checkedin-player-name" >' + allroles[s] +  '</div> </div>';
        		    }
        		    else
        		    {
                        	    row = row + '<div class="row"> <div class="col-6 checkedout-player-name">' + allroles[s] +  ' </div> </div>';
        		    }
                  // Do something
              }
	            row = row + `</div>`;
            }
            document.getElementById(element).innerHTML = row;

        }
      };
    apiXMLReq.open("POST", roles_url + url , true );
    apiXMLReq.setRequestHeader("Authorization","Bearer "+token);
    apiXMLReq.send(null);

}



function callRest()
{
        callRolesApi('userroles','roles', sessionStorage.id_token);
        callUserApi('username','username', sessionStorage.id_token);
}
