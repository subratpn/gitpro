<!DOCTYPE html>

<html>

      <head>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- Popper JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>

        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>


        <script src="script.js"></script>



        <style rel="stylesheet">

          #content_body,#giturl,#go,#git_data,#spinner{
            margin-top: 20px;
          }
          .table {
              text-align: center;
          }
        </style>
      </head>

      <body>


        <div class="card">
            <div class="card-body">GitPro</div>
        </div>

        <div class="card mx-auto" style="width:50%;" id="content_body">
            <div class="card-body">
                <input type="text" class="form-control" placeholder="Git Project URL ex : https://github.com/subratpn/Plivo" id="giturl">
                <button id="go" type="button" class="btn btn-outline-success btn-block" onclick="loadData();">Go</button>
            </div>
        </div>


        <center><div id="spinner" class="spinner-border text-danger" style="display: none;"></div></center>

        <div class="container" id="git_data">

        </div>


      </body>

</html>
