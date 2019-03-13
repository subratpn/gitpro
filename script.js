

function loadData(){

  inputURL = $("#giturl").val();

  if(inputURL.startsWith("https://github.com")){

    requiredURL = inputURL.substring(inputURL.indexOf("com")+4);

    if(requiredURL.indexOf('/') > 0){
          result_array = [0,0,0,0];
          username = requiredURL.substring(0,requiredURL.indexOf("/"));
          repo = requiredURL.substring(requiredURL.indexOf("/")+1).replace("/","");

          console.log('Username : '+username);
          console.log('Repo : '+repo);

          token = "Token bb8b99316e71fd378266527fe39d822d5c5abd94"
          page = 1;

          while(true){

            result = performAJAXCall(username,repo,token,page);

            if(result.length == 0){
              console.log("Breaking Here : "+page);
              break;
            }

            parseData(result,result_array);
            page = page+1;

          }

          displayData(result_array);
          $("#spinner").toggle();
    }
    else{
        window.alert('Invalid URL Format');
    }

  }else{
        window.alert('Invalid URL Format');
      }
}



function parseData(result,result_array){


  /*
  - [0] Total number of open issues
  - [1] Number of open issues that were opened in the last 24 hours
  - [2] Number of open issues that were opened more than 24 hours ago but less than 7 days ago
  - [3] Number of open issues that were opened more than 7 days ago
  */

  console.log(result);
  current_timestamp = new Date();

  result_array[0] += result.length;

  for(i = 0 ; i < result.length ; i++) {

      timestamp = result[i].created_at;
      console.log(timestamp);
      issue_timestamp = new Date(timestamp);
      console.log(issue_timestamp);

      difference = current_timestamp.getTime() - issue_timestamp.getTime();
      resultInMinutes = Math.round(difference / 60000);

      console.log(resultInMinutes);

      if(resultInMinutes <= 1440){
        result_array[1] += 1;
      }else if(resultInMinutes > 1440 && resultInMinutes <= 10080){
        result_array[2] += 1;
      }else{
        result_array[3] += 1;
      }


  }

}



function displayData(result){

    $("#git_data").empty();

    content = "<table class='table table-bordered'>";
    content += '<thead>';
    content += '<tr><th>Total Issues</th><th>Issues < 24hr</th><th>Issues > 24hr & Issues < 7days</th><th>Issues > 7 days</th></tr>';
    content += '</thead>';
    content += '<tbody>';
    content += '<tr>';
    content += '<td>'+result[0]+'</td>';
    content += '<td>'+result[1]+'</td>';
    content += '<td>'+result[2]+'</td>';
    content += '<td>'+result[3]+'</td>';
    content += '</tr>';
    content += '</tbody></table>';
    console.log(content);

    document.getElementById("git_data").insertAdjacentHTML("beforeend", content);

}


function performAJAXCall(username,repo,token,page){

  response = '';

  $.ajax({

            url: "https://api.github.com/repos/"+username+"/"+repo+"/issues?page="+page+"&per_page=100",
            type: 'GET',
            async:false,
            headers: {
                'Authorization': token
            },
            success: function (result) {
               console.log("AJAX CALL SUCCESS"+result);
               response = result;
            },
            error: function (error) {
               window.alert('No Such Repo');
            }

    });

    return response;

}
