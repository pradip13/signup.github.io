
		<?php

	

            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "signup";
            
		$conn = mysqli_connect("localhost", "root", "", "signup");
		
		// Check connection
		if($conn === false){
			die("ERROR: Could not connect. "
				. mysqli_connect_error());
		}
		
		// Taking all 5 values from the form data(input)
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$password = $_POST['password'];
		$zip = $_POST['zip'];
		$dob = $_POST['dob'];
		
		// Performing insert query execution
		// here our table name is college
		$sql = "INSERT INTO contact (name, email, phone, password, zip, dob) VALUES ('$name',
			'$email','$phone','$password','$zip','$dob')";
		
		if(mysqli_query($conn, $sql)){
			echo "<h3>data stored in a database successfully."
				. " Please browse your localhost php my admin"
				. " to view the updated data</h3>";

			echo nl2br("\n$name\n $email\n "
				. "$phone\n $password\n $zip\n $dob\n");
		} else{
			echo "ERROR: Hush! Sorry $sql. "
				. mysqli_error($conn);
		}
		
		// Close connection
		mysqli_close($conn);
		?>


  
