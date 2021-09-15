const submitButton = document.querySelector(".submit-button");

var connection = new ActiveXObject("ADODB.Connection") ;

var connectionstring="Data Source=localhost;Initial Catalog=ToDoApp;User ID=;Password=;Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM table", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close; 

submitButton.addEventListener("click", () => {
    console.log("working")
} );